import { Facebook, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { getWhatsAppLink, PHONE_NUMBER } from "./WhatsAppButton";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100078674362168", label: "Facebook" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@wanterguiservicesn?_r=1&_t=ZM-92Kp8Uf08q4", label: "TikTok" },
  ];

  const formatPhoneDisplay = (phone: string) => {
    return `+${phone.slice(0, 3)} ${phone.slice(3, 5)} ${phone.slice(5, 8)} ${phone.slice(8, 10)} ${phone.slice(10)}`;
  };

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
                  target="_blank"
                  rel="noopener noreferrer"
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
                { label: "Accueil", href: "/#accueil" },
                { label: "Export & Import", href: "/domaines/export-import" },
                { label: "Agriculture", href: "/domaines/agriculture" },
                { label: "Traitement d'eau", href: "/domaines/traitement-eau" },
                { label: "FAQ", href: "/#faq" },
                { label: "Contact", href: "/#contact" },
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
            <ul className="space-y-4 text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Thiès, Sénégal</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+221764410598" className="hover:text-primary transition-colors">
                    +221 76 441 05 98
                  </a>
                  <a href="tel:+221339119579" className="hover:text-primary transition-colors">
                    +221 33 911 95 79
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <a
                  href="mailto:alfalinnovationsn@outlook.com"
                  className="hover:text-primary transition-colors"
                >
                  alfalinnovationsn@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 pb-4">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Alfalinnovation. Tous droits réservés.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-x-6 gap-y-2 text-sm">
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
              <a
                href="https://khadim4k.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary transition-colors">
                Développé par Khadim Guèye
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
