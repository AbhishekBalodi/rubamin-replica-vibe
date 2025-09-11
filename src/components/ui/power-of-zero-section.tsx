import circularRecyclingImg from "@/assets/circular-recycling.jpg";

export const PowerOfZeroSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-techcorp-dark leading-tight">
              Harnessing the 'Power of Zero' for a better tomorrow
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                TECHCORP is working towards what it terms as - harnessing the 'Power of Zero'. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="pt-4">
              <button className="bg-techcorp-red text-white px-6 py-3 rounded-md hover:bg-techcorp-red/90 transition-colors">
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
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};