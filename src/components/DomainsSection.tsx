import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { domaines } from "@/pages/domaines";

const DomainesSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (slug: string) => {
    navigate(`/domaines/${slug}`);
  };

  return (
    <section id="domaines" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Nos Domaines d'Activités
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Al-Fal Innovation est une entreprise innovante basée à Thiès, spécialisée dans plusieurs domaines stratégiques : Export-Import, Agriculture et Traitement d’eau. À travers ses filiales Wanter Gui Services et Eau Bouchra, l’entreprise propose des solutions complètes et adaptées aux besoins de ses clients et partenaires.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domaines.map((domaine, index) => (
            <button
              key={domaine.slug}
              onClick={() => handleCardClick(domaine.slug)}
              className="bg-card rounded-2xl shadow-soft card-hover cursor-pointer flex flex-col animate-fade-up text-left overflow-hidden group"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              aria-label={`En savoir plus sur ${domaine.title}`}
            >
              <div className="h-48 overflow-hidden">
                <img src={domaine.image} alt={`Image de couverture pour ${domaine.title}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground">
                    {domaine.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-3">
                    {domaine.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {domaine.description}
                  </p>
                </div>
                <div className="mt-6">
                  <span className="font-semibold text-primary inline-flex items-center gap-2">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainesSection;
