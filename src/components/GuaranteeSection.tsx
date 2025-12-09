import { Shield, Clock, Undo2 } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 md:w-64 h-40 md:h-64 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-xl md:rounded-2xl bg-primary/20 flex items-center justify-center mb-4 md:mb-6">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Garantia de <span className="gradient-text">30 dias</span>
            </h2>

            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto mb-6 md:mb-8 px-2">
              Se você não ficar satisfeito com os assistentes, devolvemos 100% do seu dinheiro. 
              Sem perguntas, sem burocracia.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-xs md:text-sm">
              <div className="flex items-center gap-1.5 md:gap-2 text-foreground">
                <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                <span>Teste por 30 dias</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 text-foreground">
                <Undo2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                <span>Reembolso em até 48h</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 text-foreground">
                <Shield className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                <span>Compra segura</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
