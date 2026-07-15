import { useCourse } from "@/lib/course-context";
import { Moon, Sun, Zap, Brain, Trophy } from "lucide-react";

export function ProgressHeader() {
  const {
    progress,
    xp,
    level,
    xpIntoLevel,
    xpToNextLevel,
    answered,
    correct,
    modulesCompleted,
    totalModules,
    dark,
    toggleDark,
  } = useCourse();
  const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
  const pct = Math.round(progress * 100);
  const levelPct = Math.round((xpIntoLevel / (xpIntoLevel + xpToNextLevel)) * 100);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-brand-foreground shadow-brand">
            <Brain className="h-4 w-4" />
          </div>
          <span className="hidden text-sm font-semibold sm:inline">Prometeu Code</span>
        </a>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center justify-between text-xs">
            <span className="font-medium text-muted-foreground">
              Progresso — {modulesCompleted}/{totalModules} módulos ({answered} exercícios)
            </span>
            <span className="font-semibold text-brand">{pct}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-brand transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <Badge
            icon={<Trophy className="h-3.5 w-3.5" />}
            label={`Nv ${level}`}
            title={`${xpIntoLevel}/${xpIntoLevel + xpToNextLevel} XP para o próximo nível`}
          />
          <Badge icon={<Zap className="h-3.5 w-3.5" />} label={`${xp} XP`} />
          <Badge label={`${accuracy}%`} title="Acurácia" />
        </div>

        <button
          onClick={toggleDark}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-card text-foreground transition hover:border-brand hover:text-brand"
          aria-label="Alternar modo escuro"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>

      {/* level bar (thin) */}
      <div className="mx-auto max-w-6xl px-4 pb-2 md:hidden">
        <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-brand transition-all"
            style={{ width: `${levelPct}%` }}
          />
        </div>
      </div>
    </header>
  );
}

function Badge({ icon, label, title }: { icon?: React.ReactNode; label: string; title?: string }) {
  return (
    <span
      title={title}
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-foreground"
    >
      {icon && <span className="text-brand">{icon}</span>}
      {label}
    </span>
  );
}
