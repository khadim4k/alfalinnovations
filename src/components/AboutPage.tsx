import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Building, Target, Eye } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `À Propos - Al-Fal Innovation`;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="section-padding pt-32 pb-24 bg-card">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              À Propos de Al-Fal Innovation
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Votre partenaire de confiance pour des solutions innovantes en Export-Import, Agriculture et Traitement de l'eau.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12 text-center">
              <div className="bg-card p-8 rounded-2xl shadow-sm">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Notre Mission</h2>
                <p className="text-muted-foreground">Fournir des solutions complètes et adaptées aux besoins de nos clients, en nous appuyant sur l'innovation et une expertise solide dans nos domaines d'activité pour contribuer au développement durable.</p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-sm">
                <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Notre Vision</h2>
                <p className="text-muted-foreground">Devenir un leader reconnu au Sénégal et en Afrique de l'Ouest en matière de solutions agricoles, de traitement de l'eau et de commerce international, en favorisant l'accès à des technologies de pointe.</p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-sm">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">L'Entreprise</h2>
                <p className="text-muted-foreground">Al-Fal Innovation, basée à Thiès, est spécialisée en Export-Import, Agriculture et Traitement d’eau. Nous nous engageons à offrir des services de qualité et un accompagnement personnalisé pour chaque projet.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;