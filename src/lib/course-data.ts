export type Language = "python" | "javascript" | "java" | "csharp" | "cpp" | "c" | "php" | "go";

export const LANGUAGES: { id: Language; label: string }[] = [
  { id: "python", label: "Python" },
  { id: "javascript", label: "JavaScript" },
  { id: "java", label: "Java" },
  { id: "csharp", label: "C#" },
  { id: "cpp", label: "C++" },
  { id: "c", label: "C" },
  { id: "php", label: "PHP" },
  { id: "go", label: "Go" },
];

export type CodeSamples = Record<Language, string>;

export type Difficulty = "facil" | "medio" | "dificil";

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  facil: "Fácil",
  medio: "Intermediário",
  dificil: "Desafio",
};

export type Exercise = { difficulty: Difficulty } & (
  | {
      type: "multiple";
      question: string;
      options: string[];
      answerIndex: number;
      explanation: string;
    }
  | {
      type: "boolean";
      question: string;
      answer: boolean;
      explanation: string;
    }
  | {
      type: "output";
      question: string;
      code: CodeSamples;
      options: string[];
      answerIndex: number;
      explanation: string;
    }
);

export interface Module {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  explanation: string;
  purpose: string;
  whenToUse: string;
  everyday: string;
  curiosity: string;
  summary: string;
  example: CodeSamples;
  exercises: Exercise[]; // 3: fácil, médio, difícil
}

const cs = (samples: CodeSamples): CodeSamples => samples;

