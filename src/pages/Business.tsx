import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";
import businessBg from "@/assets/business-bg.jpg";

const Business = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${businessBg})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Our Business
          </h1>
          
          <div className="space-y-8 text-lg text-white leading-relaxed">
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
      
      {/* THE JOY OF CREATING AN INSTITUTION Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              THE JOY OF CREATING AN INSTITUTION
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Growth, Dynamism & Speed
            </h3>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
              <p>
                Headquartered in Gujarat (India) Rubamin has evolved into an innovative and future-oriented business group that all its stakeholders can take pride in. 
                Rubamin has been driven by its core purpose – "The joy of creating an institution". We owe our success to our team of dedicated and motivated employees 
                but also acknowledge that we can be better and that this journey is unending.
              </p>
              
              <p>
                We have presence in metal recycling, specialty chemicals, metal intermediates, mining, industrial gas production, mineral exploration and engineering 
                services. Our products and process technology are a direct result of strong in-house research & development supported by state-of-the-art infrastructure.
              </p>
            </div>
            
            {/* Company Statistics */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="border border-gray-300 rounded-lg px-4 py-2 inline-block mb-4">
                  <span className="text-sm font-medium text-gray-600">Founded</span>
                </div>
                <div className="text-6xl font-bold text-gray-800 mb-2">1981</div>
                <div className="text-gray-600">First business venture</div>
              </div>
              
              <div className="text-center">
                <div className="border border-gray-300 rounded-lg px-4 py-2 inline-block mb-4">
                  <span className="text-sm font-medium text-gray-600">Turnover</span>
                </div>
                <div className="text-6xl font-bold text-gray-800 mb-2">~$300M</div>
                <div className="text-gray-600">Financial Year 2024-25</div>
              </div>
              
              <div className="text-center">
                <div className="border border-gray-300 rounded-lg px-4 py-2 inline-block mb-4">
                  <span className="text-sm font-medium text-gray-600">Strength</span>
                </div>
                <div className="text-6xl font-bold text-gray-800 mb-2">800+</div>
                <div className="text-gray-600">Employees</div>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>
              
              <div className="space-y-16">
                {/* 1981 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white border border-gray-300 rounded-lg p-4 inline-block">
                      <div className="text-2xl font-bold text-gray-800 mb-2">1981</div>
                      <div className="text-gray-600">- First Zinc Oxide Unit</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
                
                {/* 1985 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-1/2 pl-8">
                    <div className="text-2xl font-bold text-gray-800 mb-2">1985</div>
                    <div className="text-gray-600">- Two Zinc Oxide Units French Process</div>
                  </div>
                </div>
                
                {/* 1987 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white border border-gray-300 rounded-lg p-4 inline-block">
                      <div className="text-2xl font-bold text-gray-800 mb-2">1987</div>
                      <div className="text-gray-600">- Rubamin Incorporated</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
                
                {/* 1994 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-1/2 pl-8">
                    <div className="text-2xl font-bold text-gray-800 mb-2">1994</div>
                    <div className="text-gray-600">- Research collaboration with CSIR Lab</div>
                  </div>
                </div>
                
                {/* 1996 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white border border-gray-300 rounded-lg p-4 inline-block">
                      <div className="text-2xl font-bold text-gray-800 mb-2">1996</div>
                      <div className="text-gray-600">- Cobalt Refinery</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
                
                {/* 2011 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white border border-gray-300 rounded-lg p-4 inline-block">
                      <div className="text-2xl font-bold text-gray-800 mb-2">2011</div>
                      <div className="text-gray-600">- Molybdenum from Spent Catalyst</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
                
                {/* 2016 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-1/2 pl-8">
                    <div className="text-2xl font-bold text-gray-800 mb-2">2016</div>
                    <div className="text-gray-600">- Tungsten Recovery from Catalyst Recycling</div>
                  </div>
                </div>
                
                {/* 2022 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white border border-gray-300 rounded-lg p-4 inline-block">
                      <div className="text-2xl font-bold text-gray-800 mb-2">2022</div>
                      <div className="text-gray-600">- Zinc Oxide Plant for Skincare</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
                
                {/* 2024 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-1/2 pl-8">
                    <div className="text-2xl font-bold text-gray-800 mb-2">2024</div>
                    <div className="text-gray-600">- 35,000 MTPA Catalyst Recycling</div>
                  </div>
                </div>
                
                {/* 2025 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white border border-gray-300 rounded-lg p-4 inline-block">
                      <div className="text-2xl font-bold text-gray-800 mb-2">2025</div>
                      <div className="text-gray-600">
                        - 10,000 MTPA Lithium-Ion Battery (LIB) Shredding Facility<br/>
                        - 7,500 MTPA LIB Black Mass Refining
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Board Members Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-16 text-center">
            Board Members
          </h2>
          
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div className="text-center">
              <div className="w-48 h-64 bg-gray-200 mx-auto mb-4 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mr. Atul Dalmia</h3>
              <p className="text-gray-600 text-sm">Chairman & Managing Director</p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-64 bg-gray-200 mx-auto mb-4 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mr. Anil Patel</h3>
              <p className="text-gray-600 text-sm">Managing Director</p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-64 bg-gray-200 mx-auto mb-4 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mr. Bhuwan Purohit</h3>
              <p className="text-gray-600 text-sm">Whole Time Director Corporate Strategy & Planning</p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-64 bg-gray-200 mx-auto mb-4 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mr. Suresh K. R.</h3>
              <p className="text-gray-600 text-sm">Whole Time Director & Business Head (Catalyst & Battery Recycling)</p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-64 bg-gray-200 mx-auto mb-4 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mr. Ranjit Singh</h3>
              <p className="text-gray-600 text-sm">Non-Executive Director</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 justify-center">
            <div className="text-center">
              <div className="w-48 h-64 bg-gray-200 mx-auto mb-4 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ms. Priyanka Irani</h3>
              <p className="text-gray-600 text-sm">Non-Executive Director</p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-64 bg-gray-200 mx-auto mb-4 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mr. Soumitra Purkayastha</h3>
              <p className="text-gray-600 text-sm">Non-Executive Director</p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-64 bg-gray-200 mx-auto mb-4 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mr. Milin Mehta</h3>
              <p className="text-gray-600 text-sm">Non-Executive Director</p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-64 bg-gray-200 mx-auto mb-4 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mr. Sanjay Dudhoria</h3>
              <p className="text-gray-600 text-sm">Chief Financial Officer</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Research & Development Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                Research & Development
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Rubamin R&D programs are focussed to support our short-term and long-term business objectives. Our dedicated research team works on developing innovative solutions for metal recovery and recycling processes.
              </p>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Business;