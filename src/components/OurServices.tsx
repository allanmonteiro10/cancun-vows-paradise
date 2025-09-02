import { Heart, Crown, Users, Sparkles, Gift, PartyPopper } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const services = [
  {
    name: "Destination Wedding",
    icon: Crown,
    description: "Cerimônia completa em paraíso tropical com toda estrutura personalizada"
  },
  {
    name: "Elopement Wedding",
    icon: Heart,
    description: "Fuga romântica a dois para um casamento íntimo e especial"
  },
  {
    name: "Mini Wedding",
    icon: Users,
    description: "Celebração intimista para famílias e amigos mais próximos"
  },
  {
    name: "Renovação de Votos",
    icon: Sparkles,
    description: "Renove suas promessas de amor em cenário paradisíaco"
  },
  {
    name: "Pedidos de Casamento",
    icon: Gift,
    description: "Momento mágico e inesquecível para o pedido dos sonhos"
  },
  {
    name: "Despedida de Solteiro",
    icon: PartyPopper,
    description: "Celebre com estilo antes do grande dia em Cancun"
  }
];

const OurServices = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transformamos seus momentos especiais em experiências inesquecíveis no paraíso caribenho
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-muted/20 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;