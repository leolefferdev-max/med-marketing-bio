const metrics = [
  { value: "162", label: "Assistentes GPT" },
  { value: "100+", label: "Médicos usando" },
  { value: "CFM", label: "Em conformidade" },
  { value: "24/7", label: "Acesso ilimitado" },
];

const SocialProofBar = () => {
  return (
    <section className="py-10 md:py-8 border-y border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                {metric.value}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 md:mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
