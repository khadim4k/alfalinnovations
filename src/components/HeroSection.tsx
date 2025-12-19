import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg-new.jpg";
import logo from "@/assets/favicon.jpeg";

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
              Votre partenaire de confiance 
            </span>
          </div>

          {/* Main Title */}
          <div
            className="flex justify-center mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <img
              src={logo}
              alt="Alfalinnovation Logo"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 shadow-lg"
            />
          </div>

          {/* Subtitle */}
          <p
            className="text-2xl md:text-3xl lg:text-4xl font-light text-primary-foreground/90 mb-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Innovation et Excellence
          </p>          
          <div 
            className="text-xl md:text-2xl text-primary-foreground/80 mb-10 animate-fade-up"
            style={{ animationDelay: "0.4s" }}>
            Solutions en Export-Import, Agriculture et Traitement d'eau.
            <p></p>
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

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
