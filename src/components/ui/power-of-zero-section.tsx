import circularRecyclingImg from "@/assets/circular-recycling.jpg";

export const PowerOfZeroSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-techcorp-dark leading-tight">
              Harnessing the 'Power of Zero' for a better tomorrow
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                TECHCORP is working towards what it terms as - harnessing the 'Power of Zero'. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="pt-3 sm:pt-4">
              <button className="bg-techcorp-red text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-md hover:bg-techcorp-red/90 transition-colors">
                Learn more...
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={circularRecyclingImg} 
                alt="Circular Recycling Technology"
                className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};