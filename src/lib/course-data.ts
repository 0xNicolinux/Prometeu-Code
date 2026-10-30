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
python: `# "Olá, mundo" em Python
print("Olá, mundo")`,

javascript: `// "Olá, mundo" em JavaScript
console.log("Olá, mundo");`,

java: `// "Olá, mundo" em Java
System.out.println("Olá, mundo");`,

csharp: `// "Olá, mundo" em C#  
Console.WriteLine("Olá, mundo");`,

cpp: `// "Olá, mundo" em C++
std::cout << "Olá, mundo" << std::endl;`,

c: `// "Olá, mundo" em C
printf("Olá, mundo\\n");`,

php: `<?php
// "Olá, mundo" em PHP
echo "Olá, mundo";`,

go: `// "Olá, mundo" em Go
fmt.Println("Olá, mundo")`,
    }),
    exercises: [
      {
        difficulty: "facil",
        type: "multiple",
        question: "Qual alternativa define corretamente um algoritmo?",
        options: ["Um código-fonte escrito em uma linguagem específica.", "Uma estrutura que guarda valores para uso posterior.", "Uma sequência finita e ordenada de passos para resolver um problema.", "Um comando isolado que executa uma operação no computador."],
        answerIndex: 2,
        explanation:
          "Um algoritmo descreve passos ordenados e finitos para atingir um objetivo ou resolver um problema. Ele pode ser representado antes de escolher uma linguagem de programação.",
      },
      {
        difficulty: "medio",
        type: "boolean",
        question: "Duas linguagens de programação podem implementar o mesmo algoritmo usando sintaxes diferentes.",
        answer: true,
        explanation:
          "A lógica da solução pode ser preservada mesmo quando a sintaxe muda entre linguagens, como Python, C e Java.",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question:
          "Qual alternativa diferencia corretamente lógica de programação e linguagem de programação?",
        options: ["A lógica organiza o raciocínio da solução; a linguagem permite expressá-la em código.", "A lógica define a sintaxe; a linguagem escolhe qual problema deve ser resolvido.", "A lógica só é usada antes de programar; a linguagem substitui esse raciocínio depois.", "A linguagem organiza os passos; a lógica traduz o código para instruções de máquina."],
        answerIndex: 0,
        explanation:
          "Lógica de programação é o raciocínio usado para estruturar uma solução. Uma linguagem fornece a sintaxe e os recursos para expressar essa solução em código.",
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
        question: "Trocar a ordem de etapas que dependem uma da outra pode alterar o resultado de um algoritmo.",
        answer: true,
        explanation:
          "Quando uma etapa utiliza o resultado de outra, executar essas etapas fora da ordem necessária pode produzir um resultado incorreto.",
      },
      {
        difficulty: "medio",
        type: "multiple",
        question: "Em um fluxograma tradicional, qual símbolo representa uma decisão?",
        options: ["Retângulo", "Paralelogramo", "Círculo", "Losango"],
        answerIndex: 3,
        explanation: "O losango representa uma decisão ou condição, normalmente com caminhos de saída como “sim” e “não”.",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question: "Qual conjunto de características descreve melhor um algoritmo bem definido?",
        options: ["Ter poucas linhas, mesmo que algumas etapas fiquem implícitas.", "Ser finito, claro e produzir o resultado esperado para as entradas previstas.", "Usar somente comandos simples e evitar qualquer tipo de decisão.", "Executar sempre a mesma quantidade de passos, qualquer que seja a entrada."],
        answerIndex: 1,
        explanation:
          "Um algoritmo deve terminar, ter etapas compreensíveis e resolver corretamente o problema para o qual foi planejado. Ele pode incluir decisões e repetições.",
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
        question: "Qual é a principal finalidade de uma variável em um programa?",
        options: ["Transformar o programa em instruções executáveis.", "Organizar elementos visuais da interface do usuário.", "Controlar quantas vezes um laço será executado.", "Guardar um dado que o programa pode consultar ou alterar."],
        answerIndex: 3,
        explanation:
          "Uma variável associa um nome a um valor que pode ser utilizado e, quando permitido, atualizado durante a execução.",
      },
      {
        difficulty: "medio",
        type: "multiple",
        question: "Qual tipo é mais adequado para representar o valor numérico 3.14 em linguagens como Python, Java ou C#?",
        options: ["int, pois valores escritos com ponto continuam sendo inteiros.", "float ou double, pois representam números com parte decimal.", "string, pois todo número com ponto deve ser armazenado como texto.", "bool, pois o ponto indica uma condição ou resultado lógico."],
        answerIndex: 1,
        explanation: "Tipos como float e double representam números de ponto flutuante. O tipo exato disponível e sua precisão dependem da linguagem.",
      },
      {
        difficulty: "dificil",
        type: "output",
        question: "Qual valor é exibido depois que as três atribuições são executadas na ordem apresentada?",
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
        options: ["30", "25", "20", "15"],
        answerIndex: 0,
        explanation: "A variável começa em 10, recebe 10 + 5 e passa a valer 15. Em seguida, 15 é multiplicado por 2, resultando em 30.",
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
        question: "Em programação, ler um dado digitado pelo usuário e exibir uma mensagem na tela são operações diferentes.",
        answer: false,
        explanation:
          "A leitura recebe uma entrada; a exibição apresenta uma saída. São etapas distintas, mesmo quando acontecem na mesma interação.",
      },
      {
        difficulty: "medio",
        type: "multiple",
        question: "Em Python, qual função lê uma linha digitada pelo usuário no terminal?",
        options: ["print()", "read()", "input()", "scan()"],
        answerIndex: 2,
        explanation: "A função input() lê uma linha da entrada padrão e retorna o conteúdo como texto (string).",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question: "Se uma pessoa digitar 42 em uma chamada a input() do Python, qual será o tipo retornado antes de qualquer conversão?",
        options: ["int, porque o texto contém apenas algarismos.", "str, porque input() retorna o conteúdo digitado como texto.", "float, porque toda entrada numérica é convertida automaticamente.", "bool, porque a função verifica se a entrada está preenchida."],
        answerIndex: 1,
        explanation:
          "input() retorna uma string independentemente do conteúdo digitado. Para realizar operações numéricas, é necessário converter o valor, por exemplo com int() ou float().",
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
        question: "Qual é o resultado da expressão 10 % 3?",
        options: ["3, que é o quociente inteiro da divisão.", "0, porque 10 não é múltiplo de 3.", "10, porque o operador preserva o valor à esquerda.", "1, que é o resto da divisão de 10 por 3."],
        answerIndex: 3,
        explanation: "O operador % calcula o resto da divisão. Como 3 cabe três vezes em 10 e sobra 1, o resultado é 1.",
      },
      {
        difficulty: "medio",
        type: "multiple",
        question: "Considerando que && representa o operador lógico E, qual é o resultado de (5 > 2) && (3 < 1)?",
        options: ["Verdadeiro, pois a primeira comparação é verdadeira.", "Verdadeiro, pois basta uma das comparações ser verdadeira.", "Falso, pois as duas comparações precisam ser verdadeiras.", "Erro de sintaxe, pois comparações não podem ser combinadas."],
        answerIndex: 2,
        explanation:
          "A primeira comparação é verdadeira e a segunda é falsa. O operador lógico E só retorna verdadeiro quando ambos os lados são verdadeiros.",
      },
      {
        difficulty: "dificil",
        type: "output",
        question: "Qual saída é produzida pelo código ao calcular o quociente inteiro e o resto de 7 dividido por 2?",
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
        options: ["3 1", "3 0", "3.5 1", "2 1"],
        answerIndex: 0,
        explanation: "A divisão inteira de 7 por 2 resulta em 3, e o resto da divisão é 1. Por isso, a saída apresenta “3 1”.",
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
        question: "Qual mensagem o programa exibe quando a variável idade recebe o valor 20?",
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
        options: ["Adulto", "Menor", "Adulto e Menor", "Nenhuma mensagem"],
        answerIndex: 0,
        explanation: "A condição idade >= 18 é verdadeira para 20. Portanto, o programa executa o primeiro ramo e exibe “Adulto”.",
      },
      {
        difficulty: "medio",
        type: "output",
        question: "Qual mensagem é exibida quando idade recebe o valor 15?",
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
        options: ["Adulto", "Criança", "Adolescente", "Nenhuma mensagem"],
        answerIndex: 2,
        explanation: "A primeira condição (idade >= 18) é falsa. A condição seguinte (idade >= 12) é verdadeira, então a saída é “Adolescente”.",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question: "Em qual situação switch (ou match) costuma deixar o código mais claro do que vários else if?",
        options: ["Quando o programa precisa repetir um bloco até uma condição mudar.", "Quando uma mesma expressão é comparada com vários valores específicos.", "Quando todas as condições dependem de cálculos sem valores definidos.", "Quando não existe uma decisão e todas as instruções devem ser executadas."],
        answerIndex: 1,
        explanation:
          "switch e match são úteis quando uma expressão é comparada com diferentes casos definidos. Para condições complexas e intervalos, if/else pode ser mais adequado.",
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
        question: "Quantas vezes a mensagem “oi” é exibida pelo laço apresentado?",
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
        options: ["4 vezes", "6 vezes", "Nenhuma vez", "5 vezes"],
        answerIndex: 3,
        explanation: "O contador percorre os valores 0, 1, 2, 3 e 4. Como a condição é i < 5, o bloco executa cinco vezes.",
      },
      {
        difficulty: "medio",
        type: "output",
        question: "Qual é o valor final da variável soma após a execução do laço apresentado?",
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
        options: ["6", "15", "10", "4"],
        answerIndex: 2,
        explanation: "O laço soma os valores 1, 2, 3 e 4. A soma final é 1 + 2 + 3 + 4 = 10.",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question:
          "Qual estrutura executa o bloco uma vez antes de verificar a condição de repetição?",
        options: ["for", "while", "if", "do while"],
        answerIndex: 3,
        explanation:
          "No do while, a condição é verificada ao final da primeira execução. Por isso, o bloco é executado pelo menos uma vez.",
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
        question: "Nas linguagens trabalhadas no curso, qual índice normalmente identifica o primeiro elemento de um array ou lista indexada?",
        options: ["0", "1", "-1", "O índice depende do tamanho da coleção."],
        answerIndex: 0,
        explanation:
          "Python, JavaScript, Java, C, C++, C# e Go utilizam indexação iniciada em zero para arrays ou listas comuns.",
      },
      {
        difficulty: "medio",
        type: "output",
        question: "Qual valor é exibido ao acessar nums[2] na coleção apresentada?",
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
        explanation: "A indexação começa em zero: nums[0] vale 5, nums[1] vale 10 e nums[2] vale 15.",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question: "Um vetor possui cinco elementos e utiliza índices iniciados em zero. Qual é o índice do último elemento?",
        options: ["5", "4", "0", "6"],
        answerIndex: 1,
        explanation: "Em uma coleção com N elementos indexada a partir de zero, os índices válidos vão de 0 até N - 1. Para cinco elementos, o último índice é 4.",
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
        question: "Para acessar um elemento específico de uma matriz bidimensional, quais posições normalmente precisam ser informadas?",
        options: ["O índice da linha e o índice da coluna.", "Somente a posição absoluta do elemento na memória.", "A chave textual e o valor armazenado na posição.", "O tamanho total da matriz e o tipo de dado usado."],
        answerIndex: 0,
        explanation: "Uma matriz bidimensional é organizada em linhas e colunas. O acesso identifica a linha e a coluna do elemento, respeitando a sintaxe da linguagem.",
      },
      {
        difficulty: "medio",
        type: "output",
        question: "Na matriz exibida, qual valor é acessado pela posição da terceira linha e primeira coluna?",
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
        options: ["1", "3", "9", "7"],
        answerIndex: 3,
        explanation:
          "A terceira linha contém 7, 8 e 9. A primeira coluna dessa linha contém o valor 7. Os índices apresentados no código começam em zero.",
      },
      {
        difficulty: "dificil",
        type: "boolean",
        question: "Uma matriz pode ter quantidades diferentes de linhas e colunas.",
        answer: true,
        explanation:
          "Matriz retangular é válida. Ela só é chamada de quadrada quando o número de linhas é igual ao número de colunas.",
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
        question: "Em programação, o que uma string representa?",
        options: ["Um valor lógico que indica verdadeiro ou falso.", "Uma coleção ordenada de arquivos do sistema.", "Uma sequência de caracteres usada para representar texto.", "Um número inteiro usado para contar repetições."],
        answerIndex: 2,
        explanation: "String é o tipo utilizado para representar texto por meio de uma sequência de caracteres.",
      },
      {
        difficulty: "medio",
        type: "output",
        question: "Quantos caracteres são contados pela operação de comprimento aplicada à string “Prometeu”?",
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
        options: ["7", "9", "10", "8"],
        answerIndex: 3,
        explanation: "“Prometeu” possui oito letras. As funções ou propriedades de comprimento usadas nos exemplos retornam 8 para essa string.",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question: "Qual operação produz uma nova string ao unir dois textos, como “Olá” e “Mundo”?",
        options: ["Interpolação, que substitui valores em um modelo de texto.", "Comparação, que verifica se dois textos são iguais.", "Concatenação, que combina textos em uma única sequência.", "Indexação, que acessa um caractere por sua posição."],
        answerIndex: 2,
        explanation: "Concatenação é a união de duas ou mais strings em uma única sequência. A forma de realizar essa operação varia conforme a linguagem.",
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
          "Uma variável local declarada dentro de uma função fica automaticamente disponível em qualquer outra função do programa.",
        answer: false,
        explanation:
          "O escopo local limita onde a variável pode ser acessada. Outras funções não recebem acesso automático a essa variável.",
      },
      {
        difficulty: "medio",
        type: "output",
        question: "Qual valor é exibido pela chamada da função dobro(5) no exemplo?",
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
        explanation: "A função multiplica o argumento por 2 e retorna o resultado. Para dobro(5), o valor retornado é 10.",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question: "Qual afirmação sobre parâmetros e valores de retorno de funções está correta?",
        options: ["Uma função pode receber parâmetros e pode ou não devolver um valor.", "Toda função precisa receber pelo menos um parâmetro.", "Uma função só pode chamar outras funções quando retorna um número.", "Os parâmetros de uma função precisam ter todos o mesmo tipo."],
        answerIndex: 0,
        explanation: "Uma função pode receber zero ou mais parâmetros. Dependendo da linguagem e da finalidade, ela pode retornar um valor ou apenas executar uma ação.",
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
        question: "Um teste que passa uma vez garante que o programa não possui outros erros.",
        answer: false,
        explanation:
          "Um teste cobre apenas os cenários executados. Outros valores de entrada, estados ou caminhos do programa ainda podem revelar defeitos.",
      },
      {
        difficulty: "medio",
        type: "multiple",
        question: "O que significa depurar (debug) um programa?",
        options: ["Investigar a execução para localizar e corrigir defeitos.", "Reescrever a documentação para explicar cada função.", "Publicar uma nova versão do programa em produção.", "Remover funcionalidades antigas que não são utilizadas."],
        answerIndex: 0,
        explanation: "Depurar é investigar o comportamento do programa para identificar a origem de um erro e corrigi-lo.",
      },
      {
        difficulty: "dificil",
        type: "multiple",
        question:
          "Um programa apresenta um resultado inesperado. Qual abordagem ajuda a localizar a causa sem alterar várias partes ao mesmo tempo?",
        options: ["Substituir todas as funções por versões simplificadas.", "Acompanhar valores intermediários com logs ou um depurador.", "Remover os testes existentes antes de tentar novamente.", "Trocar de linguagem para verificar se o erro desaparece."],
        answerIndex: 1,
        explanation:
          "Inspecionar valores em pontos específicos ou executar o código passo a passo ajuda a identificar onde o comportamento diverge do esperado.",
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
        question: "Qual alternativa descreve a classificação apresentada pelo código para os números de 1 a 5?",
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
        options: ["Os números 2 e 4 são ímpares; 1, 3 e 5 são pares.", "O programa exibe somente os números pares do intervalo.", "1, 3 e 5 são ímpares; 2 e 4 são pares.", "1, 3 e 5 são pares; 2 e 4 são ímpares."],
        answerIndex: 2,
        explanation:
          "O resto da divisão por 2 é 1 para números ímpares e 0 para pares. No intervalo de 1 a 5, os ímpares são 1, 3 e 5; os pares são 2 e 4.",
      },
      {
        difficulty: "medio",
        type: "multiple",
        question: "Você precisa calcular a soma de todos os números inteiros de 1 até N. Qual estratégia atende diretamente a esse objetivo?",
        options: ["Uma condição que verifica apenas se N é maior que zero.", "Uma variável que armazena somente o último número lido.", "Uma função sem parâmetros e sem repetição.", "Um acumulador atualizado em um laço que percorre de 1 até N."],
        answerIndex: 3,
        explanation:
          "O acumulador começa em zero e recebe cada número percorrido pelo laço. Ao final, contém a soma de todos os valores do intervalo.",
      },
      {
        difficulty: "dificil",
        type: "output",
        question: "A função contarPares recebe a lista [1, 2, 3, 4, 5, 6]. Qual valor ela retorna?",
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
        options: ["2", "4", "3", "6"],
        answerIndex: 2,
        explanation: "A lista contém três números pares: 2, 4 e 6. A função incrementa o contador uma vez para cada elemento divisível por 2.",
      },
    ],
  },
];

export const TOTAL_EXERCISES = MODULES.reduce((acc, m) => acc + m.exercises.length, 0);
