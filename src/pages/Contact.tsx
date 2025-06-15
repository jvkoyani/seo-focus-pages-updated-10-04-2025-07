import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import SEO from '@/components/SEO';
import Schema from '@/components/Schema';

const Contact = ({ routeKey }: { routeKey?: string }) => {
  console.log(`Contact page rendering with routeKey: ${routeKey}`);
  
  // FAQ schema data for contact page
  const faqSchema = {
    type: 'faq' as const,
    data: {
      questions: [
        {
          question: "How can I get started with your SEO services?",
          answer: "Getting started is easy! Contact us through our form, phone, or email for a free consultation. We'll analyze your current SEO status and create a customized strategy for your business."
        },
        {
          question: "What information should I provide in my SEO consultation request?",
          answer: "Please provide your website URL, target location, main business goals, current challenges, and any specific SEO concerns. The more details you share, the better we can tailor our recommendations."
        },
        {
          question: "How quickly will I receive a response to my inquiry?",
          answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, you can call us directly for immediate assistance."
        },
        {
          question: "Do you offer free SEO audits?",
          answer: "Yes, we provide comprehensive free SEO audits as part of our initial consultation. This includes technical analysis, keyword research, and competitive assessment."
        },
        {
          question: "What are your business hours for consultations?",
          answer: "Our team is available Monday through Friday, 9 AM to 6 PM AEST. We also offer flexible scheduling for consultations outside regular hours when needed."
        }
      ]
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Get Your Free SEO Consultation | Contact SEO Experts"
        description="Ready to boost your rankings? Contact our certified SEO specialists for a free consultation. Personalized strategies, transparent pricing, guaranteed results."
        keywords="SEO consultation, contact SEO experts, free SEO audit, SEO quote, search optimization help, digital marketing consultation"
        canonicalUrl="/contact"
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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              Let's Talk About Your SEO Goals
            </h1>
            <p className="text-xl text-seo-gray-dark mb-8">
              Have questions about our services or want to discuss your specific SEO needs? 
              We're here to help you achieve better search rankings and drive more qualified traffic.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
