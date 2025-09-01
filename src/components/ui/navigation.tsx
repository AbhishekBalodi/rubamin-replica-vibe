import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Business", href: "/business", hasDropdown: true },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Who We Are", href: "/who-we-are" },
    { name: "Careers", href: "/careers", hasDropdown: true },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className={`bg-white shadow-sm border-b ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-rubamin-red rounded-sm flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">+</span>
              </div>
              <span className="text-xl font-bold text-rubamin-dark tracking-wider">
                RUBAMIN
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-rubamin-dark hover:text-rubamin-green px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-rubamin-dark"
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
                <a
                  key={item.name}
                  href={item.href}
                  className="text-rubamin-dark hover:text-rubamin-green block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};