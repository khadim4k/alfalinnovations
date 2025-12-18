import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Use a timeout to allow the page to render before scrolling
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  const navLinks = [
    { href: "/", label: "Accueil" }, // Reste sur la page d'accueil
    { href: "/#domaines", label: "Services" },
    { href: "/#processus", label: "Processus" },
    { href: "/portfolio", label: "Portfolio" }, // Redirige vers la page Portfolio
    { href: "/#temoignages", label: "Témoignages" },
    { href: "/#contact", label: "Contact" },
    { href: "/#faq", label: "FAQ" },
    ,
  ];

  const scrollToSection = (href: string) => {
    const [path, hash] = href.split('#');
    if (path && location.pathname !== path) {
      navigate(path + (hash ? '#' + hash : ''));
    } else {
      const element = document.querySelector(hash ? '#' + hash : 'body');
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const isHomePage = location.pathname === '/';

  return (
      <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-black/50 backdrop-blur-md shadow-sm py-2 border-b border-white/10"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4 md:px-8">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("/");
          }}
          className="flex items-center gap-2"
        > 
          <span className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled || !isHomePage ? "text-white" : "text-white"
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
                isScrolled || !isHomePage ? "text-white/80" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
