
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { industries } from '@/lib/data';

interface IndustrySeoServicesProps {
  title?: string;
  description?: string;
  showAll?: boolean;
}

const IndustrySeoServices = ({ 
  title = "Industry-Specific SEO Solutions", 
  description = "Tailored SEO strategies for your specific industry needs",
  showAll = true
}: IndustrySeoServicesProps) => {
  const displayIndustries = showAll ? industries : industries.slice(0, 3);
  
  return (
    <section className="py-24 bg-seo-gray-light">
      <div className="container mx-auto px-4">
        <AnimatedSection 
          className="text-center mb-16 max-w-3xl mx-auto"
          animation="fade-in"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
            Industry Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
            {title}
          </h2>
          <p className="text-lg text-seo-gray-dark">
            {description}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayIndustries.map((industry, index) => (
            <AnimatedSection 
              key={industry.id}
              className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              animation="fade-in"
              delay={100 * index}
            >
              <div className="bg-seo-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <industry.icon className="h-8 w-8 text-seo-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                {industry.title}
              </h3>
              <p className="text-seo-gray-dark mb-6">
                {industry.description}
              </p>
              <Link 
                to={`/industry/${industry.slug}`} 
                className="inline-flex items-center text-seo-blue font-medium group mt-2"
              >
                <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                  Learn more
                </span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          ))}
        </div>
        
        {!showAll && (
          <div className="text-center mt-12">
            <Link 
              to="/industries" 
              className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              View All Industry Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustrySeoServices;
