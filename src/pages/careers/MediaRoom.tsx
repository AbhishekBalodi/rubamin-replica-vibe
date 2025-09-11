import { Footer } from "@/components/ui/footer";

const MediaRoom = () => {
  const mediaItems = [
    {
      title: "Chairman's Message on Sustainability",
      date: "January 15, 2025",
      type: "Press Release",
      excerpt: "Our commitment to zero-waste recycling and circular economy initiatives for strategic metals."
    },
    {
      title: "TECHCORP Expands Battery Recycling Capacity",
      date: "December 10, 2024",
      type: "News",
      excerpt: "New facility addition increases lithium-ion battery processing capacity by 40%."
    },
    {
      title: "Award for Excellence in Environmental Stewardship",
      date: "November 22, 2024",
      type: "Award",
      excerpt: "Recognition for outstanding contribution to sustainable metal recycling practices."
    },
    {
      title: "Partnership with Global EV Manufacturers",
      date: "October 5, 2024",
      type: "Partnership",
      excerpt: "Strategic alliance to establish comprehensive battery recycling network."
    },
    {
      title: "Q3 2024 Financial Results",
      date: "September 15, 2024",
      type: "Financial",
      excerpt: "Strong performance driven by increased demand for recycled strategic metals."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-techcorp-dark mb-8">
            Media Room
          </h1>
          
          <div className="space-y-8">
              <p className="text-xl text-techcorp-green font-medium">
                Latest news, press releases, and updates from TECHCORP
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-techcorp-dark mb-6">Featured Story</h3>
              <div className="border-l-4 border-techcorp-green pl-6">
                <h4 className="text-xl font-bold text-techcorp-dark mb-2">
                  TECHCORP Achieves Milestone in Circular Economy Implementation
                </h4>
                <p className="text-gray-600 mb-3">January 20, 2025 • Featured</p>
                <p className="text-gray-700">
                  TECHCORP has successfully processed over 100,000 tons of strategic metals through 
                  its circular economy approach, setting new industry benchmarks for sustainable 
                  resource recovery and environmental stewardship.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-techcorp-dark">Recent News & Updates</h3>
              
              {mediaItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-techcorp-gray hover:border-techcorp-green transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-techcorp-green/20 text-techcorp-dark px-3 py-1 rounded text-sm font-medium">
                      {item.type}
                    </span>
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-techcorp-dark mb-2">{item.title}</h4>
                  <p className="text-gray-700 mb-3">{item.excerpt}</p>
                  <a href="#" className="text-techcorp-green hover:text-techcorp-dark font-medium transition-colors">
                    Read More →
                  </a>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-techcorp-green/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-techcorp-dark mb-3">Media Contacts</h4>
                <div className="space-y-2">
                  <p><strong>Press Inquiries:</strong></p>
                  <p>media@techcorp.com</p>
                  <p>+1-415-555-0123</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-techcorp-dark mb-3">Download Resources</h4>
                <div className="space-y-3">
                  <a href="#" className="block text-techcorp-green hover:text-techcorp-dark transition-colors">
                    📄 Press Kit (PDF)
                  </a>
                  <a href="#" className="block text-techcorp-green hover:text-techcorp-dark transition-colors">
                    🖼️ High-Resolution Images
                  </a>
                  <a href="#" className="block text-techcorp-green hover:text-techcorp-dark transition-colors">
                    📊 Company Fact Sheet
                  </a>
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

export default MediaRoom;