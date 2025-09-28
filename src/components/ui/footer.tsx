import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-techcorp-dark text-white py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-sm flex items-center justify-center mr-2 sm:mr-3">
                <span className="text-white font-bold text-sm sm:text-lg">T</span>
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-wider">DUMMYCORP</span>
            </div>
            
            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-300">
              <p className="font-semibold text-white">DUMMYCORP Industries Ltd.</p>
              <p>Dummy Plaza, 10th Floor,</p>
              <p>Lorem Street, Building 42,</p>
              <p>Sample Business District,</p>
              <p>Demo City, DC - 12345, USA</p>
            </div>
          </div>

          {/* Business Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Business</h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <Link to="/business" className="block text-gray-300 hover:text-white transition-colors">
                Battery Recycling
              </Link>
              <Link to="/business" className="block text-gray-300 hover:text-white transition-colors">
                Catalyst Recycling
              </Link>
              <Link to="/business" className="block text-gray-300 hover:text-white transition-colors">
                Zinc Recycling
              </Link>
            </div>
          </div>

          {/* Sustainability Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Sustainability</h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <Link to="/sustainability" className="block text-gray-300 hover:text-white transition-colors">
                Environment
              </Link>
              <Link to="/sustainability" className="block text-gray-300 hover:text-white transition-colors">
                Social
              </Link>
              <Link to="/sustainability" className="block text-gray-300 hover:text-white transition-colors">
                Governance
              </Link>
            </div>
          </div>

          {/* Who We Are Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Who We Are</h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <Link to="/who-we-are" className="block text-gray-300 hover:text-white transition-colors">
                Board Members
              </Link>
              <Link to="/who-we-are" className="block text-gray-300 hover:text-white transition-colors">
                Research & Development
              </Link>
              <Link to="/who-we-are" className="block text-gray-300 hover:text-white transition-colors">
                Quality Assurance
              </Link>
              <Link to="/careers" className="block text-gray-300 hover:text-white transition-colors">
                Careers
              </Link>
              <Link to="/who-we-are" className="block text-gray-300 hover:text-white transition-colors">
                Blogs
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-6 sm:pt-8">
          <div className="flex flex-col space-y-4 sm:space-y-6 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
            {/* Social Media & Contact */}
            <div className="flex flex-col space-y-3 sm:space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6 md:space-x-8">
              {/* Connect with us */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4">
                <span className="text-gray-300 text-sm sm:text-base">Connect with us</span>
                <div className="flex space-x-2 sm:space-x-3">
                  <a href="https://linkedin.com/company/dummy-techcorp" className="text-gray-300 hover:text-white transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/dummy_techcorp" className="text-gray-300 hover:text-white transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="https://pinterest.com/dummy_techcorp" className="text-gray-300 hover:text-white transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com/dummy_techcorp" className="text-gray-300 hover:text-white transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2 text-gray-300 text-sm sm:text-base">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
                </svg>
                <span>info@dummycompany.com</span>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4 md:space-x-6 text-gray-300 text-sm sm:text-base">
              <div className="flex items-center space-x-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+1-555-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+1-555-987-6543</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-600 text-center text-gray-400 text-xs sm:text-sm">
            <p>© 2025 DUMMYCORP INDUSTRIES (Corporate Identity No: DC12345DM2020PTC987654) | <Link to="#" className="hover:text-white transition-colors">Sitemap</Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
};