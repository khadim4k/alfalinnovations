import { Leaf, Ship, Droplets, LucideIcon } from "lucide-react";
import exportImportImg from "@/assets/export-import.jpg";
import agricultureImg from "@/assets/agriculture.jpg";
import waterTreatmentImg from "@/assets/water-treatment.jpg";
import bakeryEquipment from "@/assets/gallery1/materiel-boulangerie.jpg";
import carImg1 from "@/assets/gallery1/1.jpeg";
import carImg2 from "@/assets/gallery1/2.jpeg";
import carImg3 from "@/assets/gallery1/3.jpeg";
import carImg4 from "@/assets/gallery1/4.jpeg";
import carImg5 from "@/assets/gallery1/5.jpeg";
import bakeryImg1 from "@/assets/gallery1/6.jpeg";
import bakeryImg2 from "@/assets/gallery1/7.jpeg";
import bakeryImg3 from "@/assets/gallery1/8.jpeg";
import waterMachineImg1 from "@/assets/gallery1/9.jpeg";
import waterMachineImg2 from "@/assets/gallery1/10.jpeg";
import waterMachineImg3 from "@/assets/gallery1/11.jpeg";
import waterMachineImg4 from "@/assets/gallery1/12.jpeg";
import constructionImg1 from "@/assets/gallery1/13.jpeg";
import constructionImg2 from "@/assets/gallery1/14.jpeg";
import constructionImg3 from "@/assets/gallery1/15.jpeg";
import constructionImg4 from "@/assets/gallery1/16.jpeg";
import agriImage1 from "@/assets/gallery2/1.jpeg";
import agriImage2 from "@/assets/gallery2/2.jpeg";
import agriImage3 from "@/assets/gallery2/3.jpeg";
import bouchraImg1 from "@/assets/gallery3/bouchra1.jpeg";
import bouchraImg2 from "@/assets/gallery3/bouchra2.jpeg";
import bouchraImg3 from "@/assets/gallery3/bouchra3.jpeg";
import fontaineImg1 from "@/assets/gallery3/fontaine1.jpeg";
import fontaineImg2 from "@/assets/gallery3/fontaine2.jpeg";
import fontaineImg3 from "@/assets/gallery3/fontaine3.jpeg";
import filtreImg1 from "@/assets/gallery3/filtre1.jpeg";
import filtreImg2 from "@/assets/gallery3/filtre2.jpeg";
import filtreImg3 from "@/assets/gallery3/filtre3.jpeg";
import traitementImg1 from "@/assets/gallery3/traitement1.jpeg";
import traitementImg2 from "@/assets/gallery3/traitement2.jpeg";

