import { BookOpen, Zap, Code2 } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Aprenda",
    text: "Leia uma explicação simples e objetiva do conceito.",
  },
  {
    icon: Zap,
    title: "Entenda",
    text: "Veja um resumo com os pontos principais para fixar.",
  },
  {
    icon: Code2,
    title: "Pratique",
    text: "Resolva um exercício para ganhar XP.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-border py-20">
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
            <div key={s.title}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-brand/40">
                
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-brand">
                  <s.icon className="h-6 w-6" />
                </div>

                <div className="mb-1 text-xs font-semibold text-brand">
                  Etapa {i + 1}
                </div>

                <h3 className="text-xl font-bold">
                  {s.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {s.text}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}