import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona na prática?",
    answer: "É muito simples: você acessa nosso Hub, escolhe o assistente que precisa entre os 162 disponíveis, clica no link e já pode usar. Plug and play mesmo.",
  },
  {
    question: "Os prompts respeitam as regras do CFM?",
    answer: "Sim! Todos os 162 assistentes foram criados considerando as diretrizes do Conselho Federal de Medicina. Você pode criar conteúdo para suas redes sociais com segurança.",
  },
  {
    question: "O acesso é realmente vitalício?",
    answer: "Sim! Você paga uma única vez de R$297 e tem acesso para sempre. Isso inclui todos os 162 assistentes atuais e também as atualizações futuras que adicionarmos.",
  },
  {
    question: "E se eu não gostar?",
    answer: "Você tem 30 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito, basta solicitar o reembolso e devolvemos 100% do seu dinheiro, sem perguntas.",
  },
  {
    question: "Quais tipos de conteúdo posso criar?",
    answer: "Temos assistentes para posts de Instagram, carrosséis, stories, e-books, scripts de vídeo, artigos para blog, respostas para pacientes, e muito mais. São 162 assistentes organizados por categoria.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
          <p className="mt-3 md:mt-4 text-muted-foreground text-sm md:text-lg">
            Tire suas dúvidas sobre o MedMarketing Plug and Play.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg md:rounded-xl px-4 md:px-6 bg-card data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-foreground text-left hover:no-underline py-4 md:py-5 text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 md:pb-5 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
