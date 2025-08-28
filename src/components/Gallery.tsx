import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Use real wedding images from uploads

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "/lovable-uploads/00e217ac-1ac7-4108-adcb-b0d9934021c5.png",
      alt: "Casal feliz caminhando de mãos dadas na praia paradisíaca de Cancun"
    },
    {
      src: "/lovable-uploads/0f8167a4-a0d9-4c08-bc47-ebf05e6330c2.png",
      alt: "Cerimônia íntima sob arco floral tropical na praia do Caribe"
    },
    {
      src: "/lovable-uploads/319daa32-a072-4e05-b551-5439b1e0d4fa.png",
      alt: "Noivos radiantes em altar elegante com vista para o mar azul turquesa"
    },
    {
      src: "/lovable-uploads/acb134f7-9e6e-41b6-a119-b4adb55d72b1.png",
      alt: "Momento romântico sob arco de flores brancas e folhagens douradas"
    },
    {
      src: "/lovable-uploads/dd1e7671-950f-40c9-9868-4066def0e262.png",
      alt: "Celebração de união com familiares na praia cristalina de Cancun"
    },
    {
      src: "/lovable-uploads/e0c4b4c9-295c-4e91-82ad-ee93280d3879.png",
      alt: "Cerimônia completa com convidados em cenário paradisíaco à beira-mar"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
            Galeria de 
            <span className="block text-primary font-normal">Momentos Únicos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore alguns dos casamentos mais encantadores que realizamos nas praias paradisíacas de Cancun
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-2xl gentle-shadow hover:luxury-shadow transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal para visualização ampliada */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl w-full h-[90vh] p-0 bg-black/95 border-0">
            <div className="relative w-full h-full flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>

              {selectedImage !== null && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>

                  <img
                    src={images[selectedImage].src}
                    alt={images[selectedImage].alt}
                    className="max-w-full max-h-full object-contain"
                  />

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 rounded-full px-4 py-2">
                    <span className="text-white text-sm">
                      {selectedImage + 1} / {images.length}
                    </span>
                  </div>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;