import { Footer } from "@/components/ui/footer";

const Blogs = () => {
  const blogPosts = [
    {
      title: "The Future of Battery Recycling: Innovations in Lithium Recovery",
      date: "January 18, 2025",
      category: "Technology",
      author: "Dr. Priya Sharma",
      image: "/api/placeholder/400/250",
      excerpt: "Exploring breakthrough technologies that are revolutionizing how we recover lithium from spent batteries, creating a truly sustainable circular economy.",
      readTime: "5 min read"
    },
    {
      title: "Circular Economy in Action: From Waste to Strategic Resources",
      date: "January 10, 2025",
      category: "Sustainability",
      author: "Rajesh Kumar",
      image: "/api/placeholder/400/250",
      excerpt: "How Rubamin's innovative approach is transforming industrial waste into valuable strategic metals, reducing environmental impact while meeting growing demand.",
      readTime: "7 min read"
    },
    {
      title: "The Critical Role of Catalyst Recycling in Clean Energy",
      date: "December 28, 2024",
      category: "Environment",
      author: "Dr. Anita Patel",
      image: "/api/placeholder/400/250",
      excerpt: "Understanding how precious metal recovery from spent catalysts supports the clean energy transition and reduces dependence on mining.",
      readTime: "6 min read"
    },
    {
      title: "Zinc Recycling: Building Sustainable Infrastructure",
      date: "December 15, 2024",
      category: "Industry Insights",
      author: "Vikash Singh",
      image: "/api/placeholder/400/250",
      excerpt: "The importance of zinc in modern infrastructure and how advanced recycling technologies are ensuring sustainable supply for future generations.",
      readTime: "4 min read"
    },
    {
      title: "Zero Waste Manufacturing: Rubamin's Environmental Commitment",
      date: "November 30, 2024",
      category: "Environment",
      author: "Meera Joshi",
      image: "/api/placeholder/400/250",
      excerpt: "Deep dive into our zero liquid discharge facility and how we're setting new standards for environmental responsibility in metal recycling.",
      readTime: "8 min read"
    },
    {
      title: "Strategic Metals for Electric Vehicle Revolution",
      date: "November 18, 2024",
      category: "Technology",
      author: "Dr. Arjun Reddy",
      image: "/api/placeholder/400/250",
      excerpt: "Analyzing the critical metals required for EV batteries and how recycling is essential for sustainable electric mobility.",
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "Technology", "Sustainability", "Environment", "Industry Insights"];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-rubamin-dark mb-8">
            Rubamin Blogs
          </h1>
          
          <div className="space-y-8">
            <p className="text-xl text-rubamin-green font-medium">
              Insights on sustainable recycling, strategic metals, and the circular economy
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-rubamin-green text-rubamin-green hover:bg-rubamin-green hover:text-white transition-colors duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Featured Post */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 bg-rubamin-gray"></div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-rubamin-green text-white px-3 py-1 rounded text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-rubamin-dark mb-3">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-700 mb-4">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-600">By {blogPosts[0].author}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-600">{blogPosts[0].readTime}</span>
                    </div>
                    <a href="#" className="text-rubamin-green hover:text-rubamin-dark font-medium transition-colors">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-rubamin-gray"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-rubamin-green/20 text-rubamin-dark px-3 py-1 rounded text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-rubamin-dark mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <span>By {post.author}</span>
                        <span className="mx-1">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <a href="#" className="text-rubamin-green hover:text-rubamin-dark font-medium transition-colors">
                        Read →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="bg-rubamin-dark text-white p-8 rounded-lg">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="mb-6">
                  Subscribe to our newsletter for the latest insights on sustainable recycling 
                  and strategic metals industry trends.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded text-black"
                  />
                  <button className="bg-rubamin-green hover:bg-rubamin-green/90 px-6 py-2 rounded font-medium transition-colors">
                    Subscribe
                  </button>
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

export default Blogs;