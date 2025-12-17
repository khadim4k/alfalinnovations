import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
];

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2">
                <article className="bg-card rounded-2xl p-6 md:p-8 shadow-card card-hover relative h-full">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                  
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <p className="text-foreground leading-relaxed mb-6 text-lg">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 bg-primary text-primary-foreground hover:bg-primary/90 border-none" />
            <CarouselNext className="static translate-y-0 bg-primary text-primary-foreground hover:bg-primary/90 border-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
