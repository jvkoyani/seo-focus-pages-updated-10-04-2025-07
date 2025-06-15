
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
  serviceSlug?: string;
  industrySlug?: string;
  locationSlug?: string;
  imageUrl?: string;
}

interface ContextualBlogProps {
  title?: string;
  subtitle?: string;
  serviceSlug?: string;
  industrySlug?: string;
  locationSlug?: string;
  className?: string;
  limit?: number;
}

const ContextualBlog: React.FC<ContextualBlogProps> = ({
  title,
  subtitle,
  serviceSlug,
  industrySlug,
  locationSlug,
  className = "",
  limit = 3
}) => {
  // Generate contextual blog posts based on the current page context
  const generateContextualBlogPosts = (): BlogPost[] => {
    const allBlogPosts: BlogPost[] = [];
    
    // Location specific blog - THIS IS THE KEY FIX
    if (locationSlug && !serviceSlug && !industrySlug) {
      const locationName = locationSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      
      allBlogPosts.push({
        id: `why-seo-focus-best-${locationSlug}`,
        title: `Why SEO Focus is Best for Your Business Marketing Partner in ${locationName}`,
        excerpt: `Discover why SEO Focus stands out as the premier choice for businesses in ${locationName}. Our local expertise, personalized approach, and proven track record make us the ideal marketing partner for your business growth in ${locationName}.`,
        date: "June 12, 2025",
        author: "SEO Focus Team",
        tags: [locationName, "Marketing Partner", "Local SEO", "Business Growth"],
        slug: `why-seo-focus-best-marketing-partner-${locationSlug}`,
        locationSlug,
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      });
    }
    
    // Service + Industry + Location specific blog
    if (serviceSlug && industrySlug && locationSlug) {
      const serviceName = serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const industryName = industrySlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const locationName = locationSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      
      allBlogPosts.push({
        id: `why-seo-focus-${serviceSlug}-${industrySlug}-${locationSlug}`,
        title: `Why SEO Focus is Best for ${serviceName} for ${industryName} in ${locationName}`,
        excerpt: `Discover why SEO Focus stands out as the premier choice for ${serviceName.toLowerCase()} services specifically tailored for ${industryName.toLowerCase()} businesses in ${locationName}. Our specialized approach delivers exceptional results.`,
        date: "June 10, 2025",
        author: "SEO Focus Team",
        tags: [serviceName, industryName, locationName, "Why Choose Us"],
        slug: `why-seo-focus-best-${serviceSlug}-${industrySlug}-${locationSlug}`,
        serviceSlug,
        industrySlug,
        locationSlug,
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      });
    }
    
    // Service + Industry specific blog
    if (serviceSlug && industrySlug) {
      const serviceName = serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const industryName = industrySlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      
      allBlogPosts.push({
        id: `why-seo-focus-${serviceSlug}-${industrySlug}`,
        title: `Why SEO Focus is Best for ${serviceName} in ${industryName}`,
        excerpt: `Learn why SEO Focus is the top choice for ${serviceName.toLowerCase()} services in the ${industryName.toLowerCase()} industry. Our industry-specific expertise and proven methodologies set us apart.`,
        date: "June 8, 2025",
        author: "Industry Specialist Team",
        tags: [serviceName, industryName, "Industry Expertise"],
        slug: `why-seo-focus-best-${serviceSlug}-${industrySlug}`,
        serviceSlug,
        industrySlug,
        imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      });
    }
    
    // Service specific blog
    if (serviceSlug) {
      const serviceName = serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      
      allBlogPosts.push({
        id: `why-seo-focus-${serviceSlug}`,
        title: `Why SEO Focus is Best for ${serviceName}`,
        excerpt: `Discover what makes SEO Focus the leading provider of ${serviceName.toLowerCase()} services. Our innovative approach, expert team, and commitment to results make the difference.`,
        date: "June 5, 2025",
        author: "Service Excellence Team",
        tags: [serviceName, "Service Excellence", "Why Choose Us"],
        slug: `why-seo-focus-best-${serviceSlug}`,
        serviceSlug,
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      });
    }
    
    // Industry specific blog
    if (industrySlug && !serviceSlug) {
      const industryName = industrySlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      
      allBlogPosts.push({
        id: `why-seo-focus-${industrySlug}`,
        title: `Why SEO Focus is Best for ${industryName}`,
        excerpt: `Explore why SEO Focus is the preferred SEO partner for ${industryName.toLowerCase()} businesses. Our deep industry knowledge and tailored strategies drive exceptional results.`,
        date: "June 3, 2025",
        author: "Industry Expert Team",
        tags: [industryName, "Industry Focus", "Specialized Solutions"],
        slug: `why-seo-focus-best-${industrySlug}`,
        industrySlug,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      });
    }
    
    // Add some general high-quality blog posts if we need more content
    const generalPosts: BlogPost[] = [
      {
        id: "seo-trends-2025",
        title: "Top SEO Trends to Watch in 2025",
        excerpt: "Stay ahead of the curve with the latest SEO trends and algorithm updates that will shape digital marketing in 2025.",
        date: "May 28, 2025",
        author: "SEO Research Team",
        tags: ["SEO Trends", "2025", "Algorithm Updates"],
        slug: "seo-trends-2025",
        imageUrl: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: "local-seo-complete-guide",
        title: "The Complete Guide to Local SEO Success",
        excerpt: "Master local SEO with our comprehensive guide covering everything from Google Business Profile optimization to local link building.",
        date: "May 25, 2025",
        author: "Local SEO Experts",
        tags: ["Local SEO", "Google Business Profile", "Local Rankings"],
        slug: "complete-local-seo-guide",
        serviceSlug: "local-seo",
        imageUrl: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: "technical-seo-audit",
        title: "How to Conduct a Technical SEO Audit",
        excerpt: "Learn the essential steps for conducting a comprehensive technical SEO audit to identify and fix issues affecting your website's performance.",
        date: "May 20, 2025",
        author: "Technical SEO Team",
        tags: ["Technical SEO", "SEO Audit", "Website Performance"],
        slug: "technical-seo-audit-guide",
        serviceSlug: "technical-seo",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      }
    ];
    
    allBlogPosts.push(...generalPosts);
    
    return allBlogPosts.slice(0, limit);
  };

  // Generate dynamic title and subtitle
  const getContextualTitle = () => {
    if (title) return title;
    
    if (serviceSlug && industrySlug && locationSlug) {
      return "Why Choose SEO Focus";
    } else if (serviceSlug && industrySlug) {
      return "Industry-Specific Insights";
    } else if (serviceSlug) {
      return "Service Excellence Insights";
    } else if (industrySlug) {
      return "Industry-Focused Resources";
    }
    return "Latest Insights & Resources";
  };

  const getContextualSubtitle = () => {
    if (subtitle) return subtitle;
    
    const serviceName = serviceSlug ? serviceSlug.replace(/-/g, ' ') : '';
    const industryName = industrySlug ? industrySlug.replace(/-/g, ' ') : '';
    const locationName = locationSlug ? locationSlug.replace(/-/g, ' ') : '';
    
    if (serviceSlug && industrySlug && locationSlug) {
      return `Specialized insights for ${serviceName} in the ${industryName} industry in ${locationName}`;
    } else if (serviceSlug && industrySlug) {
      return `Focused resources for ${serviceName} in the ${industryName} industry`;
    } else if (serviceSlug) {
      return `Expert insights related to ${serviceName}`;
    } else if (industrySlug) {
      return `Specialized resources for the ${industryName} industry`;
    }
    return "Stay updated with our latest SEO insights, tips, and strategies";
  };

  const relevantPosts = generateContextualBlogPosts();
  
  // Don't render if no posts found
  if (relevantPosts.length === 0) {
    return null;
  }

  const dynamicTitle = getContextualTitle();
  const dynamicSubtitle = getContextualSubtitle();

  return (
    <section className={`py-16 bg-seo-gray-light ${className}`}>
      <div className="container mx-auto px-4">
        <AnimatedSection
          className="text-center max-w-3xl mx-auto mb-12"
          animation="fade-in"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
            Knowledge Hub
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
            {dynamicTitle}
          </h2>
          <p className="text-lg text-seo-gray-dark">
            {dynamicSubtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relevantPosts.map((post, index) => (
            <AnimatedSection
              key={post.id}
              className="h-full"
              animation="fade-in"
              delay={index * 100}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {post.imageUrl && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <CardContent className="flex-grow flex flex-col p-6">
                  <div className="flex items-center gap-3 mb-3 text-sm text-seo-gray-dark">
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <User className="mr-1 h-4 w-4" />
                      {post.author}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-seo-dark mb-3">
                    <Link to={`/blog/${post.slug}`} className="hover:text-seo-blue transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-seo-gray-dark mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <Badge key={idx} className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="mt-auto inline-flex items-center text-seo-blue font-medium group"
                  >
                    <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                      Read more
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link
            to="/blogs"
            className="inline-flex items-center text-seo-blue font-medium px-6 py-3 rounded-md border border-seo-blue hover:bg-seo-blue/5 transition-colors"
          >
            <span>View all articles</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContextualBlog;
