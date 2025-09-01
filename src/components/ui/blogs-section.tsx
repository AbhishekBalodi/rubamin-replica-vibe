import blogImg1 from "@/assets/blog-1.jpg";
import blogImg2 from "@/assets/blog-2.jpg";

export const BlogsSection = () => {
  const blogs = [
    {
      title: "E-Bicycle Rally for a Plastic-Free Future!",
      excerpt: "The Gujarat Pollution Control Board (GPCB), in collaboration with Rubamin and Ha...",
      image: blogImg1,
      link: "#"
    },
    {
      title: "We are extremely happy to welcome Mrs. Renuka Ramnath",
      excerpt: "Welcoming distinguished guests and industry leaders to our facility...", 
      image: blogImg2,
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-rubamin-dark">
            Our Blogs
          </h2>
          <button className="text-rubamin-red hover:text-rubamin-red/80 font-medium underline">
            View More
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-rubamin-dark mb-3 group-hover:text-rubamin-red transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600">{blog.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};