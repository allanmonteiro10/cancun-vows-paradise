import { Diamond, Crown, Sparkles, Shield } from "lucide-react";

const features = [
  {
    icon: Diamond,
    title: "Romance Caribenho Exclusivo",
    description: "Cerimônias únicas em praias paradisíacas com águas cristalinas e pôr do sol inesquecível"
  },
  {
    icon: Crown,
    title: "Luxo Incomparável",
    description: "Resorts premium e serviços de alto padrão que transformam seu dia especial em pura sofisticação"
  },
  {
    icon: Sparkles,
    title: "Perfeição Garantida",
    description: "Cada detalhe planejado com precisão para criar momentos mágicos que durarão para sempre"
  },
  {
    icon: Shield,
    title: "Tranquilidade Total",
    description: "Cuidamos de toda documentação e logística para você apenas viver o amor intensamente"
  }
];

const WhyCancun = () => {
  return (
    <section id="company" className="py-24 subtle-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="wedding-headline text-4xl md:text-6xl mb-8 text-foreground">
            Por que escolher{" "}
            <em className="wedding-subline text-primary">Cancun?</em>
          </h2>
          <p className="elegant-text text-lg md:text-xl leading-relaxed">
            Descubra por que Cancun é o destino dos sonhos para casais que buscam 
            uma cerimônia única e inesquecível no paraíso caribenho
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden luxury-shadow">
            <div className="aspect-video bg-muted/50">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/6WpW6kUb7uE"
                title="Casamentos Reais em Cancun"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <p className="text-center mt-6 elegant-text text-muted-foreground">
            Momentos reais de casamentos que realizamos em Cancun
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group text-center md:text-left hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center md:justify-start mb-6">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="wedding-headline text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="elegant-text text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCancun;