# Relatório de Auditoria — Prometeu Code (code-compass)

**Data:** 14 de julho de 2026
**Escopo:** Auditoria completa do repositório enviado (`code-compass-main.zip`), com foco em bugs verificáveis, consistência, acessibilidade, SEO e arquitetura. Correções seguras foram aplicadas diretamente no código; itens que exigem decisão de produto ou conteúdo novo (ex.: páginas legais) estão listados como sugestões, não inventados.

---

## 0. O que este projeto realmente é

Antes do relatório em si, um resumo honesto da arquitetura, porque isso muda o que "auditoria completa" significa aqui:

- Stack: **TanStack Start** (React 19) + **Vite 8** + **Tailwind v4** + **shadcn/ui** (Radix), gerado/mantido via Lovable.
- É uma **SPA de uma única página** (`src/routes/index.tsx`), sem múltiplas rotas, sem backend, sem banco de dados, sem autenticação. Todo o conteúdo (13 módulos, 39 exercícios, 8 linguagens) vive em **um único arquivo de dados**, `src/lib/course-data.ts` (994 linhas).
- Progresso do usuário é salvo em `localStorage` (client-side apenas).
- Portanto, várias seções pedidas na auditoria original (banco de dados, autenticação/autorização, múltiplas rotas, sitemap de várias páginas, CSRF) **não se aplicam** a este projeto no estado atual — estão marcadas como N/A abaixo, não ignoradas.

Ferramentas rodadas de fato (não estimativas): `tsc --noEmit`, `eslint .`, `prettier --check`, `vite build` (build de produção completo, incluindo o alvo Cloudflare/Nitro configurado no projeto).

---

## 1. Problemas encontrados e corrigidos

