import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { caseStudies } from '@/lib/data';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import SEO from '@/components/SEO';
import Schema from '@/components/Schema';

const CaseStudies = ({ routeKey }: { routeKey?: string }) => {
  console.log(`CaseStudies page rendering with routeKey: ${routeKey}`);
  
  // FAQ schema data for case studies page
  const faqSchema = {
    type: 'faq' as const,
    data: {
      questions: [
        {
          question: "How do you measure SEO success in your case studies?",
          answer: "We measure success through key metrics including organic traffic growth, keyword ranking improvements, conversion rate increases, and ROI. All our case studies include detailed before/after data and timelines."
        },
        {
          question: "Can you guarantee similar results for my business?",
          answer: "While every business is unique, our proven methodologies and strategies have consistently delivered results across various industries. We'll provide realistic expectations based on your specific situation during consultation."
        },
        {
          question: "How long does it typically take to see SEO results?",
          answer: "Based on our case studies, most clients see initial improvements within 3-6 months, with significant results typically achieved within 6-12 months. Timeline varies based on competition, current website status, and scope of work."
        },
        {
          question: "Do you work with businesses in my industry?",
          answer: "Our case studies showcase success across multiple industries including healthcare, legal, real estate, e-commerce, and professional services. We have experience adapting our strategies to various business types."
        },
        {
          question: "What makes your SEO approach different from competitors?",
          answer: "Our case studies demonstrate our data-driven approach, comprehensive strategies, and focus on long-term sustainable growth. We combine technical expertise with industry-specific knowledge for maximum results."
        }
      ]
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="SEO Case Studies | Real Results & Client Success Stories"
        description="Explore proven SEO success stories with measurable ROI. See how we've helped 250+ businesses achieve 175% traffic growth and dominate search results."
        keywords="SEO case studies, SEO results, client success stories, SEO ROI examples, search optimization proof, digital marketing results"
        canonicalUrl="/case-studies"
        routeKey={routeKey}
      />
      
      {/* Add FAQ schema */}
      <Schema type="faq" data={faqSchema.data} />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              Our Client Success Stories
            </h1>
            <p className="text-xl text-seo-gray-dark mb-8">
              See how we've helped businesses like yours achieve measurable results through strategic SEO solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyPreview key={caseStudy.id} caseStudy={caseStudy} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-seo-dark text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white mb-4">
              Your Success Story
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Contact us today for a free consultation and discover how our SEO services can help your business grow.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-8 rounded-md transition-colors button-hover-effect"
            >
              Get Started
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default CaseStudies;
