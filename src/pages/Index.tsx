import { HeroSection } from "@/components/ui/hero-section";
import { WasteToValueSection } from "@/components/ui/waste-to-value-section";
import { PowerOfZeroSection } from "@/components/ui/power-of-zero-section";
import { VideoSection } from "@/components/ui/video-section";
import { BusinessCardsSection } from "@/components/ui/business-cards-section";
import { SustainabilityMetricsSection } from "@/components/ui/sustainability-metrics-section";
import { BlogsSection } from "@/components/ui/blogs-section";
import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <WasteToValueSection />
        <PowerOfZeroSection />
        <VideoSection />
        <BusinessCardsSection />
        <SustainabilityMetricsSection />
        <BlogsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;