| #   | Problema                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Gravidade                                                                                                               | Onde                                               | Status                                                                                                        |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 1   | Operador de módulo inválido `%%` em 3 exemplos de código C (deveria ser `%`). Fora de uma format string do `printf`, `%%` não é módulo em C — o código como estava não refletia C válido nem produzia o resultado explicado no exercício.                                                                                                                                                                                                                                                                                                                        | **Alta** (conteúdo educacional incorreto, exercício do tipo "qual a saída deste código" com código tecnicamente errado) | `src/lib/course-data.ts` (linhas ~354, ~386, ~978) | ✅ Corrigido                                                                                                  |
| 2   | Botão "Próximo exercício" não fazia nada em ~2 de cada 3 exercícios de cada módulo. `ExerciseCard` nunca definia um `id` no elemento raiz, mas `ModuleSection` tentava rolar até `document.getElementById(`${moduleId}#ex${i+1}`)` — um id que nunca existiu no DOM.                                                                                                                                                                                                                                                                                             | **Alta** (fluxo principal de aprendizagem quebrado silenciosamente — nenhum erro no console, apenas nada acontece)      | `exercise-card.tsx` + `module-section.tsx`         | ✅ Corrigido                                                                                                  |
| 3   | Botão "Próximo" no último exercício de um módulo tentava rolar até `#certificado`, mas o elemento real tem `id="conquista"`. Ou seja, ao terminar o último módulo, a rolagem automática para a seção de conquista nunca funcionava.                                                                                                                                                                                                                                                                                                                              | **Alta**                                                                                                                | `src/routes/index.tsx`                             | ✅ Corrigido                                                                                                  |
| 4   | `<html lang="en">` em um site 100% em português. Prejudica leitores de tela (pronúncia errada) e sinalização de idioma para buscadores.                                                                                                                                                                                                                                                                                                                                                                                                                          | **Média** (Acessibilidade + SEO)                                                                                        | `src/routes/__root.tsx`                            | ✅ Corrigido para `lang="pt-BR"`                                                                              |
| 5   | Identidade visual/marca inconsistente nos metadados: `__root.tsx` usava "LogicaDev", `routes/index.tsx` usava "PrometeuDev", e o produto real (rodapé, header) se chama "Prometeu Code". Três nomes diferentes no mesmo app.                                                                                                                                                                                                                                                                                                                                     | **Média** (Consistência + SEO)                                                                                          | `__root.tsx`, `routes/index.tsx`                   | ✅ Unificado para "Prometeu Code"                                                                             |
| 6   | Realce de sintaxe (`code-block.tsx`) tratava **qualquer** `#` como início de comentário de linha, para todas as linguagens — inclusive C/C++/C#/Java, onde `#` não é comentário. Como resultado, `#include` (que está na lista de palavras-chave do próprio arquivo) nunca poderia ser destacado como palavra-chave; se algum exemplo futuro usar `#include`, a linha inteira seria "comentada" visualmente por engano. Bug latente, não visível ainda porque nenhum exemplo atual usa `#include`, mas a lista de keywords para C/C++ já assume que funcionaria. | **Média** (bug latente / código morto inconsistente)                                                                    | `code-block.tsx`                                   | ✅ Corrigido — `#` só inicia comentário em Python/PHP                                                         |
| 7   | Links do rodapé ("Contato", "Newsletter", "Política de Privacidade", "Termos") apontavam para `href="#"` — links "mortos" que não levam a lugar nenhum, sem indicar isso ao usuário.                                                                                                                                                                                                                                                                                                                                                                             | **Baixa-Média** (UX / "nada deve levar a páginas inexistentes")                                                         | `footer.tsx`                                       | ✅ Corrigido — agora aparecem claramente como "em breve" (não clicáveis), em vez de parecerem links quebrados |
| 8   | Link externo para o GitHub usava `target="_blank"` sem `rel="noopener noreferrer"` — brecha conhecida de segurança (reverse tabnabbing) e também prejudica performance (a aba nova pode compartilhar o mesmo processo).                                                                                                                                                                                                                                                                                                                                          | **Baixa-Média** (Segurança)                                                                                             | `footer.tsx`                                       | ✅ Corrigido                                                                                                  |
| 9   | Botão "Refazer trilha" apagava **todo** o progresso (XP, respostas, conquista) com um único clique, sem confirmação. Ação destrutiva e irreversível sem proteção.                                                                                                                                                                                                                                                                                                                                                                                                | **Média** (UX)                                                                                                          | `certificate.tsx`                                  | ✅ Corrigido — agora exige confirmação explícita                                                              |
| 10  | Confete de celebração (`showConfetti`) só disparava uma vez por sessão via `useRef`, mesmo após o usuário resetar o progresso e completar a trilha de novo — o `shownRef` nunca era limpo.                                                                                                                                                                                                                                                                                                                                                                       | **Baixa** (polimento de UX)                                                                                             | `certificate.tsx`                                  | ✅ Corrigido                                                                                                  |
| 11  | Feedback de resposta correta/incorreta (painel que aparece após responder) não tinha `aria-live`, então leitores de tela não anunciavam a mudança dinamicamente.                                                                                                                                                                                                                                                                                                                                                                                                 | **Baixa-Média** (Acessibilidade)                                                                                        | `exercise-card.tsx`                                | ✅ Corrigido — `aria-live="polite"` adicionado                                                                |
| 12  | 118 violações de formatação (Prettier) — quebras de linha inconsistentes, espaçamento, listas não formatadas. Sem impacto funcional, mas gera diffs ruidosos e dificulta revisão de código em equipe.                                                                                                                                                                                                                                                                                                                                                            | **Baixa**                                                                                                               | Múltiplos arquivos                                 | ✅ Corrigido via `prettier --write .`                                                                         |

Todas as correções foram validadas com:

```
npx tsc --noEmit     → 0 erros
npx eslint .          → 0 erros (1 warning pré-existente e inofensivo, ver seção 4)
npx vite build         → build de produção completo sem falhas
```

---

## 2. Problemas identificados, não corrigidos automaticamente (decisão de produto necessária)

Estes não foram "corrigidos" porque exigiriam inventar conteúdo ou uma decisão que não é técnica:

- **Páginas legais inexistentes** ("Política de Privacidade", "Termos", "Contato", "Newsletter"): hoje não existem. Marquei os links como "em breve" em vez de deixá-los quebrados, mas o ideal é criar essas páginas/rotas reais antes de um lançamento público, especialmente Política de Privacidade se houver qualquer coleta de dados no futuro (hoje não há — tudo fica no `localStorage` do navegador).
- **SEO avançado**: faltam `og:image`, `og:url` e `<link rel="canonical">`. Não adicionei porque exigiriam uma URL de produção real e uma imagem de compartilhamento (arte) que não existem no repositório — inventar uma URL fictícia seria pior do que não ter.
- **Sitemap.xml / robots.txt**: não existem no projeto. Como é uma SPA de rota única, o ganho de um sitemap tradicional é baixo hoje, mas vale adicionar um `robots.txt` simples e, se o site crescer para múltiplas rotas, um sitemap.
- **Sem testes automatizados**: não há nenhum teste (unitário, de integração ou e2e) no projeto. Para 39 exercícios com lógica de correção (`answerIndex`, `answer` booleano), um teste que valida automaticamente a consistência dos dados (índices dentro do range, todas as 8 linguagens presentes em cada `CodeSamples`, nenhum id de módulo duplicado) evitaria que bugs como o item 1 da tabela acima passem despercebidos no futuro.

