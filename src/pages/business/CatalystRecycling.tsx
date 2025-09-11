import { Footer } from "@/components/ui/footer";

const CatalystRecycling = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-techcorp-dark mb-8">
            Catalyst Recycling
          </h1>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl text-techcorp-green font-medium">
              Recovering precious and strategic metals from spent industrial catalysts
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-techcorp-dark mb-4">Catalyst Types We Process</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-techcorp-dark mb-2">Petrochemical Catalysts</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Hydrocracking catalysts</li>
                    <li>• Reforming catalysts</li>
                    <li>• Desulfurization catalysts</li>
                    <li>• Isomerization catalysts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-techcorp-dark mb-2">Automotive Catalysts</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Catalytic converters</li>
                    <li>• Diesel particulate filters</li>
                    <li>• SCR catalysts</li>
                    <li>• Oxidation catalysts</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-techcorp-green/10 p-6 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-techcorp-green mb-2">Platinum</h4>
                <p className="text-sm text-gray-600">High-value recovery from automotive catalysts</p>
              </div>
              <div className="bg-techcorp-green/10 p-6 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-techcorp-green mb-2">Palladium</h4>
                <p className="text-sm text-gray-600">Critical metal for gasoline engine catalysts</p>
              </div>
              <div className="bg-techcorp-green/10 p-6 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-techcorp-green mb-2">Rhodium</h4>
                <p className="text-sm text-gray-600">Rare metal essential for NOx reduction</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-techcorp-dark mb-4">Recovery Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-techcorp-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-techcorp-dark">Collection & Sorting</h4>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-techcorp-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-techcorp-dark">Pre-treatment</h4>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-techcorp-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-techcorp-dark">Metal Recovery</h4>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-techcorp-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-techcorp-dark">Refinement</h4>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
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

export default CatalystRecycling;