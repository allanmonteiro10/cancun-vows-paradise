import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary" />
            <span className="font-playfair text-xl text-foreground">
              Cancun <span className="wedding-script text-primary font-medium">Vows</span>
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#packages" className="text-foreground hover:text-primary transition-colors">
              Pacotes
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
              Galeria
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </div>
          
          {/* CTA Button */}
          <Button variant="paradise" size="sm">
            Orçamento Gratuito
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;