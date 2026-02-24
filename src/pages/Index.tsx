import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EcosystemSection from "@/components/EcosystemSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import MethodologySection from "@/components/MethodologySection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <EcosystemSection />
      <DifferentialsSection />
      <MethodologySection />
      <PricingSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
