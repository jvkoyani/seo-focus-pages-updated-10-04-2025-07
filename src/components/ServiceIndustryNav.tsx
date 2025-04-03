
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Service, getAllServices } from '@/lib/servicesData';
import { Button } from '@/components/ui/button';

interface ServiceIndustryNavProps {
  industrySlug: string;
  industryTitle: string;
  locationSlug: string;
  locationName: string;
}

const ServiceIndustryNav: React.FC<ServiceIndustryNavProps> = ({
  industrySlug,
  industryTitle,
  locationSlug,
  locationName
}) => {
  const services = getAllServices();
  
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <h3 className="text-xl font-bold text-seo-dark mb-4">
        All SEO Services for {industryTitle} in {locationName}
      </h3>
      
      <div className="space-y-3 mb-6">
        {services.map((service) => (
          <div key={service.id} className="group">
            <Link 
              to={`/${service.slug}-for-${industrySlug}-in-${locationSlug}`}
              className="flex items-center justify-between text-seo-gray-dark hover:text-seo-blue p-2 rounded-md hover:bg-seo-blue/5 transition-colors"
            >
              <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                {service.title} for {industryTitle}
              </span>
              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        ))}
      </div>
      
      <Button asChild variant="outline" className="w-full">
        <Link to={`/location/${locationSlug}/all`}>
          View All Services & Industries
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
};

export default ServiceIndustryNav;
