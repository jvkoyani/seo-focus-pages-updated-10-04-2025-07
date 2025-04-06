
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, FileText, Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import BlogPreview from './BlogPreview';
import CaseStudyPreview from './CaseStudyPreview';
import { blogPosts, caseStudies } from '@/lib/data';

interface ResourcesSectionProps {
  filterTag?: string;
  serviceSlug?: string;
  industrySlug?: string;
  locationSlug?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

const ResourcesSection = ({ 
  filterTag, 
  serviceSlug, 
  industrySlug, 
  locationSlug,
  className = '',
  title = 'Resources & Insights',
  subtitle = 'Stay updated with our latest SEO guides, success stories, and industry insights'
}: ResourcesSectionProps) => {
  const location = useLocation();
  
  // Smart path parsing to extract context if not explicitly provided
  React.useEffect(() => {
    if (!serviceSlug && !industrySlug && !locationSlug) {
      const pathParts = location.pathname.split('/').filter(Boolean);
      
      // Handle URL patterns like /service/industry/location
      if (pathParts.length >= 1 && !pathParts[0].includes('-')) {
        // serviceSlug = pathParts[0];
      }
      if (pathParts.length >= 2 && !pathParts[1].includes('-')) {
        // industrySlug = pathParts[1];
      }
      if (pathParts.length >= 3 && !pathParts[2].includes('-')) {
        // locationSlug = pathParts[2];
      }
      
      // Handle URL patterns like /service-industry-location
      if (pathParts.length === 1 && pathParts[0].includes('-')) {
        const parts = pathParts[0].split('-');
        if (parts.length >= 3) {
          // Complex parsing logic would go here
        }
      }
    }
  }, [location.pathname, serviceSlug, industrySlug, locationSlug]);

  // Multi-level filtering logic with fallbacks
  const getRelevantBlogs = () => {
    let filteredResults = [];
    
    // Level 1: Most specific - service + industry + location
    if (serviceSlug && industrySlug && locationSlug) {
      filteredResults = blogPosts.filter(post => 
        post.tags.some(tag => tag.toLowerCase().includes(serviceSlug)) &&
        post.tags.some(tag => tag.toLowerCase().includes(industrySlug)) &&
        post.tags.some(tag => tag.toLowerCase().includes(locationSlug))
      );
    }
    
    // Level 2: Fallback - service + industry
    if (filteredResults.length < 3 && serviceSlug && industrySlug) {
      const serviceIndustryPosts = blogPosts.filter(post => 
        post.tags.some(tag => tag.toLowerCase().includes(serviceSlug)) &&
        post.tags.some(tag => tag.toLowerCase().includes(industrySlug))
      );
      
      // Add only new posts to avoid duplicates
      serviceIndustryPosts.forEach(post => {
        if (!filteredResults.some(p => p.id === post.id)) {
          filteredResults.push(post);
        }
      });
    }
    
    // Level 3: Fallback - service only
    if (filteredResults.length < 3 && serviceSlug) {
      const servicePosts = blogPosts.filter(post => 
        post.tags.some(tag => tag.toLowerCase().includes(serviceSlug))
      );
      
      servicePosts.forEach(post => {
        if (!filteredResults.some(p => p.id === post.id)) {
          filteredResults.push(post);
        }
      });
    }
    
    // Level 4: Tag-based fallback
    if (filteredResults.length < 3 && filterTag) {
      const tagPosts = blogPosts.filter(post => 
        post.tags.some(tag => tag.toLowerCase().includes(filterTag.toLowerCase())) ||
        post.category.toLowerCase().includes(filterTag.toLowerCase())
      );
      
      tagPosts.forEach(post => {
        if (!filteredResults.some(p => p.id === post.id)) {
          filteredResults.push(post);
        }
      });
    }
    
    // Level 5: Ultimate fallback - any posts
    if (filteredResults.length < 3) {
      blogPosts.forEach(post => {
        if (!filteredResults.some(p => p.id === post.id)) {
          filteredResults.push(post);
        }
      });
    }
    
    return filteredResults.slice(0, 3);
  };

  // Similar multi-level filtering logic for case studies
  const getRelevantCaseStudies = () => {
    let filteredResults = [];
    
    // Level 1: Most specific - service + industry + location
    if (serviceSlug && industrySlug && locationSlug) {
      filteredResults = caseStudies.filter(study => 
        study.solution.toLowerCase().includes(serviceSlug) &&
        study.industry.toLowerCase().includes(industrySlug) &&
        study.location?.toLowerCase().includes(locationSlug)
      );
    }
    
    // Level 2: Fallback - service + industry
    if (filteredResults.length < 2 && serviceSlug && industrySlug) {
      const serviceIndustryStudies = caseStudies.filter(study => 
        study.solution.toLowerCase().includes(serviceSlug) &&
        study.industry.toLowerCase().includes(industrySlug)
      );
      
      serviceIndustryStudies.forEach(study => {
        if (!filteredResults.some(s => s.id === study.id)) {
          filteredResults.push(study);
        }
      });
    }
    
    // Level 3: Fallback - service only
    if (filteredResults.length < 2 && serviceSlug) {
      const serviceStudies = caseStudies.filter(study => 
        study.solution.toLowerCase().includes(serviceSlug)
      );
      
      serviceStudies.forEach(study => {
        if (!filteredResults.some(s => s.id === study.id)) {
          filteredResults.push(study);
        }
      });
    }
    
    // Level 4: Tag-based fallback
    if (filteredResults.length < 2 && filterTag) {
      const tagStudies = caseStudies.filter(study => 
        study.industry.toLowerCase().includes(filterTag.toLowerCase()) ||
        study.solution.toLowerCase().includes(filterTag.toLowerCase())
      );
      
      tagStudies.forEach(study => {
        if (!filteredResults.some(s => s.id === study.id)) {
          filteredResults.push(study);
        }
      });
    }
    
    // Level 5: Ultimate fallback - any case studies
    if (filteredResults.length < 2) {
      caseStudies.forEach(study => {
        if (!filteredResults.some(s => s.id === study.id)) {
          filteredResults.push(study);
        }
      });
    }
    
    return filteredResults.slice(0, 2);
  };

  const relevantBlogs = getRelevantBlogs();
  const relevantCaseStudies = getRelevantCaseStudies();
  
  // Don't render if no resources found (extremely unlikely with fallbacks)
  if (relevantBlogs.length === 0 && relevantCaseStudies.length === 0) {
    return null;
  }

  return (
    <div className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <AnimatedSection 
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12"
          animation="fade-in"
        >
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-3">
              <div className="flex space-x-2">
                <span className="flex items-center bg-seo-blue/10 text-seo-blue px-3 py-1 rounded-full text-sm font-medium">
                  <FileText className="h-4 w-4 mr-1" />
                  Blog Articles
                </span>
                <span className="flex items-center bg-seo-blue/10 text-seo-blue px-3 py-1 rounded-full text-sm font-medium">
                  <Briefcase className="h-4 w-4 mr-1" />
                  Case Studies
                </span>
              </div>
            </div>
            <h2 className="text-3xl font-display font-bold text-seo-dark mb-2">
              {title}
            </h2>
            <p className="text-lg text-seo-gray-dark max-w-xl">
              {subtitle}
            </p>
          </div>
          <div className="flex space-x-4">
            <Link 
              to="/blogs" 
              className="flex items-center text-seo-blue hover:text-seo-blue-light font-medium group"
            >
              <span className="border-b border-seo-blue/30 group-hover:border-seo-blue-light transition-colors">
                All Articles
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/case-studies" 
              className="flex items-center text-seo-blue hover:text-seo-blue-light font-medium group"
            >
              <span className="border-b border-seo-blue/30 group-hover:border-seo-blue-light transition-colors">
                All Case Studies
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
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
                <CaseStudyPreview key={study.id} caseStudy={study} delay={index * 100} />
              ))}
            </div>
          </div>
        )}
        
        {/* Blog Posts Section */}
        {relevantBlogs.length > 0 && (
          <div>
            <AnimatedSection 
              className="mb-6 flex items-center"
              animation="fade-in"
            >
              <FileText className="h-5 w-5 text-seo-blue mr-2" />
              <h3 className="text-xl font-display font-bold text-seo-dark">
                Latest Insights & Guides
              </h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relevantBlogs.map((post, index) => (
                <BlogPreview key={post.id} post={post} delay={index * 100} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesSection;
