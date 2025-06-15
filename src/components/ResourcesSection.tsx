import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import BlogPreview from './BlogPreview';
import CaseStudyPreview from './CaseStudyPreview';
import { blogPosts, caseStudies } from '@/lib/data';
import ContextualBlog from './ContextualBlog';
interface ResourcesSectionProps {
  filterTag?: string;
  serviceSlug?: string;
  industrySlug?: string;
  locationSlug?: string;
  className?: string;
}
const ResourcesSection = ({
  filterTag,
  serviceSlug,
  industrySlug,
  locationSlug,
  className = ''
}: ResourcesSectionProps) => {
  // If we have service/industry/location context, use the contextual blog component
  if (serviceSlug || industrySlug || locationSlug) {
    return <ContextualBlog serviceSlug={serviceSlug} industrySlug={industrySlug} locationSlug={locationSlug} className={className} />;
  }

  // Filter blog posts if a tag is provided
  const filteredBlogs = filterTag ? blogPosts.filter(post => post.tags.some(tag => tag.toLowerCase().includes(filterTag.toLowerCase())) || post.category.toLowerCase().includes(filterTag.toLowerCase())).slice(0, 3) : blogPosts.slice(0, 3);

  // Filter case studies if a tag is provided
  const filteredCaseStudies = filterTag ? caseStudies.filter(study => study.industry.toLowerCase().includes(filterTag.toLowerCase()) || study.solution.toLowerCase().includes(filterTag.toLowerCase())).slice(0, 2) : caseStudies.slice(0, 2);
  return <div className={`py-16 ${className}`}>
      
    </div>;
};
export default ResourcesSection;