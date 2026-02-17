import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import ServicesSection from "@/components/ServicesSection";
import AboutJaySection from "@/components/AboutJaySection";
import ExecutiveRecommendations from "@/components/ExecutiveRecommendations";
import ResultsSection from "@/components/ResultsSection";
import LocalSEOPortfolio from "@/components/LocalSEOPortfolio";
import EcomSEOPortfolio from "@/components/EcomSEOPortfolio";

import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <ServicesSection />
      <AboutJaySection />
      <ExecutiveRecommendations />
      <ResultsSection />
      <LocalSEOPortfolio />
      <EcomSEOPortfolio />
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
