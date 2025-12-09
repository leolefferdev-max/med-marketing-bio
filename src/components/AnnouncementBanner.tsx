import { ArrowRight, Sparkles } from "lucide-react";

const AnnouncementBanner = () => {
  return (
    <div className="mt-16 md:mt-20 px-4">
      <a
        href="#"
        className="group mx-auto block max-w-2xl rounded-full bg-primary/10 border border-primary/20 px-4 py-2.5 md:px-6 md:py-3 transition-all duration-300 hover:bg-primary/20"
      >
        <div className="flex items-center justify-center gap-2 md:gap-3 text-xs md:text-sm">
          <span className="flex items-center gap-1 text-primary font-semibold shrink-0">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            NOVO
          </span>
          <span className="text-foreground text-center">
            162 Assistentes IA para marketing médico
          </span>
          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-primary group-hover:translate-x-1 transition-transform shrink-0" />
        </div>
      </a>
    </div>
  );
};

export default AnnouncementBanner;
