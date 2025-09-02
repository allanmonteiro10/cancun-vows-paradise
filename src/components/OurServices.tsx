import { Heart, Crown, Users, Sparkles, Gift, PartyPopper } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const services = [
  {
    name: "Destination Wedding",
    icon: Crown,
    description: "Cerimônia completa em paraíso tropical com toda estrutura personalizada para o seu grande dia"
  },
  {
    name: "Elopement Wedding",
    icon: Heart,
    description: "Fuga romântica a dois para um casamento íntimo e especial em cenário paradisíaco"
  },
  {
    name: "Mini Wedding",
    icon: Users,
    description: "Celebração intimista para famílias e amigos mais próximos em ambiente acolhedor"
  },
  {
    name: "Renovação de Votos",
    icon: Sparkles,
    description: "Renove suas promessas de amor em cenário paradisíaco e reacenda a chama da paixão"
  },
  {
    name: "Pedidos de Casamento",
    icon: Gift,
    description: "Momento mágico e inesquecível para o pedido dos sonhos em local único"
  },
  {
    name: "Despedida de Solteiro",
    icon: PartyPopper,
    description: "Celebre com estilo e elegância antes do grande dia nas melhores experiências de Cancun"
  }
];

const OurServices = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="wedding-headline text-4xl md:text-6xl mb-8 text-foreground">
            Nossos{" "}
            <em className="wedding-subline text-primary">Serviços</em>
          </h2>
          <p className="elegant-text text-lg md:text-xl leading-relaxed text-muted-foreground">
            Transformamos seus momentos especiais em experiências inesquecíveis 
            no paraíso caribenho com serviços personalizados
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:luxury-shadow transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm hover:transform hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-5 rounded-full bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="wedding-headline text-xl mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.name}
                </CardTitle>
                <CardDescription className="elegant-text text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <p className="elegant-text text-muted-foreground mb-6 text-lg">
            Pronto para planejar seu momento especial?
          </p>
          <button className="gold-gradient text-secondary font-semibold px-8 py-3 rounded-lg elegant-shadow hover:scale-105 transition-transform">
            Descobrir Mais Serviços
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;