---

## 3. Verificações feitas e que passaram sem problemas (não é "nada a reportar" por preguiça — foram checadas ativamente)

- **Estrutura de dados**: 13 módulos × 3 exercícios = 39 exercícios, confirmado programaticamente. Nenhum `id` de módulo duplicado.
- **Cobertura de linguagens**: todos os `example` e `code` de exercícios têm as 8 linguagens (`python, javascript, java, csharp, cpp, c, php, go`) presentes — nenhuma linguagem faltando em nenhum módulo.
- **Roteamento**: só existem duas rotas reais (`__root` e `/`); não há links internos para rotas inexistentes.
- **Âncoras internas**: `#top`, `#linguagem`, `#conteudo`, `#faq` — todas apontam para elementos que de fato existem (verificado via grep no DOM gerado, não suposição).
- **TypeScript**: tipagem de `Exercise` usa union discriminada corretamente (`type: "multiple" | "boolean" | "output"`), sem `any` nem erros de tipo.
- **Estado/Context**: `course-context.tsx` trata `localStorage` corrompido ou ausente com `try/catch` e validação de tipo (`isLanguage`), sem quebrar a aplicação — boa prática já presente.
- **Segurança de conteúdo dinâmico**: `code-block.tsx` usa `dangerouslySetInnerHTML`, mas o HTML é gerado por um tokenizer que escapa cada token individualmente antes de envolver em `<span>` — não há risco de XSS hoje porque todo o conteúdo vem de `course-data.ts` (estático, não gerado pelo usuário). Importante registrar: **se no futuro qualquer exercício aceitar código digitado pelo usuário**, essa função precisa ser revisada, pois foi desenhada só para conteúdo confiável e estático.
- **Build de produção**: compila e gera o worker Cloudflare/Nitro sem warnings de bundle.
- **Responsividade**: os componentes usam classes Tailwind responsivas consistentes (`sm:`, `md:`, `lg:`) nos pontos certos (header, hero, grid de módulos, footer). Nenhuma classe de largura fixa "quebrando" em mobile foi encontrada nos componentes principais.

---

## 4. Riscos restantes / observações menores (não corrigidas, baixo risco)

- 1 warning do ESLint (`react-refresh/only-export-components`) em `course-context.tsx`, que exporta o hook `useCourse` junto com o componente `CourseProvider`. É um padrão comum em React e não afeta produção — só o Fast Refresh em desenvolvimento. (Os outros 6 warnings que existiam antes, em arquivos shadcn/ui como `badge.tsx` e `sidebar.tsx`, desapareceram junto com a limpeza de código morto da seção 7.)
- `AGENTS.md` indica que o projeto está conectado ao Lovable e que **não se deve reescrever histórico de git publicado** (force-push, rebase/amend de commits já enviados). Nenhuma ação deste tipo foi feita ou é necessária para as correções acima — todas foram edições diretas de arquivo.
- O botão "Baixar Conquista" (certificate.tsx) gera um PNG via `<canvas>` no cliente — funciona, mas depende da fonte "Inter" estar carregada no momento da renderização do canvas; em conexões muito lentas, o texto pode cair para a fonte padrão do sistema no PNG baixado. Risco baixo, mas vale testar em conexão lenta antes de um lançamento.

---

## 5. Checklist do que foi revisado

- [x] Arquitetura e estrutura de pastas
- [x] Componentização e duplicação de código
- [x] Tipagem TypeScript (`tsc --noEmit`)
- [x] Lint (`eslint`) e formatação (`prettier`)
- [x] Build de produção completo
- [x] Consistência dos 39 exercícios (contagem, índices de resposta, cobertura de 8 linguagens)
- [x] Exemplos de código em todas as linguagens (identificado e corrigido bug de sintaxe em C)
- [x] Navegação interna, âncoras e rolagem automática (identificados e corrigidos 2 bugs de navegação)
- [x] Estado/localStorage e tratamento de erros
- [x] Acessibilidade básica (idioma do documento, `aria-live`, `role=tablist`/`tab` já presente no seletor de linguagem)
- [x] SEO básico (meta tags, título, idioma, consistência de marca)
- [x] Segurança (XSS no highlighter, `target=_blank` sem `rel`)
- [x] UX de ações destrutivas (reset de progresso)
- [ ] Banco de dados — **N/A**, projeto não tem backend/DB
- [ ] Autenticação/autorização — **N/A**, não existe no projeto
- [ ] Múltiplas rotas/sitemap — **N/A**, é uma SPA de rota única hoje
- [ ] Testes automatizados — **não existem**; recomendado como próximo passo (seção 2)

