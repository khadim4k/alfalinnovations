import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, CheckCircle, ArrowRight, Download, Eye } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { domainData, Domain } from "@/pages/domaines";
import ImageGallery from "@/pages/ImageGallery";
import { PDFDownloadLink } from '@react-pdf/renderer';
import CatalogueDocument from '@/components/CatalogueDocument';

const agricultureImages = import.meta.glob('/src/assets/gallery2/*.jpeg', { eager: true, as: 'url' });

const DomainDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  let domain: Domain | undefined = slug ? { ...domainData[slug] } : undefined;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (domain) {
      document.title = `${domain.title} - Al-Fal Innovation`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", domain.description);
      }
    }
  }, [slug, domain]);

  if (slug === 'agriculture' && domain) {
    const projectDates = [
      "Février 2025", "Mars 2025", "Avril 2025", "Mai 2025",
      "Juin 2025", "Juillet 2025", "Août 2025", "Septembre 2025",
      "Novembre 2025", "Décembre 2025"
    ];

    const galleryItems = Object.keys(agricultureImages)
      .sort((a, b) => {
        const numA = parseInt(a.match(/(\d+)\.jpeg$/)?.[1] || '0', 10);
        const numB = parseInt(b.match(/(\d+)\.jpeg$/)?.[1] || '0', 10);
        return numA - numB;
      })
      .map((path, index) => ({
        image: agricultureImages[path] as string,
        title: `Projet Agricole ${index + 1} - ${projectDates[index % projectDates.length]}`,
        description: `Réalisation finalisée en ${projectDates[index % projectDates.length]}. Solution innovante pour l'agriculture durable.`,
      }));

    const agricultureGallery = {
      title: 'Nos Réalisations Agricoles',
      items: galleryItems,
    };

    domain.galleries = domain.galleries ? [...domain.galleries, agricultureGallery] : [agricultureGallery];
  }

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

            {/* Gallery Section */}
            {domain.galleries && domain.galleries.length > 0 && (
              <div className="space-y-16">
                {domain.galleries.map((gallery) => (
                  <div key={gallery.title}>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                      {gallery.title}
                    </h2>
                    <ImageGallery items={gallery.items} />
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* CTA */}
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contactez-nous dès maintenant pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/#contact" reloadDocument>
                <Button variant="heroOutline" size="lg">
                  Demander un devis
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              
              {['export-import', 'agriculture', 'traitement-eau'].includes(slug || '') ? (
                <>
                  <a
                    href={`/${slug}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "secondary", size: "lg" })}
                  >
                    Ouvrir le catalogue
                    <Eye className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href={`/${slug}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={`Catalogue-${slug}.pdf`}
                    className={buttonVariants({ variant: "secondary", size: "lg" })}
                  >
                    Télécharger le catalogue
                    <Download className="w-4 h-4 ml-2" />
                  </a>
                </>
              ) : (
                <PDFDownloadLink
                  document={<CatalogueDocument domain={domain} />}
                  fileName={`catalogue-${slug}.pdf`}
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  {({ loading }) => (
                    <>
                      {loading ? 'Génération...' : 'Télécharger le catalogue'}
                      <Download className="w-4 h-4 ml-2" />
                    </>
                  )}
                </PDFDownloadLink>
              )}
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
