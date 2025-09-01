import { HeroSection } from "@/components/ui/hero-section";
import { WasteToValueSection } from "@/components/ui/waste-to-value-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <WasteToValueSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;