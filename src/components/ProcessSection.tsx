const steps = [
  {
    number: "01",
    title: "Analyse des besoins",
    description:
      "Nous étudions en profondeur vos exigences et objectifs pour proposer des solutions parfaitement adaptées.",
  },
  {
    number: "02",
    title: "Planification et exécution",
    description:
      "Notre équipe élabore un plan d'action détaillé et met en œuvre les solutions avec rigueur et professionnalisme.",
  },
  {
    number: "03",
    title: "Livraison et suivi",
    description:
      "Nous assurons la livraison dans les délais et un suivi continu pour garantir votre entière satisfaction.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processus" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Méthodologie
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Comment Nous Travaillons
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une approche structurée en trois étapes pour des résultats optimaux
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative text-center group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}

              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-accent flex items-center justify-center relative overflow-hidden group-hover:shadow-glow transition-shadow duration-300">
                  <span className="text-4xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
