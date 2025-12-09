import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Finalmente consigo criar conteúdo para o Instagram sem medo de infringir as regras do CFM. Os prompts são muito bem pensados.",
    author: "Dr. Carlos Mendes",
    role: "Dermatologista",
    result: "5x mais posts",
    avatar: "CM",
  },
  {
    quote: "Eu não sabia como usar IA para marketing. Agora é só escolher o assistente e pronto, tudo funcionando.",
    author: "Dra. Ana Paula",
    role: "Cardiologista",
    result: "Economia de tempo",
    avatar: "AP",
  },
  {
    quote: "O sistema de filtros é excelente. Encontro exatamente o que preciso em segundos. Vale muito o investimento.",
    author: "Dr. Roberto Lima",
    role: "Ortopedista",
    result: "162 assistentes",
    avatar: "RL",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-24 lg:py-28 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            O que dizem os <span className="gradient-text">médicos</span>
          </h2>
          <p className="mt-3 md:mt-4 text-muted-foreground text-sm md:text-lg">
            Veja como outros profissionais estão usando o MedMarketing.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-5 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Result Badge */}
              <div className="absolute -top-2.5 md:-top-3 right-3 md:right-4 px-2.5 md:px-3 py-0.5 md:py-1 bg-primary text-primary-foreground text-[10px] md:text-xs font-bold rounded-full">
                {testimonial.result}
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-sm md:text-base leading-relaxed mb-4 md:mb-6 flex-1">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-2.5 md:gap-3 pt-3 md:pt-4 border-t border-border">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-xs md:text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="text-foreground font-medium text-xs md:text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-muted-foreground text-[10px] md:text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
