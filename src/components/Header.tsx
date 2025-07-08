import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsScrolled(scrollPosition > heroHeight * 0.8);

      // Detect current section
      const sections = ['hero', 'app-showcase', 'testimonials', 'partners', 'contact'];
      let currentSection = 'hero';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;
          
          // Check if the header (top 100px) is within this section
          if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionBottom - 100) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Determine text color based on active section
  const getNearzTextColor = () => {
    if (activeSection === 'app-showcase') {
      return 'text-white';
    }
    return 'bg-gradient-to-r from-[#F25435] to-red-600 bg-clip-text text-transparent';
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/20 backdrop-blur-xl' : ''
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 to-red-500 rounded-xl flex items-center justify-center">
                <img src="/logo.png" alt="Nearz Logo" className="w-16 h-16 object-contain mt-1" />
              </div>
              {/* Nearz text - hidden on mobile, color changes based on section */}
              <span className={`hidden md:block text-4xl font-bold transition-all duration-300 ${getNearzTextColor()}`}>
                Nearz
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-white">
              <button onClick={() => scrollToSection('hero')} className="text-white hover:text-[#F25435] transition-colors">Home</button>
              <button onClick={() => scrollToSection('app-showcase')} className="text-white hover:text-[#F25435] transition-colors">App</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-[#F25435] transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('partners')} className="text-white hover:text-[#F25435] transition-colors">Partners</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#F25435] transition-colors">Contact</button>
              <a
                href="https://nearz.in/blog.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-[#F25435] to-red-500 hover:from-[#F25435]/90 hover:to-red-500/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Blogs
                </Button>
              </a>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2 hover:text-[#F25435] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile menu */}
          <div className="fixed top-0 right-0 h-full w-80 bg-black/90 backdrop-blur-xl transform transition-transform duration-300 ease-in-out">
            <div className="pt-20 px-6">
              <nav className="flex flex-col space-y-6">
                <button 
                  onClick={() => handleNavClick('hero')} 
                  className="text-white hover:text-[#F25435] transition-colors text-left text-lg py-2"
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNavClick('app-showcase')} 
                  className="text-white hover:text-[#F25435] transition-colors text-left text-lg py-2"
                >
                  App
                </button>
                <button 
                  onClick={() => handleNavClick('testimonials')} 
                  className="text-white hover:text-[#F25435] transition-colors text-left text-lg py-2"
                >
                  Reviews
                </button>
                <button 
                  onClick={() => handleNavClick('partners')} 
                  className="text-white hover:text-[#F25435] transition-colors text-left text-lg py-2"
                >
                  Partners
                </button>
                <button 
                  onClick={() => handleNavClick('contact')} 
                  className="text-white hover:text-[#F25435] transition-colors text-left text-lg py-2"
                >
                  Contact
                </button>
                <div className="pt-4">
                  <a
                    href="https://nearz.in/blog.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-gradient-to-r from-[#F25435] to-red-500 hover:from-[#F25435]/90 hover:to-red-500/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      Blogs
                    </Button>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;