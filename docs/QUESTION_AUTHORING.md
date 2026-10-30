# Guia de qualidade das questões

Este documento define critérios para manter os exercícios do Prometeu Code claros, corretos e úteis para aprendizagem. Ferramentas de IA podem ajudar a rascunhar perguntas, mas não devem ser tratadas como fonte de verdade nem como revisor final.

## 1. Partir do conteúdo ensinado

- Cada questão deve avaliar um conceito que aparece no módulo correspondente.
- Não introduza exceções, APIs ou terminologia que o material não ensinou.
- Para questões sobre código, confira o trecho exibido e percorra cada instrução até chegar ao resultado.
- Quando o comportamento depender da linguagem, especifique a linguagem no enunciado.

## 2. Uma resposta defensável

- O enunciado deve ser direto e conter os dados necessários.
- Deve existir uma única melhor resposta, sem interpretações concorrentes.
- A explicação deve justificar a resposta com o conceito ou o passo de raciocínio usado.
- Em questões de saída de código, confira se a resposta corresponde ao exemplo em cada linguagem suportada.

## 3. Distratores que ensinam

- Construa alternativas incorretas a partir de erros comuns ou confusões reais de iniciantes.
- Evite alternativas absurdas, vagas ou que possam ser descartadas sem conhecer o conteúdo.
- Mantenha as alternativas gramaticalmente paralelas e de tamanho semelhante.
- Não use palavras absolutas, diferenças de detalhe, concordância ou formatação para revelar a resposta.
- Evite opções sobrepostas ou duas alternativas parcialmente corretas.

## 4. Posição e padrão de resposta

- Varie a posição da resposta correta entre A, B, C e D.
- Evite sequências longas ou padrões fáceis de antecipar.
- A distribuição do conjunto deve permanecer equilibrada. O validador exige diferença máxima de uma ocorrência entre as quatro posições.
- O equilíbrio estatístico não substitui a revisão do conteúdo nem justifica trocar a posição sem atualizar o índice da resposta.

## 5. Uso de IA e verificação

Ao usar IA para rascunhar questões:

1. Forneça o conteúdo específico do módulo como fonte e limite a elaboração a esse material.
2. Peça uma questão por vez, com resposta correta, justificativa e distratores baseados em equívocos plausíveis.
3. Faça uma segunda verificação independente: reavalie o enunciado sem confiar na resposta sugerida e confirme cada afirmação no material do curso ou na documentação da linguagem.
4. Para código, trace a execução separadamente por linguagem; não aceite uma explicação que apenas repita a resposta gerada.
5. Faça revisão humana antes de incorporar a questão.

A técnica de gerar uma resposta inicial e depois verificar separadamente suas afirmações é relacionada ao método Chain-of-Verification. Ela pode reduzir erros, mas não garante correção por si só.

## 6. Validação antes do build

Execute:

~~~bash
npm run validate:content
~~~

O validador verifica estrutura, quantidade de exercícios por módulo, respostas válidas, alternativas duplicadas, distribuição das posições corretas, sequências repetidas, pistas estatísticas de tamanho, explicações e exemplos de código para todas as linguagens cadastradas.

**Limite do validador:** ele encontra problemas estruturais e padrões mensuráveis, mas não consegue provar que uma pergunta está pedagogicamente correta ou que todo distrator é plausível. Essa etapa exige revisão do conteúdo e, idealmente, execução dos exemplos.
