import { Heart, MapPin, Sun, Shield } from "lucide-react";

const WhyCancun = () => {
  const features = [
    {
      icon: Heart,
      title: "Romance Tropical",
      description: "Praias de areia branca e águas cristalinas turquesa criam o cenário perfeito para o seu dia especial."
    },
    {
      icon: MapPin,
      title: "Localização Privilegiada",
      description: "Riviera Maya oferece resorts de luxo e cenários únicos para cerimônias inesquecíveis."
    },
    {
      icon: Sun,
      title: "Clima Perfeito",
      description: "Sol o ano todo e temperaturas ideais garantem fotos perfeitas em qualquer época."
    },
    {
      icon: Shield,
      title: "Assessoria Completa",
      description: "Cuidamos de todos os detalhes legais e organizacionais para você só se preocupar com o amor."
    }
  ];

  return (
    <section className="py-20 paradise-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
            Por que escolher
            <span className="block text-primary font-normal">Cancun?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubra por que Cancun é o destino dos sonhos para casais que buscam uma cerimônia única no Caribe
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden luxury-shadow">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Casamentos em Cancun - Paraíso no Caribe"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-muted-foreground mt-4">
            Veja como realizamos sonhos em um dos destinos mais paradisíacos do mundo
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