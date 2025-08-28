import { Button } from "@/components/ui/button";
import heroBeach from "@/assets/hero-beach.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBeach})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
          Seu Casamento dos Sonhos
          <span className="block text-4xl md:text-6xl font-extralight text-primary">
            em Cancun
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          Celebre o amor no paraíso caribenho com cerimônias exclusivas em praias paradisíacas
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="paradise" size="lg" className="text-lg px-8 py-6">
            Solicitar Orçamento
          </Button>
          <Button variant="elegant" size="lg" className="text-lg px-8 py-6">
            Ver Galeria
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-light text-accent">+500</div>
            <div className="text-sm uppercase tracking-wider">Casamentos Realizados</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-light text-accent">15+</div>
            <div className="text-sm uppercase tracking-wider">Anos de Experiência</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-light text-accent">98%</div>
            <div className="text-sm uppercase tracking-wider">Satisfação dos Casais</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;