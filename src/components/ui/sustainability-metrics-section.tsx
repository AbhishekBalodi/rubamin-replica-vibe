import environmentImg from "@/assets/environment.jpg";
import socialImg from "@/assets/social.jpg";
import governanceImg from "@/assets/governance.jpg";

export const SustainabilityMetricsSection = () => {
  const metrics = [
    {
      label: "GHG Emissions",
      value: "2.08 tCO2/MT",
      description: "Scope 1, Scope 2, and Scope 3 combined emissions for FY23-24"
    },
    {
      label: "Elemental Recovery", 
      value: ">90%",
      description: "Minimum recovery for all elements in all business units"
    },
    {
      label: "Waste Treatment",
      value: "50,000+ TPA", 
      description: "Input of recyclables to all processes"
    }
  ];

  const sustainabilityPillars = [
    {
      title: "Environment",
      description: "We believe that we should all be responsible stewards of the environment as it is our most important stakeholder. Our business model itself speaks of our belief and commitment.",
      image: environmentImg,
      link: "/sustainability#environment"
    },
    {
      title: "Social", 
      description: "We are focused on meeting the highest standards for employee health and safety, and building a workplace that promotes diversity, inclusion, dignity, and respect.",
      image: socialImg,
      link: "/sustainability#social"
    },
    {
      title: "Governance",
      description: "TECHCORP focuses on improving transparency and accountability throughout its operations. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: governanceImg,
      link: "/sustainability#governance"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-techcorp-red mb-2">
                {metric.value}
              </div>
              <div className="text-xl font-semibold text-techcorp-dark mb-2">
                {metric.label}
              </div>
              <div className="text-gray-600 text-sm">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Sustainability Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {sustainabilityPillars.map((pillar, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-techcorp-dark mb-4">{pillar.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};