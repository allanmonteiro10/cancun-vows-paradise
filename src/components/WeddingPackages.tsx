import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Sparkles, Diamond } from "lucide-react";

const WeddingPackages = () => {
  const packages = [
    {
      name: "Intimista",
      icon: Sparkles,
      price: "A partir de $1.975",
      description: "Perfeito para casais que desejam uma cerimônia íntima e romântica",
      features: [
        "Cerimônia na praia para até 6 pessoas",
        "Decoração elegante com flores tropicais",
        "Fotógrafo profissional (2 horas)",
        "Bouquet da noiva",
        "Música ambiente",
        "Brinde com champagne",
        "Transporte para os noivos"
      ],
      highlighted: false
    },
    {
      name: "Clássico",
      icon: Crown,
      price: "A partir de $5.900",
      description: "O pacote mais popular para uma celebração completa",
      features: [
        "Cerimônia na praia para até 20 pessoas",
        "Decoração premium com arco floral",
        "Fotógrafo, videomaker e Drone (4 horas)",
        "Bouquet e boutonnière",
        "Violinista ou saxofonista",
        "Cabelo e Maquíagem da Noiva",
        "Coordenador de casamento",
        "Transporte executivo dos noivos",
        "Transporte Convidados",
        "Festa no Yatch"
      ],
      highlighted: true
    },
    {
      name: "Luxury",
      icon: Diamond,
      price: "A partir de $37.900",
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
    <section id="packages" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="wedding-headline text-4xl md:text-6xl mb-8 text-foreground">
            Nossos{" "}
            <em className="wedding-subline text-primary">Pacotes</em>
          </h2>
          <p className="elegant-text text-lg md:text-xl leading-relaxed text-muted-foreground">
            Escolha o pacote perfeito para realizar seu sonho de casamento no paraíso.
            Cada opção foi cuidadosamente criada para diferentes estilos e orçamentos.
          </p>
        </div>
        
        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden transition-all duration-300 hover:luxury-shadow hover:scale-105 ${
                pkg.highlighted 
                  ? 'ring-2 ring-primary/20 border-primary/30 luxury-shadow' 
                  : 'border-border/50 hover:border-primary/30'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-0 right-0 gold-gradient text-secondary text-center py-2 text-sm font-semibold">
                  MAIS POPULAR
                </div>
              )}
              
              <CardHeader className={`text-center ${pkg.highlighted ? 'pt-12' : 'pt-8'}`}>
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <pkg.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="wedding-headline text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {pkg.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="wedding-headline text-3xl text-primary">{pkg.price}</span>
                </div>
                <p className="elegant-text text-muted-foreground">{pkg.description}</p>
              </CardHeader>
              
              <CardContent className="px-8">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="elegant-text text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="px-8 pb-8">
                <a href={`https://wa.me/5511999999999?text=Olá, gostaria de escolher o pacote de casamento ${pkg.name} em Cancun`} target="_blank" rel="noopener noreferrer">
                  <Button 
                    className={`w-full ${
                      pkg.highlighted 
                        ? 'gold-gradient text-secondary hover:scale-105' 
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                    } font-semibold py-3 transition-all duration-300`}
                  >
                    Escolher {pkg.name}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center px-4">
          <p className="elegant-text text-muted-foreground mb-6 text-lg">
            Todos os pacotes incluem assessoria para documentação necessária no Brasil
          </p>
          <a href="https://wa.me/5511999999999?text=Olá, gostaria de personalizar meu casamento em Cancun com sua equipe especializada" target="_blank" rel="noopener noreferrer">
            <Button className="gold-gradient text-secondary font-semibold px-6 md:px-10 py-4 text-base md:text-lg hover:scale-105 transition-transform elegant-shadow w-full max-w-md mx-auto">
              <span className="block md:hidden">Fale com nossa Equipe</span>
              <span className="hidden md:block">Personalize, fale com nossa equipe especializada</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WeddingPackages;