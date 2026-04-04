import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import HowItWorks from "@/components/HowItWorks";
import PopularDevices from "@/components/PopularDevices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import RefurbishedBanner from "@/components/RefurbishedBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategoryGrid />
      <PopularDevices />
      <RefurbishedBanner />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
