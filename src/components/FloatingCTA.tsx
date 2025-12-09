import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 600px
      const shouldShow = window.scrollY > 600;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="bg-card/95 backdrop-blur-lg border-t border-border shadow-2xl shadow-black/20">
        <div className="container mx-auto px-3 md:px-4 py-2.5 md:py-3">
          <div className="flex items-center justify-between gap-3 md:gap-4">
            {/* Left - Message */}
            <div className="hidden sm:block">
              <p className="text-foreground font-medium text-sm md:text-base">
                162 Assistentes IA para Marketing Médico
              </p>
              <p className="text-muted-foreground text-xs md:text-sm">
                Pagamento único • Garantia de 30 dias
              </p>
            </div>

            {/* Mobile Message */}
            <p className="sm:hidden text-foreground font-medium text-xs">
              R$297 • Acesso vitalício
            </p>

            {/* Right - CTA + Close */}
            <div className="flex items-center gap-2 md:gap-3">
              <Button variant="hero" size="sm" className="whitespace-nowrap text-xs md:text-sm px-3 md:px-4">
                Quero acessar
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1" />
              </Button>
              <button
                onClick={() => setIsDismissed(true)}
                className="p-1.5 md:p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
