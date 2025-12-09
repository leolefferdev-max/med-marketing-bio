import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

// Set offer end date to 3 days from now
const getOfferEndDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  date.setHours(23, 59, 59, 999);
  return date;
};

const offerEndDate = getOfferEndDate();

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-24 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
            <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm text-foreground">
              <span className="font-semibold">Oferta limitada:</span> R$297 por acesso vitalício
            </span>
          </div>

          {/* Countdown */}
          <div className="flex justify-center mb-6 md:mb-8">
            <CountdownTimer targetDate={offerEndDate} />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 px-2">
            Pronto para transformar seu{" "}
            <span className="gradient-text">marketing médico?</span>
          </h2>

          <p className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto px-4">
            162 assistentes IA prontos para usar. Escolha, clique e crie conteúdo em conformidade com o CFM.
          </p>

          {/* Quick Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-8 md:mb-10 text-xs md:text-sm">
            {["162 assistentes", "Acesso vitalício", "Garantia 30 dias"].map((benefit) => (
              <div key={benefit} className="flex items-center gap-1.5 md:gap-2 text-muted-foreground">
                <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button variant="hero" size="lg" className="text-sm md:text-base lg:text-lg px-8 md:px-10 py-5 md:py-7 h-auto">
            Quero acessar agora
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
          </Button>

          <p className="mt-5 md:mt-6 text-xs md:text-sm text-muted-foreground">
            Pagamento único de R$297 • Acesso vitalício
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
