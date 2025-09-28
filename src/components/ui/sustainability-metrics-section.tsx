import environmentImg from "@/assets/environment.jpg";
import socialImg from "@/assets/social.jpg";
import governanceImg from "@/assets/governance.jpg";

export const SustainabilityMetricsSection = () => {
  const metrics = [
    {
      label: "GHG Emissions",
      value: "1.85 tCO2/MT",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit"
    },
    {
      label: "Elemental Recovery", 
      value: ">85%",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing"
    },
    {
      label: "Waste Treatment",
      value: "45,000+ TPA", 
      description: "Lorem ipsum dolor sit amet consectetur"
    }
  ];

  const sustainabilityPillars = [
    {
      title: "Environment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: environmentImg,
      link: "/sustainability#environment"
    },
    {
      title: "Social", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
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
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-techcorp-red mb-2">
                {metric.value}
              </div>
              <div className="text-lg sm:text-xl font-semibold text-techcorp-dark mb-2">
                {metric.label}
              </div>
              <div className="text-gray-600 text-sm sm:text-base px-2">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Sustainability Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sustainabilityPillars.map((pillar, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-techcorp-dark mb-3 sm:mb-4">{pillar.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{pillar.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};