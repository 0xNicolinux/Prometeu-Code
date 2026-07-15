<div align="center">

# 💻 PROMETEU CODE

### *Aprenda programação na prática, uma linha de código por vez.*

[![MIT License](https://img.shields.io/badge/License-MIT-orange.svg?style=for-the-badge)](LICENSE)
[![React 19](https://img.shields.io/badge/React-19-blue?style=for-the-badge\&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge\&logo=typescript)](https://www.typescriptlang.org/)

- **13 módulos** de conteúdo, do "O que é um algoritmo?" até desafios que combinam variáveis, condicionais, loops e funções.
- **39 exercícios práticos** (3 por módulo: fácil, intermediário e desafio), nos formatos múltipla escolha, verdadeiro/falso e "qual a saída deste código?".
- **8 linguagens de programação** — Python, JavaScript, Java, C#, C++, C, PHP e Go — com o mesmo conteúdo teórico e os mesmos exercícios adaptados para a sintaxe de cada uma. O usuário escolhe a linguagem uma vez e todo o material se adapta.
- **Progresso gamificado**: XP, níveis e uma "Conquista Prometeu Code" (certificado gerado como imagem, para baixar ou compartilhar) ao concluir todos os módulos.
- O tema claro/escuro é salvo localmente no navegador do usuário — não há backend, banco de dados ou login.

</div>

---

# 📝 Sobre o projeto

O **Prometeu Code** é uma plataforma gratuita e interativa criada para ensinar os fundamentos da programação de forma simples, prática e acessível. Em vez de longas videoaulas, o aprendizado acontece por meio de explicações objetivas, exemplos de código e exercícios que ajudam a fixar cada conceito.

O projeto faz parte do ecossistema **Prometeu**, compartilhando a mesma missão de democratizar o acesso ao conhecimento através de ferramentas gratuitas e de qualidade.

---

# 🔥 O que você encontra

* 📚 **13 módulos** cobrindo os principais fundamentos da programação.
* 💻 **39 exercícios interativos** distribuídos entre níveis fácil, intermediário e desafio.
* 🌐 **8 linguagens de programação**: Python, JavaScript, Java, C#, C++, C, PHP e Go.
* 🎯 **Aprendizado prático**, com teoria, resumo e exercícios no mesmo ambiente.
* ⚡ **Feedback imediato** para reforçar o aprendizado.
* 🏆 Sistema de XP e progressão para acompanhar sua evolução.

---

# 🛠️ Tecnologias

O Prometeu Code foi desenvolvido utilizando tecnologias modernas para oferecer uma experiência rápida e responsiva.

* **React 19**
* **TypeScript**
* **TanStack Start**
* **Vite**
* **Tailwind CSS**
* **shadcn/ui**
* **Lucide React**

---

# 🚀 Executando o projeto

Clone o repositório:

```bash
git clone https://github.com/Nicolinux-dev/Prometeu-Code.git
```

Entre na pasta do projeto:

```bash
cd Prometeu-Code
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
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
                          tema claro/escuro), com tema claro/escuro persistido em localStorage.
```

---

# 🤝 Contribuindo

Sugestões, correções e melhorias são sempre bem-vindas.

1. Faça um Fork do projeto.
2. Crie uma branch para sua alteração.
3. Faça seus commits.
4. Abra um Pull Request.

- `course-context.tsx` — padrão de contexto React com persistência em `localStorage` (para o tema) e
  gamificação (XP, nível) que pode ser adaptado para outras trilhas de ensino.
- `code-block.tsx` — realce de sintaxe leve, sem dependências externas, com suporte a
  múltiplas linguagens.

# 📄 Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo **LICENSE** para mais informações.
