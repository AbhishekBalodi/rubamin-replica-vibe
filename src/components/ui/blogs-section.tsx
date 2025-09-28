import blogImg1 from "@/assets/blog-1.jpg";
import blogImg2 from "@/assets/blog-2.jpg";

export const BlogsSection = () => {
  const blogs = [
    {
      title: "Lorem Ipsum Dolor Sit Amet Event",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      image: blogImg1,
      link: "#"
    },
    {
      title: "Consectetur Adipiscing Elit Welcome Event",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt...",
      image: blogImg2,
      link: "#"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-techcorp-dark">
            Our Blogs
          </h2>
          <button className="text-techcorp-red hover:text-techcorp-red/80 font-medium underline text-sm sm:text-base">
            View More
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-techcorp-dark mb-2 sm:mb-3 group-hover:text-techcorp-red transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">{blog.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};