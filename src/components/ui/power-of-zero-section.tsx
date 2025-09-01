import circularRecyclingImg from "@/assets/circular-recycling.jpg";

export const PowerOfZeroSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-rubamin-dark leading-tight">
              Harnessing the 'Power of Zero' for a better tomorrow
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Rubamin is working towards what it terms as - harnessing the 'Power of Zero'. We are 
                progressively making investments in future-oriented circular reclamation of strategic metals by 
                systematically replacing all non-renewable inputs or polluting outcomes. There are concrete 
                steps being taken for decarbonization and green energy future.
              </p>
            </div>

            <div className="pt-4">
              <button className="bg-rubamin-red text-white px-6 py-3 rounded-md hover:bg-rubamin-red/90 transition-colors">
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