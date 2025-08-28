import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Sparkles } from "lucide-react";

const WeddingPackages = () => {
  const packages = [
    {
      name: "Intimista",
      icon: Sparkles,
      price: "A partir de $8.900",
      description: "Perfeito para casais que desejam uma cerimônia íntima e romântica",
      features: [
        "Cerimônia na praia para até 20 pessoas",
        "Decoração elegante com flores tropicais",
        "Fotógrafo profissional (2 horas)",
        "Bouquet da noiva",
        "Música ambiente",
        "Brinde com champagne"
      ],
      highlighted: false
    },
    {
      name: "Clássico",
      icon: Crown,
      price: "A partir de $15.900",
      description: "O pacote mais popular para uma celebração completa",
      features: [
        "Cerimônia na praia para até 50 pessoas",
        "Decoração premium com arco floral",
        "Fotógrafo e videomaker (4 horas)",
        "Bouquet e boutonnière",
        "DJ e som profissional",
        "Recepção com aperitivos",
        "Coordenador de casamento",
        "Transporte para os noivos"
      ],
      highlighted: true
    },
    {
      name: "Luxury",
      icon: Crown,
      price: "A partir de $28.900",
      description: "A experiência mais exclusiva para seu grande dia",
      features: [
        "Cerimônia premium para até 100 pessoas",
        "Decoração de luxo personalizada",
        "Ensaio pré-wedding incluído",
        "Fotógrafo e videomaker (dia completo)",
        "Banda ao vivo ou DJ premium",
        "Jantar completo com menu gourmet",
        "Open bar premium",
        "Suite nupcial incluída",
        "Spa para os noivos",
        "Planejamento completo"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
            Pacotes de
            <span className="block text-primary font-normal">Casamento</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Escolha o pacote perfeito para tornar seu sonho realidade no paraíso caribenho
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.highlighted ? 'luxury-shadow border-primary scale-105' : 'gentle-shadow'} transition-all duration-300 hover:scale-105`}>
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-coral text-coral-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
                  <pkg.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-light text-foreground">{pkg.name}</CardTitle>
                <div className="text-3xl font-normal text-primary mb-2">{pkg.price}</div>
                <p className="text-muted-foreground text-sm">{pkg.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant={pkg.highlighted ? "paradise" : "elegant"} 
                  className="w-full"
                >
                  Solicitar Orçamento
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Todos os pacotes incluem assessoria jurídica para documentação no Brasil
          </p>
          <Button variant="outline" size="lg">
            Comparar Todos os Pacotes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WeddingPackages;