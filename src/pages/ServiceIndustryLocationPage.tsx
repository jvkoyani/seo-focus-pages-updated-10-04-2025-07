
import React from 'react';
import { useParams } from 'react-router-dom';
import { findServiceBySlug } from '@/lib/servicesData';
import { findIndustryBySlug } from '@/lib/industriesData';
import { findLocationBySlug } from '@/lib/locationData';
import NotFound from './NotFound';

const ServiceIndustryLocationPage = () => {
  const { serviceSlug, industrySlug, locationSlug } = useParams();

  // Early return if any slug is missing
  if (!serviceSlug || !industrySlug || !locationSlug) {
    return <NotFound />;
  }

  // Find the matching data
  const service = findServiceBySlug(serviceSlug);
  const industry = findIndustryBySlug(industrySlug);
  const location = findLocationBySlug(locationSlug);

  // If any data is missing, return NotFound
  if (!service || !industry || !location) {
    return <NotFound />;
  }

  return (
    <div>
      <h1>
        {service.title} for {industry.title} in {location.name}
      </h1>
      {/* Add your content here */}
    </div>
  );
};

export default ServiceIndustryLocationPage;