interface GalleryItem {
  image: string;
  title: string;
  description: string;
}
export interface Domain {
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  image: string;
  icon: LucideIcon;
  services: string[];
  galleries?: {
    title: string;
    items: GalleryItem[];
  }[];
}
export const domaines: Domain[] = [
  {
    title: "Export & Import",
    subtitle: "Solutions logistiques internationales",
    description: "Wanter Gui Services se concentre sur l’importation et la distribution de machines et équipements spécialisés, notamment pour la boulangerie, la construction et d’autres secteurs industriels.",
    slug: "export-import",
    image: exportImportImg,
    icon: Ship,
    services: [
      "Importation de machines pour la boulangerie",
      "Distribution d'équipements pour la construction",
      "Fourniture de matériel pour divers secteurs industriels",
      "Solutions logistiques complètes pour l'import-export",
      "Conseil et accompagnement personnalisé",
      "Service après-vente et maintenance",
    ],
    galleries: [
      {
        title: "Véhicules",
        items: [
          {
            image: carImg1,
            title: "Importation de Véhicules",
            description: "Nous facilitons l'importation de véhicules neufs et d'occasion de toutes marques.",
          },
          { image: carImg2, title: "Berlines et SUV", description: "Un large choix de modèles pour répondre à tous vos besoins." },
          { image: carImg3, title: "Logistique Simplifiée", description: "Nous gérons toutes les étapes, du transport au dédouanement." },
          { image: carImg4, title: "Contrôle Qualité", description: "Chaque véhicule est inspecté pour garantir sa conformité et sa fiabilité." },
          { image: carImg5, title: "Livraison Rapide", description: "Profitez d'une livraison rapide et sécurisée de votre nouveau véhicule." },
        ],
      },
      {
        title: "Machines de Boulangerie",
        items: [
          {
            image: bakeryImg1,
            title: "Équipements de Boulangerie Modernes",
            description: "Nous importons des pétrins, fours et diviseuses de dernière génération pour optimiser votre production.",
          },
          { image: bakeryImg2, title: "Fours Professionnels", description: "Des fours performants pour une cuisson parfaite de vos produits." },
          { image: bakeryImg3, title: "Pétrins et Façonneuses", description: "Automatisez la préparation de vos pâtes avec nos équipements robustes." },
        ],
      },
      {
        title: "Matériel de Construction",
        items: [
          {
            image: constructionImg1,
            title: "Machines pour la Fabrication de Briques",
            description: "Des équipements performants pour la production de briques et parpaings.",
          },
          { image: constructionImg2, title: "Production en Série", description: "Augmentez votre capacité de production avec nos machines automatisées." },
          { image: constructionImg3, title: "Robustesse et Fiabilité", description: "Du matériel de construction conçu pour durer sur vos chantiers." },
          { image: constructionImg4, title: "Qualité de Fabrication", description: "Produisez des matériaux de construction aux normes les plus strictes." },
        ],
      },
      {
        title: "Machines à Eau",
        items: [
          {
            image: waterMachineImg1,
            title: "Unités de Production d'Eau",
            description: "Nous importons des systèmes complets pour le traitement et l'embouteillage de l'eau.",
          },
          { image: waterMachineImg2, title: "Systèmes de Filtration", description: "Des technologies de filtration avancées pour une eau pure." },
          { image: waterMachineImg3, title: "Lignes d'Embouteillage", description: "Solutions automatisées pour le remplissage et le bouchage des bouteilles." },
          { image: waterMachineImg4, title: "Contrôle Qualité Intégré", description: "Assurez la qualité de votre production à chaque étape du processus." },
        ],
      },
    ],
  },
  {
    title: "Agriculture",
    subtitle: "Technologies agricoles durables",
    description: "Al-Fal Innovation s'engage pour une agriculture moderne et durable, en fournissant des solutions et des équipements innovants pour optimiser les rendements et promouvoir le développement durable.",
    slug: "agriculture",
    image: agricultureImg,
    icon: Leaf,
    services: [
      "Fourniture d'équipements agricoles de pointe",
      "Solutions d'irrigation efficientes et durables",
      "Accompagnement pour l'optimisation des rendements",
      "Promotion de pratiques agricoles innovantes",
      "Conseil en développement agricole durable",
      "Partenariats pour la chaîne de valeur agricole",
    ],
    galleries: [{
      title: "Nos Solutions Agricoles en Image",
      items: [
      {
        image: agriImage1,
        title: "Équipements Agricoles de Pointe",
        description: "Nous fournissons des tracteurs, semoirs et autres équipements modernes pour mécaniser et optimiser vos travaux agricoles.",
      },
      {
        image: agriImage2,
        title: "Irrigation Efficiente et Durable",
        description: "Découvrez nos systèmes d'irrigation goutte-à-goutte et par aspersion qui économisent l'eau tout en garantissant une croissance optimale de vos cultures.",
      },
      {
        image: agriImage3,
        title: "Optimisation des Rendements",
        description: "Grâce à notre accompagnement et nos technologies, nous vous aidons à analyser vos sols et à choisir les meilleures pratiques pour des récoltes abondantes.",
      },
      ]
    }],
  },
  {
    title: "Traitement d'eau",
    subtitle: "Solutions de purification innovantes",
    description: "À travers sa filiale Eau Bouchra, Al-Fal Innovation offre des solutions modernes de traitement de l’eau, incluant des fontaines intelligentes et des systèmes d’osmose inverse, garantissant un accès à une eau saine et de qualité.",
    slug: "traitement-eau",
    image: waterTreatmentImg,
    icon: Droplets,
    services: [
      "Installation de fontaines intelligentes",
      "Mise en place de systèmes d'osmose inverse",
      "Solutions de purification pour particuliers et entreprises",
      "Garantie d'une eau saine et de haute qualité",
      "Maintenance et suivi des équipements",
      "Conseil pour une gestion optimisée de l'eau",
    ],
    galleries: [
      {
        title: "Présentation Eau Bouchra",
        items: [
          { image: bouchraImg1, title: "Une Eau Pure et Saine", description: "Avec Eau Bouchra, profitez d'une eau pure, filtrée pour éliminer les impuretés et garantir votre bien-être." },
          { image: bouchraImg2, title: "Technologie de Pointe", description: "Nos systèmes d'osmose inverse vous assurent une eau de la plus haute qualité, directement à votre robinet." },
          { image: bouchraImg3, title: "Accessible à Tous", description: "Des solutions adaptées aux particuliers et aux entreprises pour un accès universel à une eau saine." },
        ],
      },
      {
        title: "Nos Fontaines Intelligentes",
        items: [
          { image: fontaineImg1, title: "Design Moderne et Intégré", description: "Nos fontaines s'intègrent parfaitement à vos espaces de travail ou lieux publics grâce à leur design élégant." },
          { image: fontaineImg2, title: "Eau Pure à la Demande", description: "Un système de filtration avancé pour garantir une eau pure, fraîche et saine à chaque utilisation." },
          { image: fontaineImg3, title: "Installation et Maintenance Faciles", description: "Nous assurons une installation rapide et un service de maintenance complet pour un fonctionnement optimal." },
        ],
      },
      {
        title: "Nos Systèmes de Filtration",
        items: [
          { image: filtreImg1, title: "Filtration pour Particuliers", description: "Des systèmes compacts et efficaces pour garantir une eau de qualité à votre domicile." },
          { image: filtreImg2, title: "Solutions pour Entreprises", description: "Des unités de traitement d'eau à grande capacité pour les besoins industriels et commerciaux." },
          { image: filtreImg3, title: "Maintenance et Suivi", description: "Notre engagement : une eau saine garantie par une maintenance rigoureuse et un suivi expert de vos équipements." },
        ],
      },
      {
        title: "Nos Installations",
        items: [
          { image: traitementImg1, title: "Systèmes de Traitement sur Mesure", description: "Nous concevons et installons des systèmes de traitement d'eau complets, adaptés aux besoins résidentiels et industriels." },
          { image: traitementImg2, title: "Qualité et Fiabilité", description: "Chaque installation est réalisée avec des équipements de haute qualité pour garantir une performance durable et une eau saine." },
        ],
      },
    ]
  },
];

export const domainData = domaines.reduce((acc, domaine) => {
  acc[domaine.slug] = domaine;
  return acc;
}, {} as Record<string, Domain>);