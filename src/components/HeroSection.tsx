import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Play, Star, Bot } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

const FloatingParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary animate-float-particle"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Floating Particles - Hidden on mobile for performance */}
      <div className="hidden md:block">
        <FloatingParticles />
      </div>

      {/* Parallax Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] bg-primary/10 rounded-full blur-3xl"
          style={{ transform: `translate(-50%, calc(-50% + ${scrollY * 0.3}px))` }}
        />
        <div 
          className="absolute top-1/4 left-1/4 w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px] bg-primary/5 rounded-full blur-2xl"
          style={{ transform: `translate(0, ${scrollY * 0.15}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[150px] md:w-[200px] lg:w-[300px] h-[150px] md:h-[200px] lg:h-[300px] bg-accent/10 rounded-full blur-2xl"
          style={{ transform: `translate(0, ${scrollY * -0.2}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 md:mb-8 opacity-0 animate-fade-in">
            <Bot className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm text-foreground font-medium">
              162 Assistentes IA para Marketing Médico
            </span>
          </div>

          {/* Main Heading - Benefit Focused */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-tight opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Marketing médico </span>
            <span className="gradient-text">pronto para usar</span>
          </h1>

          {/* Value Proposition */}
          <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Hub curador com <span className="text-foreground font-medium">162 assistentes IA customizados</span> para criar conteúdo médico em conformidade com o CFM. Escolha, clique e use.
          </p>

          {/* Quick Benefits */}
          <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs md:text-sm opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {["Prompts prontos", "Compliance CFM", "Acesso vitalício"].map((benefit) => (
              <div key={benefit} className="flex items-center gap-1.5 md:gap-2 text-muted-foreground">
                <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4 sm:px-0 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm md:text-base px-6 md:px-8 py-5 md:py-6 h-auto">
              Quero acessar agora
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto group text-sm md:text-base px-6 md:px-8 py-5 md:py-6 h-auto">
              <Play className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2" />
              Ver como funciona
            </Button>
          </div>

          {/* Risk Reversal */}
          <div className="mt-5 md:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs md:text-sm text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-foreground font-medium">Pagamento único</span>
            </span>
            <span className="hidden sm:block">•</span>
            <span>Garantia de 30 dias</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
