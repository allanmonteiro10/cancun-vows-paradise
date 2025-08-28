import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyCancun from "@/components/WhyCancun";
import WeddingPackages from "@/components/WeddingPackages";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <WhyCancun />
        <WeddingPackages />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
