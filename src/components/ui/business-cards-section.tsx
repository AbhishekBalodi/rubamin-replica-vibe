import catalystImg from "@/assets/catalyst-recycling.jpg";
import batteryImg from "@/assets/lithium-battery-recycling.jpg";
import zincImg from "@/assets/zinc-recycling.jpg";

export const BusinessCardsSection = () => {
  const businessCards = [
    {
      title: "Catalyst Recycling",
      image: catalystImg,
      alt: "Catalyst Recycling",
      link: "/business/catalyst-recycling"
    },
    {
      title: "Lithium Ion Battery Recycling", 
      image: batteryImg,
      alt: "Lithium Ion Battery Recycling",
      link: "/business/battery-recycling"
    },
    {
      title: "Zinc Recycling",
      image: zincImg,
      alt: "Zinc Recycling", 
      link: "/business/zinc-recycling"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-techcorp-dark mb-8 sm:mb-12 md:mb-16 text-center">
          Our Business
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {businessCards.map((card, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-white text-lg sm:text-xl font-bold">{card.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};