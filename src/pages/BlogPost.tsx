
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, ChevronLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import BlogPreview from '@/components/BlogPreview';
import { blogPosts } from '@/lib/data';
import SEO from '@/components/SEO';

const BlogPost = ({ routeKey }: { routeKey?: string }) => {
  const { slug } = useParams<{ slug: string }>();
  
  console.log(`BlogPost rendering for slug: ${slug} with routeKey: ${routeKey}`);

  // First try to find in static blog posts
  let post = blogPosts.find(p => p.slug === slug);
  
  // If not found in static posts, check if it's a dynamically generated contextual blog post
  if (!post && slug) {
    // Generate contextual blog post based on slug pattern
    if (slug.startsWith('why-seo-focus-best-')) {
      const slugParts = slug.replace('why-seo-focus-best-', '').split('-');
      
      // Determine what type of contextual blog this is
      let serviceSlug = '';
      let industrySlug = '';
      let locationSlug = '';
      
      if (slugParts.includes('for') && slugParts.includes('in')) {
        // Service for Industry in Location pattern
        const forIndex = slugParts.indexOf('for');
        const inIndex = slugParts.indexOf('in');
        
        serviceSlug = slugParts.slice(0, forIndex).join('-');
        industrySlug = slugParts.slice(forIndex + 1, inIndex).join('-');
        locationSlug = slugParts.slice(inIndex + 1).join('-');
      } else if (slugParts.includes('for')) {
        // Service for Industry pattern
        const forIndex = slugParts.indexOf('for');
        serviceSlug = slugParts.slice(0, forIndex).join('-');
        industrySlug = slugParts.slice(forIndex + 1).join('-');
      } else {
        // Single service or industry pattern
        serviceSlug = slugParts.join('-');
      }
      
      // Generate contextual blog post
      const serviceName = serviceSlug ? serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : '';
      const industryName = industrySlug ? industrySlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : '';
      const locationName = locationSlug ? locationSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : '';
      
      let title = '';
      let content = '';
      let category = 'SEO Excellence';
      let tags: string[] = [];
      
      if (serviceSlug && industrySlug && locationSlug) {
        title = `Why SEO Focus is Best for ${serviceName} for ${industryName} in ${locationName}`;
        tags = [serviceName, industryName, locationName, "Why Choose Us"];
        content = `
          <h2>Why Choose SEO Focus for ${serviceName} in ${industryName} in ${locationName}?</h2>
          <p>When it comes to ${serviceName.toLowerCase()} services for ${industryName.toLowerCase()} businesses in ${locationName}, SEO Focus stands out as the premier choice. Our specialized approach combines deep industry knowledge with location-specific strategies to deliver exceptional results.</p>
          
          <h3>Local Market Expertise</h3>
          <p>We understand the unique challenges and opportunities that ${industryName.toLowerCase()} businesses face in ${locationName}. Our team has extensive experience working with local businesses and knows what it takes to succeed in this specific market.</p>
          
          <h3>Industry-Specific Strategies</h3>
          <p>Our ${serviceName.toLowerCase()} strategies are specifically tailored for the ${industryName.toLowerCase()} industry. We understand your target audience, competitors, and the specific keywords and content that drive results in your sector.</p>
          
          <h3>Proven Track Record</h3>
          <p>We have a demonstrated history of success helping ${industryName.toLowerCase()} businesses in ${locationName} achieve their SEO goals. Our data-driven approach ensures measurable results and sustainable growth.</p>
          
          <h3>Comprehensive Service Offering</h3>
          <p>Our ${serviceName.toLowerCase()} services include keyword research, on-page optimization, content creation, local SEO, link building, and ongoing performance monitoring. We provide everything you need to dominate search results in ${locationName}.</p>
          
          <h3>Get Started Today</h3>
          <p>Ready to see why SEO Focus is the best choice for ${serviceName.toLowerCase()} in the ${industryName.toLowerCase()} industry in ${locationName}? Contact us today for a free consultation and discover how we can help your business achieve its full potential.</p>
        `;
      } else if (serviceSlug && industrySlug) {
        title = `Why SEO Focus is Best for ${serviceName} in ${industryName}`;
        tags = [serviceName, industryName, "Industry Expertise"];
        content = `
          <h2>Why Choose SEO Focus for ${serviceName} in the ${industryName} Industry?</h2>
          <p>SEO Focus is the leading provider of ${serviceName.toLowerCase()} services specifically designed for the ${industryName.toLowerCase()} industry. Our specialized expertise and proven methodologies set us apart from the competition.</p>
          
          <h3>Deep Industry Knowledge</h3>
          <p>We understand the unique challenges, regulations, and opportunities within the ${industryName.toLowerCase()} industry. This knowledge allows us to create highly targeted ${serviceName.toLowerCase()} strategies that resonate with your specific audience.</p>
          
          <h3>Tailored SEO Strategies</h3>
          <p>Our ${serviceName.toLowerCase()} approach is customized for ${industryName.toLowerCase()} businesses. We focus on the keywords, content types, and optimization techniques that work best in your industry.</p>
          
          <h3>Proven Results</h3>
          <p>We have a track record of helping ${industryName.toLowerCase()} businesses achieve significant improvements in search rankings, organic traffic, and lead generation through our specialized ${serviceName.toLowerCase()} services.</p>
          
          <h3>Comprehensive Support</h3>
          <p>From initial strategy development to ongoing optimization and reporting, we provide complete ${serviceName.toLowerCase()} support tailored to the needs of ${industryName.toLowerCase()} businesses.</p>
        `;
      } else if (serviceSlug) {
        title = `Why SEO Focus is Best for ${serviceName}`;
        tags = [serviceName, "Service Excellence", "Why Choose Us"];
        content = `
          <h2>Why Choose SEO Focus for ${serviceName}?</h2>
          <p>SEO Focus is the leading provider of ${serviceName.toLowerCase()} services, delivering innovative solutions and exceptional results for businesses across all industries.</p>
          
          <h3>Expert Team</h3>
          <p>Our team of ${serviceName.toLowerCase()} specialists brings years of experience and expertise to every project. We stay up-to-date with the latest industry trends and best practices to ensure optimal results.</p>
          
          <h3>Proven Methodology</h3>
          <p>Our ${serviceName.toLowerCase()} approach is based on proven strategies and data-driven insights. We use advanced tools and techniques to deliver measurable improvements in search rankings and organic traffic.</p>
          
          <h3>Customized Solutions</h3>
          <p>We understand that every business is unique. Our ${serviceName.toLowerCase()} services are tailored to your specific needs, goals, and target audience to maximize effectiveness.</p>
          
          <h3>Transparent Reporting</h3>
          <p>We provide detailed, transparent reporting on all ${serviceName.toLowerCase()} activities and results. You'll always know exactly what we're doing and how it's impacting your business.</p>
          
          <h3>Ongoing Support</h3>
          <p>Our relationship doesn't end with implementation. We provide ongoing ${serviceName.toLowerCase()} support and optimization to ensure continued success and growth.</p>
        `;
      }
      
      // Create the dynamic blog post
      post = {
        id: slug,
        title,
        excerpt: `Discover why SEO Focus is the premier choice for ${serviceName.toLowerCase()} services and how our expertise can transform your business.`,
        content,
        date: "June 10, 2025",
        author: "SEO Focus Team",
        category,
        tags,
        slug,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      };
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <SEO 
          title="Blog Post Not Found"
          description="The article you're looking for isn't available. Browse our other SEO resources and insights to improve your search rankings."
          canonicalUrl="/blogs"
          routeKey={routeKey}
        />
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-6">Sorry, the blog post you're looking for doesn't exist.</p>
            <Link 
              to="/blogs" 
              className="inline-flex items-center text-seo-blue font-medium"
            >
              <span>View all blog posts</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Find related posts
  const relatedPosts = blogPosts
    .filter(p => 
      p.id !== post.id && 
      (p.category === post.category || 
       p.tags.some(tag => post.tags.includes(tag)))
    )
    .slice(0, 3);
    
  // Create a custom meta title and description based on the post content
  const metaTitle = `${post.title} | SEO Focus`;
  const metaDescription = post.excerpt || `Learn expert insights about ${post.title}. Discover proven strategies to improve your SEO performance and drive more targeted traffic.`;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={metaTitle}
        description={metaDescription}
        keywords={post.tags.join(', ')}
        canonicalUrl={`/blog/${post.slug}`}
        ogImage={post.image}
        ogType="article"
        routeKey={routeKey}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <Link 
              to="/blogs" 
              className="inline-flex items-center text-seo-blue font-medium mb-6"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              <span>Back to all blog posts</span>
            </Link>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center text-seo-gray-dark mb-8">
              <span className="flex items-center mx-2 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </span>
              <span className="mx-2 mb-2">•</span>
              <span className="flex items-center mx-2 mb-2">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="prose prose-lg max-w-none" animation="fade-in">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </AnimatedSection>
            
            {/* Tags */}
            <div className="mt-12 flex flex-wrap items-center">
              <Tag className="h-5 w-5 text-seo-blue mr-3" />
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-seo-gray-light text-seo-gray-dark rounded-full text-sm mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-seo-gray-light">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
              <h2 className="text-3xl font-display font-bold text-seo-dark mb-4">
                Related Articles
              </h2>
              <p className="text-lg text-seo-gray-dark">
                Discover more insights on this topic
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <BlogPreview key={relatedPost.id} post={relatedPost} delay={index * 100} />
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
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default BlogPost;
