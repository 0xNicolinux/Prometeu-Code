import { useCourse } from "@/lib/course-context";
import { LANGUAGES } from "@/lib/course-data";
import { cn } from "@/lib/utils";

export function LanguageSelector() {
  const { language, setLanguage } = useCourse();
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Escolha a linguagem">
      {LANGUAGES.map((l) => {
        const active = l.id === language;
        return (
          <button
            key={l.id}
            role="tab"
            aria-selected={active}
            onClick={() => setLanguage(l.id)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
              active
                ? "bg-gradient-brand text-brand-foreground border-transparent shadow-brand"
                : "border-border bg-card text-foreground hover:border-brand/50 hover:text-brand",
            )}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
