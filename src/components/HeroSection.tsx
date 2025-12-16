import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg-new.jpg";

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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-foreground/40" />

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-block mb-8 px-5 py-2.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-primary-foreground text-sm font-medium">
              Votre partenaire de confiance depuis 2010
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground mb-6 leading-[1.1] animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Alfa<span className="text-primary">l</span>innovation
          </h1>

          {/* Subtitle */}
          <p
            className="text-2xl md:text-3xl lg:text-4xl font-light text-primary-foreground/90 mb-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Innovation et Excellence
          </p>

          {/* Services */}
          <div
            className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-10 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {["Export & Import", "Agriculture", "Traitement d'eau"].map((service, index) => (
              <span
                key={service}
                className="text-primary-foreground/70 text-base md:text-lg flex items-center gap-3"
              >
                {index > 0 && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                {service}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.5s" }}
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
              Découvrir nos services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#domaines")}
          className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Défiler vers le bas"
        >
          <ChevronDown className="w-10 h-10" />
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
