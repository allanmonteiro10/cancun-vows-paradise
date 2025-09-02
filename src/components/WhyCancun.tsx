import { Heart, Crown, Star, Sparkles } from "lucide-react";

const WhyCancun = () => {
  const features = [
    {
      icon: Heart,
      title: "Romance Caribenho Exclusivo",
      description: "Praias paradisíacas de areia branca e mar turquesa cristalino criam o cenário mais romântico do mundo para eternizar seu amor."
    },
    {
      icon: Crown,
      title: "Luxo Premium & Privacidade",
      description: "Resorts cinco estrelas e locais exclusivos na Riviera Maya, onde cada detalhe reflete a sofisticação que vocês merecem."
    },
    {
      icon: Star,
      title: "Perfeição Garantida",
      description: "Clima tropical ideal 365 dias por ano e pôr do sol deslumbrante garantem fotos de revista em qualquer estação."
    },
    {
      icon: Sparkles,
      title: "Tranquilidade Total",
      description: "Nossa equipe especializada cuida de toda burocracia e logística. Vocês só precisam se preocupar em viver este momento único."
    }
  ];

  return (
    <section id="about" className="py-20 paradise-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
            O Paraíso Perfeito Para Seu
            <span className="block text-primary font-normal wedding-script text-5xl md:text-6xl">Grande Dia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <strong className="text-primary">Apenas casais verdadeiramente especiais</strong> escolhem Cancún para criar memórias eternas. 
            Descubra por que este é o destino mais desejado para cerimônias exclusivas no Caribe.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden luxury-shadow">
            <iframe
              src="https://www.youtube.com/embed/6WpW6kUb7uE"
              title="Casamentos em Cancun - Paraíso no Caribe"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-muted-foreground mt-4">
            <strong className="text-primary">Momentos reais de pura magia</strong> - Veja como transformamos sonhos em realidade no paraíso caribenho
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCancun;