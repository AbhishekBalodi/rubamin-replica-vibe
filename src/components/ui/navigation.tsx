import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    { 
      name: "Business", 
      href: "/business/battery-recycling", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Battery Recycling", href: "/business/battery-recycling" },
        { name: "Catalyst Recycling", href: "/business/catalyst-recycling" },
        { name: "Zinc Recycling", href: "/business/zinc-recycling" },
      ]
    },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Who We Are", href: "/who-we-are" },
    { 
      name: "Careers", 
      href: "/careers", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Media Room", href: "/careers/media-room" },
        { name: "Blogs", href: "/careers/blogs" },
      ]
    },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-transparent z-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-sm flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold text-white font-roboto tracking-wider">
                DUMMYCORP
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.href}
                    className="font-roboto text-white hover:text-white px-3 py-2 text-sm font-normal transition-all duration-200 flex items-center relative group"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 w-3 h-3" />
                    )}
                    <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-techcorp-red transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <div className="py-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-techcorp-dark hover:text-techcorp-green hover:bg-gray-50 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="font-roboto text-white hover:text-techcorp-red block px-3 py-2 text-base font-normal transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="font-roboto text-white hover:text-techcorp-red block px-3 py-2 text-sm font-normal transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};