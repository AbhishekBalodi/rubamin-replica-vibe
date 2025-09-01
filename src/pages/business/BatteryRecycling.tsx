import { Footer } from "@/components/ui/footer";

const BatteryRecycling = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-rubamin-dark mb-8">
            Battery Recycling
          </h1>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl text-rubamin-green font-medium">
              Advanced lithium-ion battery recycling for a sustainable future
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-rubamin-dark mb-4">Lithium-Ion Battery Processing</h3>
              <p className="mb-4">
                Our state-of-the-art facility processes lithium-ion batteries from electric vehicles, 
                energy storage systems, and consumer electronics. We recover critical materials including 
                lithium, cobalt, nickel, and manganese.
              </p>
              <ul className="space-y-2">
                <li>• Electric vehicle battery packs</li>
                <li>• Energy storage system batteries</li>
                <li>• Consumer electronics batteries</li>
                <li>• Industrial battery systems</li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-rubamin-green/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-rubamin-dark mb-3">Recovery Rates</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Lithium:</span>
                    <span className="font-bold text-rubamin-green">95%+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cobalt:</span>
                    <span className="font-bold text-rubamin-green">98%+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nickel:</span>
                    <span className="font-bold text-rubamin-green">96%+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Manganese:</span>
                    <span className="font-bold text-rubamin-green">94%+</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-rubamin-dark mb-3">Process Innovation</h4>
                <p>
                  Our proprietary hydrometallurgical process ensures maximum recovery of valuable 
                  materials while maintaining the highest environmental standards. Zero liquid 
                  discharge and minimal carbon footprint.
                </p>
              </div>
            </div>
            
            <div className="bg-rubamin-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Environmental Impact</h3>
              <p>
                Battery recycling prevents hazardous materials from entering landfills and reduces 
                the need for mining new materials. Our process recovers up to 95% of valuable metals, 
                creating a true circular economy for battery materials.
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