
import React from 'react';
import { Link } from 'react-router-dom';
import { allAustralianCities } from '@/lib/locationData';
import { services } from '@/lib/data';
import { MapPin } from 'lucide-react';

const LocationSitemap = () => {
  // Group cities by state
  const citiesByState = allAustralianCities.reduce((acc, city) => {
    // Skip "Various" state as these need proper mapping
    if (city.state === "Various") return acc;
    
    if (!acc[city.state]) {
      acc[city.state] = [];
    }
    acc[city.state].push(city);
    return acc;
  }, {} as Record<string, typeof allAustralianCities>);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-display font-bold text-seo-dark mb-10 text-center">
        Australia SEO Services - All Locations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(citiesByState).map(([state, cities]) => (
          <div key={state} className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-seo-dark mb-4 border-b pb-2">
              <Link 
                to={`/australia/${state.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-seo-blue transition-colors"
              >
                {state}
              </Link>
            </h3>
            <ul className="space-y-2">
              {cities.slice(0, 10).map(city => (
                <li key={city.id}>
                  <Link 
                    to={`/location/${city.slug}`}
                    className="flex items-center text-seo-gray-dark hover:text-seo-blue transition-colors"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{city.name}</span>
                  </Link>
                </li>
              ))}
              {cities.length > 10 && (
                <li className="pt-2 border-t">
                  <Link 
                    to={`/australia/${state.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center text-seo-blue font-medium hover:underline"
                  >
                    View all {cities.length} locations in {state}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-display font-bold text-seo-dark mb-6 text-center">
          Our Services Available in All Australian Cities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {services.map(service => (
            <div key={service.id} className="bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold text-seo-dark mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-seo-gray-dark mb-3">
                {service.title} services available in all major Australian cities.
              </p>
              <Link
                to={`/service/${service.slug}`}
                className="text-sm text-seo-blue font-medium hover:underline"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationSitemap;
