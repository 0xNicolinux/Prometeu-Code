import { useMemo } from "react";
import type { Language } from "@/lib/course-data";

const KEYWORDS: Record<Language, string[]> = {
  python: [
    "def",
    "return",
    "if",
    "elif",
    "else",
    "for",
    "in",
    "while",
    "print",
    "input",
    "True",
    "False",
    "and",
    "or",
    "not",
    "range",
    "len",
    "import",
    "from",
    "class",
  ],
  javascript: [
    "function",
    "return",
    "if",
    "else",
    "for",
    "while",
    "let",
    "const",
    "var",
    "console",
    "true",
    "false",
    "new",
    "class",
    "import",
    "from",
    "export",
  ],
  java: [
    "public",
    "class",
    "static",
    "void",
    "int",
    "String",
    "boolean",
    "if",
    "else",
    "for",
    "while",
    "return",
    "new",
    "System",
    "true",
    "false",
    "Scanner",
  ],
  csharp: [
    "using",
    "namespace",
    "class",
    "public",
    "static",
    "void",
    "int",
    "string",
    "bool",
    "if",
    "else",
    "for",
    "while",
    "return",
    "Console",
    "true",
    "false",
    "new",
  ],
  cpp: [
    "#include",
    "int",
    "float",
    "double",
    "char",
    "bool",
    "if",
    "else",
    "for",
    "while",
    "return",
    "std",
    "cout",
    "cin",
    "endl",
    "true",
    "false",
    "using",
    "namespace",
  ],
  c: [
    "#include",
    "int",
    "float",
    "double",
    "char",
    "if",
    "else",
    "for",
    "while",
    "return",
    "printf",
    "scanf",
    "void",
  ],
  php: [
    "<?php",
    "function",
    "return",
    "if",
    "elseif",
    "else",
    "for",
    "while",
    "echo",
    "true",
    "false",
    "var_dump",
    "readline",
  ],
  go: [
    "package",
    "import",
    "func",
    "return",
    "if",
    "else",
    "for",
    "var",
    "fmt",
    "int",
    "string",
    "bool",
    "true",
    "false",
    ":=",
  ],
};

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function highlight(code: string, language: Language): string {
  const kws = KEYWORDS[language] ?? [];
  const escapedKws = kws.map((k) => k.replace(/[.*+?^${}()|[\]\\#]/g, "\\$&"));
  const kwRe = new RegExp(`^(?:${escapedKws.join("|")})$`);

  // Tokenize raw code first, then escape + wrap. This prevents later passes
  // from matching digits/characters inside already-emitted <span> markup.
  type Token = { type: "comment" | "string" | "number" | "keyword" | "text"; value: string };
  const tokens: Token[] = [];
  let i = 0;
  const n = code.length;

  while (i < n) {
    const ch = code[i];
    const next = code[i + 1];

    // Line comments: # only in languages where it's actually a comment marker
    // (python, php). For c/cpp/etc, a leading # starts a preprocessor
    // directive like #include, which must be tokenized as an identifier/
    // keyword below, not swallowed as a comment.
    const hashIsComment = language === "python" || language === "php";
    if ((ch === "#" && hashIsComment) || (ch === "/" && next === "/")) {
      let j = i;
      while (j < n && code[j] !== "\n") j++;
      tokens.push({ type: "comment", value: code.slice(i, j) });
      i = j;
      continue;
    }

    // Strings: "..." or '...'
    if (ch === '"' || ch === "'") {
      const quote = ch;
      let j = i + 1;
      while (j < n && code[j] !== quote && code[j] !== "\n") {
        if (code[j] === "\\" && j + 1 < n) j += 2;
        else j++;
      }
      if (j < n && code[j] === quote) j++;
      tokens.push({ type: "string", value: code.slice(i, j) });
      i = j;
      continue;
    }

    // Numbers
    if (ch >= "0" && ch <= "9") {
      let j = i;
      while (j < n && code[j] >= "0" && code[j] <= "9") j++;
      tokens.push({ type: "number", value: code.slice(i, j) });
      i = j;
      continue;
    }

    // Identifiers / keywords (allow leading # for preprocessor like #include).
    // Do not include "?" here: ternary operators like `cond ? a : b` are
    // punctuation, not identifiers, and must advance through the fallback path.
    if (/[A-Za-z_#<]/.test(ch)) {
      let j = i;
      // Special-case: <?php
      if (ch === "<" && code.slice(i, i + 5) === "<?php") {
        tokens.push({ type: "keyword", value: "<?php" });
        i += 5;
        continue;
      }
      if (ch === "<") {
        tokens.push({ type: "text", value: ch });
        i++;
        continue;
      }
      while (j < n && /[A-Za-z0-9_#]/.test(code[j])) j++;
      const word = code.slice(i, j);
      tokens.push({ type: kwRe.test(word) ? "keyword" : "text", value: word });
      i = j > i ? j : i + 1;
      continue;
    }

    tokens.push({ type: "text", value: ch });
    i++;
  }

  return tokens
    .map((t) => {
      const safe = escapeHtml(t.value);
      switch (t.type) {
        case "comment":
          return `<span class="text-slate-500 italic">${safe}</span>`;
        case "string":
          return `<span class="text-emerald-300">${safe}</span>`;
        case "number":
          return `<span class="text-amber-300">${safe}</span>`;
        case "keyword":
          return `<span class="text-fuchsia-300 font-medium">${safe}</span>`;
        default:
          return safe;
      }
    })
    .join("");
}

export function CodeBlock({ code, language }: { code: string; language: Language }) {
  const html = useMemo(() => highlight(code, language), [code, language]);
  return (
    <pre
      className="rounded-xl border border-white/5 bg-code-bg p-4 text-sm text-code-fg overflow-x-auto font-mono leading-relaxed shadow-inner"
      aria-label={`Exemplo em ${language}`}
    >
      <code dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  );
}
