import { Button } from "@/components/ui/button";
import { Star, Users, Clock } from "lucide-react";
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(/lovable-uploads/82136e31-ed61-4135-9a31-b85a9d28b2e1.png)`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6">
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
          </div>
          <span className="text-sm font-medium">50+ Casais Realizaram o Sonho</span>
        </div>

        <h1 className="wedding-headline text-5xl md:text-7xl mb-6 leading-tight">
          Realize Seu Casamento dos Sonhos
          <span className="wedding-script block md:text-6xl mt-2 text-[#00ffd2] text-6xl">em Cancun</span>
        </h1>
        
        <p className="elegant-text md:text-2xl mb-6 max-w-3xl mx-auto leading-relaxed text-2xl">
          <strong className="text-accent font-medium">APENAS 5 VAGAS</strong> restantes para 2025 - Cerimônias exclusivas no paraíso caribenho
        </p>

        {/* Urgency Banner */}
        
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button variant="paradise" size="lg" className="text-lg px-10 py-6 shadow-lg shadow-primary/50">
            GARANTA SUA VAGA AGORA
          </Button>
          <Button variant="elegant" size="lg" className="text-lg px-8 py-6">
            Ver Fotos Reais
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          <div className="text-left">
            <div className="text-accent font-semibold mb-2">✅ Wedding Planner Exclusivo</div>
            <p className="text-sm text-white/80">Planejamento completo para que você viva cada detalhe sem preocupações.</p>
          </div>
          <div className="text-left">
            <div className="text-accent font-semibold mb-2">✅ Cerimônia Sob Medida</div>
            <p className="text-sm text-white/80">Escolha entre um momento intimista a dois ou uma celebração inesquecível com convidados.</p>
          </div>
          <div className="text-left">
            <div className="text-accent font-semibold mb-2">✅ Pagamento Flexível</div>
            <p className="text-sm text-white/80">Condições facilitadas para tornar seu sonho ainda mais acessível.</p>
          </div>
          <div className="text-left">
            <div className="text-accent font-semibold mb-2">✅ Assessoria Completa</div>
            <p className="text-sm text-white/80">Do primeiro contato ao grande dia, cuidamos de tudo para que você só se preocupe em aproveitar.</p>
          </div>
        </div>
        
        
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;