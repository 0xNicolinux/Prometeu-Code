import { useState } from "react";
import { Check, X, ArrowRight, Zap } from "lucide-react";
import type { Exercise } from "@/lib/course-data";
import { DIFFICULTY_LABEL } from "@/lib/course-data";
import { useCourse } from "@/lib/course-context";
import { cn } from "@/lib/utils";
import { CodeBlock } from "./code-block";

interface Props {
  moduleId: string;
  exerciseIndex: number;
  exercise: Exercise;
  onNext?: () => void;
  isLastInModule?: boolean;
}

const DIFF_CLASS: Record<Exercise["difficulty"], string> = {
  facil: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  medio: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  dificil: "bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30",
};

export function ExerciseCard({ moduleId, exerciseIndex, exercise, onNext, isLastInModule }: Props) {
  const { language, answerExercise, answers } = useCourse();
  const key = `${moduleId}#${exerciseIndex}`;
  const already = answers[key];
  const [selected, setSelected] = useState<number | boolean | null>(null);
  const [submitted, setSubmitted] = useState(already !== undefined);

  const isCorrect = (() => {
    if (!submitted) return null;
    if (exercise.type === "boolean") {
      const chosen = selected === null ? already : selected;
      return chosen === exercise.answer;
    }
    const idx = selected === null ? (already ? exercise.answerIndex : -1) : (selected as number);
    return idx === exercise.answerIndex;
  })();

  const submit = () => {
    if (selected === null || submitted) return;
    let correct = false;
    if (exercise.type === "boolean") correct = selected === exercise.answer;
    else correct = selected === exercise.answerIndex;
    answerExercise(moduleId, exerciseIndex, correct);
    setSubmitted(true);
  };

  return (
    <div
      id={`${moduleId}-ex-${exerciseIndex}`}
      className="rounded-2xl border border-border bg-card p-5 shadow-card transition hover:border-brand/40"
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">
          💻 Exercício {exerciseIndex + 1}
        </span>
        <span
          className={cn(
            "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
            DIFF_CLASS[exercise.difficulty],
          )}
        >
          {DIFFICULTY_LABEL[exercise.difficulty]}
        </span>
        <span className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Zap className="h-3 w-3 text-brand" /> +10 XP
        </span>
      </div>
      <p className="mb-4 text-base font-medium text-foreground">{exercise.question}</p>

      {exercise.type === "output" && (
        <div className="mb-4">
          <CodeBlock code={exercise.code[language]} language={language} />
        </div>
      )}

      {exercise.type === "boolean" ? (
        <div className="mb-4 flex gap-3">
          {[
            { label: "Verdadeiro", val: true },
            { label: "Falso", val: false },
          ].map((opt) => {
            const chosen = selected === opt.val;
            return (
              <button
                key={opt.label}
                disabled={submitted}
                aria-pressed={chosen}
                onClick={() => setSelected(opt.val)}
                className={cn(
                  "flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition",
                  chosen
                    ? "border-brand bg-brand/10 text-brand"
                    : "border-border bg-background hover:border-brand/50",
                  submitted && "opacity-70 cursor-not-allowed",
                )}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="mb-4 grid gap-2">
          {(exercise as { options: string[] }).options.map((opt, i) => {
            const chosen = selected === i;
            const showCorrect = submitted && i === exercise.answerIndex;
            const showWrong = submitted && chosen && i !== exercise.answerIndex;
            return (
              <button
                key={i}
                disabled={submitted}
                aria-pressed={chosen}
                onClick={() => setSelected(i)}
                className={cn(
                  "flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition",
                  chosen && !submitted && "border-brand bg-brand/10",
                  !chosen && !submitted && "border-border bg-background hover:border-brand/50",
                  showCorrect && "border-emerald-500 bg-emerald-500/10 text-emerald-200",
                  showWrong && "border-destructive bg-destructive/10",
                  submitted && !showCorrect && !showWrong && "opacity-60",
                )}
              >
                <span
                  className={cn(
                    "grid h-6 w-6 shrink-0 place-items-center rounded-full border text-xs font-bold",
                    chosen ? "border-brand text-brand" : "border-border text-muted-foreground",
                  )}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1">{opt}</span>
                {showCorrect && <Check className="h-4 w-4 text-emerald-300" />}
                {showWrong && <X className="h-4 w-4 text-destructive" />}
              </button>
            );
          })}
        </div>
      )}

      {!submitted ? (
        <button
          onClick={submit}
          disabled={selected === null}
          className={cn(
            "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand transition",
            selected === null && "cursor-not-allowed opacity-50",
          )}
        >
          Verificar resposta
        </button>
      ) : (
        <div className="animate-fade-in space-y-3" aria-live="polite">
          <div
            className={cn(
              "flex items-start gap-3 rounded-xl border p-4 text-sm",
              isCorrect
                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                : "border-red-500/40 bg-red-500/10 text-red-200",
            )}
          >
            <span className="text-lg">{isCorrect ? "🎉" : "🤔"}</span>
            <div>
              <p className="font-semibold">
                {isCorrect ? "Boa! +10 XP conquistados." : "Não foi dessa vez."}
              </p>
              <p className="mt-1 opacity-90">{exercise.explanation}</p>
            </div>
          </div>
          {onNext && (
            <button
              onClick={onNext}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand"
            >
              {isLastInModule ? "Próximo módulo" : "Próximo exercício"}
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
