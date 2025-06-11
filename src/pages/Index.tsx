
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import StrengthsSection from '../components/StrengthsSection';
import ProcessSection from '../components/ProcessSection';
import PortfolioSection from '../components/PortfolioSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <StrengthsSection />
      <ProcessSection />
      <PortfolioSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
