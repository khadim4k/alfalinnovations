import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Alfa<span className="text-primary">l</span>innovation
            </h3>
            <p className="text-primary-foreground/70 mb-6 max-w-md leading-relaxed">
              Votre partenaire de confiance pour l'export-import, l'agriculture
              et le traitement d'eau. Innovation et excellence au service de
              votre réussite.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "Nos Domaines", href: "#domaines" },
                { label: "Processus", href: "#processus" },
                { label: "Témoignages", href: "#temoignages" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>123 Avenue de l'Innovation</li>
              <li>75001 Paris, France</li>
              <li>
                <a
                  href="tel:+33123456789"
                  className="hover:text-primary transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@alfalinnovation.com"
                  className="hover:text-primary transition-colors"
                >
                  contact@alfalinnovation.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Alfalinnovation. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary transition-colors"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary transition-colors"
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
