const Business = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-rubamin-dark mb-8">
            Our Business
          </h1>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              Rubamin is pioneering the circular economy for strategic metals through advanced 
              recycling technologies. We transform industrial waste into valuable resources, 
              creating sustainable supply chains for critical materials.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-rubamin-dark mb-4">Metal Recovery</h3>
                <p>Advanced processing of zinc, lithium, nickel, cobalt and other strategic metals from industrial waste streams.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-rubamin-dark mb-4">Battery Recycling</h3>
                <p>Comprehensive lithium-ion battery recycling solutions for electric vehicles and energy storage systems.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-rubamin-dark mb-4">Catalyst Processing</h3>
                <p>Recovery of precious and strategic metals from spent catalysts used in oil refineries and chemical plants.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-rubamin-dark mb-4">Industrial Partnerships</h3>
                <p>End-to-end waste management solutions for manufacturing and processing industries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;