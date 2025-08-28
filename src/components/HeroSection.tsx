import { Button } from "@/components/ui/button";
import { Star, Users, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/fb6f4a0a-ef52-4700-bf3e-0ba90f5c2efc.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-sm font-medium">500+ Casais Realizaram o Sonho</span>
        </div>

        <h1 className="wedding-headline text-5xl md:text-7xl mb-6 leading-tight">
          Realize Seu Casamento dos Sonhos
          <span className="wedding-script block text-4xl md:text-6xl text-accent mt-2">
            em Cancun
          </span>
        </h1>
        
        <p className="elegant-text text-xl md:text-2xl mb-6 max-w-3xl mx-auto leading-relaxed">
          <strong className="text-accent font-medium">APENAS 5 VAGAS</strong> restantes para 2024 - Cerimônias exclusivas no paraíso caribenho
        </p>

        {/* Urgency Banner */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-400/30 rounded-lg px-4 py-2 mb-8">
          <Clock className="w-4 h-4 text-red-300" />
          <span className="text-sm font-medium text-red-100">Promoção termina em 48h - Desconto de 20%</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a 
            href="https://wa.me/5521999999999?text=Olá! Gostaria de saber mais sobre os pacotes de casamento em Cancun" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="paradise" size="lg" className="text-lg px-10 py-6 shadow-lg shadow-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/60">
              GARANTA SUA VAGA AGORA
            </Button>
          </a>
          <Button 
            variant="elegant" 
            size="lg" 
            className="text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Fotos Reais
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-4 text-sm mb-8">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-accent" />
            <span>23 casais planejando este mês</span>
          </div>
          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
          <span>✅ Sem taxas ocultas</span>
          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
          <span>✅ Planejamento completo</span>
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