
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

interface HeroProps {
  title?: string;
  subtitle?: string;
  location?: string;
  backgroundImage?: string;
}

const Hero = ({
  title = "Boost Your Search Rankings & Drive More Qualified Traffic",
  subtitle = "Data-driven SEO strategies tailored to your business goals",
  location,
  backgroundImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
}: HeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-seo-dark/80 to-seo-dark/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-16 md:py-20">
        <div className="max-w-3xl">
          <AnimatedSection 
            className="mb-2" 
            animation="fade-in"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-sm">
              {location ? `${location} SEO Services` : 'Data-Driven SEO Agency'}
            </span>
          </AnimatedSection>
          
          <AnimatedSection 
            className="mb-6" 
            animation="fade-in" 
            delay={200}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              {title}
            </h1>
          </AnimatedSection>
          
          <AnimatedSection 
            className="mb-10" 
            animation="fade-in" 
            delay={400}
          >
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              {subtitle}
            </p>
          </AnimatedSection>
          
          <AnimatedSection 
            className="flex flex-col sm:flex-row gap-4" 
            animation="fade-in" 
            delay={600}
          >
            <Link
              to="/contact"
              className="bg-seo-blue hover:bg-seo-blue-light text-white px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 flex items-center justify-center button-hover-effect"
            >
              Get Free SEO Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 flex items-center justify-center button-hover-effect"
            >
              Our Services
            </Link>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8" 
            animation="fade-in" 
            delay={800}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-white mb-2">98%</p>
              <p className="text-white/80 text-sm">Client Retention Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-white mb-2">250+</p>
              <p className="text-white/80 text-sm">Businesses Helped</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-white mb-2">175%</p>
              <p className="text-white/80 text-sm">Average Traffic Increase</p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
};

export default Hero;
