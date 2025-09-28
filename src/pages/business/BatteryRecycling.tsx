import { Footer } from "@/components/ui/footer";

const BatteryRecycling = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-techcorp-dark mb-6 sm:mb-8">
            Battery Recycling
          </h1>
          
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p className="text-lg sm:text-xl text-techcorp-green font-medium">
              Advanced lithium-ion battery recycling for a sustainable future
            </p>
            
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-techcorp-dark mb-3 sm:mb-4">Lithium-Ion Battery Processing</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>• Electric vehicle battery packs</li>
                <li>• Energy storage system batteries</li>
                <li>• Consumer electronics batteries</li>
                <li>• Industrial battery systems</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
              <div className="bg-techcorp-green/10 p-4 sm:p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-bold text-techcorp-dark mb-3">Recovery Rates</h4>
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>Lithium:</span>
                    <span className="font-bold text-techcorp-green">95%+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cobalt:</span>
                    <span className="font-bold text-techcorp-green">98%+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nickel:</span>
                    <span className="font-bold text-techcorp-green">96%+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Manganese:</span>
                    <span className="font-bold text-techcorp-green">94%+</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <h4 className="text-lg sm:text-xl font-bold text-techcorp-dark mb-3">Process Innovation</h4>
                <p className="text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
            
            <div className="bg-techcorp-dark text-white p-4 sm:p-6 md:p-8 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Environmental Impact</h3>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BatteryRecycling;