---

## 6. Melhorias adicionais implementadas (pós-relatório)

A pedido, e considerando que o projeto não vai crescer e não terá páginas legais (trabalho de extensão de escopo fechado), as duas melhorias abaixo foram priorizadas em vez de testes automatizados:

**Acessibilidade e polimento**

- Indicador de foco por teclado (`:focus-visible`) adicionado globalmente — antes não existia nenhum estilo de foco definido no projeto, então usuários de teclado dependiam só do padrão (inconsistente) do navegador.
- Link "Pular para o conteúdo" (skip link), padrão de acessibilidade para quem navega por teclado não precisar passar por todo o cabeçalho a cada carregamento de página.
- `aria-pressed` nos botões de resposta (múltipla escolha e verdadeiro/falso), para leitores de tela indicarem qual alternativa está selecionada antes de confirmar.

**Documentação**

- `README.md` criado na raiz do projeto (não existia antes) com: o que o projeto faz, como rodar, stack técnica, estrutura de pastas, e a relação com o ecossistema Prometeu — pensado para facilitar apresentação/avaliação do trabalho.

Validado novamente após essas mudanças: `tsc --noEmit`, `eslint .` e `vite build` sem erros.

## 7. Limpeza de código morto (shadcn/ui não utilizado)

Na última varredura, identifiquei que de **46 componentes shadcn/ui** em `src/components/ui/`, apenas **1 (`accordion`, usado pelo FAQ) era de fato alcançável** a partir do app real — os outros 45 só se referenciavam entre si (ex.: `sidebar.tsx` importava `button`, `sheet`, `tooltip`...), mas nenhum deles era importado por `routes/` ou `components/course/`. Confirmei antes de remover que isso não afetava o bundle final (o Vite já fazia tree-shaking corretamente — 0 bytes desse código chegava ao cliente), então o ganho aqui é 100% de higiene de repositório e tempo de instalação, não de performance em produção.

**O que foi removido:**

- 45 arquivos `.tsx` não utilizados em `src/components/ui/` (mantido apenas `accordion.tsx`).
- `src/hooks/use-mobile.tsx` — só era usado pelo `sidebar.tsx`, removido junto.
- **38 dependências não utilizadas** em `package.json` (de 48 para 10 dependências diretas de produção, mais os 4 pacotes de framework que não mudaram): `@hookform/resolvers`, 25 pacotes `@radix-ui/react-*`, `class-variance-authority`, `cmdk`, `date-fns`, `embla-carousel-react`, `input-otp`, `react-day-picker`, `react-hook-form`, `react-resizable-panels`, `recharts`, `sonner`, `vaul`, `zod`.

**Validado após a limpeza:**

```
npx tsc --noEmit     → 0 erros
npx eslint .          → 0 erros, 1 warning (pré-existente, inofensivo)
npx vite build         → build de produção sem falhas
npm install (do zero)  → 299 pacotes instalados (antes: bem mais, com toda a árvore de dependências dos 38 pacotes removidos)
```

`components.json` (config do CLI do shadcn/ui) foi mantido — não referencia nenhum arquivo específico, então continua funcionando normalmente caso algum componente precise ser adicionado de volta no futuro com `npx shadcn add`.

## 8. Recomendações futuras (não implementadas, para priorização)

1. ~~Adicionar testes automatizados que validam a integridade de `course-data.ts`~~ — **descartado**: o projeto não terá mais alterações de conteúdo, então o ganho de testes de regressão é baixo. Decisão do responsável pelo projeto.
2. ~~Criar páginas legais (Contato, Termos, Política de Privacidade)~~ — **descartado**: projeto de extensão de escopo fechado, sem necessidade real dessas páginas. Decisão do responsável pelo projeto.
3. Adicionar `og:image`, `og:url`/canonical e `robots.txt` quando o domínio de produção estiver definido.
4. Se o projeto crescer para integrar de fato com o ecossistema Prometeu (conforme `AGENTS.md` e o link do repositório principal), documentar em `README` quais componentes/padrões deste projeto são pensados para reuso (ex.: `course-context.tsx`, o tokenizer de `code-block.tsx`) versus o que é específico deste app.
