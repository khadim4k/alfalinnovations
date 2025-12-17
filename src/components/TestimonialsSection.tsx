import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jean-Pierre Durand",
    company: "Agri-Tech Solutions",
    content:
      "Alfalinnovation a transformé notre approche agricole. Leur expertise et leur accompagnement nous ont permis d'augmenter nos rendements de 30%.",
    rating: 5,
  },
  {
    name: "Marie Lefebvre",
    company: "Hydro Services",
    content:
      "Un partenaire de confiance pour tous nos projets de traitement d'eau. Professionnalisme et résultats au rendez-vous.",
    rating: 5,
  },
  {
    name: "Ahmed Ben Salem",
    company: "Mediterranean Trade Co.",
    content:
      "Leur service d'import-export est impeccable. Délais respectés, communication fluide et équipe réactive. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Sophie Martin",
    company: "EcoFarm France",
    content:
      "Une équipe à l'écoute qui comprend vraiment les enjeux de l'agriculture moderne. Collaboration excellente depuis 3 ans.",
    rating: 5,
  },
  {
    name: "Oumar Diallo",
    company: "Dakar Import SARL",
    content:
      "Service exceptionnel et équipe très professionnelle. Ils ont facilité toutes nos opérations d'import avec efficacité.",
    rating: 5,
  },
  {
    name: "Claire Dubois",
    company: "AquaPure Industries",
    content:
      "Installation rapide et support technique irréprochable. Notre système de traitement d'eau fonctionne parfaitement depuis 2 ans.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <article className="flex-shrink-0 w-[320px] md:w-[400px] bg-card rounded-2xl p-6 md:p-8 shadow-card mx-4">
    <div className="flex gap-1 mb-4">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-primary text-primary"
        />
      ))}
    </div>

    <p className="text-foreground leading-relaxed mb-6 text-base">
      "{testimonial.content}"
    </p>

    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <span className="text-primary font-bold text-sm">
          {testimonial.name.charAt(0)}
        </span>
      </div>
      <div>
        <p className="font-semibold text-foreground text-sm">
          {testimonial.name}
        </p>
        <p className="text-xs text-muted-foreground">
          {testimonial.company}
        </p>
      </div>
    </div>
  </article>
);

const TestimonialsSection = () => {
  // Double the testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="temoignages" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité absolue
          </p>
        </div>
      </div>

      {/* Infinite scroll container */}
      <div className="relative w-full">
        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling track */}
        <div className="flex animate-scroll-left">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
