import Navbar from "@/components/Navbar";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import TrustedBySection from "@/components/TrustedBySection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingCTA />
      <main>
        <AnnouncementBanner />
        <HeroSection />
        
        <AnimatedSection animation="fade-up">
          <SocialProofBar />
        </AnimatedSection>
        
        <AnimatedSection animation="fade" delay={100}>
          <TrustedBySection />
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={0}>
          <ProblemSection />
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={0}>
          <FeaturesSection />
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={0}>
          <TestimonialsSection />
        </AnimatedSection>
        
        <AnimatedSection animation="scale" delay={0}>
          <PricingSection />
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={0}>
          <GuaranteeSection />
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={0}>
          <FAQSection />
        </AnimatedSection>
        
        <AnimatedSection animation="scale" delay={0}>
          <FinalCTASection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
