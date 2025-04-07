
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '@/lib/data';
import { allAustralianCities } from '@/lib/locationData';
import { industries } from '@/lib/industriesData';
import { Helmet } from 'react-helmet-async';

const XmlSitemap = () => {
  const [xmlContent, setXmlContent] = useState<string>('');
  const baseUrl = 'https://seofocus.com'; // Your actual domain
  const navigate = useNavigate();

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

      // Create a combined array of all cities
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

        // Add industry-location combinations
        industries.forEach(industry => {
          xml += `
  <url>
    <loc>${baseUrl}/location/${citySlug}/industry/${industry.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
          
          // Add service-industry-location combinations with SEO-friendly URL pattern
          services.forEach(service => {
            xml += `
  <url>
    <loc>${baseUrl}/${service.slug}-for-${industry.slug}-in-${citySlug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
            
            // Add service-industry-location combinations with path-based URL pattern
            xml += `
  <url>
    <loc>${baseUrl}/service/${service.slug}/industry/${industry.slug}/location/${citySlug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
          });
        });

        // Add service-location combinations for all services using the correct URL pattern
        services.forEach(service => {
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

      // Process all cities in the allAustralianCities array
      allAustralianCities.forEach(city => {
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
        .filter(Boolean);
        
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

      // Add blog posts
      const { blogPosts } = require('@/lib/data');
      blogPosts.forEach((post: any) => {
        xml += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
      });

      // Add case studies
      const { caseStudies } = require('@/lib/data');
      caseStudies.forEach((caseStudy: any) => {
        xml += `
  <url>
    <loc>${baseUrl}/case-study/${caseStudy.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
      });

      xml += `
</urlset>`;

      return xml;
    };

    setXmlContent(generateSitemap());
    
    // If we're accessing directly via /sitemap.xml, download or serve as XML
    if (window.location.pathname === '/sitemap.xml') {
      // Create XML document
      const xmlDoc = new DOMParser().parseFromString(generateSitemap(), 'application/xml');
      const serializer = new XMLSerializer();
      const xmlString = serializer.serializeToString(xmlDoc);
      
      // Create a Blob with the XML content
      const blob = new Blob([xmlString], { type: 'application/xml' });
      
      // Create a link element and download the file
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'sitemap.xml';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Redirect to the sitemap page after download
      setTimeout(() => {
        navigate('/sitemap');
      }, 1000);
    }
  }, [navigate]);

  // Set proper content type for XML
  return (
    <div>
      <Helmet>
        <title>XML Sitemap | SEO Focus</title>
        <meta httpEquiv="Content-Type" content="text/xml; charset=utf-8" />
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
