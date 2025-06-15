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
  
  // If not found in static posts, check if it's a dynamically generated blog post
  if (!post && slug) {
    // Handle general blog posts that are referenced in ContextualBlog
    if (slug === 'seo-trends-2025') {
      post = {
        id: "seo-trends-2025",
        title: "Top SEO Trends to Watch in 2025",
        excerpt: "Stay ahead of the curve with the latest SEO trends and algorithm updates that will shape digital marketing in 2025.",
        content: `
          <h2>The Future of SEO: What to Expect in 2025</h2>
          <p>As we move through 2025, the SEO landscape continues to evolve at a rapid pace. Search engines are becoming more sophisticated, user expectations are higher, and new technologies are reshaping how we approach search optimization.</p>
          
          <h3>1. AI-Powered Search Features</h3>
          <p>Artificial Intelligence is transforming search results with more contextual and conversational responses. Businesses need to optimize for AI-generated snippets and featured results that provide direct answers to user queries.</p>
          
          <h3>2. Core Web Vitals Evolution</h3>
          <p>Google continues to refine its Core Web Vitals metrics, with new performance indicators focusing on user experience. Page speed, visual stability, and interactivity remain crucial ranking factors.</p>
          
          <h3>3. Voice Search Optimization</h3>
          <p>With the growing adoption of smart speakers and voice assistants, optimizing for voice search queries becomes essential. Focus on natural language patterns and question-based content.</p>
          
          <h3>4. E-A-T Signal Strengthening</h3>
          <p>Expertise, Authoritativeness, and Trustworthiness (E-A-T) signals are becoming more important, especially for YMYL (Your Money or Your Life) content. Building author authority and credible backlinks is crucial.</p>
          
          <h3>5. Video and Visual Search</h3>
          <p>Visual content optimization is gaining prominence. Optimize images, videos, and visual elements for better search visibility and engagement.</p>
          
          <h3>Stay Ahead with SEO Focus</h3>
          <p>At SEO Focus, we stay ahead of these trends to ensure our clients' websites remain competitive. Contact us to learn how we can help you adapt to the evolving SEO landscape.</p>
        `,
        date: "May 28, 2025",
        author: "SEO Research Team",
        category: "SEO Trends",
        tags: ["SEO Trends", "2025", "Algorithm Updates"],
        slug: "seo-trends-2025",
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      };
    } else if (slug === 'complete-local-seo-guide') {
      post = {
        id: "local-seo-complete-guide",
        title: "The Complete Guide to Local SEO Success",
        excerpt: "Master local SEO with our comprehensive guide covering everything from Google Business Profile optimization to local link building.",
        content: `
          <h2>Mastering Local SEO: Your Complete Guide</h2>
          <p>Local SEO is essential for businesses that serve customers in specific geographic areas. Whether you're a restaurant, law firm, or service provider, optimizing for local search can significantly increase your visibility and customer base.</p>
          
          <h3>1. Google Business Profile Optimization</h3>
          <p>Your Google Business Profile is the foundation of local SEO. Ensure your profile is complete with accurate business information, hours, photos, and regular updates. Encourage and respond to customer reviews.</p>
          
          <h3>2. Local Keyword Research</h3>
          <p>Target keywords that include location modifiers like "near me," your city name, and neighborhood references. Focus on how customers search for your services locally.</p>
          
          <h3>3. NAP Consistency</h3>
          <p>Maintain consistent Name, Address, and Phone number (NAP) information across all online directories, social media profiles, and your website. Inconsistencies can hurt local rankings.</p>
          
          <h3>4. Local Content Creation</h3>
          <p>Create content that's relevant to your local community. Write about local events, news, and topics that matter to your target audience in your area.</p>
          
          <h3>5. Local Link Building</h3>
          <p>Build relationships with other local businesses, participate in community events, and get listed in local directories and chamber of commerce websites.</p>
          
          <h3>6. Online Reviews Management</h3>
          <p>Actively encourage satisfied customers to leave reviews on Google, Yelp, and industry-specific platforms. Respond professionally to all reviews, both positive and negative.</p>
          
          <h3>Get Professional Local SEO Help</h3>
          <p>Local SEO requires ongoing attention and expertise. SEO Focus specializes in helping businesses dominate local search results. Contact us for a free local SEO audit.</p>
        `,
        date: "May 25, 2025",
        author: "Local SEO Experts",
        category: "Local SEO",
        tags: ["Local SEO", "Google Business Profile", "Local Rankings"],
        slug: "complete-local-seo-guide",
        image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      };
    } else if (slug === 'technical-seo-audit-guide') {
      post = {
        id: "technical-seo-audit",
        title: "How to Conduct a Technical SEO Audit",
        excerpt: "Learn the essential steps for conducting a comprehensive technical SEO audit to identify and fix issues affecting your website's performance.",
        content: `
          <h2>The Complete Technical SEO Audit Checklist</h2>
          <p>A technical SEO audit is essential for identifying and fixing issues that may be preventing your website from ranking well in search engines. This comprehensive guide will walk you through the key areas to examine.</p>
          
          <h3>1. Crawlability and Indexability</h3>
          <p>Use tools like Google Search Console to check if search engines can crawl and index your pages. Review your robots.txt file and XML sitemap for any blocking issues.</p>
          
          <h3>2. Site Speed and Core Web Vitals</h3>
          <p>Analyze your website's loading speed using Google PageSpeed Insights. Focus on improving Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).</p>
          
          <h3>3. Mobile-Friendliness</h3>
          <p>Ensure your website is fully responsive and provides an excellent user experience on mobile devices. Use Google's Mobile-Friendly Test tool to identify issues.</p>
          
          <h3>4. URL Structure and Internal Linking</h3>
          <p>Review your URL structure for clarity and SEO-friendliness. Analyze your internal linking strategy to ensure proper link equity distribution throughout your site.</p>
          
          <h3>5. HTTPS and Security</h3>
          <p>Verify that your website uses HTTPS encryption. Check for mixed content issues and ensure all resources load securely.</p>
          
          <h3>6. Duplicate Content and Canonicalization</h3>
          <p>Identify and fix duplicate content issues. Implement proper canonical tags to consolidate link equity and avoid content duplication penalties.</p>
          
          <h3>7. Structured Data Markup</h3>
          <p>Implement schema markup to help search engines better understand your content. Use Google's Structured Data Testing Tool to validate your markup.</p>
          
          <h3>8. Server Response Codes</h3>
          <p>Monitor for 404 errors, redirect chains, and other server response issues that could impact user experience and search engine crawling.</p>
          
          <h3>Professional Technical SEO Services</h3>
          <p>Technical SEO can be complex and time-consuming. SEO Focus offers comprehensive technical SEO audits and implementation services. Contact us to ensure your website's technical foundation is solid.</p>
        `,
        date: "May 20, 2025",
        author: "Technical SEO Team",
        category: "Technical SEO",
        tags: ["Technical SEO", "SEO Audit", "Website Performance"],
        slug: "technical-seo-audit-guide",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      };
    }
    
    // Check if it's a contextual blog post based on slug pattern
    else if (slug.startsWith('why-seo-focus-best-')) {
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
