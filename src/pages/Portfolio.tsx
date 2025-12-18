import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, LayoutGrid, Star } from 'lucide-react';

// Chargement dynamique de toutes les images des dossiers galerie
const gallery1 = import.meta.glob('../assets/gallery1/*.{jpeg,jpg,png,webp}', { eager: true });
const gallery2 = import.meta.glob('../assets/gallery2/*.{jpeg,jpg,png,webp}', { eager: true });
const gallery3 = import.meta.glob('../assets/gallery3/*.{jpeg,jpg,png,webp}', { eager: true });

const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState('Tous');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Notre Portfolio - Al-Fal Innovation";
  }, []);

  // Génération des données de projets à partir des images
  const generateProjects = (gallery: Record<string, any>, category: string, baseTitle: string, tags: string[]) => {
    return Object.values(gallery).map((mod: any, index) => ({
      id: `${category}-${index}`,
      category,
      image: mod.default,
      title: `${baseTitle} ${index + 1}`,
      date: ["Février 2025", "Mars 2025", "Avril 2025", "Mai 2025", "Juin 2025", "Juillet 2025", "Août 2025", "Septembre 2025", "Octobre 2025", "Novembre 2025", "Décembre 2025"][index % 11],
      description: `Réalisation d'un projet majeur en ${category.toLowerCase()}. Solutions innovantes et durables mises en œuvre pour répondre aux besoins spécifiques du client.`,
      tags: tags,
      client: `Partenaire ${["Local", "International", "Privé", "Public"][index % 4]}`,
      featured: index === 0 || index === 1 // Met en avant les 2 premiers de chaque catégorie
    }));
  };

  const allProjects = [
    ...generateProjects(gallery1, "Export-Import", "Logistique & Transit", ["Logistique", "Transport", "International"]),
    ...generateProjects(gallery2, "Agriculture", "Projet Agricole", ["Agriculture", "Innovation", "Durable"]),
    ...generateProjects(gallery3, "Traitement de l'eau", "Installation Hydraulique", ["Eau Potable", "Assainissement", "Technologie"])
  ];

  const filteredProjects = filter === 'Tous' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  const featuredProjects = allProjects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container-custom">
          
          {/* En-tête de page */}
          <div className="text-center mb-20 animate-fade-up">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Nos Réalisations
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Notre Portfolio
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Découvrez nos réalisations et les projets qui témoignent de notre expertise en Export-Import, Agriculture et Traitement de l'eau.
            </p>
          </div>

          {/* Section Projets en Vedette */}
          <section className="mb-24">
            <div className="flex items-center gap-2 mb-8 animate-fade-up">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <h2 className="text-2xl font-bold text-foreground">Projets en Vedette</h2>
            </div>
            <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-4 md:gap-8 pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
              {featuredProjects.map((project, index) => (
                <div 
                  key={`featured-${project.id}`}
                  className="group relative h-[320px] md:h-[400px] min-w-[80vw] md:min-w-0 snap-center rounded-2xl overflow-hidden shadow-xl cursor-pointer animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/80 line-clamp-2 text-sm mb-4">{project.description}</p>
                    <div className="flex items-center gap-2 text-xs text-white/70">
                      <Calendar className="w-3 h-3" /> {project.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section Galerie Complète */}
          <section id="galerie">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 animate-fade-up">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <LayoutGrid className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Galerie de Projets</h2>
                </div>
                <p className="text-muted-foreground">Explorez notre portfolio complet de réalisations.</p>
              </div>

              {/* Filtres */}
              <div className="flex flex-wrap gap-2">
                {['Tous', 'Export-Import', 'Agriculture', "Traitement de l'eau"].map((cat) => (
                  <Button
                    key={cat}
                    variant={filter === cat ? "default" : "outline"}
                    onClick={() => setFilter(cat)}
                    className={`rounded-full px-5 transition-all duration-300 ${filter === cat ? 'shadow-md scale-105' : 'hover:bg-gray-100'}`}
                    size="sm"
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            {/* Grille des Projets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/40 flex flex-col animate-fade-up"
                  style={{ animationDelay: `${(index % 6) * 0.05}s` }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm z-10">
                      {project.category}
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                        <Calendar className="w-3 h-3" /> {project.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="flex items-center gap-1 text-xs bg-primary/5 text-primary px-2 py-1 rounded-md">
                          <Tag className="w-3 h-3" /> {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Carte */}
                    <div className="pt-4 border-t border-border/50 flex justify-between items-center mt-auto">
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                        <User className="w-4 h-4 text-primary" />
                        {project.client}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PortfolioPage;
