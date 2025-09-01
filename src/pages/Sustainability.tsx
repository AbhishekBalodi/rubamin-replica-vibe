const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-rubamin-dark mb-8">
            Sustainability at Rubamin
          </h1>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl text-rubamin-green font-medium">
              Building a circular economy for strategic metals while minimizing environmental impact.
            </p>
            
            <div className="bg-rubamin-green/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-rubamin-dark mb-4">Our Environmental Commitment</h3>
              <ul className="space-y-3">
                <li>• Zero liquid discharge facility design</li>
                <li>• 75-acre green recycling complex in Gujarat</li>
                <li>• Advanced emission control systems</li>
                <li>• Renewable energy integration</li>
                <li>• Waste-to-resource conversion technology</li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-rubamin-dark">Circular Economy Impact</h3>
                <p>
                  Our cradle-to-cradle approach ensures that materials maintain their highest value 
                  throughout multiple life cycles, reducing the need for virgin material extraction.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-rubamin-dark mb-2">Resource Recovery Rate</h4>
                  <p className="text-3xl font-bold text-rubamin-green">95%+</p>
                  <p className="text-sm text-gray-600">Average metal recovery from waste streams</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-rubamin-dark">Sustainability Reports</h3>
                <p>
                  Download our comprehensive sustainability reports to learn more about our 
                  environmental performance and social impact initiatives.
                </p>
                <div className="space-y-3">
                  <a href="#" className="block bg-rubamin-dark text-white p-4 rounded hover:bg-rubamin-dark/90 transition-colors">
                    Sustainability Report FY '24
                  </a>
                  <a href="#" className="block bg-rubamin-gray text-rubamin-dark p-4 rounded hover:bg-rubamin-gray/80 transition-colors">
                    Sustainability Report FY '23
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;