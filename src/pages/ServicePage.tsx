
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import BlogPreview from '@/components/BlogPreview';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import LocationLinks from '@/components/LocationLinks';
import { services, blogPosts, caseStudies } from '@/lib/data';

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="mb-6">Sorry, the service you're looking for doesn't exist.</p>
            <Link 
              to="/services" 
              className="inline-flex items-center text-seo-blue font-medium"
            >
              <span>View all services</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Find related blog posts and case studies
  const relatedBlogs = blogPosts.filter(post => 
    post.category.toLowerCase().includes(service.title.toLowerCase()) || 
    service.title.toLowerCase().includes(post.category.toLowerCase())
  ).slice(0, 3);

  const relatedCaseStudies = caseStudies.filter(study => 
    study.industry.toLowerCase().includes(service.title.toLowerCase()) || 
    study.solution.toLowerCase().includes(service.title.toLowerCase())
  ).slice(0, 2);

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
              {service.title}
            </h1>
            <p className="text-xl text-seo-gray-dark mb-8">
              {service.description}
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Service Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="prose prose-lg max-w-none" animation="fade-in">
              {service.content ? (
                <div dangerouslySetInnerHTML={{ __html: service.content }} />
              ) : (
                <>
                  <h2 className="text-3xl font-display font-bold text-seo-dark mb-6">
                    Why Choose Our {service.title} Service?
                  </h2>
                  <p className="text-lg text-seo-gray-dark mb-8">
                    Our {service.title.toLowerCase()} service is designed to help your business achieve better search visibility and drive more qualified traffic to your website. We use proven strategies and the latest techniques to deliver measurable results.
                  </p>
                </>
              )}
            </AnimatedSection>
            
            <AnimatedSection className="mt-12 grid md:grid-cols-2 gap-6" animation="fade-in">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start bg-seo-gray-light p-6 rounded-lg">
                  <div className="bg-seo-blue/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <Check className="h-5 w-5 text-seo-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-seo-dark mb-2">{feature}</h3>
                    <p className="text-seo-gray-dark">
                      We implement effective {feature.toLowerCase()} strategies to improve your online presence and search rankings.
                    </p>
                  </div>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Locations Section */}
      <section className="py-20 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <h2 className="text-3xl font-display font-bold text-seo-dark mb-4">
              {service.title} Services in Australia
            </h2>
            <p className="text-lg text-seo-gray-dark">
              We provide specialized {service.title.toLowerCase()} services in major cities across Australia
            </p>
          </AnimatedSection>
          
          <LocationLinks service={service} />
        </div>
      </section>
      
      {/* Blog Posts Section */}
      {relatedBlogs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
                Insights
              </span>
              <h2 className="text-3xl font-display font-bold text-seo-dark mb-4">
                Latest {service.title} Articles
              </h2>
              <p className="text-lg text-seo-gray-dark">
                Discover our latest insights and strategies on {service.title.toLowerCase()}
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
      )}
      
      {/* Case Studies Section */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-20 bg-seo-gray-light">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
                Success Stories
              </span>
              <h2 className="text-3xl font-display font-bold text-seo-dark mb-4">
                {service.title} Success Stories
              </h2>
              <p className="text-lg text-seo-gray-dark">
                See how we've helped businesses achieve results with our {service.title.toLowerCase()} services
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
      )}
      
      {/* Related Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <h2 className="text-3xl font-display font-bold text-seo-dark mb-4">
              Explore Related Services
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Discover our other SEO services that can complement your {service.title.toLowerCase()} strategy
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services
              .filter(s => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService, index) => (
                <AnimatedSection
                  key={relatedService.id}
                  className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow"
                  animation="fade-in"
                  delay={index * 100}
                >
                  <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                    {relatedService.title}
                  </h3>
                  <p className="text-seo-gray-dark mb-6">
                    {relatedService.description}
                  </p>
                  <Link 
                    to={`/service/${relatedService.slug}`} 
                    className="inline-flex items-center text-seo-blue font-medium group"
                  >
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
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ServicePage;
