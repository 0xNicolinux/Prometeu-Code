<div align="center">

# Prometeu Code

### Aprenda lógica de programação praticando em diferentes linguagens.

[![React](https://img.shields.io/badge/React-19-149eca?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-informational)](./LICENSE)

Plataforma interativa de aprendizagem que combina explicações, exemplos de código, resumos e exercícios com feedback imediato.

</div>

## Visão geral

O **Prometeu Code** apresenta fundamentos de programação em uma trilha organizada por módulos. O estudante pode selecionar uma linguagem e acompanhar exemplos e exercícios adaptados à sintaxe escolhida, enquanto o conteúdo conceitual permanece equivalente.

A plataforma foi construída para apoiar a prática contínua de lógica de programação sem exigir cadastro ou uma infraestrutura de backend para começar a estudar.

## Conteúdo e recursos

- **13 módulos** de fundamentos de programação.
- **39 exercícios interativos**, com três níveis por módulo: fácil, intermediário e desafio.
- **Oito linguagens disponíveis:** Python, JavaScript, Java, C#, C++, C, PHP e Go.
- Exemplos e exercícios de código adaptados à linguagem selecionada.
- Questões de múltipla escolha, verdadeiro ou falso e interpretação de saída de código.
- Feedback com explicações após os exercícios.
- Sistema de XP, níveis e conquista representada por certificado em imagem.
- Tema claro/escuro, com preferência armazenada no navegador.

## Como funciona a seleção de linguagem

O estudante escolhe uma das linguagens disponíveis. A aplicação utiliza essa seleção para apresentar os exemplos e exercícios correspondentes. O objetivo didático é permitir que os mesmos fundamentos sejam estudados em diferentes sintaxes.

## Tecnologias

- **React 19**
- **TypeScript**
- **TanStack Start**
- **TanStack Router**
- **TanStack Query**
- **Vite**
- **Tailwind CSS**
- **Radix UI**
- **Lucide React**

## Estrutura do projeto

~~~text
src/
├── routes/
│   ├── __root.tsx
│   └── index.tsx
├── components/
│   ├── course/
│   └── ui/
└── lib/
    ├── course-data.ts
    └── course-context.tsx
~~~

### Dados do curso

`src/lib/course-data.ts` concentra a definição dos módulos, explicações, exemplos por linguagem e exercícios. Os exemplos de código são mantidos para cada uma das oito linguagens.

### Estado da aplicação

`src/lib/course-context.tsx` gerencia o contexto compartilhado do curso, incluindo a linguagem selecionada, o progresso, XP, níveis e tema.

## Executar localmente

### Requisitos

- Node.js
- npm

### Instalação

~~~bash
git clone https://github.com/0xNicolinux/Prometeu-Code.git
cd Prometeu-Code
npm install
~~~

### Desenvolvimento

~~~bash
npm run dev
~~~

### Validar o banco de exercícios

~~~bash
npm run validate:content
~~~

Esse comando verifica a estrutura das questões, a distribuição das respostas corretas, sequências previsíveis, alternativas duplicadas, diferenças excessivas de tamanho e exemplos de código ausentes por linguagem. A validação também é executada automaticamente antes do build.

### Build e pré-visualização

~~~bash
npm run build
npm run preview
~~~

### Verificação e formatação

~~~bash
npm run lint
npm run format
~~~

## Contribuição

1. Faça um fork do repositório.
2. Crie uma branch para sua alteração.
3. Implemente e valide a mudança localmente.
4. Abra um pull request explicando o que foi alterado.

## Licença

O projeto está licenciado sob a [MIT License](./LICENSE).