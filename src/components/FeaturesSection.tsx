import { Search, Heart, Filter, Star, ExternalLink, Shield } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Busca inteligente",
    description: "Encontre o assistente ideal em segundos com nosso sistema de busca.",
    benefit: "Rápido",
  },
  {
    icon: Filter,
    title: "Filtros por categoria",
    description: "Posts, e-books, vídeos, stories, carrosséis e muito mais.",
    benefit: "Organizado",
  },
  {
    icon: Shield,
    title: "Compliance CFM",
    description: "Todos os prompts respeitam as diretrizes do Conselho Federal de Medicina.",
    benefit: "Seguro",
  },
  {
    icon: Star,
    title: "Sistema de favoritos",
    description: "Salve seus assistentes preferidos para acesso rápido.",
    benefit: "Prático",
  },
  {
    icon: ExternalLink,
    title: "Acesso direto",
    description: "Um clique e você já está usando o assistente. Simples e rápido.",
    benefit: "Plug & Play",
  },
  {
    icon: Heart,
    title: "Feito para médicos",
    description: "Prompts criados especificamente para as necessidades do marketing médico.",
    benefit: "Especializado",
  },
];

const FeaturesSection = () => {
  return (
    <section id="assistentes" className="py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
            Tudo que você precisa,{" "}
            <span className="gradient-text">organizado para você</span>
          </h2>
          <p className="mt-3 md:mt-4 text-muted-foreground text-sm md:text-lg">
            Um hub completo de assistentes IA para transformar seu marketing médico.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-5 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Benefit Badge */}
              <div className="absolute top-3 right-3 md:top-4 md:right-4 px-2 py-0.5 md:py-1 bg-primary/10 text-primary text-[10px] md:text-xs font-medium rounded-full">
                {feature.benefit}
              </div>

              {/* Icon */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-1.5 md:mb-2 pr-16">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
