<div align="center">

# 💻 Prometeu Code

### Aprenda programação na prática, uma linha de código por vez.

[![MIT License](https://img.shields.io/badge/License-MIT-orange.svg?style=for-the-badge)](LICENSE)
[![React 19](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

Uma plataforma gratuita e interativa para aprender os fundamentos da programação por meio de teoria objetiva, exemplos práticos e exercícios.

</div>

---

# ✨ Destaques

- 📚 **13 módulos** cobrindo desde algoritmos até funções.
- 💻 **39 exercícios interativos** (3 por módulo):
  - Fácil
  - Intermediário
  - Desafio
- 🌐 **8 linguagens de programação**:
  - Python
  - JavaScript
  - Java
  - C#
  - C++
  - C
  - PHP
  - Go
- 🔄 Todo o conteúdo é automaticamente adaptado para a linguagem escolhida.
- ⚡ Feedback imediato para acelerar o aprendizado.
- 🏆 Sistema de **XP**, **níveis** e **Conquista Prometeu Code** (certificado em imagem para download ou compartilhamento).
- 🌙 Tema claro/escuro com persistência em `localStorage`.
- 🚀 Sem backend, banco de dados ou login.

---

# 📝 Sobre o projeto

O **Prometeu Code** foi criado para tornar o aprendizado de programação mais simples, prático e acessível.

Ao invés de depender de longas videoaulas, a plataforma combina:

- explicações objetivas;
- exemplos de código;
- resumos;
- exercícios interativos;
- feedback imediato.

Todo o conteúdo foi pensado para que o estudante pratique continuamente enquanto aprende.

O projeto faz parte do ecossistema **Prometeu**, cuja missão é democratizar o acesso ao conhecimento por meio de ferramentas gratuitas e de qualidade.

---

# 🎯 Como funciona

O estudante escolhe sua linguagem de programação apenas uma vez.

A partir desse momento, toda a plataforma é adaptada automaticamente:

- exemplos;
- exercícios;
- desafios;
- trechos de código.

Assim, é possível aprender exatamente os mesmos conceitos em qualquer uma das oito linguagens disponíveis.

---

# 🛠️ Tecnologias

O projeto foi desenvolvido utilizando tecnologias modernas para oferecer uma experiência rápida, leve e responsiva.

- React 19
- TypeScript
- TanStack Start
- TanStack Router
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide React

---

# 📂 Estrutura do projeto

```text
src/
├── routes/
│   ├── __root.tsx          # Shell da aplicação, meta tags e tratamento de erros
│   └── index.tsx           # Página principal do curso
│
├── components/
│   ├── course/             # Componentes específicos do curso
│   └── ui/                 # Componentes reutilizáveis (shadcn/ui)
│
└── lib/
    ├── course-data.ts      # Conteúdo completo do curso
    └── course-context.tsx  # Estado global, XP, tema e progresso
```

### Organização

### `course-data.ts`

É a **fonte única de verdade** do projeto.

Contém:

- os 13 módulos;
- os 39 exercícios;
- todo o conteúdo adaptado para as 8 linguagens.

---

### `course-context.tsx`

Responsável por gerenciar:

- linguagem selecionada;
- progresso do usuário;
- XP;
- níveis;
- tema claro/escuro.

O tema é persistido utilizando `localStorage`.

---

### `code-block.tsx`

Componente de destaque de código que oferece:

- realce de sintaxe leve;
- suporte a múltiplas linguagens;
- nenhuma dependência externa.

---

# 🚀 Executando o projeto

Clone o repositório:

```bash
git clone https://github.com/Nicolinux-dev/Prometeu-Code.git
```

Entre na pasta:

```bash
cd Prometeu-Code
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm run dev
```

---

# 🤝 Contribuindo

Contribuições são sempre bem-vindas!

Se você encontrou um problema ou possui uma ideia para melhorar o projeto:

1. Faça um **Fork** do repositório.
2. Crie uma nova branch.

```bash
git checkout -b minha-feature
```

3. Faça suas alterações.
4. Realize os commits.

```bash
git commit -m "feat: adiciona nova funcionalidade"
```

5. Envie para seu fork.

```bash
git push origin minha-feature
```

6. Abra um **Pull Request**.

---

# 📄 Licença

Este projeto está licenciado sob a **MIT License**.

Consulte o arquivo **LICENSE** para mais informações.
