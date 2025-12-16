import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quels sont les délais de livraison pour l'import-export ?",
    answer:
      "Les délais varient selon la destination et le type de marchandise. En général, comptez 2-4 semaines pour l'Europe, 4-8 semaines pour l'international. Nous vous fournissons un calendrier précis dès la validation de votre commande.",
  },
  {
    question: "Proposez-vous des solutions sur mesure pour l'agriculture ?",
    answer:
      "Oui, nous analysons vos besoins spécifiques (type de culture, superficie, objectifs) pour concevoir des solutions personnalisées. Nos experts vous accompagnent de l'étude à la mise en œuvre.",
  },
  {
    question: "Quels types de traitement d'eau proposez-vous ?",
    answer:
      "Nous offrons une gamme complète : filtration, purification, dessalement, traitement des eaux usées. Nos solutions s'adaptent aux particuliers, entreprises et collectivités.",
  },
  {
    question: "Comment demander un devis ?",
    answer:
      "Remplissez simplement notre formulaire de contact ou appelez-nous. Nous vous répondons sous 24h avec une proposition détaillée et sans engagement.",
  },
  {
    question: "Intervenez-vous à l'international ?",
    answer:
      "Absolument. Nous opérons dans toute l'Europe, l'Afrique et le Moyen-Orient. Notre réseau de partenaires nous permet de garantir un service de qualité partout.",
  },
  {
    question: "Offrez-vous un service après-vente ?",
    answer:
      "Oui, nous assurons un suivi complet après chaque projet : maintenance, support technique et conseils d'optimisation. Votre satisfaction sur le long terme est notre priorité.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trouvez les réponses à vos interrogations les plus courantes
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border-0 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
