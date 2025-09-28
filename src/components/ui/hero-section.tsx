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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-white space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                CRAFTING CIRCULAR SUPPLY CHAIN FOR
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">STRATEGIC METALS</span>
              </h1>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8">
                {metals.map((metal, index) => (
                  <div 
                    key={metal}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded px-2 py-1 sm:px-3 sm:py-2 text-center text-xs sm:text-sm font-medium"
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
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 right-4 sm:left-auto sm:right-8 z-10 flex flex-col sm:flex-row md:flex-col gap-2 sm:gap-3 md:gap-4">
        <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2">
          SUSTAINABILITY REPORT FY '24 | FY '23
        </Button>
        <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2">
          LITHIUM-ION BATTERY RECYCLING VIDEO →
        </Button>
      </div>
    </section>
  );
};