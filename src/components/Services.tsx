
import { 
  MapPin, 
  Settings, 
  FileText, 
  Link as LinkIcon, 
  ShoppingCart, 
  BarChart,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { services } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  'map-pin': <MapPin className="h-8 w-8 text-seo-blue" />,
  'settings': <Settings className="h-8 w-8 text-seo-blue" />,
  'file-text': <FileText className="h-8 w-8 text-seo-blue" />,
  'link': <LinkIcon className="h-8 w-8 text-seo-blue" />,
  'shopping-cart': <ShoppingCart className="h-8 w-8 text-seo-blue" />,
  'bar-chart': <BarChart className="h-8 w-8 text-seo-blue" />
};

// Feature image maps for each service type
const serviceImages: Record<string, string> = {
  'local-seo': 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80',
  'technical-seo': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  'content-marketing': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80',
  'link-building': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
  'ecommerce-seo': 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&q=80',
  'analytics-reporting': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  'seo-audits': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  'digital-pr': 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80'
};

interface ServicesProps {
  location?: string;
  locationSlug?: string;
}

const Services = ({ location, locationSlug }: ServicesProps) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection 
          className="text-center mb-16 max-w-3xl mx-auto"
          animation="fade-in"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
            {location 
              ? `SEO Services in ${location}`
              : 'Comprehensive SEO Solutions'}
          </h2>
          <p className="text-lg text-seo-gray-dark">
            {location 
              ? `We help businesses in ${location} improve their search visibility and drive more qualified traffic.`
              : 'Tailored strategies to improve your online visibility and drive sustainable growth'}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.id}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              animation="fade-in"
              delay={100 * index}
            >
              <div 
                className="h-48 w-full bg-cover bg-center" 
                style={{ 
                  backgroundImage: `url(${serviceImages[service.slug] || 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80'})` 
                }}
              ></div>
              <div className="p-8">
                <div className="bg-seo-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-seo-gray-dark mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-seo-blue mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-seo-gray-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to={locationSlug 
                    ? `/location/${locationSlug}/${service.slug}` 
                    : `/service/${service.slug}`} 
                  className="inline-flex items-center text-seo-blue font-medium group mt-2"
                >
                  <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                    {locationSlug ? `${service.title} in ${location}` : 'Learn more'}
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-seo-blue/5 rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-seo-blue/5 rounded-full"></div>
    </section>
  );
};

export default Services;
