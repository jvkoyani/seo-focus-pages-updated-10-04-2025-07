
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SeoBlogTemplate from '@/components/SeoBlogTemplate';
import ResourcesSection from '@/components/ResourcesSection';
import SEO from '@/components/SEO';

const LocationSeoBlog = ({ routeKey }: { routeKey?: string }) => {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  
  // Format the city name for display
  const formatCityName = (slug: string = '') => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  
  const cityName = formatCityName(locationSlug);
  
  // Log for debugging
  useEffect(() => {
    console.log(`LocationSeoBlog rendering for: ${locationSlug}, formatted as: ${cityName}`);
  }, [locationSlug, cityName]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`Boost Your Business with SEO Service in ${cityName}`}
        description={`Expert SEO service in ${cityName} with local SEO, technical optimization, and content strategy for Australian businesses.`}
        keywords={`${cityName} SEO, SEO service ${cityName}, local SEO ${cityName}, ${cityName} business growth, grow your ${cityName} business online`}
        canonicalUrl={`/seo-service-${locationSlug}`}
        routeKey={routeKey}
      />
      
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <SeoBlogTemplate cityName={cityName} />
        </div>
      </main>
      
      <ResourcesSection filterTag={locationSlug} />
      
      <Footer />
    </div>
  );
};

export default LocationSeoBlog;
