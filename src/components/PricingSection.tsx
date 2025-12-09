import { Button } from "@/components/ui/button";
import { Check, Sparkles, Clock, ArrowRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

// Set offer end date to 3 days from now
const getOfferEndDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  date.setHours(23, 59, 59, 999);
  return date;
};

const offerEndDate = getOfferEndDate();

const baseFeatures = [
  "Acesso a 162 assistentes IA",
  "Dashboard organizado por categorias",
  "Sistema de busca e filtros",
  "Sistema de favoritos",
  "Todos os assistentes em compliance CFM",
];

const plans = [
  {
    name: "Plano Anual",
    badge: "MAIS POPULAR",
    price: "R$497",
    period: "/ano",
    description: "Pagamento anual • Renova automaticamente",
    features: [...baseFeatures, "Atualizações por 1 ano", "Suporte por 1 ano"],
    highlight: false,
  },
  {
    name: "Acesso Vitalício",
    badge: "MELHOR VALOR",
    price: "R$1.497",
    period: "",
    description: "Pagamento único • Acesso para sempre",
    features: [...baseFeatures, "Acesso vitalício", "Atualizações futuras inclusas", "Suporte prioritário"],
    highlight: true,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 md:mb-4">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm text-primary font-medium">Oferta de lançamento</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Escolha seu <span className="gradient-text">plano</span>
          </h2>
          <p className="mt-3 md:mt-4 text-muted-foreground text-sm md:text-lg">
            Invista no seu marketing médico com IA
          </p>
        </div>

        {/* Countdown Banner */}
        <div className="max-w-2xl mx-auto mb-8 md:mb-12 p-3 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
          <div className="flex flex-col items-center justify-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 text-foreground">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span className="font-semibold text-sm md:text-base">Preço promocional termina em:</span>
            </div>
            <CountdownTimer targetDate={offerEndDate} />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 md:p-8 rounded-xl md:rounded-2xl ${
                plan.highlight
                  ? "bg-primary/5 border-2 border-primary/50 shadow-xl shadow-primary/10"
                  : "bg-card border border-border"
              }`}
            >
              <div
                className={`absolute -top-2.5 md:-top-3 left-1/2 -translate-x-1/2 px-3 md:px-4 py-0.5 md:py-1 text-[10px] md:text-xs font-bold rounded-full whitespace-nowrap ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {plan.badge}
              </div>

              {/* Plan Info */}
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-base md:text-lg text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-xs md:text-sm mt-2">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 md:gap-3 text-xs md:text-sm">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.highlight ? "hero" : "outline"}
                className="w-full text-sm md:text-base py-5 md:py-6 h-auto"
              >
                Quero acessar agora
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <p className="text-center text-xs md:text-sm text-muted-foreground mt-6 md:mt-8">
          ✓ Garantia de 30 dias &nbsp; ✓ Suporte incluso &nbsp; ✓ Pagamento seguro
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
