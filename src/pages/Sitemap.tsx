
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ExternalLink, Layers } from 'lucide-react';
import { allAustralianCities } from '@/lib/locationData';
import { services } from '@/lib/data';

// Group cities by state for better organization
const groupCitiesByState = () => {
  const stateGroups: Record<string, typeof allAustralianCities> = {};
  
  allAustralianCities.forEach(city => {
    if (city.state === "Various") return; // Skip cities with unspecified states
    
    if (!stateGroups[city.state]) {
      stateGroups[city.state] = [];
    }
    stateGroups[city.state].push(city);
  });
  
  return stateGroups;
};

const Sitemap = () => {
  const stateGroups = groupCitiesByState();
  const states = Object.keys(stateGroups).sort();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-display font-bold text-seo-dark mb-8 text-center">
            Site Map
          </h1>
          
          {/* Main sections */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Main Sections</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Link to="/" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>Home</span>
              </Link>
              <Link to="/about" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>About Us</span>
              </Link>
              <Link to="/services" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>Services</span>
              </Link>
              <Link to="/industries" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>Industries</span>
              </Link>
              <Link to="/blogs" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>Blogs</span>
              </Link>
              <Link to="/case-studies" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>Case Studies</span>
              </Link>
              <Link to="/contact" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>Contact</span>
              </Link>
              <Link to="/free-consultation" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow flex items-center">
                <Layers className="h-5 w-5 mr-3 text-seo-blue" />
                <span>Free Consultation</span>
              </Link>
            </div>
          </section>
          
          {/* Services */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {services.map(service => (
                <Link 
                  key={service.id}
                  to={`/service/${service.slug}`} 
                  className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-seo-gray-dark">{service.description}</p>
                </Link>
              ))}
            </div>
          </section>
          
          {/* Methodology */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Our Methodology</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/methodology/research-analysis" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Research & Analysis</h3>
              </Link>
              <Link to="/methodology/strategic-planning" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Strategic Planning</h3>
              </Link>
              <Link to="/methodology/implementation" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Implementation</h3>
              </Link>
              <Link to="/methodology/monitoring-optimization" className="p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Monitoring & Optimization</h3>
              </Link>
            </div>
          </section>
          
          {/* Locations by State */}
          <section>
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Locations We Serve</h2>
            
            {states.map(state => (
              <div key={state} className="mb-8">
                <h3 className="text-xl font-semibold mb-4 bg-seo-gray-light p-3 rounded">
                  <Link to={`/australia/${state.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-seo-blue">
                    {state}
                  </Link>
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {stateGroups[state].map(city => (
                    <Link 
                      key={city.id}
                      to={`/location/${city.slug}`}
                      className="flex items-center p-2 hover:bg-seo-gray-light rounded transition-colors"
                    >
                      <MapPin className="h-4 w-4 mr-2 text-seo-blue" />
                      <span>{city.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Service-Location Combinations */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4 bg-seo-gray-light p-3 rounded">
                Popular Service-Location Combinations
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {services.slice(0, 3).map(service => (
                  <div key={service.id} className="bg-white rounded shadow-sm p-4">
                    <h4 className="font-semibold mb-3">{service.title}</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {allAustralianCities.slice(0, 5).map(city => (
                        <Link 
                          key={`${service.slug}-${city.slug}`}
                          to={`/${service.slug}-${city.slug}`}
                          className="flex items-center hover:text-seo-blue"
                        >
                          <ExternalLink className="h-3 w-3 mr-2" />
                          <span>{service.title} in {city.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sitemap;
