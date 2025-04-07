import React from 'react';
import { useParams } from 'react-router-dom';
import { findServiceBySlug } from '@/lib/servicesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';

// Import our SEO components
import SEO from '@/components/SEO';
import { getPageSEO } from '@/lib/seoUtils';

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const serviceData = findServiceBySlug(slug || '');
  
  if (!serviceData) {
    return null; // or your 404 component
  }
  
  // Generate SEO metadata
  const seoMetadata = getPageSEO('service', {
    serviceSlug: slug
  }, {
    // Optional custom data
    title: serviceData?.metaTitle,
    description: serviceData?.metaDescription
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Add SEO Component */}
      <SEO
        title={seoMetadata.title}
        description={seoMetadata.description}
        keywords={seoMetadata.keywords}
        canonicalUrl={seoMetadata.canonicalUrl}
        routeKey={`service-${slug}`}
      />
      
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-seo-blue-light/10 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="mb-4" animation="fade-in">
            <div className="inline-flex items-center space-x-2">
              <a href="/" className="text-seo-gray-dark hover:text-seo-blue transition-colors">
                Home
              </a>
              <ArrowRight className="h-4 w-4 text-seo-gray-medium" />
              <span className="text-seo-blue font-medium">{serviceData.title}</span>
            </div>
          </AnimatedSection>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <AnimatedSection className="md:w-1/2" animation="fade-in">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
                {serviceData.title}
              </h1>
              <p className="text-xl text-seo-gray-dark mb-8">
                {serviceData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-seo-blue hover:bg-seo-blue-light text-white button-hover-effect">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-seo-blue text-seo-blue hover:bg-seo-blue/5">
                  View Case Studies
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-left" delay={200} className="md:w-1/2">
              <img
                src={serviceData.image}
                alt={serviceData.title}
                className="rounded-xl shadow-lg border border-gray-100"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              How We Deliver Results
            </h2>
            <p className="text-lg text-seo-gray-dark">
              A step-by-step overview of our proven SEO process
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.steps.map((step, index) => (
              <AnimatedSection
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                animation="fade-in"
                delay={index * 100}
              >
                <h3 className="text-xl font-bold text-seo-dark mb-4">{step.title}</h3>
                <p className="text-seo-gray-dark">{step.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default ServicePage;
