
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { services } from '@/lib/data';
import { allAustralianCities } from '@/lib/locationData';
import { industries } from '@/lib/industriesData';
import { Helmet } from 'react-helmet-async';

const XmlSitemap = () => {
  const [xmlContent, setXmlContent] = useState<string>('');
  const baseUrl = 'https://seofocus.com'; // Your actual domain
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Generate sitemap XML
    const generateSitemap = () => {
      const today = new Date().toISOString().split('T')[0];
      
      let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

      // Add main pages
      const mainPages = [
        { url: '/', priority: '1.0' },
        { url: '/about', priority: '0.8' },
        { url: '/services', priority: '0.9' },
        { url: '/industries', priority: '0.9' },
        { url: '/blogs', priority: '0.8' },
        { url: '/case-studies', priority: '0.8' },
        { url: '/contact', priority: '0.7' },
        { url: '/free-consultation', priority: '0.9' },
        { url: '/sitemap', priority: '0.7' },
        { url: '/location-sitemap', priority: '0.7' },
        { url: '/seo-audit', priority: '0.8' },
      ];

      mainPages.forEach(page => {
        xml += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
      });

      // Add service pages
      services.forEach(service => {
        xml += `
  <url>
    <loc>${baseUrl}/service/${service.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
      });

      // Add industry pages
      industries.forEach(industry => {
        xml += `
  <url>
    <loc>${baseUrl}/industry/${industry.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
      });

      // Limit to major cities only (first 20 cities) to prevent excessive URL generation
      const majorCities = allAustralianCities.slice(0, 20);

      const processCity = (city: any) => {
        // Handle both object-based city data and string-based city data
        const cityName = typeof city === 'string' ? city : city.name;
        const citySlug = typeof city === 'string' 
          ? cityName.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-') 
          : city.slug;
        
        // Add location page
        xml += `
  <url>
    <loc>${baseUrl}/location/${citySlug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;

        // Add all services and industries page for this location
        xml += `
  <url>
    <loc>${baseUrl}/location/${citySlug}/all</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;

        // Add industries page for this location
        xml += `
  <url>
    <loc>${baseUrl}/location/${citySlug}/industries</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;

        // Limit industry-location combinations to top 5 industries only
        const topIndustries = industries.slice(0, 5);
        topIndustries.forEach(industry => {
          xml += `
  <url>
    <loc>${baseUrl}/location/${citySlug}/industry/${industry.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
        });

        // Add service-location combinations for top 3 services only
        const topServices = services.slice(0, 3);
        topServices.forEach(service => {
          xml += `
  <url>
    <loc>${baseUrl}/location/${citySlug}/${service.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
          
          // Also add SEO-friendly URL pattern (service-location)
          xml += `
  <url>
    <loc>${baseUrl}/${service.slug}-${citySlug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
        });
      };

      // Process major cities only
      majorCities.forEach(city => {
        processCity(city);
      });

      // Add methodology pages
      const methodologyPages = [
        'research-analysis',
        'strategic-planning',
        'implementation',
        'monitoring-optimization',
      ];

      methodologyPages.forEach(page => {
        xml += `
  <url>
    <loc>${baseUrl}/methodology/${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
      });

      // Add state pages for each state in Australia
      const states = [...new Set(allAustralianCities
        .filter(city => typeof city === 'object')
        .map(city => (city as any).state))]
        .filter(Boolean)
        .slice(0, 8); // Limit to 8 states
        
      states.forEach(state => {
        if (state && state !== "Various") {
          const stateSlug = state.toLowerCase().replace(/\s+/g, '-');
          xml += `
  <url>
    <loc>${baseUrl}/australia/${stateSlug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
        }
      });

      // Add blog posts (limit to avoid excessive URLs)
      try {
        const { blogPosts } = require('@/lib/data');
        const limitedBlogPosts = blogPosts.slice(0, 50); // Limit to 50 blog posts
        limitedBlogPosts.forEach((post: any) => {
          xml += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
        });
      } catch (error) {
        console.log('Blog posts not available');
      }

      // Add case studies (limit to avoid excessive URLs)
      try {
        const { caseStudies } = require('@/lib/data');
        const limitedCaseStudies = caseStudies.slice(0, 20); // Limit to 20 case studies
        limitedCaseStudies.forEach((caseStudy: any) => {
          xml += `
  <url>
    <loc>${baseUrl}/case-study/${caseStudy.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
        });
      } catch (error) {
        console.log('Case studies not available');
      }

      xml += `
</urlset>`;

      return xml;
    };

    const generatedXml = generateSitemap();
    setXmlContent(generatedXml);
  }, []);

  // Check if we're on the XML route and serve content accordingly
  const isXmlRoute = location.pathname === '/sitemap.xml';

  if (isXmlRoute) {
    // For XML route, return raw XML with proper content type
    return (
      <div>
        <Helmet>
          <title>XML Sitemap | SEO Focus</title>
          <meta httpEquiv="Content-Type" content="application/xml; charset=utf-8" />
        </Helmet>
        <pre style={{ 
          whiteSpace: 'pre-wrap', 
          fontFamily: 'monospace', 
          fontSize: '12px',
          padding: '0',
          margin: '0',
          backgroundColor: 'white'
        }}>
          {xmlContent}
        </pre>
      </div>
    );
  }

  // For regular sitemap page, return formatted view
  return (
    <div>
      <Helmet>
        <title>XML Sitemap | SEO Focus</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>
      <pre style={{ 
        whiteSpace: 'pre-wrap', 
        fontFamily: 'monospace', 
        fontSize: '12px',
        padding: '20px' 
      }}>
        {xmlContent}
      </pre>
    </div>
  );
};

export default XmlSitemap;
