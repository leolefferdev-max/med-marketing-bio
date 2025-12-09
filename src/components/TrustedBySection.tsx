const specialties = [
  "Dermatologia",
  "Cardiologia", 
  "Ortopedia",
  "Oftalmologia",
  "Psiquiatria",
  "Ginecologia",
];

const TrustedBySection = () => {
  return (
    <section className="py-16 md:py-16 border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs md:text-sm text-muted-foreground mb-6 md:mb-8">
          Assistentes para todas as especialidades médicas
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {specialties.map((specialty) => (
            <div
              key={specialty}
              className="text-muted-foreground/50 hover:text-muted-foreground transition-colors font-semibold text-sm sm:text-base md:text-lg tracking-wide"
            >
              {specialty}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
