import { Brain, Github, GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-soft py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          {/* Logo e descrição */}
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-brand-foreground shadow-brand">
                <Brain className="h-5 w-5" />
              </div>

              <span className="text-lg font-semibold">Prometeu Code</span>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              O <span className="font-medium text-foreground">Prometeu Code</span> é uma extensão do
              projeto principal <span className="font-medium text-foreground">Prometeu</span>,
              criada para tornar o aprendizado de programação mais acessível por meio de uma
              experiência prática, gratuita e intuitiva.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              Acreditamos que conhecimento deve ser compartilhado. Este projeto nasceu para ajudar
              estudantes, curiosos e futuros desenvolvedores a aprender programação sem barreiras,
              inspirando-se no mito de Prometeu, que entregou o fogo à humanidade. Nossa missão é
              compartilhar conhecimento sem esperar nada em troca.
            </p>
          </div>

          {/* Conheça mais */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
              Conheça mais
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="https://prometeu-nicolinux.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand"
                >
                  <GraduationCap className="h-4 w-4" />
                  Projeto Principal
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Nicolinux-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center text-sm text-muted-foreground md:flex-row">
          <span>
            © {new Date().getFullYear()} Prometeu Code. Desenvolvido com ❤️ para democratizar o
            ensino de programação.
          </span>

          <a
            href="https://github.com/Nicolinux-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-foreground transition-all duration-300 hover:border-brand hover:text-brand hover:shadow-md"
          >
            <Github className="h-4 w-4" />
            Nicolinux-dev
          </a>
        </div>
      </div>
    </footer>
  );
}
