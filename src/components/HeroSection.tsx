import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/85 via-foreground/75 to-primary/40" />

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div
            className="inline-block mb-6 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-primary-foreground/90 text-sm font-medium">
              Votre partenaire de confiance depuis 2010
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Alfa<span className="text-primary">l</span>innovation
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-semibold opacity-90">
              Innovation et Excellence
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Export & Import | Agriculture | Traitement d'eau
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#contact")}
              className="group"
            >
              Nous contacter
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("#domaines")}
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#domaines")}
          className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
