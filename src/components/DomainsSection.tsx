import { Ship, Leaf, Droplets } from "lucide-react";
import exportImportImg from "@/assets/export-import.jpg";
import agricultureImg from "@/assets/agriculture.jpg";
import waterTreatmentImg from "@/assets/water-treatment.jpg";

const domains = [
  {
    icon: Ship,
    title: "Export & Import",
    description:
      "Solutions logistiques complètes pour le commerce international. Nous facilitons vos échanges commerciaux à travers le monde avec fiabilité et efficacité.",
    image: exportImportImg,
  },
  {
    icon: Leaf,
    title: "Agriculture",
    description:
      "Technologies agricoles modernes et durables. Nous accompagnons les agriculteurs dans l'optimisation de leurs rendements et la préservation des ressources.",
    image: agricultureImg,
  },
  {
    icon: Droplets,
    title: "Traitement d'eau",
    description:
      "Systèmes de purification et de traitement d'eau innovants. Des solutions sur mesure pour garantir une eau propre et saine pour tous vos besoins.",
    image: waterTreatmentImg,
  },
];

const DomainsSection = () => {
  return (
    <section id="domaines" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Nos Domaines d'Activité
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trois piliers d'expertise pour répondre aux défis d'aujourd'hui et de demain
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <article
              key={domain.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <domain.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {domain.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {domain.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
