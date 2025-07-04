import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { blogPosts } from '@/lib/data';
import { useState } from 'react';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';

const Blogs = ({ routeKey }: { routeKey?: string }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  console.log(`Blogs page rendering with routeKey: ${routeKey}`);
  
  // Generate additional contextual blog posts to supplement the main blog posts
  const additionalBlogPosts = [
    {
      id: "content-marketing-strategy-2025",
      title: "Content Marketing Strategy for SEO Success in 2025",
      excerpt: "Learn how to create compelling content that drives organic traffic and engages your target audience in 2025.",
      date: "June 15, 2025",
      author: "Content Strategy Team",
      category: "Content Marketing",
      tags: ["Content Marketing", "SEO Strategy", "2025 Trends"],
      slug: "content-marketing-strategy-2025",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      content: `<p>Content marketing continues to be a cornerstone of successful SEO strategies in 2025. As search engines become more sophisticated, the quality and relevance of your content matter more than ever.</p>
      <p>Key strategies for content marketing success in 2025 include:</p>
      <ul>
        <li>Creating topic clusters around core business themes</li>
        <li>Optimizing for user intent and search experience</li>
        <li>Leveraging AI tools while maintaining human creativity</li>
        <li>Building comprehensive resource libraries</li>
        <li>Focusing on expertise, authority, and trustworthiness (E-A-T)</li>
      </ul>`
    },
    {
      id: "mobile-first-indexing-guide",
      title: "Mobile-First Indexing: Complete Guide for 2025",
      excerpt: "Everything you need to know about Google's mobile-first indexing and how to optimize your site accordingly.",
      date: "June 12, 2025",
      author: "Technical SEO Team",
      category: "Technical SEO",
      tags: ["Mobile SEO", "Technical SEO", "Google Indexing"],
      slug: "mobile-first-indexing-guide",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      content: `<p>Mobile-first indexing means Google predominantly uses the mobile version of your content for indexing and ranking. This shift reflects the mobile-centric browsing habits of users worldwide.</p>
      <p>Essential optimization strategies include:</p>
      <ul>
        <li>Ensuring mobile page speed optimization</li>
        <li>Implementing responsive design principles</li>
        <li>Optimizing mobile user experience</li>
        <li>Testing mobile-specific functionality</li>
        <li>Monitoring mobile search performance</li>
      </ul>`
    },
    {
      id: "voice-search-optimization",
      title: "Voice Search Optimization: The Future of SEO",
      excerpt: "Discover how to optimize your content for voice search and stay ahead of the competition.",
      date: "June 10, 2025",
      author: "SEO Innovation Team",
      category: "SEO Strategy",
      tags: ["Voice Search", "Future SEO", "Optimization"],
      slug: "voice-search-optimization",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      content: `<p>Voice search is transforming how users interact with search engines. Optimizing for voice search requires understanding natural language patterns and user behavior.</p>
      <p>Key voice search optimization tactics:</p>
      <ul>
        <li>Targeting conversational long-tail keywords</li>
        <li>Creating FAQ-style content</li>
        <li>Optimizing for local voice searches</li>
        <li>Improving page loading speed</li>
        <li>Structuring content for featured snippets</li>
      </ul>`
    },
    {
      id: "ecommerce-seo-guide",
      title: "E-commerce SEO: Drive Sales Through Search",
      excerpt: "Master e-commerce SEO with our comprehensive guide to increasing online visibility and sales.",
      date: "June 8, 2025",
      author: "E-commerce SEO Team",
      category: "E-commerce",
      tags: ["E-commerce SEO", "Online Sales", "Product Optimization"],
      slug: "ecommerce-seo-guide",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      content: `<p>E-commerce SEO requires a unique approach that balances product visibility with user experience. Success depends on optimizing both individual product pages and category structures.</p>
      <p>Essential e-commerce SEO strategies:</p>
      <ul>
        <li>Optimizing product descriptions and titles</li>
        <li>Implementing structured data for products</li>
        <li>Creating SEO-friendly category pages</li>
        <li>Managing duplicate content issues</li>
        <li>Building topical authority through content marketing</li>
      </ul>`
    },
    {
      id: "link-building-strategies-2025",
      title: "Advanced Link Building Strategies for 2025",
      excerpt: "Explore cutting-edge link building techniques that actually work in today's SEO landscape.",
      date: "June 5, 2025",
      author: "Link Building Experts",
      category: "Link Building",
      tags: ["Link Building", "Off-Page SEO", "Authority Building"],
      slug: "link-building-strategies-2025",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      content: `<p>Link building in 2025 requires a strategic approach that focuses on quality over quantity. Modern link building emphasizes relationship building and value creation.</p>
      <p>Effective link building strategies include:</p>
      <ul>
        <li>Creating linkable assets and resources</li>
        <li>Building relationships with industry influencers</li>
        <li>Leveraging digital PR opportunities</li>
        <li>Guest posting on authoritative sites</li>
        <li>Participating in industry communities</li>
      </ul>`
    },
    {
      id: "schema-markup-guide",
      title: "Schema Markup: Complete Implementation Guide",
      excerpt: "Learn how to implement schema markup to enhance your search results with rich snippets.",
      date: "June 3, 2025",
      author: "Structured Data Team",
      category: "Technical SEO",
      tags: ["Schema Markup", "Structured Data", "Rich Snippets"],
      slug: "schema-markup-guide",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      content: `<p>Schema markup helps search engines understand your content better and can lead to enhanced search results with rich snippets, improving click-through rates.</p>
      <p>Key schema implementation areas:</p>
      <ul>
        <li>Organization and business information</li>
        <li>Product and service schemas</li>
        <li>Review and rating markup</li>
        <li>Event and location data</li>
        <li>Article and blog post schemas</li>
      </ul>`
    },
    {
      id: "page-speed-optimization",
      title: "Page Speed Optimization: Boost Your Rankings",
      excerpt: "Comprehensive guide to improving your website's loading speed for better user experience and SEO.",
      date: "June 1, 2025",
      author: "Performance Team",
      category: "Technical SEO",
      tags: ["Page Speed", "Core Web Vitals", "Performance"],
      slug: "page-speed-optimization",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      content: `<p>Page speed is a critical ranking factor and significantly impacts user experience. Optimizing page speed requires both technical improvements and content optimization.</p>
      <p>Key optimization techniques:</p>
      <ul>
        <li>Image compression and optimization</li>
        <li>Minifying CSS, JavaScript, and HTML</li>
        <li>Leveraging browser caching</li>
        <li>Using content delivery networks (CDNs)</li>
        <li>Optimizing server response times</li>
      </ul>`
    },
    {
      id: "keyword-research-mastery",
      title: "Keyword Research Mastery: Find Profitable Keywords",
      excerpt: "Master the art of keyword research with advanced techniques and tools for finding high-value opportunities.",
      date: "May 30, 2025",
      author: "Keyword Research Team",
      category: "SEO Strategy",
      tags: ["Keyword Research", "SEO Tools", "Search Intent"],
      slug: "keyword-research-mastery",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      content: `<p>Effective keyword research forms the foundation of successful SEO campaigns. Understanding search intent and competition levels helps prioritize optimization efforts.</p>
      <p>Advanced keyword research techniques:</p>
      <ul>
        <li>Analyzing competitor keyword strategies</li>
        <li>Understanding search intent patterns</li>
        <li>Identifying long-tail opportunities</li>
        <li>Using keyword clustering techniques</li>
        <li>Monitoring keyword performance trends</li>
      </ul>`
    }
  ];
  
  // Combine existing blog posts with additional ones
  const allBlogPosts = [...blogPosts, ...additionalBlogPosts];
  
  // Extract unique categories from all posts
  const categories = ['All', ...Array.from(new Set(allBlogPosts.map(post => post.category)))];
  
  // Filter posts based on search and category
  const filteredPosts = allBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="SEO Blog | Expert Tips, Strategies & Industry Insights 2025"
        description="Stay ahead with actionable SEO tips, algorithm updates, and proven strategies from industry experts. Free guides to improve your search rankings and drive organic traffic."
        keywords="SEO blog, SEO tips 2025, search optimization strategies, SEO best practices, digital marketing insights, Google algorithm updates, content marketing SEO"
        canonicalUrl="/blogs"
        routeKey={routeKey}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              SEO Insights & Strategies
            </h1>
            <p className="text-xl text-seo-gray-dark mb-8">
              Stay up-to-date with the latest SEO trends, strategies, and best practices to improve your search visibility.
            </p>
            <p className="text-lg text-seo-gray-dark">
              Browse our comprehensive collection of SEO articles, guides, and industry insights.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-seo-blue focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-seo-gray-dark">Filter by:</span>
              <select
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-seo-blue focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-seo-gray-dark">
              Showing {filteredPosts.length} of {allBlogPosts.length} articles
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPreview key={post.id} post={post} delay={index * 100} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-display font-bold text-seo-dark mb-3">No articles found</h3>
              <p className="text-seo-gray-dark mb-6">
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="inline-flex items-center text-seo-blue font-medium"
              >
                <span>Reset filters</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Blogs;
