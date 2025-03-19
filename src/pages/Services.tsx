
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import ServicesComponent from '@/components/Services';
import BlogPreview from '@/components/BlogPreview';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import { services, blogPosts, caseStudies } from '@/lib/data';

const Services = () => {
  // Find related blog posts and case studies about SEO services
  const relatedBlogs = blogPosts.slice(0, 3);
  const relatedCaseStudies = caseStudies.slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              Comprehensive SEO Solutions for Your Business
            </h1>
            <p className="text-xl text-seo-gray-dark mb-8">
              We provide end-to-end SEO services designed to improve your online visibility,
              drive more qualified traffic, and increase conversions.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.id}
                className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="bg-seo-blue/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-seo-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-seo-gray-dark mb-5">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-seo-blue mr-2">•</span>
                      <span className="text-seo-gray-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={`/service/${service.slug}`} className="inline-flex items-center text-seo-blue font-medium group">
                  <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                    Learn more
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              How We Deliver Results
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Our proven 5-step methodology ensures we deliver consistent, measurable SEO results
            </p>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            {[
              { title: "Research & Analysis", desc: "We start by analyzing your website, competitors, and target audience to identify opportunities." },
              { title: "Strategic Planning", desc: "Based on our research, we create a custom SEO strategy tailored to your business goals." },
              { title: "On-Page Optimization", desc: "We optimize your website structure, content, and technical elements for better search visibility." },
              { title: "Off-Page Enhancement", desc: "We build high-quality backlinks and improve your online presence across the web." },
              { title: "Monitoring & Refinement", desc: "We continuously track performance, report results, and refine our approach for maximum impact." }
            ].map((step, index) => (
              <AnimatedSection 
                key={index}
                className="flex mb-8 last:mb-0"
                animation="fade-in-left"
                delay={index * 100}
              >
                <div className="mr-6 relative">
                  <div className="bg-seo-blue rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  {index < 4 && (
                    <div className="absolute top-10 bottom-0 left-1/2 w-0.5 -ml-px h-full bg-seo-blue/20"></div>
                  )}
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm flex-1">
                  <h3 className="text-xl font-display font-bold text-seo-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-seo-gray-dark">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl font-display font-bold text-seo-dark mb-4">
              See Our Services in Action
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Real results for businesses like yours
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedCaseStudies.map((study, index) => (
              <CaseStudyPreview key={study.id} caseStudy={study} delay={index * 100} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Section */}
      <section className="py-20 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Latest Insights
            </span>
            <h2 className="text-3xl font-display font-bold text-seo-dark mb-4">
              SEO Knowledge & Strategies
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Stay up-to-date with our latest articles and insights
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedBlogs.map((post, index) => (
              <BlogPreview key={post.id} post={post} delay={index * 100} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/blogs" 
              className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              <span>View All Articles</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-seo-dark text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white mb-4">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Improve Your Search Rankings?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Contact us today for a free SEO audit and consultation
            </p>
            <Link
              to="/contact"
              className="inline-block bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-8 rounded-md transition-colors button-hover-effect"
            >
              Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Services;
