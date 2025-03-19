
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import Services from '@/components/Services';
import BlogPreview from '@/components/BlogPreview';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import { locations, services, blogPosts, caseStudies, industries } from '@/lib/data';

const Location = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = locations.find(loc => loc.slug === slug);

  if (!location) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Location Not Found</h1>
            <p className="mb-6">Sorry, the location you're looking for doesn't exist.</p>
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

  // Find relevant blog posts for this location
  const relatedBlogs = blogPosts
    .filter(post => 
      post.content.toLowerCase().includes(location.name.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(location.name.toLowerCase()))
    )
    .slice(0, 3);

  // Find relevant case studies for this location
  const relatedCaseStudies = caseStudies
    .filter(study => 
      study.title.toLowerCase().includes(location.name.toLowerCase()) ||
      study.challenge.toLowerCase().includes(location.name.toLowerCase()) ||
      study.solution.toLowerCase().includes(location.name.toLowerCase())
    )
    .slice(0, 2);

  // Get relevant industries for this location
  const relevantIndustries = industries.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              <MapPin className="h-4 w-4 inline mr-1" />
              {location.name}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              SEO Services in {location.name}
            </h1>
            <p className="text-xl text-seo-gray-dark mb-8">
              {location.description}
            </p>
            <Link
              to="/contact"
              className="bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors button-hover-effect"
            >
              Get a Free Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="prose prose-lg max-w-none" animation="fade-in">
              <h2>Expert SEO Services in {location.name}</h2>
              
              <p>In today's competitive digital landscape, having a strong online presence is crucial for businesses in {location.name}. Our specialized SEO services are designed to help local businesses stand out from the competition and attract more qualified leads through search engines.</p>
              
              <p>With our deep understanding of both SEO best practices and the unique aspects of the {location.name} market, we develop tailored strategies that deliver measurable results for your business.</p>
              
              <h3>Why {location.name} Businesses Need Specialized SEO</h3>
              
              <p>The {location.name} market presents unique challenges and opportunities for businesses looking to improve their online visibility:</p>
              
              <ul>
                <li><strong>Local Competition:</strong> The {location.name} market is highly competitive, with many businesses vying for visibility in local search results.</li>
                <li><strong>Consumer Behavior:</strong> {location.name} consumers have specific search patterns and preferences that require targeted optimization strategies.</li>
                <li><strong>Geographic Considerations:</strong> Effective SEO in {location.name} requires optimization for specific neighborhoods, suburbs, and landmarks.</li>
                <li><strong>Local Business Ecosystem:</strong> Building relationships with other {location.name} businesses and organizations can significantly impact your search visibility.</li>
              </ul>
              
              <p>Our SEO services for {location.name} businesses take all these factors into account to develop a comprehensive strategy that drives real business growth.</p>
              
              <h3>Our SEO Approach for {location.name} Businesses</h3>
              
              <p>We combine proven SEO techniques with location-specific strategies to deliver superior results:</p>
              
              <ul>
                <li><strong>Local Keyword Research:</strong> We identify the most valuable keywords that {location.name} residents use when searching for products or services like yours.</li>
                <li><strong>Google Business Profile Optimization:</strong> We optimize your Google Business Profile to improve visibility in local map packs and attract nearby customers.</li>
                <li><strong>Local Content Creation:</strong> We develop engaging, location-specific content that resonates with the {location.name} audience and addresses their specific needs.</li>
                <li><strong>Local Link Building:</strong> We build high-quality backlinks from relevant {location.name} websites to boost your local authority.</li>
                <li><strong>Local Citation Building:</strong> We ensure your business information is consistent across all online directories and platforms.</li>
                <li><strong>Competitor Analysis:</strong> We analyze your local competitors to identify opportunities and develop strategies to outrank them.</li>
              </ul>
              
              <p>This comprehensive approach ensures that your business achieves sustainable growth in the competitive {location.name} market.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <Services location={location.name} locationSlug={location.slug} />
      
      {/* Industries Section */}
      <section className="py-20 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <h2 className="text-3xl font-display font-bold text-seo-dark mb-4">
              Industries We Serve in {location.name}
            </h2>
            <p className="text-lg text-seo-gray-dark">
              We provide specialized SEO solutions for various industries in {location.name}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relevantIndustries.map((industry, index) => (
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
                  Specialized SEO strategies for {industry.title.toLowerCase()} businesses in {location.name}.
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
          
          <div className="text-center mt-12">
            <Link 
              to="/industries" 
              className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              <span>View All Industries</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
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
                SEO Resources for {location.name}
              </h2>
              <p className="text-lg text-seo-gray-dark">
                Discover our latest insights and strategies for {location.name} businesses
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
                {location.name} Success Stories
              </h2>
              <p className="text-lg text-seo-gray-dark">
                See how we've helped {location.name} businesses achieve results
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
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Location;
