import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Process Engineer - Metals Recovery",
      department: "Engineering",
      location: "Demo City, USA",
      type: "Full-time"
    },
    {
      title: "Environmental Compliance Manager",
      department: "Environment & Safety",
      location: "Demo City, USA",
      type: "Full-time"
    },
    {
      title: "Research Scientist - Battery Recycling",
      department: "R&D",
      location: "Demo City, USA",
      type: "Full-time"
    },
    {
      title: "Operations Supervisor",
      department: "Operations",
      location: "Demo City, USA",
      type: "Full-time"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-techcorp-dark mb-8">
            Careers at TECHCORP
          </h1>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl text-techcorp-dark font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <div className="bg-techcorp-green/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-techcorp-dark mb-4">Why Work With Us?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li>• Lorem ipsum dolor sit amet</li>
                  <li>• Consectetur adipiscing elit</li>
                  <li>• Sed do eiusmod tempor incididunt</li>
                  <li>• Ut labore et dolore magna</li>
                </ul>
                <ul className="space-y-3">
                  <li>• Aliqua ut enim ad minim</li>
                  <li>• Veniam quis nostrud exercitation</li>
                  <li>• Modern facilities in Demo City</li>
                  <li>• Ullamco laboris nisi ut aliquip</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-techcorp-dark mb-6">Current Openings</h3>
              <div className="space-y-4">
                {jobOpenings.map((job, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-techcorp-green">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-techcorp-dark">{job.title}</h4>
                      <span className="bg-techcorp-green/20 text-techcorp-dark px-3 py-1 rounded text-sm">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span>📍 {job.location}</span>
                      <span>🏢 {job.department}</span>
                    </div>
                    <Button variant="outline" className="border-techcorp-green text-techcorp-dark hover:bg-techcorp-green hover:text-white">
                      Apply Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-techcorp-dark mb-4">Don't See Your Role?</h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <Button className="bg-techcorp-green hover:bg-techcorp-green/90 text-white">
                Submit General Application
              </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Careers;