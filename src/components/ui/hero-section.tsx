import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const metals = [
    "ZINC", "LITHIUM", "NICKEL", "COBALT", "MOLYBDENUM",
    "VANADIUM", "TUNGSTEN", "MANGANESE", "COPPER"
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                CRAFTING CIRCULAR SUPPLY CHAIN FOR
                <br />
                <span className="text-5xl md:text-7xl">STRATEGIC METALS</span>
              </h1>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
                {metals.map((metal, index) => (
                  <div 
                    key={metal}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded px-3 py-2 text-center text-sm font-medium"
                  >
                    {metal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col gap-4">
        <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
          SUSTAINABILITY REPORT FY '24 | FY '23
        </Button>
        <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
          LITHIUM-ION BATTERY RECYCLING VIDEO →
        </Button>
      </div>
    </section>
  );
};