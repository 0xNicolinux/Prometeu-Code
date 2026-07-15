# Prometeu Code

Plataforma interativa para aprender lógica e fundamentos de programação, com explicações didáticas e exercícios práticos em 8 linguagens diferentes.

Projeto de extensão universitária, integrado ao ecossistema **[Prometeu](https://github.com/Nicolinux-dev/Prometeu)**.

## O que o projeto faz

- **13 módulos** de conteúdo, do "O que é um algoritmo?" até desafios que combinam variáveis, condicionais, loops e funções.
- **39 exercícios práticos** (3 por módulo: fácil, intermediário e desafio), nos formatos múltipla escolha, verdadeiro/falso e "qual a saída deste código?".
- **8 linguagens de programação** — Python, JavaScript, Java, C#, C++, C, PHP e Go — com o mesmo conteúdo teórico e os mesmos exercícios adaptados para a sintaxe de cada uma. O usuário escolhe a linguagem uma vez e todo o material se adapta.
- **Progresso gamificado**: XP, níveis, sequência de dias de estudo (streak) e uma "Conquista Prometeu Code" (certificado gerado como imagem, para baixar ou compartilhar) ao concluir todos os módulos.
- Todo o progresso é salvo localmente no navegador do usuário (`localStorage`) — não há backend, banco de dados ou login.

## Como rodar o projeto

Pré-requisitos: Node.js 20+ (ou Bun).

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento (http://localhost:3000 por padrão)
npm run dev

# build de produção
npm run build

# checar tipos e lint
npx tsc --noEmit
npm run lint
```

## Stack técnica

- **[TanStack Start](https://tanstack.com/start)** (React 19) — framework full-stack sobre o TanStack Router.
- **Vite 8** — build e dev server.
- **Tailwind CSS v4** + **shadcn/ui** (Radix UI) — estilização e componentes de UI acessíveis.
- **TypeScript** em modo estrito.
- Deploy configurado para o preset **Cloudflare** via Nitro (`vite.config.ts`).

## Estrutura do projeto

```
src/
  routes/            → páginas (roteamento por arquivo do TanStack Router)
    __root.tsx        → shell da aplicação, meta tags, tratamento de erro/404
    index.tsx          → página única do curso
  components/
    course/            → componentes específicos do curso (hero, exercícios, certificado, etc.)
    ui/                 → componentes de interface reutilizáveis (shadcn/ui)
  lib/
    course-data.ts      → todo o conteúdo do curso: os 13 módulos e os 39 exercícios,
                          nas 8 linguagens. Fonte única de verdade do conteúdo.
    course-context.tsx  → estado global do curso (linguagem escolhida, progresso, XP,
                          tema claro/escuro), persistido em localStorage.
```

Para adicionar ou editar conteúdo (um módulo, um exercício, um exemplo de código), o único
arquivo que precisa ser tocado é `src/lib/course-data.ts`. O restante da interface é
gerado automaticamente a partir dele.

## Relação com o ecossistema Prometeu

Este projeto foi desenvolvido para permanecer compatível com os padrões do
[Prometeu](https://github.com/Nicolinux-dev/Prometeu). Componentes e padrões pensados
para reuso em outros projetos do ecossistema:

- `course-context.tsx` — padrão de contexto React com persistência em `localStorage` e
  gamificação (XP, nível, streak) que pode ser adaptado para outras trilhas de ensino.
- `code-block.tsx` — realce de sintaxe leve, sem dependências externas, com suporte a
  múltiplas linguagens.

## Estado do projeto

Este projeto passou por uma auditoria completa de código (arquitetura, bugs, acessibilidade,
SEO e consistência) — veja `RELATORIO-AUDITORIA.md` para o histórico detalhado do que foi
encontrado e corrigido. Como é um projeto de extensão com escopo fechado, não há suíte de
testes automatizados nem páginas legais (Termos/Privacidade) — isso é intencional e está
documentado no relatório, não é uma pendência esquecida.
