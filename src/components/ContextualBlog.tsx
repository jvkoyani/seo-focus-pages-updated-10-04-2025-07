import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Briefcase, Building, TrendingUp, FileText } from 'lucide-react';
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

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  location?: string;
  challenge: string;
  solution: string;
  results: string[];
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
  showCaseStudies?: boolean;
}

const ContextualBlog: React.FC<ContextualBlogProps> = ({
  title = "Latest Insights & Resources",
  subtitle,
  serviceSlug,
  industrySlug,
  locationSlug,
  className,
  limit = 3,
  showCaseStudies = true
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

  // Case studies data - would come from your CMS
  const allCaseStudies: CaseStudy[] = [
    {
      id: "cs1",
      title: "Increased Organic Traffic by 150% for Legal Firm in London",
      company: "Johnson & Partners Law",
      industry: "legal",
      location: "london",
      challenge: "A prestigious law firm in London struggled with low visibility in local searches and competition from larger firms.",
      solution: "Implemented comprehensive SEO strategy focused on local keywords, industry-specific content creation, and technical optimization.",
      results: [
        "150% increase in organic traffic in 6 months",
        "First page ranking for 45+ legal keywords in London",
        "26% increase in qualified leads from search engines"
      ],
      slug: "johnson-partners-law-london-seo",
      serviceSlug: "seo",
      industrySlug: "legal",
      locationSlug: "london",
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "cs2",
      title: "Healthcare Provider Achieves 200% ROI with Technical SEO",
      company: "MediCare Plus",
      industry: "healthcare",
      location: "sydney",
      challenge: "A Sydney medical practice was experiencing slow website performance and poor rankings for important medical search terms.",
      solution: "Complete technical SEO audit and optimization, mobile responsiveness improvements, and structured data implementation.",
      results: [
        "Page load time decreased by 65%",
        "200% return on investment within 9 months",
        "40% increase in new patient appointments from search"
      ],
      slug: "medicare-plus-technical-seo",
      serviceSlug: "technical-seo",
      industrySlug: "healthcare",
      locationSlug: "sydney",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "cs3",
      title: "E-commerce Store Increases Sales by 85% with Content Strategy",
      company: "Urban Fashion Co",
      industry: "ecommerce",
      location: "brisbane",
      challenge: "Brisbane-based fashion retailer struggled with high bounce rates and low conversion despite good traffic.",
      solution: "Content marketing strategy with product-focused blog content, enhanced product descriptions, and category optimization.",
      results: [
        "85% increase in online sales",
        "Reduced bounce rate from 65% to 32%",
        "28% improvement in average time on site"
      ],
      slug: "urban-fashion-content-marketing",
      serviceSlug: "content-marketing",
      industrySlug: "ecommerce",
      locationSlug: "brisbane",
      imageUrl: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  // Multi-level filtering logic with fallbacks for blog posts
  const getRelevantPosts = () => {
    let filteredResults = [];
    
    // Level 1: Most specific - service + industry + location
    if (serviceSlug && industrySlug && locationSlug) {
      filteredResults = allBlogPosts.filter(post => 
        post.serviceSlug === serviceSlug && 
        post.industrySlug === industrySlug && 
        post.locationSlug === locationSlug
      );
    }
    
    // Level 2: Fallback - service + industry
    if (filteredResults.length < limit && serviceSlug && industrySlug) {
      const serviceIndustryPosts = allBlogPosts.filter(
        post => post.serviceSlug === serviceSlug && post.industrySlug === industrySlug
      );
      
      serviceIndustryPosts.forEach(post => {
        if (!filteredResults.some(p => p.id === post.id)) {
          filteredResults.push(post);
        }
      });
    }
    
    // Level 3: Fallback - service only
    if (filteredResults.length < limit && serviceSlug) {
      const servicePosts = allBlogPosts.filter(
        post => post.serviceSlug === serviceSlug
      );
      
      servicePosts.forEach(post => {
        if (!filteredResults.some(p => p.id === post.id)) {
          filteredResults.push(post);
        }
      });
    }
    
    // Level 4: Ultimate fallback - any posts
    if (filteredResults.length < limit) {
      allBlogPosts.forEach(post => {
        if (!filteredResults.some(p => p.id === post.id)) {
          filteredResults.push(post);
        }
      });
    }
    
    return filteredResults.slice(0, limit);
  };

  // Multi-level filtering logic with fallbacks for case studies
  const getRelevantCaseStudies = () => {
    let filteredResults = [];
    
    // Level 1: Most specific - service + industry + location
    if (serviceSlug && industrySlug && locationSlug) {
      filteredResults = allCaseStudies.filter(study => 
        study.serviceSlug === serviceSlug && 
        study.industrySlug === industrySlug && 
        study.locationSlug === locationSlug
      );
    }
    
    // Level 2: Fallback - service + industry
    if (filteredResults.length < 2 && serviceSlug && industrySlug) {
      const serviceIndustryStudies = allCaseStudies.filter(
        study => study.serviceSlug === serviceSlug && study.industrySlug === industrySlug
      );
      
      serviceIndustryStudies.forEach(study => {
        if (!filteredResults.some(s => s.id === study.id)) {
          filteredResults.push(study);
        }
      });
    }
    
    // Level 3: Fallback - service only
    if (filteredResults.length < 2 && serviceSlug) {
      const serviceStudies = allCaseStudies.filter(
        study => study.serviceSlug === serviceSlug
      );
      
      serviceStudies.forEach(study => {
        if (!filteredResults.some(s => s.id === study.id)) {
          filteredResults.push(study);
        }
      });
    }
    
    // Level 4: Ultimate fallback - any case studies
    if (filteredResults.length < 2) {
      allCaseStudies.forEach(study => {
        if (!filteredResults.some(s => s.id === study.id)) {
          filteredResults.push(study);
        }
      });
    }
    
    return filteredResults.slice(0, 2);
  };

  const relevantPosts = getRelevantPosts();
  const relevantCaseStudies = showCaseStudies ? getRelevantCaseStudies() : [];
  
  // Don't render if no resources found (extremely unlikely with fallbacks)
  if (relevantPosts.length === 0 && relevantCaseStudies.length === 0) {
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

        {/* Case Studies Section */}
        {relevantCaseStudies.length > 0 && (
          <div className="mb-12">
            <AnimatedSection 
              className="mb-6 flex items-center"
              animation="fade-in"
            >
              <Briefcase className="h-5 w-5 text-seo-blue mr-2" />
              <h3 className="text-xl font-display font-bold text-seo-dark">
                Featured Success Stories
              </h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relevantCaseStudies.map((study, index) => (
                <AnimatedSection
                  key={study.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row h-full"
                  animation="fade-in"
                  delay={index * 100}
                >
                  <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                    <img 
                      src={study.imageUrl} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="flex items-center text-sm text-seo-gray-dark mb-3">
                      <span className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                      {study.title}
                    </h3>
                    <p className="text-seo-gray-dark mb-4">
                      {study.challenge.split('.')[0]}.
                    </p>
                    <div className="mb-4">
                      <div className="font-medium text-seo-dark mb-2">Key Results:</div>
                      <div className="grid grid-cols-1 gap-2">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <div key={idx} className="flex items-start">
                            <TrendingUp className="h-4 w-4 text-seo-blue mt-1 mr-2 flex-shrink-0" />
                            <span className="text-sm text-seo-gray-dark">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link 
                      to={`/case-study/${study.slug}`} 
                      className="inline-flex items-center text-seo-blue font-medium group"
                    >
                      <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                        Read full case study
                      </span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}

        {/* Blog Posts Section */}
        <div className={relevantCaseStudies.length > 0 ? "" : "mt-8"}>
          <AnimatedSection 
            className="mb-6 flex items-center"
            animation="fade-in"
          >
            <FileText className="h-5 w-5 text-seo-blue mr-2" />
            <h3 className="text-xl font-display font-bold text-seo-dark">
              Latest Insights & Guides
            </h3>
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
        </div>
        
        <div className="text-center mt-10">
          <Link
            to={showCaseStudies ? "/blogs" : "/blogs"}
            className="inline-flex items-center text-seo-blue font-medium px-6 py-3 rounded-md border border-seo-blue hover:bg-seo-blue/5 transition-colors"
          >
            <span>View all articles</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          
          {showCaseStudies && (
            <Link
              to="/case-studies"
              className="inline-flex items-center text-seo-blue font-medium px-6 py-3 rounded-md border border-seo-blue hover:bg-seo-blue/5 transition-colors ml-4"
            >
              <span>View all case studies</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContextualBlog;
