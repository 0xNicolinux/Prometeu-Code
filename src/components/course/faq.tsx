import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "Quanto tempo leva?",
    a: "Você pode concluir os fundamentos em algumas horas ou espalhar em vários dias. Cada módulo é pensado para ser curto e direto.",
  },
  {
    q: "Preciso saber matemática?",
    a: "Não. Matemática básica ajuda em operadores, mas lógica de programação é mais sobre pensar em passos do que sobre cálculos avançados.",
  },
  {
    q: "Posso escolher qualquer linguagem?",
    a: "Sim. Todo o conteúdo teórico é o mesmo — o botão de linguagem só troca os exemplos e a sintaxe dos exercícios.",
  },
  {
    q: "Qual a diferença entre lógica e programação?",
    a: "Lógica é a forma de pensar para resolver problemas em passos. Programação é traduzir essa lógica em código de uma linguagem específica.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand">
            Perguntas frequentes
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">FAQ</h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="rounded-2xl border border-border bg-card px-4 shadow-card"
        >
          {items.map((it, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
