import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const sourcePath = new URL("../src/lib/course-data.ts", import.meta.url);
const source = readFileSync(sourcePath, "utf8");

const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
  },
}).outputText;

const sandbox = { exports: {} };
vm.runInNewContext(compiled, sandbox, { timeout: 1_000 });

const { MODULES, LANGUAGES } = sandbox.exports;
const errors = [];
const multipleChoice = [];
const booleanAnswers = { true: 0, false: 0 };
const seenQuestions = new Set();

function assert(condition, message) {
  if (!condition) errors.push(message);
}

assert(Array.isArray(MODULES) && MODULES.length > 0, "MODULES precisa conter módulos.");
assert(Array.isArray(LANGUAGES) && LANGUAGES.length > 0, "LANGUAGES precisa conter linguagens.");

for (const module of MODULES ?? []) {
  assert(
    Array.isArray(module.exercises) && module.exercises.length === 3,
    `O módulo "${module.id}" deve conter três exercícios.`,
  );

  for (const [index, exercise] of (module.exercises ?? []).entries()) {
    const label = `${module.id} / exercício ${index + 1}`;
    const question = exercise.question?.trim();

    assert(Boolean(question), `${label}: enunciado vazio.`);
    assert(
      typeof exercise.explanation === "string" && exercise.explanation.trim().length >= 25,
      `${label}: explicação ausente ou curta demais.`,
    );

    const normalizedQuestion = question?.toLocaleLowerCase("pt-BR");
    assert(
      !seenQuestions.has(normalizedQuestion),
      `${label}: enunciado duplicado.`,
    );
    seenQuestions.add(normalizedQuestion);

    if (exercise.type === "boolean") {
      assert(
        typeof exercise.answer === "boolean",
        `${label}: resposta verdadeiro/falso inválida.`,
      );
      if (typeof exercise.answer === "boolean") {
        booleanAnswers[String(exercise.answer)]++;
      }
      continue;
    }

    assert(
      exercise.type === "multiple" || exercise.type === "output",
      `${label}: tipo de exercício desconhecido (${exercise.type}).`,
    );

    assert(
      Array.isArray(exercise.options) && exercise.options.length === 4,
      `${label}: questões objetivas devem ter quatro alternativas.`,
    );

    const options = exercise.options ?? [];
    const normalizedOptions = options.map((option) =>
      String(option).trim().toLocaleLowerCase("pt-BR"),
    );
    assert(
      new Set(normalizedOptions).size === normalizedOptions.length,
      `${label}: existem alternativas duplicadas.`,
    );

    assert(
      Number.isInteger(exercise.answerIndex) &&
        exercise.answerIndex >= 0 &&
        exercise.answerIndex < options.length,
      `${label}: answerIndex fora do intervalo.`,
    );

    if (
      Array.isArray(options) &&
      Number.isInteger(exercise.answerIndex) &&
      exercise.answerIndex >= 0 &&
      exercise.answerIndex < options.length
    ) {
      multipleChoice.push({
        label,
        answerIndex: exercise.answerIndex,
        options: options.map(String),
      });
    }

    if (exercise.type === "output") {
      for (const language of LANGUAGES ?? []) {
        assert(
          typeof exercise.code?.[language.id] === "string" &&
            exercise.code[language.id].trim().length > 0,
          `${label}: exemplo de código ausente para ${language.label}.`,
        );
      }
    }
  }
}

assert(
  multipleChoice.length > 0,
  "O banco precisa conter questões de múltipla escolha ou interpretação de código.",
);

const answerCounts = [0, 0, 0, 0];
for (const exercise of multipleChoice) {
  answerCounts[exercise.answerIndex]++;
}

if (multipleChoice.length > 0) {
  const minimum = Math.min(...answerCounts);
  const maximum = Math.max(...answerCounts);
  assert(
    maximum - minimum <= 1,
    `Distribuição desequilibrada das respostas A/B/C/D: ${answerCounts.join("/") }.`,
  );

  let runLength = 0;
  let previousAnswer = -1;
  let longestRun = 0;

  for (const exercise of multipleChoice) {
    if (exercise.answerIndex === previousAnswer) {
      runLength++;
    } else {
      previousAnswer = exercise.answerIndex;
      runLength = 1;
    }
    longestRun = Math.max(longestRun, runLength);
  }

  assert(
    longestRun <= 2,
    "Há três ou mais respostas corretas consecutivas na mesma posição.",
  );
}

assert(
  Math.abs(booleanAnswers.true - booleanAnswers.false) <= 1,
  `Questões verdadeiro/falso desequilibradas: ${booleanAnswers.true} verdadeiras e ${booleanAnswers.false} falsas.`,
);

for (const exercise of multipleChoice) {
  const lengths = exercise.options.map((option) => option.trim().length);
  const correctLength = lengths[exercise.answerIndex];
  const distractorLengths = lengths.filter((_, index) => index !== exercise.answerIndex);
  const distractorAverage =
    distractorLengths.reduce((sum, length) => sum + length, 0) /
    distractorLengths.length;
  const longestDistractor = Math.max(...distractorLengths);

  // Respostas curtas como números, operadores e nomes de estruturas não são comparáveis.
  if (
    Math.max(...lengths) >= 20 &&
    correctLength > distractorAverage * 1.3 &&
    correctLength - distractorAverage > 8
  ) {
    errors.push(
      `${exercise.label}: a alternativa correta parece ser uma pista por tamanho (correta=${correctLength}, média dos distratores=${distractorAverage.toFixed(1)}).`,
    );
  }

  if (
    Math.max(...lengths) >= 20 &&
    correctLength > longestDistractor + 15
  ) {
    errors.push(
      `${exercise.label}: a alternativa correta é muito mais longa que qualquer distrator.`,
    );
  }
}

if (errors.length > 0) {
  console.error("\nValidação do conteúdo reprovada:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log("Validação do conteúdo aprovada.");
  console.log(`Módulos: ${MODULES.length}`);
  console.log(`Exercícios: ${MODULES.reduce((sum, module) => sum + module.exercises.length, 0)}`);
  console.log(`Questões objetivas: ${multipleChoice.length}`);
  console.log(`Distribuição A/B/C/D: ${answerCounts.join("/")}`);
  console.log(
    `Verdadeiro/falso: ${booleanAnswers.true} verdadeiras e ${booleanAnswers.false} falsas`,
  );
}
