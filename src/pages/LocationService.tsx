import { useParams, Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import BlogPreview from '@/components/BlogPreview';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import Services from '@/components/Services';
import { services, locations, blogPosts, caseStudies, industries } from '@/lib/data';

const LocationService = () => {
  const { locationSlug, serviceSlug } = useParams<{ locationSlug: string; serviceSlug: string }>();
  
  const location = locations.find(loc => loc.slug === locationSlug);
  const service = services.find(s => s.slug === serviceSlug);

  if (!location || !service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
            <p className="mb-6">Sorry, the page you're looking for doesn't exist.</p>
            <Link 
              to="/" 
              className="inline-flex items-center text-seo-blue font-medium"
            >
              <span>Return to home</span>
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
    (post.category.toLowerCase().includes(service.title.toLowerCase()) || 
    service.title.toLowerCase().includes(post.category.toLowerCase())) &&
    post.tags.some(tag => tag.toLowerCase().includes(location.name.toLowerCase()))
  ).slice(0, 3);

  const relatedCaseStudies = caseStudies.filter(study => 
    (study.industry.toLowerCase().includes(service.title.toLowerCase()) || 
    study.solution.toLowerCase().includes(service.title.toLowerCase())) &&
    study.title.toLowerCase().includes(location.name.toLowerCase())
  ).slice(0, 2);

  // Find related industries
  const relatedIndustries = industries.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="h-5 w-5 text-seo-blue" />
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue">
                {location.name}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              {service.title} Services in {location.name}
            </h1>
            <p className="text-xl text-seo-gray-dark mb-8">
              Expert {service.title.toLowerCase()} solutions designed to help {location.name} businesses improve their search visibility and drive more targeted traffic.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors button-hover-effect w-full sm:w-auto text-center"
              >
                Get a Free Consultation
              </Link>
              <Link
                to={`/service/${service.slug}`}
                className="bg-transparent border border-seo-blue text-seo-blue hover:bg-seo-blue/10 font-medium py-3 px-6 rounded-md transition-colors w-full sm:w-auto text-center"
              >
                Learn More About {service.title}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="prose prose-lg max-w-none" animation="fade-in">
              <h2>{service.title} Solutions for {location.name} Businesses</h2>
              
              <p>In the competitive {location.name} market, having a strong online presence is crucial for business success. Our specialized {service.title.toLowerCase()} services are designed to help {location.name} businesses stand out from the competition and attract more qualified leads through search engines.</p>
              
              <p>With our deep understanding of both {service.title.toLowerCase()} best practices and the unique aspects of the {location.name} market, we develop tailored strategies that deliver measurable results for your business.</p>
              
              <h3>Why {location.name} Businesses Need Specialized {service.title} Services</h3>
              
              <p>The {location.name} market presents unique challenges and opportunities for businesses looking to improve their online visibility:</p>
              
              <ul>
                <li><strong>Local Competition:</strong> The {location.name} market is highly competitive, with many businesses vying for visibility in local search results.</li>
                <li><strong>Consumer Behavior:</strong> {location.name} consumers have specific search patterns and preferences that require targeted optimization strategies.</li>
                <li><strong>Geographic Considerations:</strong> Effective {service.title.toLowerCase()} in {location.name} requires optimization for specific neighborhoods, suburbs, and landmarks.</li>
                <li><strong>Local Business Ecosystem:</strong> Building relationships with other {location.name} businesses and organizations can significantly impact your search visibility.</li>
              </ul>
              
              <p>Our {service.title} services for {location.name} businesses take all these factors into account to develop a comprehensive strategy that drives real business growth.</p>
              
              <h3>Our {service.title} Approach for {location.name} Businesses</h3>
              
              <p>We combine proven {service.title.toLowerCase()} techniques with location-specific strategies to deliver superior results:</p>
            </AnimatedSection>
            
            <AnimatedSection className="mt-12 grid md:grid-cols-2 gap-6" animation="fade-in">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start bg-seo-gray-light p-6 rounded-lg">
                  <div className="bg-seo-blue/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <ArrowRight className="h-5 w-5 text-seo-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-seo-dark mb-2">{feature}</h3>
                    <p className="text-seo-gray-dark">
                      Our {location.name}-focused approach to {feature.toLowerCase()} helps your business achieve better visibility and results.
                    </p>
                  </div>
                </div>
              ))}
            </AnimatedSection>
            
            <AnimatedSection className="mt-12 prose prose-lg max-w-none" animation="fade-in">
              <h3>Why Choose Us for {service.title} in {location.name}</h3>
              
              <p>When you partner with us for your {location.name} {service.title.toLowerCase()} needs, you benefit from:</p>
              
              <ul>
                <li><strong>Local Expertise:</strong> Our team has extensive experience in the {location.name} market and understands the local business landscape.</li>
                <li><strong>Proven Results:</strong> We have a track record of success, helping numerous {location.name} businesses improve their search visibility and drive growth.</li>
                <li><strong>Customized Strategies:</strong> We develop tailored strategies based on your specific business goals, target audience, and competition.</li>
                <li><strong>Transparent Reporting:</strong> You'll receive regular, clear reports on your campaign performance and the impact on your business objectives.</li>
                <li><strong>Ongoing Optimization:</strong> We continuously refine our approach based on performance data and changing market conditions.</li>
              </ul>
              
              <p>Our commitment to delivering measurable results and exceptional service has made us a trusted {service.title.toLowerCase()} partner for businesses throughout {location.name}.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Industries Section */}
      <section className="py-20 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <h2 className="text-3xl font-display font-bold text-seo-dark mb-4">
              {service.title} for {location.name} Industries
            </h2>
            <p className="text-lg text-seo-gray-dark">
              We provide specialized {service.title.toLowerCase()} solutions for various industries in {location.name}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedIndustries.map((industry, index) => (
              <AnimatedSection
                key={industry.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="bg-seo-blue/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <industry.icon className="h-7 w-7 text-seo-blue" />
                </div>
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  {industry.title} in {location.name}
                </h3>
                <p className="text-seo-gray-dark mb-6">
                  Specialized {service.title.toLowerCase()} strategies for {industry.title.toLowerCase()} businesses in {location.name}.
                </p>
                <Link 
                  to={`/industry/${industry.slug}`} 
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
      
      {/* Blog Posts Section */}
      {relatedBlogs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
                Insights
              </span>
              <h2 className="text-3xl font-display font-bold text-seo-dark mb-4">
                {service.title} Resources for {location.name}
              </h2>
              <p className="text-lg text-seo-gray-dark">
                Discover our latest insights and strategies on {service.title.toLowerCase()} for {location.name} businesses
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
                {service.title} Success Stories in {location.name}
              </h2>
              <p className="text-lg text-seo-gray-dark">
                See how we've helped {location.name} businesses achieve results with our {service.title.toLowerCase()} services
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
      
      {/* Other Services in Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <h2 className="text-3xl font-display font-bold text-seo-dark mb-4">
              More SEO Services in {location.name}
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Discover our full range of SEO services available to {location.name} businesses
            </p>
          </AnimatedSection>
          
          <Services location={location.name} locationSlug={location.slug} />
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LocationService;
