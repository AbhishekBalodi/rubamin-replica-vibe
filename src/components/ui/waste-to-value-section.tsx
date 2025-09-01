import batteryImage from "@/assets/battery-recycling.png";

export const WasteToValueSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={batteryImage} 
                alt="Waste to Value Battery Recycling"
                className="w-80 h-80 object-contain"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-rubamin-dark leading-tight">
              Reclaiming value from industrial waste for a sustainable future
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                What others term as 'hazardous', our technology helps us view them as 'recyclables'. 
                Where others see 'waste' our process enables us to see 'value'. Be it for catalyst 
                from oil refineries, Zinc waste from galvanizing plants or batteries from electric 
                vehicles or production scrap, we offer recycling solutions to your end-of-life products.
              </p>
              
              <p className="font-medium text-rubamin-dark">
                Our solutions meet the growing demand of sustainably sourced materials while 
                lowering environmental impact.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-2xl font-bold text-rubamin-dark mb-4">
                Closing the loop through cradle-to-cradle recycling technology
              </h3>
              <p className="text-lg text-gray-700">
                We are a leader in advanced recycling of critical metals from process wastes at 
                industrial scale in India. Our 75 Acres, Green Recycling Complex in Gujarat is 
                fast transforming into a comprehensive hub for sustainable metal recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};