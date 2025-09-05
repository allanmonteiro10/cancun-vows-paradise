import { Button } from "@/components/ui/button";
import { Star, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url(/lovable-uploads/82136e31-ed61-4135-9a31-b85a9d28b2e1.png)`
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-secondary">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md border border-white/40 rounded-full px-6 py-3 mb-8">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-sm font-medium tracking-wide">Pioneiros em Destination Wedding no Caribe</span>
        </div>

        {/* Main Headline */}
        <h1 className="mb-8 max-w-5xl mx-auto">
          <span className="block font-inter font-light text-3xl md:text-4xl mb-4 tracking-wide">
            Cuidamos de
          </span>
          <span className="block wedding-headline text-5xl md:text-7xl lg:text-8xl leading-none mb-4">
            todos os detalhes
          </span>
          <span className="block font-inter font-light text-3xl md:text-4xl tracking-wide">
            do seu{" "}
            <em className="wedding-subline text-primary">casamento perfeito</em>
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="elegant-text text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Especialistas em cerimônias exclusivas no paraíso caribenho, 
          são mais de 50 histórias de amor já celebradas com perfeição.
        </p>

        {/* Video Play Button */}
        <div className="mb-12">
          <button className="group mx-auto flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/90 backdrop-blur-sm border-2 border-secondary/30 rounded-full hover:bg-white transition-all duration-300">
            <Play className="w-8 h-8 md:w-10 md:h-10 text-secondary ml-1 group-hover:scale-110 transition-transform" />
          </button>
          <p className="text-sm mt-3 text-secondary/80">Assista aos nossos casamentos reais</p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#packages">
            <Button size="lg" className="gold-gradient text-secondary font-semibold px-12 py-4 text-lg hover:scale-105 transition-transform elegant-shadow">
              Descubra Nossas Opções
            </Button>
          </a>
          <a href="#gallery">
            <Button variant="outline" size="lg" className="border-secondary bg-white/90 text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-lg backdrop-blur-sm">
              Veja algumas Fotos
            </Button>
          </a>
        </div>

        {/* Benefits - Simple List */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-secondary/90 flex-wrap">
          <span className="flex items-center gap-2">
            ✨ Wedding Planner Exclusivo
          </span>
          <div className="w-1 h-1 bg-secondary/40 rounded-full hidden sm:block"></div>
          <span className="flex items-center gap-2">
            ✨ Cerimônia Sob Medida
          </span>
          <div className="w-1 h-1 bg-secondary/40 rounded-full hidden sm:block"></div>
          <span className="flex items-center gap-2">
            ✨ Assessoria Completa
          </span>
        </div>
      </div>
      
      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-0.5 h-16 bg-secondary/30 relative">
          <div className="absolute top-0 w-0.5 h-4 bg-secondary animate-pulse"></div>
        </div>
        <p className="text-xs text-secondary/60 mt-2 tracking-widest">ROLAR</p>
      </div>
    </section>
  );
};

export default HeroSection;