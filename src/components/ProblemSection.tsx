import { X, Check } from "lucide-react";

const problems = [
  "Horas pensando em prompts para criar conteúdo",
  "Medo de violar as regras do CFM",
  "Resultados genéricos que não funcionam para saúde",
  "Sem saber como usar IA para marketing médico",
];

const solutions = [
  "162 prompts prontos e organizados por categoria",
  "Todos os assistentes em conformidade com CFM",
  "Criados especificamente para marketing médico",
  "Acesse o hub, escolha e use em segundos",
];

const ProblemSection = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
            Você quer usar IA mas{" "}
            <span className="gradient-text">não sabe como</span>
          </h2>
          <p className="mt-3 md:mt-4 text-muted-foreground text-sm md:text-lg px-4">
            A maioria dos médicos quer usar IA para marketing mas não aproveita 10% do potencial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {/* Problems */}
          <div className="p-5 md:p-6 rounded-xl md:rounded-2xl bg-destructive/5 border border-destructive/20">
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-4 md:mb-6 flex items-center gap-2">
              <X className="w-4 h-4 md:w-5 md:h-5 text-destructive" />
              Sem o MedMarketing
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-2.5 md:gap-3">
                  <X className="w-3.5 h-3.5 md:w-4 md:h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm md:text-base">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="p-5 md:p-6 rounded-xl md:rounded-2xl bg-primary/5 border border-primary/20">
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-4 md:mb-6 flex items-center gap-2">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              Com MedMarketing Plug and Play
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-2.5 md:gap-3">
                  <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm md:text-base">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
