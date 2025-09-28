export const VideoSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-techcorp-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            Circular Economy Project for Recycling of Critical Metals from Used Lithium Ion Batteries
          </h2>
          
          <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 sm:p-6 cursor-pointer hover:bg-white/30 transition-colors">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
              <button className="text-white text-xs sm:text-sm underline hover:no-underline">
                Share Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};