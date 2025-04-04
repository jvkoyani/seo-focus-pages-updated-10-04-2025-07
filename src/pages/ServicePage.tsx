
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { findServiceBySlug } from '@/lib/servicesData';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import BadgeContainer from '@/components/BadgeContainer';
import FaqSection from '@/components/FaqSection';
import { Button } from '@/components/ui/button';

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = findServiceBySlug(slug || '');

  if (!service) {
    return <div>Service not found</div>;
  }

  // Service-specific badges with correct icon types
  const serviceBadges = [
    { text: `#1 ${service.title} Provider`, icon: "award" as const, variant: "danger" as const },
    { text: "Top-Rated Service", icon: "thumbs-up" as const, variant: "success" as const },
    { text: "97% Client Satisfaction", icon: "star" as const, variant: "warning" as const },
    { text: "Fast Implementation", icon: "zap" as const, variant: "info" as const }
  ];

  // Service-specific FAQs
  const serviceFaqs = [
    {
      question: `What is ${service.title} and why is it important?`,
      answer: `${service.title} is a critical component of digital marketing that helps your business gain visibility online. It involves optimizing your website and online presence to rank higher in search engine results, driving more qualified traffic to your site and increasing conversions.`
    },
    {
      question: `How does your approach to ${service.title} differ from other agencies?`,
      answer: `We take a data-driven, customized approach to ${service.title} that focuses on your specific business goals. Unlike agencies that use templated strategies, we develop unique plans based on thorough research and analysis of your industry, competition, and target audience.`
    },
    {
      question: `How long will it take to see results from ${service.title}?`,
      answer: `${service.title} is a long-term strategy that typically shows initial results within 3-6 months. However, significant improvements are often seen around the 6-12 month mark. The timeline depends on factors like your website's current condition, competition in your industry, and the aggressiveness of your strategy.`
    },
    {
      question: `How do you measure the success of ${service.title} campaigns?`,
      answer: `We track key performance indicators tailored to your business goals, including organic traffic growth, keyword rankings, conversion rates, lead quality, and ultimately, ROI. We provide comprehensive monthly reports with detailed analytics and insights on your campaign's performance.`
    },
    {
      question: `How much does ${service.title} cost?`,
      answer: `Our ${service.title} packages start at $1,500 per month, with costs varying based on the competitiveness of your industry, your business goals, and the scope of work required. We provide a detailed proposal outlining exactly what you're getting for your investment.`
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-seo-blue-light/10 to-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Services
            </span>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
              {service.title}
            </h1>
            
            <p className="text-xl text-seo-gray-dark mb-8">
              {service.description}
            </p>
            
            {/* Service Badges */}
            <div className="mb-8">
              <BadgeContainer badges={serviceBadges} className="justify-start" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-seo-blue hover:bg-seo-blue-light text-white">
                <Link to="/free-consultation">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-seo-blue text-seo-blue hover:bg-seo-blue/5">
                <Link to="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Add your service page content here */}
      
      {/* FAQ Section */}
      <FaqSection 
        title={`Frequently Asked Questions About ${service.title}`}
        description={`Get answers to common questions about our ${service.title} services`}
        faqs={serviceFaqs}
      />
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ServicePage;
