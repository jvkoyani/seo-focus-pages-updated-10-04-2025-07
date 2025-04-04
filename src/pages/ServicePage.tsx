
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { services } from '@/lib/data';
import ServiceBadge, { ServiceBadgeIconType, ServiceBadgeVariantType } from '@/components/ServiceBadge';
import FAQ from '@/components/FAQ';
import MetaTags from '@/components/MetaTags';
import { useDynamicMetaTags } from '@/hooks/useDynamicMetaTags';

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  // Default FAQs for service pages
  const serviceFaqs = [
    {
      question: `What does ${service?.title || 'this service'} include?`,
      answer: `Our ${service?.title || 'service'} includes a comprehensive analysis of your current online presence, competitor research, strategy development, implementation of optimization techniques, and ongoing monitoring and adjustments to ensure maximum results.`
    },
    {
      question: 'How long does it take to see results?',
      answer: 'While some improvements can be seen within a few weeks, significant results typically start appearing within 3-6 months. SEO is a long-term strategy that builds momentum over time.'
    },
    {
      question: 'How do you measure success?',
      answer: 'We track key performance indicators (KPIs) such as organic traffic, keyword rankings, engagement metrics, conversion rates, and return on investment (ROI) to measure the success of our SEO efforts.'
    },
    {
      question: 'Can you guarantee first-page rankings?',
      answer: 'No reputable SEO company can guarantee first-page rankings as search algorithms are constantly evolving. However, we implement proven strategies that give your website the best chance of ranking well for relevant keywords.'
    }
  ];
  
  // Generate dynamic meta tags
  const metaTags = useDynamicMetaTags({
    service: service ? {
      name: service.title,
      description: service.description
    } : undefined,
    slug: slug,
    basePath: '/service'
  });

  // Map the service icon to a valid ServiceBadgeIconType
  const getServiceIcon = (iconStr: string): ServiceBadgeIconType => {
    // Default to 'check' if the icon is not in our allowed types
    const validIcons: ServiceBadgeIconType[] = ['award', 'star', 'trending-up', 'thumbs-up', 'zap', 'shield', 'check'];
    return (validIcons.includes(iconStr as ServiceBadgeIconType) 
      ? iconStr as ServiceBadgeIconType 
      : 'check');
  };

  // Default variant to use when service doesn't specify one
  const defaultVariant: ServiceBadgeVariantType = 'primary';

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <MetaTags
          title="Service Not Found | SEO Focus"
          description="The requested SEO service could not be found. Explore our other SEO services to improve your website's visibility."
          canonicalUrl="/services"
        />
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="mb-6">Sorry, the service you're looking for doesn't exist.</p>
            <Link 
              to="/services" 
              className="text-seo-blue hover:underline"
            >
              View all services
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags
        title={metaTags.title}
        description={metaTags.description}
        canonicalUrl={metaTags.canonicalUrl}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <ServiceBadge 
                text={service.title} 
                icon={getServiceIcon(service.icon)}
                variant={defaultVariant}
                size="lg"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-seo-gray-dark mb-8">
              {service.description}
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto prose prose-lg" animation="fade-in">
            <div dangerouslySetInnerHTML={{ __html: service.content }} />
          </AnimatedSection>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQ 
        title={`Frequently Asked Questions About ${service.title}`}
        subtitle={`Common questions about our ${service.title} services`}
        faqs={serviceFaqs}
      />
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ServicePage;
