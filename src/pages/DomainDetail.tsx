import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, CheckCircle, Ship, Leaf, Droplets, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import exportImportImg from "@/assets/export-import.jpg";
import agricultureImg from "@/assets/agriculture.jpg";
import waterTreatmentImg from "@/assets/water-treatment.jpg";

const domainData = {
  "export-import": {
    title: "Export & Import",
    subtitle: "Solutions logistiques internationales",
    icon: Ship,
    image: exportImportImg,
    description:
      "Alfalinnovation facilite vos échanges commerciaux à travers le monde. Notre expertise en logistique internationale vous garantit des solutions fiables, rapides et économiques pour l'import et l'export de vos marchandises.",
    services: [
      "Transport maritime et aérien de marchandises",
      "Dédouanement et formalités administratives",
      "Stockage et gestion d'entrepôts",
      "Conseil en commerce international",
      "Assurance transport et marchandises",
      "Suivi en temps réel des expéditions",
    ],
    benefits: [
      {
        title: "Réseau mondial",
        description: "Partenaires dans plus de 50 pays pour une couverture globale",
      },
      {
        title: "Délais optimisés",
        description: "Solutions express et standard adaptées à vos besoins",
      },
      {
        title: "Tarifs compétitifs",
        description: "Négociation des meilleurs tarifs grâce à nos volumes",
      },
      {
        title: "Conformité garantie",
        description: "Respect des réglementations douanières internationales",
      },
    ],
  },
  agriculture: {
    title: "Agriculture",
    subtitle: "Technologies agricoles durables",
    icon: Leaf,
    image: agricultureImg,
    description:
      "Nous accompagnons les agriculteurs et les entreprises agroalimentaires dans leur transition vers une agriculture moderne et durable. Nos solutions innovantes optimisent les rendements tout en préservant l'environnement.",
    services: [
      "Fourniture d'équipements agricoles modernes",
      "Systèmes d'irrigation intelligents",
      "Semences et intrants de qualité",
      "Conseil technique et agronomique",
      "Solutions de stockage et conservation",
      "Formation aux nouvelles technologies agricoles",
    ],
    benefits: [
      {
        title: "Rendements accrus",
        description: "Augmentation moyenne de 30% des productions",
      },
      {
        title: "Économie d'eau",
        description: "Systèmes d'irrigation réduisant la consommation de 40%",
      },
      {
        title: "Agriculture durable",
        description: "Pratiques respectueuses de l'environnement",
      },
      {
        title: "Support continu",
        description: "Accompagnement technique tout au long de l'année",
      },
    ],
  },
  "traitement-eau": {
    title: "Traitement d'eau",
    subtitle: "Solutions de purification innovantes",
    icon: Droplets,
    image: waterTreatmentImg,
    description:
      "L'accès à une eau propre est essentiel. Nous proposons des solutions complètes de traitement et de purification d'eau pour les particuliers, les entreprises et les collectivités, garantissant une eau saine et de qualité.",
    services: [
      "Stations de traitement d'eau potable",
      "Systèmes de filtration industrielle",
      "Traitement des eaux usées",
      "Dessalement et adoucissement",
      "Analyse et contrôle qualité de l'eau",
      "Maintenance et SAV des installations",
    ],
    benefits: [
      {
        title: "Eau pure garantie",
        description: "Conformité aux normes internationales de qualité",
      },
      {
        title: "Solutions sur mesure",
        description: "Systèmes adaptés à chaque besoin et capacité",
      },
      {
        title: "Économies durables",
        description: "Réduction des coûts à long terme",
      },
      {
        title: "Installation rapide",
        description: "Mise en service en moins de 2 semaines",
      },
    ],
  },
};

const DomainDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const domain = slug ? domainData[slug as keyof typeof domainData] : null;

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!domain) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Page non trouvée</h1>
          <Link to="/">
            <Button variant="outline">Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = domain.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 h-[60vh]">
          <img
            src={domain.image}
            alt={domain.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
        </div>
        
        <div className="relative container-custom px-4 md:px-8 pt-24 md:pt-32">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <p className="text-primary font-semibold">{domain.subtitle}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
                {domain.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background -mt-20 relative z-10">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {domain.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Nos Services
              </h2>
              <ul className="space-y-4">
                {domain.services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Pourquoi Nous Choisir
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {domain.benefits.map((benefit, index) => (
                  <div key={index} className="bg-card rounded-xl p-5 shadow-soft">
                    <h3 className="font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contactez-nous dès maintenant pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button variant="heroOutline" size="lg">
                  Demander un devis
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DomainDetail;
