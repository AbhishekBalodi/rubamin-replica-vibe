import { Footer } from "@/components/ui/footer";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-rubamin-dark mb-8">
            Who We Are
          </h1>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl text-rubamin-dark font-medium">
              Rubamin is India's leading advanced recycling company for strategic metals, 
              transforming industrial waste into valuable resources through innovative technology.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-rubamin-dark mb-4">Our Mission</h3>
              <p>
                To create sustainable supply chains for strategic metals by pioneering advanced 
                recycling technologies that transform waste into valuable resources while minimizing 
                environmental impact.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-rubamin-dark mb-4">Our Vision</h3>
              <p>
                To be the global leader in circular economy solutions for strategic metals, 
                enabling industries worldwide to achieve sustainable resource utilization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-rubamin-green mb-2">75</div>
                <div className="text-sm text-gray-600">Acres Green Complex</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rubamin-green mb-2">9</div>
                <div className="text-sm text-gray-600">Strategic Metals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rubamin-green mb-2">95%+</div>
                <div className="text-sm text-gray-600">Recovery Rate</div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-rubamin-dark mb-6">Our Values</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-rubamin-green/10 p-6 rounded-lg">
                  <h4 className="font-bold text-rubamin-dark mb-2">Innovation</h4>
                  <p>Continuously advancing recycling technologies for better resource recovery.</p>
                </div>
                <div className="bg-rubamin-green/10 p-6 rounded-lg">
                  <h4 className="font-bold text-rubamin-dark mb-2">Sustainability</h4>
                  <p>Environmental stewardship in every aspect of our operations.</p>
                </div>
                <div className="bg-rubamin-green/10 p-6 rounded-lg">
                  <h4 className="font-bold text-rubamin-dark mb-2">Excellence</h4>
                  <p>Maintaining the highest standards in safety, quality, and performance.</p>
                </div>
                <div className="bg-rubamin-green/10 p-6 rounded-lg">
                  <h4 className="font-bold text-rubamin-dark mb-2">Integrity</h4>
                  <p>Building trust through transparent and ethical business practices.</p>
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