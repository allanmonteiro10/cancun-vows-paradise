import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyCancun from "@/components/WhyCancun";
import Gallery from "@/components/Gallery";
import WeddingPackages from "@/components/WeddingPackages";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <WhyCancun />
        <Gallery />
        <WeddingPackages />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
