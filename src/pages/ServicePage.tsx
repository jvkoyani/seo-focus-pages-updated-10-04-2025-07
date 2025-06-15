import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Check, Zap, Award, Target, BarChart, 
  Users, Globe, MapPin, TrendingUp, CheckCircle, 
  Phone, Lightbulb, ShoppingBag, Compass, Building,
  ChevronRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import ServiceTabs from '@/components/ServiceTabs';
import ResourcesSection from '@/components/ResourcesSection';
import ContextualBlog from '@/components/ContextualBlog';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/data';
import { icons } from 'lucide-react';
import SEO from '@/components/SEO';

const ServicePage = ({ routeKey }: { routeKey?: string }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find the service based on slug
  const service = services.find(s => s.slug === slug);
  
  // Redirect if service not found
  useEffect(() => {
    if (!service) {
      navigate('/not-found');
    }
  }, [service, navigate]);
  
  if (!service) {
    return null; // Will redirect to 404
  }
  
  // Dynamically get the icon component based on icon name
  const getIconComponent = (iconName: string) => {
    const IconComponent = icons[iconName as keyof typeof icons];
    return IconComponent ? <IconComponent className="h-12 w-12 text-seo-blue" /> : null;
  };

  // Generate SEO meta data based on service
  const metaTitle = `${service.title} Services | SEO Focus - Expert SEO Solutions`;
  const metaDescription = `${service.description} Get expert ${service.title.toLowerCase()} services from SEO Focus to boost your online visibility and drive results.`;
  const keywords = `${service.title}, SEO services, ${service.slug}, digital marketing, search engine optimization`;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={metaTitle}
        description={metaDescription}
        keywords={keywords}
        canonicalUrl={`/service/${service.slug}`}
        routeKey={routeKey}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-seo-blue-light/10 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-seo-blue rounded-full"></div>
          <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-green-400 rounded-full"></div>
          <div className="absolute left-1/4 bottom-1/2 w-48 h-48 bg-purple-400 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="mb-4" animation="fade-in">
            <div className="inline-flex items-center space-x-2">
              <Link 
                to="/" 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <Link 
                to="/services" 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                Services
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <span className="text-seo-blue font-medium">{service.title}</span>
            </div>
          </AnimatedSection>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <AnimatedSection className="lg:w-1/2" animation="fade-in">
              <div className="flex items-center mb-6">
                <div className="bg-seo-blue/10 rounded-full w-20 h-20 flex items-center justify-center mr-4">
                  {getIconComponent(service.icon)}
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue">
                  Expert {service.title}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
                {service.title}
              </h1>
              
              <p className="text-xl text-seo-gray-dark mb-8">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-seo-blue hover:bg-seo-blue-light text-white button-hover-effect">
                  <Link to="/contact" className="flex items-center">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-seo-blue text-seo-blue hover:bg-seo-blue/5">
                  <Link to="/case-studies">
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={200} className="lg:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-seo-blue/10 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                    <CheckCircle className="h-8 w-8 text-seo-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-seo-dark">Ready to Get Started?</h3>
                    <p className="text-seo-gray-dark">Let's boost your online presence today</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <p className="text-seo-gray-dark">Free consultation and strategy session</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <p className="text-seo-gray-dark">Custom SEO plan tailored to your business</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <p className="text-seo-gray-dark">Transparent reporting and regular updates</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <p className="text-seo-gray-dark">Proven track record of success</p>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <Button asChild className="w-full bg-seo-blue hover:bg-seo-blue-light text-white">
                    <Link to="/contact" className="flex items-center justify-center">
                      Schedule a Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full border-seo-blue text-seo-blue hover:bg-seo-blue/5">
                    <Link to="/seo-audit">
                      Get Your Free SEO Audit
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Service Details */}
      <ServiceTabs />
      
      {/* Resources Section with contextual blog */}
      <ResourcesSection serviceSlug={service.slug} />
      
      {/* Additional contextual blog specifically for this service */}
      <ContextualBlog
        serviceSlug={service.slug}
        title="Why Choose SEO Focus for This Service"
        subtitle={`Discover what makes SEO Focus the best choice for ${service.title.toLowerCase()} and how our expertise can transform your business.`}
        limit={3}
      />
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ServicePage;
