import type { Module } from "@/lib/course-data";
import { useCourse } from "@/lib/course-context";
import { CodeBlock } from "./code-block";
import { ExerciseCard } from "./exercise-card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  module: Module;
  index: number;
  total: number;
  onNext?: () => void;
}

export function ModuleSection({ module, index, total, onNext }: Props) {
  const { language, isModuleComplete } = useCourse();
  const complete = isModuleComplete(module.id);

  return (
    <section id={module.id} className="scroll-mt-24 border-t border-border py-16 first:border-t-0">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
            <span>
              Módulo {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            {complete && (
              <span className="inline-flex items-center gap-1 rounded-full border border-success/40 bg-success/10 px-2 py-0.5 text-[10px] text-emerald-300">
                <Check className="h-3 w-3" /> Concluído
              </span>
            )}
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="mr-2">{module.emoji}</span>
            {module.title}
          </h2>
          <p className="mt-2 text-muted-foreground">{module.subtitle}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand">
            📖 Explicação
          </div>
          <p className="text-foreground leading-relaxed">{module.explanation}</p>
          <div className="grid gap-3 pt-2 text-sm">
            <Info label="Objetivo" text={module.purpose} />
            <Info label="Quando utilizar" text={module.whenToUse} />
            <Info label="Exemplo do dia a dia" text={module.everyday} />
            <Info label="Curiosidade" text={module.curiosity} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-brand/30 bg-gradient-soft p-6 shadow-card">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand">
              🧠 Em poucas palavras
            </div>
            <p className="text-lg font-medium text-foreground">{module.summary}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand">
                Exemplo
              </div>
              <span className="rounded-full bg-muted px-3 py-0.5 text-xs font-medium text-muted-foreground">
                {language}
              </span>
            </div>
            <CodeBlock code={module.example[language]} language={language} />
          </div>
        </div>
      </div>

      <div className={cn("mt-8 space-y-4")}>
        <div className="text-xs font-semibold uppercase tracking-wider text-brand">
          🎯 Pratique (3 exercícios)
        </div>
        {module.exercises.map((ex, i) => (
          <ExerciseCard
            key={`${module.id}#${i}`}
            moduleId={module.id}
            exerciseIndex={i}
            exercise={ex}
            isLastInModule={i === module.exercises.length - 1}
            onNext={
              i === module.exercises.length - 1
                ? onNext
                : () => {
                    const el = document.getElementById(`${module.id}-ex-${i + 1}`);
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
            }
          />
        ))}
      </div>
    </section>
  );
}

function Info({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <p className="text-foreground">{text}</p>
    </div>
  );
}
