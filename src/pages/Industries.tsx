
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IndustrySeoServices from '@/components/IndustrySeoServices';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';

const Industries = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Industry Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              Specialized SEO for Your Industry
            </h1>
            <p className="text-xl text-seo-gray-dark mb-8">
              We understand that different industries have unique challenges and opportunities. 
              Our industry-specific SEO solutions are designed to address the particular needs of your business sector.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Industry Services Grid */}
      <IndustrySeoServices 
        title="Tailored SEO Strategies by Industry" 
        description="Our specialized approach is customized for the unique requirements and competitive landscape of your specific industry."
      />
      
      {/* Why Industry-Specific SEO Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              Why Choose Industry-Specific SEO?
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Generic SEO strategies often miss the mark. Industry-specific SEO delivers better results by addressing your unique market challenges.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Specialized Keyword Targeting",
                description: "We research and target industry-specific keywords that your ideal clients are actually using to search for your services."
              },
              {
                title: "Competitor Intelligence",
                description: "We analyze your top-performing industry competitors to identify opportunities and develop strategies to outrank them."
              },
              {
                title: "Industry-Specific Content",
                description: "Our content strategies address the specific questions, concerns, and interests of your target audience."
              },
              {
                title: "Tailored Local SEO",
                description: "We optimize your local presence with industry-specific citations and directory listings that matter most for your sector."
              },
              {
                title: "Conversion Optimization",
                description: "Our strategies focus on converting industry-specific traffic into leads and customers, not just increasing general traffic."
              },
              {
                title: "Regulatory Compliance",
                description: "We ensure your SEO strategy complies with any industry-specific regulations and best practices."
              }
            ].map((item, index) => (
              <AnimatedSection
                key={index}
                className="bg-seo-gray-light p-8 rounded-xl"
                animation="fade-in"
                delay={index * 100}
              >
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-seo-gray-dark">
                  {item.description}
                </p>
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

export default Industries;
