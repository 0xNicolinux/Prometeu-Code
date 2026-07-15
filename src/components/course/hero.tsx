import { ArrowRight, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-card/60 px-3 py-1 text-xs font-medium text-brand backdrop-blur">
            <span className="grid h-1.5 w-1.5 place-items-center rounded-full bg-brand" />
            Aprenda com prática, sem vídeos
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Aprenda <span className="text-gradient-brand">Lógica de Programação</span> na Prática
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Estude os fundamentos da programação através de explicações simples e exercícios
            interativos em diversas linguagens.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#linguagem"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-brand transition hover:opacity-95"
            >
              Começar Agora <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#conteudo"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand"
            >
              <BookOpen className="h-4 w-4" /> Ver Conteúdo
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
            <div>
              <dt className="text-muted-foreground">Módulos</dt>
              <dd className="mt-1 text-2xl font-bold text-gradient-brand">13</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Exercícios</dt>
              <dd className="mt-1 text-2xl font-bold text-gradient-brand">39</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Linguagens</dt>
              <dd className="mt-1 text-2xl font-bold text-gradient-brand">8</dd>
            </div>
          </dl>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-20 blur-3xl" />
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-code-bg p-4 shadow-brand">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
        <span className="h-3 w-3 rounded-full bg-green-400/70" />
        <span className="ml-3 text-xs text-slate-400">algoritmo.py</span>
      </div>
      <pre className="overflow-hidden font-mono text-sm leading-relaxed text-code-fg">
        <code>
          <span className="text-slate-500"># Primeiro algoritmo</span>
          {"\n"}
          <span className="text-fuchsia-300">def</span>{" "}
          <span className="text-sky-300">saudacao</span>(
          <span className="text-amber-300">nome</span>):{"\n"}
          {"    "}
          <span className="text-fuchsia-300">if</span> <span className="text-amber-300">nome</span>:
          {"\n"}
          {"        "}
          <span className="text-fuchsia-300">return</span>{" "}
          <span className="text-emerald-300">"Olá, "</span> +{" "}
          <span className="text-amber-300">nome</span>
          {"\n"}
          {"    "}
          <span className="text-fuchsia-300">return</span>{" "}
          <span className="text-emerald-300">"Olá, mundo!"</span>
          {"\n"}
          {"\n"}
          <span className="text-fuchsia-300">for</span> <span className="text-amber-300">n</span>{" "}
          <span className="text-fuchsia-300">in</span> [
          <span className="text-emerald-300">"Ana"</span>,{" "}
          <span className="text-emerald-300">"Bob"</span>]:{"\n"}
          {"    "}
          <span className="text-sky-300">print</span>(<span className="text-sky-300">saudacao</span>
          (<span className="text-amber-300">n</span>)){"\n"}
        </code>
      </pre>
      <div className="mt-3 rounded-lg border border-white/5 bg-black/30 p-3 font-mono text-xs text-emerald-300">
        &gt; Olá, Ana{"\n"}&gt; Olá, Bob
      </div>

      {/* Floating badge */}
      <div className="absolute -right-4 -top-4 hidden rotate-6 rounded-2xl border border-brand/40 bg-card p-3 text-xs shadow-brand sm:block">
        <div className="font-semibold text-brand">+10 XP</div>
        <div className="text-muted-foreground">Exercício resolvido</div>
      </div>
      <div className="absolute -bottom-4 -left-4 hidden -rotate-3 rounded-2xl border border-brand/40 bg-card p-3 text-xs shadow-brand sm:block">
        <div className="font-semibold text-brand">Fluxograma</div>
        <div className="text-muted-foreground">Início → Passo → Fim</div>
      </div>
    </div>
  );
}
