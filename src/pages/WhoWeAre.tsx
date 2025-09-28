import { Footer } from "@/components/ui/footer";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-techcorp-dark mb-6 sm:mb-8">
            Who We Are
          </h1>
          
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p className="text-lg sm:text-xl text-techcorp-dark font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-techcorp-dark mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-techcorp-dark mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-techcorp-green mb-2">150</div>
                <div className="text-xs sm:text-sm text-gray-600">Dummy Facilities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-techcorp-green mb-2">25</div>
                <div className="text-xs sm:text-sm text-gray-600">Sample Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-techcorp-green mb-2">85%+</div>
                <div className="text-xs sm:text-sm text-gray-600">Example Rate</div>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-12">
              <h3 className="text-xl sm:text-2xl font-bold text-techcorp-dark mb-4 sm:mb-6">Our Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-techcorp-green/10 p-4 sm:p-6 rounded-lg">
                  <h4 className="font-bold text-techcorp-dark mb-2 text-sm sm:text-base">Innovation</h4>
                  <p className="text-xs sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <div className="bg-techcorp-green/10 p-4 sm:p-6 rounded-lg">
                  <h4 className="font-bold text-techcorp-dark mb-2 text-sm sm:text-base">Sustainability</h4>
                  <p className="text-xs sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
                </div>
                <div className="bg-techcorp-green/10 p-4 sm:p-6 rounded-lg">
                  <h4 className="font-bold text-techcorp-dark mb-2 text-sm sm:text-base">Excellence</h4>
                  <p className="text-xs sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
                </div>
                <div className="bg-techcorp-green/10 p-4 sm:p-6 rounded-lg">
                  <h4 className="font-bold text-techcorp-dark mb-2 text-sm sm:text-base">Integrity</h4>
                  <p className="text-xs sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhoWeAre;