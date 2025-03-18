
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { locations } from '@/lib/data';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLocations = () => setIsLocationsOpen(!isLocationsOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsLocationsOpen(false);
  }, [location.pathname]);

  return (
    <AnimatedSection 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white shadow-md' : 'py-5 bg-white md:bg-transparent'
      }`}
      animation="fade-in"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-seo-dark">
              SEO<span className="text-seo-blue">focus</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-seo-dark hover:text-seo-blue font-medium transition-colors">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={toggleLocations}
                className="flex items-center text-seo-dark hover:text-seo-blue font-medium transition-colors focus:outline-none"
              >
                Locations
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isLocationsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out overflow-hidden ${isLocationsOpen ? 'opacity-100 visible max-h-96' : 'opacity-0 invisible max-h-0'}`}>
                <div className="py-2 grid grid-cols-1 gap-1">
                  {locations.map((loc) => (
                    <Link
                      key={loc.id}
                      to={`/location/${loc.slug}`}
                      className="block px-4 py-2 text-sm text-seo-dark hover:bg-seo-gray-light hover:text-seo-blue transition-colors"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/services" className="text-seo-dark hover:text-seo-blue font-medium transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-seo-dark hover:text-seo-blue font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-seo-dark hover:text-seo-blue font-medium transition-colors">
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-2 px-5 rounded-md transition-colors button-hover-effect"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-seo-dark focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white z-50 transition-all duration-300 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
          style={{ top: '64px' }}
        >
          <div className="flex flex-col p-6 space-y-6">
            <Link
              to="/"
              className="text-lg font-medium text-seo-dark hover:text-seo-blue transition-colors"
            >
              Home
            </Link>
            <div>
              <button
                onClick={toggleLocations}
                className="text-lg font-medium text-seo-dark hover:text-seo-blue transition-colors focus:outline-none flex items-center"
              >
                Locations
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isLocationsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`mt-2 ml-4 transition-all duration-200 space-y-2 ${isLocationsOpen ? 'block' : 'hidden'}`}>
                {locations.map((loc) => (
                  <Link
                    key={loc.id}
                    to={`/location/${loc.slug}`}
                    className="block py-2 text-seo-gray-dark hover:text-seo-blue transition-colors"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/services"
              className="text-lg font-medium text-seo-dark hover:text-seo-blue transition-colors"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium text-seo-dark hover:text-seo-blue transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium text-seo-dark hover:text-seo-blue transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-seo-blue text-white text-center py-3 px-5 rounded-md transition-colors button-hover-effect"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Navbar;
