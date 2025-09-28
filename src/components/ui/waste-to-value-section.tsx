import batteryImage from "@/assets/battery-recycling.png";

export const WasteToValueSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <img 
                src={batteryImage} 
                alt="Waste to Value Battery Recycling"
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-techcorp-dark leading-tight">
              Reclaiming value from industrial waste for a sustainable future
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </p>
              
              <p className="font-medium text-techcorp-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="pt-3 sm:pt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-techcorp-dark mb-3 sm:mb-4">
                Closing the loop through cradle-to-cradle recycling technology
              </h3>
              <p className="text-base sm:text-lg text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};