
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { locations, services, industries } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Function to handle scroll to top when clicking links
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-seo-dark text-white">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-white/10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">
                Subscribe to our newsletter
              </h3>
              <p className="text-white/70">
                Get the latest SEO tips, strategies, and industry news
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-l-md bg-white/10 border border-white/20 focus:outline-none focus:border-seo-blue text-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-seo-blue hover:bg-seo-blue-light px-5 py-3 rounded-r-md flex items-center justify-center transition-colors button-hover-effect"
                >
                  <span className="hidden sm:inline mr-2">Subscribe</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-6" onClick={handleLinkClick}>
              <span className="text-2xl font-display font-bold text-white">
                SEO<span className="text-seo-blue">focus</span>
              </span>
            </Link>
            <p className="text-white/70 mb-6">
              We help businesses improve their online visibility through data-driven SEO strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-seo-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-seo-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-seo-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-seo-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service.id}>
                  <Link 
                    to={`/service/${service.slug}`} 
                    className="text-white/70 hover:text-seo-blue transition-colors"
                    onClick={handleLinkClick}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {industries.map(industry => (
                <li key={industry.id}>
                  <Link 
                    to={`/industry/${industry.slug}`} 
                    className="text-white/70 hover:text-seo-blue transition-colors"
                    onClick={handleLinkClick}
                  >
                    {industry.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/industries" 
                  className="text-white/70 hover:text-seo-blue transition-colors font-medium"
                  onClick={handleLinkClick}
                >
                  View All Industries
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-white/70 hover:text-seo-blue transition-colors"
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white/70 hover:text-seo-blue transition-colors"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/locations" 
                  className="text-white/70 hover:text-seo-blue transition-colors"
                  onClick={handleLinkClick}
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link 
                  to="/industries" 
                  className="text-white/70 hover:text-seo-blue transition-colors"
                  onClick={handleLinkClick}
                >
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-white/70 hover:text-seo-blue transition-colors"
                  onClick={handleLinkClick}
                >
                  Services
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-seo-blue transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-seo-blue transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Locations Grid - New Section */}
        <div className="py-8 border-t border-white/10">
          <h4 className="text-lg font-semibold mb-4">Locations We Serve</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {locations.map(location => (
              <Link 
                key={location.id}
                to={`/location/${location.slug}`} 
                className="text-white/70 hover:text-seo-blue transition-colors text-sm"
                onClick={handleLinkClick}
              >
                {location.name}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 border-t border-white/10 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} SEOfocus. All rights reserved.
          </p>
          <p className="text-white/50 text-sm mt-2 md:mt-0">
            Designed with precision. Built for results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
