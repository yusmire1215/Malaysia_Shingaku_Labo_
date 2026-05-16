import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeBar from "@/components/sections/MarqueeBar";
import AboutSection from "@/components/sections/AboutSection";
import UniversitiesSection from "@/components/sections/UniversitiesSection";
import SupportSection from "@/components/sections/SupportSection";
import ProfileSection from "@/components/sections/ProfileSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MarqueeBar />
        <AboutSection />
        <UniversitiesSection />
        <SupportSection />
        <ProfileSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
