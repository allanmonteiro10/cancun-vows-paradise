import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/313ae957-3501-47db-be4d-e9230bdaeaf8.png" 
              alt="Casamento Cancun" 
              className="h-10 md:h-14 w-auto"
            />
          </div>
          
          {/* Navigation Links - Elegant Typography */}
          <div className="hidden md:flex items-center gap-12">
            <a 
              href="#home" 
              className="elegant-text text-foreground hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              INÍCIO
            </a>
            <a 
              href="#company" 
              className="elegant-text text-foreground hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              EMPRESA
            </a>
            <a 
              href="#services" 
              className="elegant-text text-foreground hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              SERVIÇOS
            </a>
            <a 
              href="#packages" 
              className="elegant-text text-foreground hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              PLANOS
            </a>
            <a 
              href="#contact" 
              className="elegant-text text-foreground hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              FALE CONOSCO
            </a>
          </div>
          
          {/* CTA Button */}
          <a href="https://wa.me/5511999999999?text=Olá, gostaria de solicitar um orçamento para meu casamento em Cancun" target="_blank" rel="noopener noreferrer">
            <Button className="gold-gradient text-secondary font-semibold px-6 py-2 elegant-shadow hover:scale-105 transition-transform">
              ORÇAMENTO
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;