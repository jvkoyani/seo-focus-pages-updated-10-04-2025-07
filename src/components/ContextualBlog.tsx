
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
  title = "Latest Insights & Resources",
  subtitle,
  serviceSlug,
  industrySlug,
  locationSlug,
  className,
  limit = 3
}) => {
  // Generate dynamic subtitle based on context
  const getContextualSubtitle = () => {
    if (serviceSlug && industrySlug && locationSlug) {
      return `Specialized insights for ${serviceSlug.replace(/-/g, ' ')} in the ${industrySlug.replace(/-/g, ' ')} industry in ${locationSlug.replace(/-/g, ' ')}`;
    } else if (serviceSlug && industrySlug) {
      return `Focused resources for ${serviceSlug.replace(/-/g, ' ')} in the ${industrySlug.replace(/-/g, ' ')} industry`;
    } else if (serviceSlug) {
      return `Expert insights related to ${serviceSlug.replace(/-/g, ' ')}`;
    } else {
      return "Stay updated with our latest SEO insights, tips, and strategies";
    }
  };

  // This would be connected to your data source in a real implementation
  const allBlogPosts: BlogPost[] = [
    {
      id: "1",
      title: "10 Essential Local SEO Strategies for Small Businesses",
      excerpt: "Discover the top strategies to boost your local presence and attract nearby customers.",
      date: "April 2, 2025",
      author: "Sarah Johnson",
      tags: ["Local SEO", "Small Business", "Google Maps"],
      slug: "local-seo-strategies-small-business",
      serviceSlug: "local-seo",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "2",
      title: "How Healthcare Providers Can Leverage SEO for Patient Acquisition",
      excerpt: "Learn how medical practices can use SEO to attract new patients and grow their practice.",
      date: "March 28, 2025",
      author: "Dr. Michael Chen",
      tags: ["Healthcare", "Patient Acquisition", "Medical SEO"],
      slug: "healthcare-seo-patient-acquisition",
      serviceSlug: "technical-seo",
      industrySlug: "healthcare",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "3",
      title: "Sydney Restaurants: Standing Out in Local Search Results",
      excerpt: "Practical SEO tactics for restaurants in Sydney to improve visibility and attract diners.",
      date: "March 15, 2025",
      author: "Emma Wilson",
      tags: ["Restaurant SEO", "Sydney", "Local Search"],
      slug: "sydney-restaurants-local-search",
      serviceSlug: "local-seo",
      industrySlug: "restaurants",
      locationSlug: "sydney",
      imageUrl: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "4",
      title: "Technical SEO Audit Checklist for E-commerce Websites",
      excerpt: "Comprehensive guide to auditing and improving technical SEO for online stores.",
      date: "March 10, 2025",
      author: "Alex Rivera",
      tags: ["Technical SEO", "E-commerce", "Audit"],
      slug: "technical-seo-audit-ecommerce",
      serviceSlug: "technical-seo",
      industrySlug: "ecommerce",
      imageUrl: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "5",
      title: "Content Marketing for Law Firms in Melbourne",
      excerpt: "How Melbourne law firms can use content marketing to attract potential clients.",
      date: "February 28, 2025",
      author: "Jessica Taylor",
      tags: ["Content Marketing", "Law Firms", "Melbourne"],
      slug: "content-marketing-law-firms-melbourne",
      serviceSlug: "content-marketing",
      industrySlug: "legal",
      locationSlug: "melbourne",
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "6",
      title: "Voice Search Optimization for Local Businesses",
      excerpt: "Prepare your business for the growing trend of voice-based searches.",
      date: "February 20, 2025",
      author: "Tom Richards",
      tags: ["Voice Search", "Local SEO", "Future Trends"],
      slug: "voice-search-local-businesses",
      serviceSlug: "local-seo",
      imageUrl: "https://images.unsplash.com/photo-1581538407295-5402592e5521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  // Filter blog posts based on context
  const filteredPosts = allBlogPosts.filter(post => {
    if (serviceSlug && industrySlug && locationSlug) {
      return post.serviceSlug === serviceSlug && 
             post.industrySlug === industrySlug && 
             post.locationSlug === locationSlug;
    } else if (serviceSlug && industrySlug) {
      return post.serviceSlug === serviceSlug && 
             post.industrySlug === industrySlug;
    } else if (serviceSlug) {
      return post.serviceSlug === serviceSlug;
    }
    return true; // Return all posts if no filters
  }).slice(0, limit);

  // If no posts match the specific criteria, fall back to less specific criteria
  const getRelevantPosts = () => {
    if (filteredPosts.length > 0) {
      return filteredPosts;
    }
    
    // Try with less specific criteria
    if (serviceSlug && industrySlug) {
      const serviceIndustryPosts = allBlogPosts.filter(
        post => post.serviceSlug === serviceSlug && post.industrySlug === industrySlug
      ).slice(0, limit);
      if (serviceIndustryPosts.length > 0) return serviceIndustryPosts;
    }
    
    if (serviceSlug) {
      const servicePosts = allBlogPosts.filter(
        post => post.serviceSlug === serviceSlug
      ).slice(0, limit);
      if (servicePosts.length > 0) return servicePosts;
    }
    
    // Fallback to all posts
    return allBlogPosts.slice(0, limit);
  };

  const relevantPosts = getRelevantPosts();
  
  // Don't render if no posts found
  if (relevantPosts.length === 0) {
    return null;
  }

  const dynamicSubtitle = subtitle || getContextualSubtitle();

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
            {title}
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
