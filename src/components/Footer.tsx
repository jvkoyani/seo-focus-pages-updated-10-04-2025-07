
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { locations } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
            <Link to="/" className="inline-block mb-6">
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
              <li>
                <Link to="/services" className="text-white/70 hover:text-seo-blue transition-colors">
                  Local SEO
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-seo-blue transition-colors">
                  Technical SEO
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-seo-blue transition-colors">
                  Content Strategy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-seo-blue transition-colors">
                  Link Building
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-seo-blue transition-colors">
                  E-commerce SEO
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-seo-blue transition-colors">
                  Analytics & Reporting
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Locations</h4>
            <ul className="space-y-3">
              {locations.slice(0, 6).map((location) => (
                <li key={location.id}>
                  <Link 
                    to={`/location/${location.slug}`} 
                    className="text-white/70 hover:text-seo-blue transition-colors"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/70 hover:text-seo-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-seo-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/70 hover:text-seo-blue transition-colors">
                  Careers
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
