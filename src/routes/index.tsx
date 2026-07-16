import { createFileRoute } from "@tanstack/react-router";
import { CourseProvider } from "@/lib/course-context";
import { MODULES } from "@/lib/course-data";
import { Hero } from "@/components/course/hero";
import { HowItWorks } from "@/components/course/how-it-works";
import { LanguageSelector } from "@/components/course/language-selector";
import { ModuleSection } from "@/components/course/module-section";
import { ProgressHeader } from "@/components/course/progress-header";
import { Certificate } from "@/components/course/certificate";
import { Faq } from "@/components/course/faq";
import { Footer } from "@/components/course/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prometeu Code — Aprenda Lógica de Programação na Prática" },
      {
        name: "description",
        content:
          "Plataforma interativa para aprender lógica e fundamentos de programação com explicações simples e exercícios em Python, JavaScript, Java, C#, C++, C, PHP e Go.",
      },
      {
        property: "og:title",
        content: "Prometeu Code — Lógica de Programação na Prática",
      },
      {
        property: "og:description",
        content:
          "Estude fundamentos com explicações, resumos e exercícios interativos em várias linguagens.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const scrollToNext = (currentIndex: number) => {
    const next = MODULES[currentIndex + 1];
    if (!next) {
      document.getElementById("conquista")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    document.getElementById(next.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <CourseProvider>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <div className="min-h-screen bg-background text-foreground">
        <ProgressHeader />
        <main id="conteudo-principal" tabIndex={-1}>
          <Hero />
          <HowItWorks />

          <section id="linguagem" className="py-16">
            <div className="mx-auto max-w-6xl px-4">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand">
                  Escolha sua linguagem
                </div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Aprenda os mesmos conceitos, na sintaxe que você prefere
                </h2>
                <p className="mt-2 max-w-2xl text-muted-foreground">
                  Todos os exemplos e exercícios se adaptam automaticamente à linguagem escolhida. O
                  conteúdo teórico permanece o mesmo.
                </p>
                <div className="mt-6">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </section>

          <section id="conteudo" className="py-8">
            <div className="mx-auto max-w-6xl px-4">
              {MODULES.map((m, i) => (
                <ModuleSection
                  key={m.id}
                  module={m}
                  index={i}
                  total={MODULES.length}
                  onNext={() => scrollToNext(i)}
                />
              ))}
            </div>
          </section>

          <div id="conquista" className="mx-auto max-w-6xl px-4">
            <Certificate />
          </div>

          <Faq />
        </main>
        <Footer />
      </div>
    </CourseProvider>
  );
}
