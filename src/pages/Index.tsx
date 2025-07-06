
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AppShowcase from "@/components/AppShowcase";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingDownload from "@/components/FloatingDownload";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header scrollToSection={scrollToSection} />
      <FloatingDownload />
      <HeroSection />
      <AppShowcase />
      <Testimonials />
      <Partners />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
