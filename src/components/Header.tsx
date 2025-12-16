import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#domaines", label: "Nos Domaines" },
    { href: "#processus", label: "Processus" },
    { href: "#temoignages", label: "Témoignages" },
    { href: "#faq", label: "FAQ" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4 md:px-8">
        <a
          href="#accueil"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#accueil");
          }}
          className="flex items-center gap-2"
        >
          <span className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? "text-primary" : "text-primary-foreground"
          }`}>
            Alfa<span className="text-primary">l</span>innovation
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                isScrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className={isScrolled ? "" : "bg-primary-foreground text-primary hover:bg-primary-foreground/90"}
          >
            Nous contacter
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-card animate-fade-in">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-foreground font-medium py-3 px-4 rounded-lg hover:bg-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="lg"
              className="mt-2"
              onClick={() => scrollToSection("#contact")}
            >
              Nous contacter
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
