import { Footer } from "@/components/ui/footer";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-techcorp-dark mb-8">
            Who We Are
          </h1>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl text-techcorp-dark font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-techcorp-dark mb-4">Our Mission</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-techcorp-dark mb-4">Our Vision</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-techcorp-green mb-2">150</div>
                <div className="text-sm text-gray-600">Dummy Facilities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-techcorp-green mb-2">25</div>
                <div className="text-sm text-gray-600">Sample Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-techcorp-green mb-2">85%+</div>
                <div className="text-sm text-gray-600">Example Rate</div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-techcorp-dark mb-6">Our Values</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-techcorp-green/10 p-6 rounded-lg">
                  <h4 className="font-bold text-techcorp-dark mb-2">Innovation</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <div className="bg-techcorp-green/10 p-6 rounded-lg">
                  <h4 className="font-bold text-techcorp-dark mb-2">Sustainability</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
                </div>
                <div className="bg-techcorp-green/10 p-6 rounded-lg">
                  <h4 className="font-bold text-techcorp-dark mb-2">Excellence</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
                </div>
                <div className="bg-techcorp-green/10 p-6 rounded-lg">
                  <h4 className="font-bold text-techcorp-dark mb-2">Integrity</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
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