export const MODULES: Module[] = [
  {
    id: "intro",
    emoji: "🚀",
    title: "Introdução à Programação",
    subtitle: "O que é programar, algoritmo e lógica",
    explanation:
      "Programar é escrever instruções que o computador executa para resolver um problema. Um algoritmo é uma sequência finita de passos e a lógica de programação é a forma de pensar para montar esses passos de forma clara e correta.",
    purpose:
      "Entender a base do que significa programar antes de aprender qualquer linguagem específica.",
    whenToUse:
      "Sempre. Toda vez que você transforma uma ideia em código, você usa lógica e algoritmos.",
    everyday:
      "Uma receita de bolo é um algoritmo: passos ordenados que, se seguidos, produzem um resultado.",
    curiosity: "A palavra 'algoritmo' vem do matemático persa Al-Khwarizmi, do século IX.",
    summary:
      "Programar = escrever instruções. Algoritmo = passos ordenados. Lógica = raciocínio para montar esses passos.",
    example: cs({
      python: `# "Olá, mundo" em Python\nprint("Olá, mundo")`,
      javascript: `// "Olá, mundo" em JavaScript\nconsole.log("Olá, mundo");`,
      java: `// Java\nSystem.out.println("Olá, mundo");`,
      csharp: `// C#\nConsole.WriteLine("Olá, mundo");`,
      cpp: `// C++\nstd::cout << "Olá, mundo" << std::endl;`,
      c: `// C\nprintf("Olá, mundo\\n");`,
      php: `<?php\necho "Olá, mundo";`,
      go: `// Go\nfmt.Println("Olá, mundo")`,
    }),
    exercises: [
      {
        difficulty: "facil",
        type: "multiple",
        question: "Qual é a melhor definição de algoritmo?",
        options: [
          "Uma linguagem de programação moderna",
          "Uma sequência finita de passos para resolver um problema",
          "Um tipo de computador",
          "Um erro comum em programação",
        ],
        answerIndex: 1,
        explanation:
          "Algoritmo é uma sequência finita e ordenada de passos que resolve um problema.",
      },
      {
        difficulty: "medio",
        type: "boolean",
        question: "Todas as linguagens de programação usam exatamente a mesma sintaxe.",
        answer: false,
        explanation:
          "Cada linguagem tem sua própria sintaxe. A lógica é parecida, mas a forma de escrever muda.",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question:
          "Qual das opções descreve melhor a diferença entre 'lógica' e 'linguagem de programação'?",
        options: [
          "Lógica é uma linguagem antiga; linguagem de programação é moderna",
          "Lógica é a forma de pensar a solução; a linguagem é como você escreve essa solução",
          "São exatamente a mesma coisa",
          "Lógica só existe em Python",
        ],
        answerIndex: 1,
        explanation:
          "Lógica é o raciocínio para resolver o problema. A linguagem é a ferramenta para expressar esse raciocínio em código.",
      },
    ],
  },
  {
    id: "algoritmos",
    emoji: "🧭",
    title: "Algoritmos e Fluxogramas",
    subtitle: "Planejando a solução antes do código",
    explanation:
      "Antes de escrever código, é comum planejar em passos ou desenhar um fluxograma. Fluxogramas usam formas padrão: retângulo para ação, losango para decisão, paralelogramo para entrada/saída e círculo para início/fim.",
    purpose: "Aprender a pensar em passos claros antes de programar.",
    whenToUse: "Sempre que precisar organizar a solução de um problema antes de implementar.",
    everyday:
      "Fazer login em um app: digitar usuário → digitar senha → verificar → entrar ou mostrar erro.",
    curiosity:
      "Os primeiros algoritmos escritos para máquinas foram criados por Ada Lovelace no século XIX.",
    summary: "Um algoritmo é uma sequência ordenada de passos. Fluxogramas ajudam a visualizá-los.",
    example: cs({
      python: `# Algoritmo: somar dois números\na = 5\nb = 3\nsoma = a + b\nprint(soma)`,
      javascript: `let a = 5;\nlet b = 3;\nlet soma = a + b;\nconsole.log(soma);`,
      java: `int a = 5;\nint b = 3;\nint soma = a + b;\nSystem.out.println(soma);`,
      csharp: `int a = 5;\nint b = 3;\nint soma = a + b;\nConsole.WriteLine(soma);`,
      cpp: `int a = 5;\nint b = 3;\nint soma = a + b;\nstd::cout << soma;`,
      c: `int a = 5;\nint b = 3;\nint soma = a + b;\nprintf("%d\\n", soma);`,
      php: `<?php\n$a = 5;\n$b = 3;\n$soma = $a + $b;\necho $soma;`,
      go: `a := 5\nb := 3\nsoma := a + b\nfmt.Println(soma)`,
    }),
    exercises: [
      {
        difficulty: "facil",
        type: "boolean",
        question: "A ordem dos passos em um algoritmo pode alterar o resultado final.",
        answer: true,
        explanation:
          "Mudar a ordem dos passos pode gerar resultados diferentes ou até quebrar o algoritmo.",
      },
      {
        difficulty: "medio",
        type: "multiple",
        question: "Em um fluxograma, qual figura representa uma decisão?",
        options: ["Retângulo", "Losango", "Círculo", "Paralelogramo"],
        answerIndex: 1,
        explanation: "O losango representa decisões (perguntas com sim/não) em fluxogramas.",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question: "Qual característica é essencial para um bom algoritmo?",
        options: [
          "Ser longo e complexo",
          "Ser finito, claro e produzir o resultado esperado",
          "Usar sempre a linguagem mais recente",
          "Nunca conter decisões",
        ],
        answerIndex: 1,
        explanation:
          "Um bom algoritmo é finito (termina), claro (não ambíguo) e correto (produz o resultado esperado).",
      },
    ],
  },
  {
    id: "variaveis",
    emoji: "📦",
    title: "Variáveis e Tipos de Dados",
    subtitle: "Armazenando informação",
    explanation:
      "Uma variável é um espaço na memória com um nome, que guarda um valor. Cada valor tem um tipo: inteiro, decimal (float), texto (string), booleano (true/false). Algumas linguagens deduzem o tipo automaticamente, outras exigem que você declare.",
    purpose: "Armazenar e reutilizar informações no programa.",
    whenToUse:
      "Sempre que precisar guardar algo: um nome digitado, o resultado de um cálculo, um total.",
    everyday:
      "É como uma caixa etiquetada: você escreve 'idade' na etiqueta e coloca o valor 25 dentro.",
    curiosity: "Em Python o tipo é dinâmico; em Java, C e Go você declara o tipo antes de usar.",
    summary:
      "Variáveis guardam informações. Tipos definem o que pode ser guardado (número, texto, verdadeiro/falso).",
    example: cs({
      python: `nome = "Maria"\nidade = 25\naltura = 1.68\nativo = True\nprint(nome, idade, altura, ativo)`,
      javascript: `let nome = "Maria";\nlet idade = 25;\nlet altura = 1.68;\nlet ativo = true;\nconsole.log(nome, idade, altura, ativo);`,
      java: `String nome = "Maria";\nint idade = 25;\ndouble altura = 1.68;\nboolean ativo = true;\nSystem.out.println(nome + " " + idade + " " + altura + " " + ativo);`,
      csharp: `string nome = "Maria";\nint idade = 25;\ndouble altura = 1.68;\nbool ativo = true;\nConsole.WriteLine($"{nome} {idade} {altura} {ativo}");`,
      cpp: `std::string nome = "Maria";\nint idade = 25;\ndouble altura = 1.68;\nbool ativo = true;\nstd::cout << nome << " " << idade << " " << altura << " " << ativo;`,
      c: `char nome[] = "Maria";\nint idade = 25;\ndouble altura = 1.68;\nint ativo = 1;\nprintf("%s %d %.2f %d\\n", nome, idade, altura, ativo);`,
      php: `<?php\n$nome = "Maria";\n$idade = 25;\n$altura = 1.68;\n$ativo = true;\necho "$nome $idade $altura";`,
      go: `nome := "Maria"\nidade := 25\naltura := 1.68\nativo := true\nfmt.Println(nome, idade, altura, ativo)`,
    }),
    exercises: [
      {
        difficulty: "facil",
        type: "multiple",
        question: "Para que serve uma variável?",
        options: [
          "Executar operações matemáticas apenas",
          "Armazenar informações que serão usadas no programa",
          "Desenhar interfaces gráficas",
          "Conectar com a internet",
        ],
        answerIndex: 1,
        explanation:
          "Variáveis guardam valores que podem ser lidos e alterados durante a execução.",
      },
      {
        difficulty: "medio",
        type: "multiple",
        question: "Qual o tipo mais adequado para armazenar o valor 3.14?",
        options: ["Inteiro (int)", "Decimal (float/double)", "Texto (string)", "Booleano"],
        answerIndex: 1,
        explanation: "Números com casas decimais são representados por tipos como float ou double.",
      },
      {
        difficulty: "dificil",
        type: "output",
        question: "O que este código imprime?",
        code: cs({
          python: `x = 10\nx = x + 5\nx = x * 2\nprint(x)`,
          javascript: `let x = 10;\nx = x + 5;\nx = x * 2;\nconsole.log(x);`,
          java: `int x = 10;\nx = x + 5;\nx = x * 2;\nSystem.out.println(x);`,
          csharp: `int x = 10;\nx = x + 5;\nx = x * 2;\nConsole.WriteLine(x);`,
          cpp: `int x = 10;\nx = x + 5;\nx = x * 2;\nstd::cout << x;`,
          c: `int x = 10;\nx = x + 5;\nx = x * 2;\nprintf("%d\\n", x);`,
          php: `<?php\n$x = 10;\n$x = $x + 5;\n$x = $x * 2;\necho $x;`,
          go: `x := 10\nx = x + 5\nx = x * 2\nfmt.Println(x)`,
        }),
        options: ["25", "30", "20", "35"],
        answerIndex: 1,
        explanation: "10 + 5 = 15, e 15 * 2 = 30.",
      },
    ],
  },
  {
    id: "io",
    emoji: "🎤",
    title: "Entrada e Saída de Dados",
    subtitle: "Comunicação com o usuário",
    explanation:
      "Programas recebem dados (entrada) e mostram resultados (saída). A entrada pode vir do teclado, de um arquivo ou de uma API. A saída pode ir para a tela, arquivo ou rede.",
    purpose: "Tornar o programa interativo e útil.",
    whenToUse: "Sempre que o programa precisar receber algo do usuário ou apresentar um resultado.",
    everyday: "Digitar em um formulário (entrada) e ver a mensagem de confirmação na tela (saída).",
    curiosity:
      "O primeiro dispositivo de saída dos computadores modernos era uma impressora, não uma tela.",
    summary:
      "Entrada é o que o programa recebe; saída é o que ele devolve. Todo programa útil faz as duas coisas.",
    example: cs({
      python: `nome = input("Qual seu nome? ")\nprint("Olá,", nome)`,
      javascript: `const nome = prompt("Qual seu nome?");\nconsole.log("Olá, " + nome);`,
      java: `Scanner sc = new Scanner(System.in);\nString nome = sc.nextLine();\nSystem.out.println("Olá, " + nome);`,
      csharp: `string nome = Console.ReadLine();\nConsole.WriteLine($"Olá, {nome}");`,
      cpp: `std::string nome;\nstd::cin >> nome;\nstd::cout << "Olá, " << nome;`,
      c: `char nome[50];\nscanf("%49s", nome);\nprintf("Olá, %s\\n", nome);`,
      php: `<?php\n$nome = readline("Qual seu nome? ");\necho "Olá, $nome";`,
      go: `var nome string\nfmt.Scan(&nome)\nfmt.Println("Olá,", nome)`,
    }),
    exercises: [
      {
        difficulty: "facil",
        type: "boolean",
        question: "Um programa útil geralmente produz algum tipo de saída.",
        answer: true,
        explanation:
          "Programas úteis quase sempre devolvem algo — na tela, em um arquivo ou pela rede.",
      },
      {
        difficulty: "medio",
        type: "multiple",
        question: "Em Python, qual instrução lê um valor digitado pelo usuário?",
        options: ["print()", "input()", "read()", "scan()"],
        answerIndex: 1,
        explanation: "input() lê uma linha digitada pelo usuário e devolve como string.",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question: "Ao ler um número com input() em Python, qual é o tipo do valor retornado?",
        options: [
          "int automaticamente",
          "float automaticamente",
          "string — é preciso converter para número",
          "boolean",
        ],
        answerIndex: 2,
        explanation:
          "input() sempre devolve string. Para usar como número, converta com int() ou float().",
      },
    ],
  },
  {
    id: "operadores",
    emoji: "➕",
    title: "Operadores",
    subtitle: "Matemáticos, relacionais e lógicos",
    explanation:
      "Operadores realizam operações com valores. Matemáticos (+, -, *, /, %) fazem cálculos. Relacionais (>, <, ==, !=) comparam valores e devolvem verdadeiro ou falso. Lógicos (&&, ||, !) combinam condições.",
    purpose: "Fazer cálculos e tomar decisões com base em comparações.",
    whenToUse: "Em qualquer cálculo, comparação ou condição composta.",
    everyday: "Verificar se 'idade >= 18 E possuiCarteira == true' antes de deixar alguém dirigir.",
    curiosity:
      "'=' é atribuição e '==' é comparação. Trocar os dois é um dos erros mais comuns de iniciantes.",
    summary:
      "Operadores fazem cálculos, comparam valores e combinam condições para tomar decisões.",
    example: cs({
      python: `a = 10\nb = 3\nprint(a + b)   # 13\nprint(a % b)   # 1 (resto)\nprint(a > b)   # True\nprint(a > 0 and b > 0)  # True`,
      javascript: `let a = 10, b = 3;\nconsole.log(a + b);          // 13\nconsole.log(a % b);          // 1\nconsole.log(a > b);          // true\nconsole.log(a > 0 && b > 0); // true`,
      java: `int a = 10, b = 3;\nSystem.out.println(a + b);\nSystem.out.println(a % b);\nSystem.out.println(a > b);\nSystem.out.println(a > 0 && b > 0);`,
      csharp: `int a = 10, b = 3;\nConsole.WriteLine(a + b);\nConsole.WriteLine(a % b);\nConsole.WriteLine(a > b);\nConsole.WriteLine(a > 0 && b > 0);`,
      cpp: `int a = 10, b = 3;\nstd::cout << (a + b) << "\\n";\nstd::cout << (a % b) << "\\n";\nstd::cout << (a > b) << "\\n";\nstd::cout << (a > 0 && b > 0);`,
      c: `int a = 10, b = 3;\nprintf("%d\\n", a + b);\nprintf("%d\\n", a % b);\nprintf("%d\\n", a > b);\nprintf("%d\\n", a > 0 && b > 0);`,
      php: `<?php\n$a = 10; $b = 3;\nvar_dump($a + $b);\nvar_dump($a % $b);\nvar_dump($a > $b);\nvar_dump($a > 0 && $b > 0);`,
      go: `a, b := 10, 3\nfmt.Println(a + b)\nfmt.Println(a % b)\nfmt.Println(a > b)\nfmt.Println(a > 0 && b > 0)`,
    }),
    exercises: [
      {
        difficulty: "facil",
        type: "multiple",
        question: "Qual é o resultado de 10 % 3 (resto da divisão)?",
        options: ["3", "1", "0", "10"],
        answerIndex: 1,
        explanation: "10 dividido por 3 é 3 com resto 1.",
      },
      {
        difficulty: "medio",
        type: "multiple",
        question: "Qual é o resultado de (5 > 2) && (3 < 1)?",
        options: ["true", "false", "erro de sintaxe", "5"],
        answerIndex: 1,
        explanation:
          "A primeira é verdadeira, mas a segunda é falsa. O E lógico só é verdadeiro se ambas forem verdadeiras.",
      },
      {
        difficulty: "dificil",
        type: "output",
        question: "O que este código imprime?",
        code: cs({
          python: `a = 7\nb = 2\nprint(a // b, a % b)`,
          javascript: `let a = 7, b = 2;\nconsole.log(Math.floor(a / b), a % b);`,
          java: `int a = 7, b = 2;\nSystem.out.println(a / b + " " + a % b);`,
          csharp: `int a = 7, b = 2;\nConsole.WriteLine($"{a / b} {a % b}");`,
          cpp: `int a = 7, b = 2;\nstd::cout << (a / b) << " " << (a % b);`,
          c: `int a = 7, b = 2;\nprintf("%d %d\\n", a / b, a % b);`,
          php: `<?php\n$a = 7; $b = 2;\necho intdiv($a, $b) . " " . ($a % $b);`,
          go: `a, b := 7, 2\nfmt.Println(a/b, a%b)`,
        }),
        options: ["3 1", "3.5 0", "2 1", "7 2"],
        answerIndex: 0,
        explanation: "A divisão inteira de 7 por 2 é 3 e o resto é 1. Saída: 3 1.",
      },
    ],
  },
  {
    id: "condicionais",
    emoji: "🔀",
    title: "Estruturas Condicionais",
    subtitle: "if, else, else if e switch",
    explanation:
      "Estruturas condicionais permitem que o programa siga caminhos diferentes conforme uma condição. 'if' executa quando é verdadeira, 'else' quando é falsa, e 'else if' testa alternativas em sequência.",
    purpose: "Tomar decisões durante a execução do programa.",
    whenToUse:
      "Sempre que o comportamento depender de uma condição: idade, valor, resposta do usuário.",
    everyday: "Se está chovendo, leve guarda-chuva; senão, leve óculos escuros.",
    curiosity:
      "'switch' costuma ser mais legível que vários 'else if' quando você compara a mesma variável com valores fixos.",
    summary:
      "Condicionais escolhem qual bloco de código executar com base em condições verdadeiro/falso.",
    example: cs({
      python: `idade = 20\nif idade >= 18:\n    print("Adulto")\nelse:\n    print("Menor")`,
      javascript: `let idade = 20;\nif (idade >= 18) {\n  console.log("Adulto");\n} else {\n  console.log("Menor");\n}`,
      java: `int idade = 20;\nif (idade >= 18) {\n  System.out.println("Adulto");\n} else {\n  System.out.println("Menor");\n}`,
      csharp: `int idade = 20;\nif (idade >= 18) Console.WriteLine("Adulto");\nelse Console.WriteLine("Menor");`,
      cpp: `int idade = 20;\nif (idade >= 18) std::cout << "Adulto";\nelse std::cout << "Menor";`,
      c: `int idade = 20;\nif (idade >= 18) printf("Adulto\\n");\nelse printf("Menor\\n");`,
      php: `<?php\n$idade = 20;\nif ($idade >= 18) echo "Adulto";\nelse echo "Menor";`,
      go: `idade := 20\nif idade >= 18 {\n    fmt.Println("Adulto")\n} else {\n    fmt.Println("Menor")\n}`,
    }),
    exercises: [
      {
        difficulty: "facil",
        type: "output",
        question: "O que este código imprime quando idade = 20?",
        code: cs({
          python: `idade = 20\nif idade >= 18:\n    print("Adulto")\nelse:\n    print("Menor")`,
          javascript: `let idade = 20;\nif (idade >= 18) console.log("Adulto");\nelse console.log("Menor");`,
          java: `int idade = 20;\nif (idade >= 18) System.out.println("Adulto");\nelse System.out.println("Menor");`,
          csharp: `int idade = 20;\nif (idade >= 18) Console.WriteLine("Adulto");\nelse Console.WriteLine("Menor");`,
          cpp: `int idade = 20;\nif (idade >= 18) std::cout << "Adulto";\nelse std::cout << "Menor";`,
          c: `int idade = 20;\nif (idade >= 18) printf("Adulto");\nelse printf("Menor");`,
          php: `<?php\n$idade = 20;\nif ($idade >= 18) echo "Adulto"; else echo "Menor";`,
          go: `idade := 20\nif idade >= 18 { fmt.Println("Adulto") } else { fmt.Println("Menor") }`,
        }),
        options: ["Adulto", "Menor", "Nada", "Erro"],
        answerIndex: 0,
        explanation: "20 é maior ou igual a 18, então cai no ramo do if.",
      },
      {
        difficulty: "medio",
        type: "output",
        question: "O que este código imprime quando idade = 15?",
        code: cs({
          python: `idade = 15\nif idade >= 18:\n    print("Adulto")\nelif idade >= 12:\n    print("Adolescente")\nelse:\n    print("Criança")`,
          javascript: `let idade = 15;\nif (idade >= 18) console.log("Adulto");\nelse if (idade >= 12) console.log("Adolescente");\nelse console.log("Criança");`,
          java: `int idade = 15;\nif (idade >= 18) System.out.println("Adulto");\nelse if (idade >= 12) System.out.println("Adolescente");\nelse System.out.println("Criança");`,
          csharp: `int idade = 15;\nif (idade >= 18) Console.WriteLine("Adulto");\nelse if (idade >= 12) Console.WriteLine("Adolescente");\nelse Console.WriteLine("Criança");`,
          cpp: `int idade = 15;\nif (idade >= 18) std::cout << "Adulto";\nelse if (idade >= 12) std::cout << "Adolescente";\nelse std::cout << "Criança";`,
          c: `int idade = 15;\nif (idade >= 18) printf("Adulto");\nelse if (idade >= 12) printf("Adolescente");\nelse printf("Criança");`,
          php: `<?php\n$idade = 15;\nif ($idade >= 18) echo "Adulto";\nelseif ($idade >= 12) echo "Adolescente";\nelse echo "Criança";`,
          go: `idade := 15\nif idade >= 18 { fmt.Println("Adulto") } else if idade >= 12 { fmt.Println("Adolescente") } else { fmt.Println("Criança") }`,
        }),
        options: ["Adulto", "Adolescente", "Criança", "Nada"],
        answerIndex: 1,
        explanation: "15 é menor que 18, mas maior ou igual a 12, então cai no ramo 'else if'.",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question: "Quando o 'switch' (ou 'match') é mais recomendado que vários 'else if'?",
        options: [
          "Quando você compara uma mesma variável com vários valores fixos",
          "Quando quer executar loops",
          "Quando não há decisões",
          "Quando o valor é dinâmico e desconhecido",
        ],
        answerIndex: 0,
        explanation:
          "switch é ideal para comparar uma variável com valores fixos — deixa o código mais legível.",
      },
    ],
  },
  {
    id: "repeticao",
    emoji: "🔁",
    title: "Estruturas de Repetição",
    subtitle: "for, while e do while",
    explanation:
      "Loops repetem um bloco várias vezes. Use 'for' quando você sabe quantas vezes vai repetir, 'while' quando repete enquanto uma condição for verdadeira, e 'do while' quando precisa executar pelo menos uma vez.",
    purpose: "Executar tarefas repetitivas sem duplicar código.",
    whenToUse: "Percorrer listas, aplicar uma ação N vezes, esperar até algo acontecer.",
    everyday: "Enquanto o balde não estiver cheio, continuar despejando água.",
    curiosity:
      "Loops infinitos (que nunca terminam) são um dos bugs mais famosos e podem travar programas inteiros.",
    summary: "Loops repetem instruções. Escolha entre for, while e do while conforme o caso.",
    example: cs({
      python: `for i in range(3):\n    print(i)`,
      javascript: `for (let i = 0; i < 3; i++) {\n  console.log(i);\n}`,
      java: `for (int i = 0; i < 3; i++) {\n  System.out.println(i);\n}`,
      csharp: `for (int i = 0; i < 3; i++) Console.WriteLine(i);`,
      cpp: `for (int i = 0; i < 3; i++) std::cout << i << "\\n";`,
      c: `for (int i = 0; i < 3; i++) printf("%d\\n", i);`,
      php: `<?php\nfor ($i = 0; $i < 3; $i++) echo $i . "\\n";`,
      go: `for i := 0; i < 3; i++ {\n    fmt.Println(i)\n}`,
    }),
    exercises: [
      {
        difficulty: "facil",
        type: "output",
        question: "Quantas vezes 'oi' é impresso?",
        code: cs({
          python: `for i in range(5):\n    print("oi")`,
          javascript: `for (let i = 0; i < 5; i++) console.log("oi");`,
          java: `for (int i = 0; i < 5; i++) System.out.println("oi");`,
          csharp: `for (int i = 0; i < 5; i++) Console.WriteLine("oi");`,
          cpp: `for (int i = 0; i < 5; i++) std::cout << "oi\\n";`,
          c: `for (int i = 0; i < 5; i++) printf("oi\\n");`,
          php: `<?php\nfor ($i = 0; $i < 5; $i++) echo "oi\\n";`,
          go: `for i := 0; i < 5; i++ { fmt.Println("oi") }`,
        }),
        options: ["4", "5", "6", "Infinitas"],
        answerIndex: 1,
        explanation: "O loop começa em 0 e vai até 4 (menor que 5), totalizando 5 execuções.",
      },
      {
        difficulty: "medio",
        type: "output",
        question: "Qual o valor final de 'soma'?",
        code: cs({
          python: `soma = 0\nfor i in range(1, 5):\n    soma = soma + i\nprint(soma)`,
          javascript: `let soma = 0;\nfor (let i = 1; i < 5; i++) soma += i;\nconsole.log(soma);`,
          java: `int soma = 0;\nfor (int i = 1; i < 5; i++) soma += i;\nSystem.out.println(soma);`,
          csharp: `int soma = 0;\nfor (int i = 1; i < 5; i++) soma += i;\nConsole.WriteLine(soma);`,
          cpp: `int soma = 0;\nfor (int i = 1; i < 5; i++) soma += i;\nstd::cout << soma;`,
          c: `int soma = 0;\nfor (int i = 1; i < 5; i++) soma += i;\nprintf("%d\\n", soma);`,
          php: `<?php\n$soma = 0;\nfor ($i = 1; $i < 5; $i++) $soma += $i;\necho $soma;`,
          go: `soma := 0\nfor i := 1; i < 5; i++ { soma += i }\nfmt.Println(soma)`,
        }),
        options: ["6", "10", "15", "4"],
        answerIndex: 1,
        explanation: "Soma de 1 + 2 + 3 + 4 = 10.",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question:
          "Qual estrutura garante que o bloco execute pelo menos uma vez, mesmo que a condição seja falsa desde o início?",
        options: ["for", "while", "do while", "if"],
        answerIndex: 2,
        explanation:
          "'do while' testa a condição no final, então o bloco sempre executa pelo menos uma vez.",
      },
    ],
  },
  {
    id: "vetores",
    emoji: "🗂️",
    title: "Vetores e Listas",
    subtitle: "Coleções unidimensionais",
    explanation:
      "Vetores (também chamados de arrays ou listas) armazenam vários valores em uma única estrutura. Cada valor é acessado por um índice numérico. Na maioria das linguagens, o primeiro índice é 0.",
    purpose: "Agrupar dados relacionados para manipular vários valores de uma vez.",
    whenToUse: "Lista de alunos, notas de uma prova, itens de um carrinho, coordenadas em um jogo.",
    everyday: "Uma prateleira numerada onde você acessa o item pela posição.",
    curiosity: "Em Python, listas podem crescer dinamicamente. Em C, o tamanho geralmente é fixo.",
    summary: "Vetores guardam vários valores organizados por índices numéricos, começando em 0.",
    example: cs({
      python: `nums = [10, 20, 30]\nprint(nums[0])    # 10\nprint(len(nums))  # 3`,
      javascript: `const nums = [10, 20, 30];\nconsole.log(nums[0]);\nconsole.log(nums.length);`,
      java: `int[] nums = {10, 20, 30};\nSystem.out.println(nums[0]);\nSystem.out.println(nums.length);`,
      csharp: `int[] nums = {10, 20, 30};\nConsole.WriteLine(nums[0]);\nConsole.WriteLine(nums.Length);`,
      cpp: `int nums[] = {10, 20, 30};\nstd::cout << nums[0];`,
      c: `int nums[] = {10, 20, 30};\nprintf("%d\\n", nums[0]);`,
      php: `<?php\n$nums = [10, 20, 30];\necho $nums[0];`,
      go: `nums := []int{10, 20, 30}\nfmt.Println(nums[0])\nfmt.Println(len(nums))`,
    }),
    exercises: [
      {
        difficulty: "facil",
        type: "multiple",
        question: "Qual é o índice do primeiro elemento em um array na maioria das linguagens?",
        options: ["1", "0", "-1", "Depende do valor"],
        answerIndex: 1,
        explanation:
          "A maioria das linguagens (Python, JS, Java, C, C++, C#, Go) usa índice base 0.",
      },
      {
        difficulty: "medio",
        type: "output",
        question: "O que este código imprime?",
        code: cs({
          python: `nums = [5, 10, 15, 20]\nprint(nums[2])`,
          javascript: `const nums = [5, 10, 15, 20];\nconsole.log(nums[2]);`,
          java: `int[] nums = {5, 10, 15, 20};\nSystem.out.println(nums[2]);`,
          csharp: `int[] nums = {5, 10, 15, 20};\nConsole.WriteLine(nums[2]);`,
          cpp: `int nums[] = {5, 10, 15, 20};\nstd::cout << nums[2];`,
          c: `int nums[] = {5, 10, 15, 20};\nprintf("%d\\n", nums[2]);`,
          php: `<?php\n$nums = [5, 10, 15, 20];\necho $nums[2];`,
          go: `nums := []int{5, 10, 15, 20}\nfmt.Println(nums[2])`,
        }),
        options: ["10", "15", "20", "5"],
        answerIndex: 1,
        explanation: "Índice 2 corresponde ao terceiro elemento — 5(0), 10(1), 15(2).",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question: "Se um vetor tem 5 elementos, qual é o índice do último elemento?",
        options: ["5", "4", "6", "0"],
        answerIndex: 1,
        explanation: "Com índice base 0, um vetor de tamanho N tem índices de 0 até N-1.",
      },
    ],
  },
  {
    id: "matrizes",
    emoji: "🧮",
    title: "Matrizes",
    subtitle: "Estruturas de duas dimensões",
    explanation:
      "Matrizes são coleções organizadas em linhas e colunas — como uma tabela. Cada elemento é acessado por dois índices: [linha][coluna]. Podem ser usadas para tabuleiros de jogos, planilhas ou imagens.",
    purpose: "Trabalhar com dados organizados em linhas e colunas.",
    whenToUse:
      "Tabuleiros (xadrez, jogo da velha), tabelas, matrizes matemáticas, pixels de uma imagem.",
    everyday: "Uma planilha do Excel: as células são acessadas pela linha e coluna.",
    curiosity:
      "Uma imagem digital nada mais é do que uma matriz de pixels — cada célula tem uma cor.",
    summary: "Matrizes são vetores de vetores, acessados por dois índices: linha e coluna.",
    example: cs({
      python: `matriz = [\n    [1, 2, 3],\n    [4, 5, 6],\n]\nprint(matriz[1][2])  # 6`,
      javascript: `const matriz = [\n  [1, 2, 3],\n  [4, 5, 6],\n];\nconsole.log(matriz[1][2]);`,
      java: `int[][] matriz = {\n  {1, 2, 3},\n  {4, 5, 6}\n};\nSystem.out.println(matriz[1][2]);`,
      csharp: `int[,] matriz = {\n  {1, 2, 3},\n  {4, 5, 6}\n};\nConsole.WriteLine(matriz[1, 2]);`,
      cpp: `int matriz[2][3] = {{1,2,3},{4,5,6}};\nstd::cout << matriz[1][2];`,
      c: `int matriz[2][3] = {{1,2,3},{4,5,6}};\nprintf("%d\\n", matriz[1][2]);`,
      php: `<?php\n$matriz = [[1,2,3],[4,5,6]];\necho $matriz[1][2];`,
      go: `matriz := [][]int{{1,2,3},{4,5,6}}\nfmt.Println(matriz[1][2])`,
    }),
    exercises: [
      {
        difficulty: "facil",
        type: "multiple",
        question: "Uma matriz é normalmente organizada em:",
        options: ["Uma única linha", "Linhas e colunas", "Apenas colunas", "Camadas circulares"],
        answerIndex: 1,
        explanation: "Matrizes bidimensionais têm linhas e colunas, acessadas por dois índices.",
      },
      {
        difficulty: "medio",
        type: "output",
        question: "Dada a matriz {{1,2,3},{4,5,6},{7,8,9}}, o que retorna matriz[2][0]?",
        code: cs({
          python: `matriz = [[1,2,3],[4,5,6],[7,8,9]]\nprint(matriz[2][0])`,
          javascript: `const matriz = [[1,2,3],[4,5,6],[7,8,9]];\nconsole.log(matriz[2][0]);`,
          java: `int[][] m = {{1,2,3},{4,5,6},{7,8,9}};\nSystem.out.println(m[2][0]);`,
          csharp: `int[,] m = {{1,2,3},{4,5,6},{7,8,9}};\nConsole.WriteLine(m[2, 0]);`,
          cpp: `int m[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\nstd::cout << m[2][0];`,
          c: `int m[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\nprintf("%d\\n", m[2][0]);`,
          php: `<?php\n$m = [[1,2,3],[4,5,6],[7,8,9]];\necho $m[2][0];`,
          go: `m := [][]int{{1,2,3},{4,5,6},{7,8,9}}\nfmt.Println(m[2][0])`,
        }),
        options: ["1", "3", "7", "9"],
        answerIndex: 2,
        explanation:
          "matriz[2] é a terceira linha {7,8,9}; o índice [0] é o primeiro elemento dela — 7.",
      },
      {
        difficulty: "dificil",
        type: "boolean",
        question: "Toda matriz precisa ser quadrada (mesmo número de linhas e colunas).",
        answer: false,
        explanation:
          "Não. Matrizes podem ter qualquer número de linhas e colunas — só a matriz 'quadrada' tem linhas = colunas.",
      },
    ],
  },
  {
    id: "strings",
    emoji: "🔤",
    title: "Strings",
    subtitle: "Trabalhando com texto",
    explanation:
      "String é uma sequência de caracteres — palavras, frases, textos. Você pode concatenar, medir o tamanho, acessar caracteres por índice e comparar strings.",
    purpose: "Manipular textos: nomes, mensagens, conteúdos digitados.",
    whenToUse: "Formulários, mensagens, nomes de arquivos, respostas do usuário.",
    everyday: "Compor uma mensagem juntando 'Olá, ' + nomeDoUsuário para saudar alguém.",
    curiosity:
      "Em muitas linguagens, strings são imutáveis: cada modificação cria uma nova string na memória.",
    summary: "Strings guardam texto. Você pode concatenar, medir e acessar caracteres por índice.",
    example: cs({
      python: `nome = "Prometeu"\nprint(len(nome))       # 8\nprint(nome.upper())    # PROMETEU\nprint(nome + " Code")`,
      javascript: `const nome = "Prometeu";\nconsole.log(nome.length);       // 8\nconsole.log(nome.toUpperCase());\nconsole.log(nome + " Code");`,
      java: `String nome = "Prometeu";\nSystem.out.println(nome.length());\nSystem.out.println(nome.toUpperCase());\nSystem.out.println(nome + " Code");`,
      csharp: `string nome = "Prometeu";\nConsole.WriteLine(nome.Length);\nConsole.WriteLine(nome.ToUpper());\nConsole.WriteLine(nome + " Code");`,
      cpp: `std::string nome = "Prometeu";\nstd::cout << nome.size() << "\\n";\nstd::cout << (nome + " Code");`,
      c: `char nome[] = "Prometeu";\nprintf("%lu\\n", strlen(nome));\nprintf("%s Code\\n", nome);`,
      php: `<?php\n$nome = "Prometeu";\necho strlen($nome) . "\\n";\necho strtoupper($nome) . "\\n";\necho $nome . " Code";`,
      go: `nome := "Prometeu"\nfmt.Println(len(nome))\nfmt.Println(strings.ToUpper(nome))\nfmt.Println(nome + " Code")`,
    }),
    exercises: [
      {
        difficulty: "facil",
        type: "multiple",
        question: "O que é uma string em programação?",
        options: [
          "Um número inteiro",
          "Uma sequência de caracteres (texto)",
          "Um tipo lógico (true/false)",
          "Uma lista de arquivos",
        ],
        answerIndex: 1,
        explanation: "String representa texto — uma sequência ordenada de caracteres.",
      },
      {
        difficulty: "medio",
        type: "output",
        question: "O que este código imprime?",
        code: cs({
          python: `s = "Prometeu"\nprint(len(s))`,
          javascript: `const s = "Prometeu";\nconsole.log(s.length);`,
          java: `String s = "Prometeu";\nSystem.out.println(s.length());`,
          csharp: `string s = "Prometeu";\nConsole.WriteLine(s.Length);`,
          cpp: `std::string s = "Prometeu";\nstd::cout << s.size();`,
          c: `char s[] = "Prometeu";\nprintf("%lu\\n", strlen(s));`,
          php: `<?php\n$s = "Prometeu";\necho strlen($s);`,
          go: `s := "Prometeu"\nfmt.Println(len(s))`,
        }),
        options: ["7", "8", "9", "10"],
        answerIndex: 1,
        explanation: "'Prometeu' tem 8 caracteres.",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question: "Qual operação combina duas strings em uma só (ex: 'Olá' + 'Mundo')?",
        options: ["Comparação", "Concatenação", "Divisão", "Iteração"],
        answerIndex: 1,
        explanation: "Concatenação é a operação que une duas ou mais strings em uma nova.",
      },
    ],
  },
  {
    id: "funcoes",
    emoji: "🧩",
    title: "Funções",
    subtitle: "Parâmetros, retorno e escopo",
    explanation:
      "Funções são blocos de código reutilizáveis. Podem receber parâmetros (entradas) e retornar um valor (saída). Variáveis criadas dentro de uma função pertencem ao escopo local — não existem fora dela.",
    purpose: "Organizar o código em blocos pequenos, reutilizáveis e fáceis de testar.",
    whenToUse: "Sempre que uma lógica se repete ou representa uma tarefa bem definida.",
    everyday:
      "Uma máquina de café: você coloca água e café (parâmetros) e recebe o café pronto (retorno).",
    curiosity:
      "Uma boa função faz uma única coisa bem feita. Se está fazendo várias, provavelmente deveriam ser várias funções.",
    summary: "Funções recebem entradas, executam uma tarefa e podem devolver um resultado.",
    example: cs({
      python: `def somar(a, b):\n    return a + b\n\nprint(somar(2, 3))`,
      javascript: `function somar(a, b) {\n  return a + b;\n}\nconsole.log(somar(2, 3));`,
      java: `int somar(int a, int b) {\n  return a + b;\n}\nSystem.out.println(somar(2, 3));`,
      csharp: `int Somar(int a, int b) => a + b;\nConsole.WriteLine(Somar(2, 3));`,
      cpp: `int somar(int a, int b) { return a + b; }\nstd::cout << somar(2, 3);`,
      c: `int somar(int a, int b) { return a + b; }\nprintf("%d\\n", somar(2, 3));`,
      php: `<?php\nfunction somar($a, $b) { return $a + $b; }\necho somar(2, 3);`,
      go: `func somar(a, b int) int {\n    return a + b\n}\nfmt.Println(somar(2, 3))`,
    }),
    exercises: [
      {
        difficulty: "facil",
        type: "boolean",
        question:
          "Uma variável declarada dentro de uma função pode ser acessada livremente fora dela.",
        answer: false,
        explanation:
          "Variáveis locais existem apenas dentro do escopo da função onde foram criadas.",
      },
      {
        difficulty: "medio",
        type: "output",
        question: "O que este código imprime?",
        code: cs({
          python: `def dobro(x):\n    return x * 2\n\nprint(dobro(5))`,
          javascript: `function dobro(x) { return x * 2; }\nconsole.log(dobro(5));`,
          java: `int dobro(int x) { return x * 2; }\nSystem.out.println(dobro(5));`,
          csharp: `int Dobro(int x) => x * 2;\nConsole.WriteLine(Dobro(5));`,
          cpp: `int dobro(int x) { return x * 2; }\nstd::cout << dobro(5);`,
          c: `int dobro(int x) { return x * 2; }\nprintf("%d\\n", dobro(5));`,
          php: `<?php\nfunction dobro($x) { return $x * 2; }\necho dobro(5);`,
          go: `func dobro(x int) int { return x * 2 }\nfmt.Println(dobro(5))`,
        }),
        options: ["5", "10", "25", "2"],
        answerIndex: 1,
        explanation: "A função retorna 5 * 2, ou seja, 10.",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question: "Qual afirmação sobre funções está correta?",
        options: [
          "Funções sempre devem retornar um valor obrigatoriamente",
          "Funções podem receber parâmetros e, opcionalmente, retornar um valor",
          "Funções não podem chamar outras funções",
          "Funções não podem ter parâmetros",
        ],
        answerIndex: 1,
        explanation: "Funções podem ter zero ou mais parâmetros e podem ou não retornar um valor.",
      },
    ],
  },
  {
    id: "praticas",
    emoji: "🛠️",
    title: "Boas Práticas e Depuração",
    subtitle: "Escrever código legível e caçar bugs",
    explanation:
      "Bons programadores escrevem código claro: nomes descritivos, funções pequenas e comentários quando necessário. Depurar (debug) é o ato de encontrar e corrigir erros — usando prints, breakpoints ou ferramentas de debug.",
    purpose:
      "Escrever código que outras pessoas (e você no futuro) consigam entender e corrigir com facilidade.",
    whenToUse: "Sempre. Cada linha escrita será lida muitas vezes — priorize clareza.",
    everyday:
      "Escrever uma receita com passos numerados e ingredientes bem separados, em vez de um texto corrido.",
    curiosity:
      "O termo 'bug' começou literalmente com um inseto preso em um computador da década de 1940.",
    summary: "Escreva código legível e aprenda a depurar — encontrar bugs faz parte do trabalho.",
    example: cs({
      python: `# Ruim: nomes obscuros\nx = 60\ny = x * 60\n\n# Bom: nomes descritivos\nsegundos_por_minuto = 60\nsegundos_em_uma_hora = segundos_por_minuto * 60\nprint(segundos_em_uma_hora)`,
      javascript: `// Ruim\nlet x = 60;\nlet y = x * 60;\n\n// Bom\nconst segundosPorMinuto = 60;\nconst segundosEmUmaHora = segundosPorMinuto * 60;\nconsole.log(segundosEmUmaHora);`,
      java: `// Ruim\nint x = 60;\nint y = x * 60;\n\n// Bom\nint segundosPorMinuto = 60;\nint segundosEmUmaHora = segundosPorMinuto * 60;\nSystem.out.println(segundosEmUmaHora);`,
      csharp: `int segundosPorMinuto = 60;\nint segundosEmUmaHora = segundosPorMinuto * 60;\nConsole.WriteLine(segundosEmUmaHora);`,
      cpp: `int segundosPorMinuto = 60;\nint segundosEmUmaHora = segundosPorMinuto * 60;\nstd::cout << segundosEmUmaHora;`,
      c: `int segundosPorMinuto = 60;\nint segundosEmUmaHora = segundosPorMinuto * 60;\nprintf("%d\\n", segundosEmUmaHora);`,
      php: `<?php\n$segundosPorMinuto = 60;\n$segundosEmUmaHora = $segundosPorMinuto * 60;\necho $segundosEmUmaHora;`,
      go: `segundosPorMinuto := 60\nsegundosEmUmaHora := segundosPorMinuto * 60\nfmt.Println(segundosEmUmaHora)`,
    }),
    exercises: [
      {
        difficulty: "facil",
        type: "boolean",
        question: "Usar nomes descritivos em variáveis ajuda outras pessoas a entender o código.",
        answer: true,
        explanation:
          "Sim. Nomes claros contam a história do código — 'totalItens' é melhor que 'x'.",
      },
      {
        difficulty: "medio",
        type: "multiple",
        question: "O que significa 'depurar' (debug) um programa?",
        options: [
          "Escrever a documentação",
          "Deletar o código antigo",
          "Localizar e corrigir erros",
          "Publicar o programa online",
        ],
        answerIndex: 2,
        explanation: "Depurar é o processo de encontrar bugs (erros) e corrigi-los.",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question:
          "Qual é uma técnica útil quando um programa está apresentando comportamento inesperado?",
        options: [
          "Reescrever tudo do zero imediatamente",
          "Imprimir valores intermediários ou usar um debugger para acompanhar a execução",
          "Apagar todos os comentários",
          "Trocar de linguagem",
        ],
        answerIndex: 1,
        explanation:
          "Inspecionar valores em pontos-chave (prints ou debugger) é a forma mais rápida de descobrir onde a lógica falha.",
      },
    ],
  },
  {
    id: "desafios",
    emoji: "🏆",
    title: "Desafios Integradores",
    subtitle: "Colocando tudo em prática",
    explanation:
      "Chegou a hora de juntar variáveis, condicionais, loops e funções em um mesmo problema. Esses desafios simulam o que você faz no dia a dia: combinar conceitos simples para resolver algo maior.",
    purpose: "Consolidar todos os fundamentos vistos até aqui em problemas integrados.",
    whenToUse: "Como diagnóstico do que você já domina e do que ainda vale revisar.",
    everyday: "Passar em uma prova prática depois de estudar cada tópico.",
    curiosity: "Programar bem é combinar poucos conceitos fundamentais de maneiras poderosas.",
    summary: "Junte variáveis, decisões, loops e funções para resolver problemas reais.",
    example: cs({
      python: `def eh_par(n):\n    return n % 2 == 0\n\nfor i in range(1, 6):\n    if eh_par(i):\n        print(i, "par")\n    else:\n        print(i, "ímpar")`,
      javascript: `function ehPar(n) { return n % 2 === 0; }\nfor (let i = 1; i <= 5; i++) {\n  console.log(i, ehPar(i) ? "par" : "ímpar");\n}`,
      java: `boolean ehPar(int n) { return n % 2 == 0; }\nfor (int i = 1; i <= 5; i++) {\n  System.out.println(i + (ehPar(i) ? " par" : " ímpar"));\n}`,
      csharp: `bool EhPar(int n) => n % 2 == 0;\nfor (int i = 1; i <= 5; i++)\n  Console.WriteLine($"{i} {(EhPar(i) ? "par" : "ímpar")}");`,
      cpp: `bool ehPar(int n) { return n % 2 == 0; }\nfor (int i = 1; i <= 5; i++)\n  std::cout << i << (ehPar(i) ? " par\\n" : " ímpar\\n");`,
      c: `int ehPar(int n) { return n % 2 == 0; }\nfor (int i = 1; i <= 5; i++)\n  printf("%d %s\\n", i, ehPar(i) ? "par" : "ímpar");`,
      php: `<?php\nfunction ehPar($n){ return $n % 2 === 0; }\nfor ($i = 1; $i <= 5; $i++) {\n  echo $i . (ehPar($i) ? " par" : " ímpar") . "\\n";\n}`,
      go: `func ehPar(n int) bool { return n%2 == 0 }\nfor i := 1; i <= 5; i++ {\n    if ehPar(i) { fmt.Println(i, "par") } else { fmt.Println(i, "ímpar") }\n}`,
    }),
    exercises: [
      {
        difficulty: "facil",
        type: "output",
        question: "Qual saída este código produz para os números de 1 a 5?",
        code: cs({
          python: `for i in range(1, 6):\n    if i % 2 == 0:\n        print(i, "par")\n    else:\n        print(i, "ímpar")`,
          javascript: `for (let i = 1; i <= 5; i++) console.log(i, i % 2 === 0 ? "par" : "ímpar");`,
          java: `for (int i = 1; i <= 5; i++) System.out.println(i + (i%2==0 ? " par" : " ímpar"));`,
          csharp: `for (int i = 1; i <= 5; i++) Console.WriteLine($"{i} {(i%2==0 ? "par" : "ímpar")}");`,
          cpp: `for (int i = 1; i <= 5; i++) std::cout << i << (i%2==0 ? " par\\n" : " ímpar\\n");`,
          c: `for (int i = 1; i <= 5; i++) printf("%d %s\\n", i, i%2==0 ? "par" : "ímpar");`,
          php: `<?php\nfor ($i = 1; $i <= 5; $i++) echo $i . ($i % 2 == 0 ? " par" : " ímpar") . "\\n";`,
          go: `for i := 1; i <= 5; i++ { if i%2==0 { fmt.Println(i, "par") } else { fmt.Println(i, "ímpar") } }`,
        }),
        options: [
          "1 ímpar, 2 par, 3 ímpar, 4 par, 5 ímpar",
          "Todos ímpar",
          "Todos par",
          "1 par, 2 ímpar, 3 par, 4 ímpar, 5 par",
        ],
        answerIndex: 0,
        explanation:
          "O resto da divisão por 2 define se é par (0) ou ímpar. A alternância começa em 1 (ímpar).",
      },
      {
        difficulty: "medio",
        type: "multiple",
        question: "Você precisa somar todos os números de 1 até N. Qual combinação faz sentido?",
        options: [
          "Apenas uma variável",
          "Uma variável acumuladora + um loop de 1 até N",
          "Apenas um if",
          "Apenas uma função sem loops",
        ],
        answerIndex: 1,
        explanation:
          "Você precisa de um acumulador (soma = 0) e um loop que percorre 1..N somando cada valor.",
      },
      {
        difficulty: "dificil",
        type: "output",
        question: "O que a função retorna para contarPares([1, 2, 3, 4, 5, 6])?",
        code: cs({
          python: `def contarPares(nums):\n    total = 0\n    for n in nums:\n        if n % 2 == 0:\n            total += 1\n    return total\n\nprint(contarPares([1,2,3,4,5,6]))`,
          javascript: `function contarPares(nums) {\n  let total = 0;\n  for (const n of nums) if (n % 2 === 0) total++;\n  return total;\n}\nconsole.log(contarPares([1,2,3,4,5,6]));`,
          java: `int contarPares(int[] nums) {\n  int total = 0;\n  for (int n : nums) if (n % 2 == 0) total++;\n  return total;\n}\nSystem.out.println(contarPares(new int[]{1,2,3,4,5,6}));`,
          csharp: `int ContarPares(int[] nums) {\n  int total = 0;\n  foreach (var n in nums) if (n % 2 == 0) total++;\n  return total;\n}\nConsole.WriteLine(ContarPares(new[]{1,2,3,4,5,6}));`,
          cpp: `int contarPares(std::vector<int> nums) {\n  int total = 0;\n  for (int n : nums) if (n % 2 == 0) total++;\n  return total;\n}\nstd::cout << contarPares({1,2,3,4,5,6});`,
          c: `int contarPares(int nums[], int len) {\n  int total = 0;\n  for (int i = 0; i < len; i++) if (nums[i] % 2 == 0) total++;\n  return total;\n}\nint nums[] = {1,2,3,4,5,6};\nprintf("%d\\n", contarPares(nums, 6));`,
          php: `<?php\nfunction contarPares($nums){\n  $total = 0;\n  foreach ($nums as $n) if ($n % 2 === 0) $total++;\n  return $total;\n}\necho contarPares([1,2,3,4,5,6]);`,
          go: `func contarPares(nums []int) int {\n  total := 0\n  for _, n := range nums { if n%2 == 0 { total++ } }\n  return total\n}\nfmt.Println(contarPares([]int{1,2,3,4,5,6}))`,
        }),
        options: ["2", "3", "4", "6"],
        answerIndex: 1,
        explanation: "Os números pares em [1..6] são 2, 4 e 6 — três no total.",
      },
    ],
  },
];

export const TOTAL_EXERCISES = MODULES.reduce((acc, m) => acc + m.exercises.length, 0);
