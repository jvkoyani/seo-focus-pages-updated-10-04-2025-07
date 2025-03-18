
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import IndustrySeoServices from '@/components/IndustrySeoServices';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      
      {/* Featured Industry SEO Section */}
      <IndustrySeoServices 
        title="Industry-Specific SEO Solutions" 
        description="Specialized SEO strategies tailored for your industry's unique challenges and opportunities."
        showAll={false}
      />
      
      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection 
            className="text-center mb-16 max-w-3xl mx-auto"
            animation="fade-in"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              Data-Driven SEO That Delivers Results
            </h2>
            <p className="text-lg text-seo-gray-dark">
              We combine technical expertise, content marketing, and strategic link building to help your business achieve sustainable growth through search.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-seo-blue" />,
                title: "Proven Track Record",
                description: "We've helped hundreds of businesses improve their search rankings and drive qualified traffic to their websites."
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-seo-blue" />,
                title: "Transparent Reporting",
                description: "Get comprehensive monthly reports showing exactly how our SEO strategies are impacting your business goals."
              },
              {
                icon: <Users className="h-10 w-10 text-seo-blue" />,
                title: "Expert Team",
                description: "Our team of SEO specialists stays on top of algorithm changes and industry best practices to keep you ahead."
              },
              {
                icon: <Award className="h-10 w-10 text-seo-blue" />,
                title: "Customized Approach",
                description: "We develop tailored SEO strategies based on your specific business goals, industry, and competitive landscape."
              }
            ].map((item, index) => (
              <AnimatedSection
                key={index}
                className="text-center p-6"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="bg-seo-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-seo-gray-dark">
                  {item.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/about" 
              className="inline-flex items-center text-seo-blue font-medium group"
            >
              <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                Learn more about our approach
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
