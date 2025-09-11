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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-techcorp-dark mb-16 text-center">
          Our Business
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {businessCards.map((card, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold">{card.title}</h3>
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