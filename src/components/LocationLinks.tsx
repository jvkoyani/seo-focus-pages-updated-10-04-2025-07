
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { locations } from '@/lib/data';
import { ArrowRight, MapPin, TrendingUp, Award, Users, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LocationLinksProps {
  service: {
    title: string;
    slug: string;
  };
}

const LocationLinks = ({ service }: LocationLinksProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {locations.map((location, index) => (
        <AnimatedSection
          key={location.id}
          className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden group"
          animation="fade-in"
          delay={index * 100}
        >
          <div className="relative h-48 overflow-hidden">
            <img 
              src={location.image} 
              alt={location.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 flex items-center">
              <MapPin className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium">{location.name}</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
              {service.title} in {location.name}
            </h3>
            <div className="mb-4 bg-seo-blue/5 p-3 rounded-lg border-l-2 border-seo-blue">
              <p className="text-seo-gray-dark">
                Specialized {service.title.toLowerCase()} strategies for businesses in {location.name}.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-4">
              {getLocationAttributes(index).map((attr, i) => (
                <div key={i} className={cn(
                  "flex flex-col items-center justify-center p-2 rounded-lg",
                  attr.bgColor
                )}>
                  {attr.icon}
                  <span className={cn("text-xs font-medium mt-1 text-center", attr.textColor)}>
                    {attr.label}
                  </span>
                </div>
              ))}
            </div>
            
            <Link
              to={`/location/${location.slug}/${service.slug}`}
              className="inline-flex items-center bg-seo-blue text-white px-4 py-2 rounded-md group-hover:bg-seo-blue-light transition-colors w-full justify-center"
            >
              <span>Explore strategies</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

const getLocationAttributes = (index: number) => {
  // Create different attributes based on index to add variety
  const attributes = [
    [
      { icon: <TrendingUp className="h-4 w-4 text-green-600" />, label: "High Growth", bgColor: "bg-green-50", textColor: "text-green-600" },
      { icon: <Users className="h-4 w-4 text-blue-600" />, label: "Large Market", bgColor: "bg-blue-50", textColor: "text-blue-600" },
      { icon: <Award className="h-4 w-4 text-purple-600" />, label: "Top Results", bgColor: "bg-purple-50", textColor: "text-purple-600" }
    ],
    [
      { icon: <Activity className="h-4 w-4 text-red-600" />, label: "Competitive", bgColor: "bg-red-50", textColor: "text-red-600" },
      { icon: <Award className="h-4 w-4 text-purple-600" />, label: "Top Rankings", bgColor: "bg-purple-50", textColor: "text-purple-600" },
      { icon: <TrendingUp className="h-4 w-4 text-green-600" />, label: "Growing", bgColor: "bg-green-50", textColor: "text-green-600" }
    ],
    [
      { icon: <Users className="h-4 w-4 text-blue-600" />, label: "High Traffic", bgColor: "bg-blue-50", textColor: "text-blue-600" },
      { icon: <TrendingUp className="h-4 w-4 text-green-600" />, label: "Emerging", bgColor: "bg-green-50", textColor: "text-green-600" },
      { icon: <Activity className="h-4 w-4 text-orange-600" />, label: "Dynamic", bgColor: "bg-orange-50", textColor: "text-orange-600" }
    ]
  ];
  
  return attributes[index % 3];
};

export default LocationLinks;
