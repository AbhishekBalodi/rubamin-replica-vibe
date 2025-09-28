import { Footer } from "@/components/ui/footer";

const ZincRecycling = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-techcorp-dark mb-8">
            Zinc Recycling
          </h1>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl text-techcorp-green font-medium">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-techcorp-dark mb-4">Zinc Waste Sources</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-techcorp-dark mb-3">Industrial Sources</h4>
                  <ul className="space-y-2">
                    <li>• Lorem ipsum dolor sit</li>
                    <li>• Consectetur adipiscing elit</li>
                    <li>• Sed do eiusmod tempor</li>
                    <li>• Incididunt ut labore</li>
                    <li>• Et dolore magna aliqua</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-techcorp-dark mb-3">Secondary Sources</h4>
                  <ul className="space-y-2">
                    <li>• Ut enim ad minim veniam</li>
                    <li>• Quis nostrud exercitation</li>
                    <li>• Ullamco laboris nisi</li>
                    <li>• Ut aliquip ex ea commodo</li>
                    <li>• Duis aute irure dolor</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-techcorp-green/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-techcorp-dark mb-4">Processing Capabilities</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-techcorp-green mb-2">50,000+</div>
                  <div className="text-sm text-gray-600">MT Annual Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-techcorp-green mb-2">92%+</div>
                  <div className="text-sm text-gray-600">Zinc Recovery Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-techcorp-green mb-2">99.5%</div>
                  <div className="text-sm text-gray-600">Product Purity</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-techcorp-dark mb-4">Advanced Technology</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-techcorp-green pl-4">
                  <h4 className="font-bold text-techcorp-dark mb-2">Waelz Kiln Process</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="border-l-4 border-techcorp-green pl-4">
                  <h4 className="font-bold text-techcorp-dark mb-2">Hydrometallurgy</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-techcorp-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Product Applications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Zinc Oxide</h4>
                  <p className="text-gray-300">Rubber industry, ceramics, paints, and pharmaceutical applications.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Zinc Sulfate</h4>
                  <p className="text-gray-300">Agriculture, animal feed supplements, and chemical manufacturing.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Zinc Metal</h4>
                  <p className="text-gray-300">Galvanizing, die-casting, and alloy production.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Zinc Chloride</h4>
                  <p className="text-gray-300">Flux for soldering, wood preservation, and textile processing.</p>
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

export default ZincRecycling;