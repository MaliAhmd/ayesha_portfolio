import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DigitalMarketingSection from "@/components/DigitalMarketingSection";
import SocialMediaDesignSection from "@/components/SocialMediaDesignSection";
import CreativeCollectionSection from "@/components/CreativeCollectionSection";
import ToolboxSection from "@/components/ToolboxSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f7f4ed]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DigitalMarketingSection />
      <SocialMediaDesignSection />
      <CreativeCollectionSection />
      <ToolboxSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
