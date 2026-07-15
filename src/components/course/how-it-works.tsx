import { BookOpen, Brain, Code2, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    emoji: "📖",
    title: "Aprenda",
    text: "Leia uma explicação simples e objetiva do conceito.",
  },
  {
    icon: Brain,
    emoji: "🧠",
    title: "Entenda",
    text: "Veja um resumo com os pontos principais para fixar.",
  },
  {
    icon: Code2,
    emoji: "💻",
    title: "Pratique",
    text: "Resolva um exercício imediato e ganhe XP.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-border bg-gradient-soft py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand">
            Como funciona
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Um ciclo simples que fixa o conteúdo
          </h2>
          <p className="mt-3 text-muted-foreground">
            Explicação, resumo, exercício e feedback imediato — tudo no mesmo lugar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-brand/40">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-2xl shadow-brand">
                  <span>{s.emoji}</span>
                </div>
                <div className="mb-1 text-xs font-semibold text-brand">Etapa {i + 1}</div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowDown className="mx-auto mt-2 h-6 w-6 text-brand md:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
