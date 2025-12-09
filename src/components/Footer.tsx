import logo from "@/assets/logo.png";

const footerLinks = {
  Produto: ["162 Assistentes", "Categorias", "Compliance CFM", "Como Funciona"],
  Suporte: ["FAQ", "Contato", "Termos de Uso"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Logo */}
          <div className="sm:col-span-2 md:col-span-1 mb-4 md:mb-0">
            <a href="/" className="flex items-center gap-2">
              <img src={logo} alt="MedMarketing" className="w-8 h-8 md:w-10 md:h-10" />
              <span className="font-semibold text-base md:text-lg text-foreground">MedMarketing</span>
            </a>
            <p className="mt-3 md:mt-4 text-xs md:text-sm text-muted-foreground max-w-xs">
              Hub de assistentes IA para marketing médico em conformidade com o CFM.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">{category}</h4>
              <ul className="space-y-2 md:space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2024 MedMarketing. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
