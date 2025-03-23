
import React, { useEffect, useState } from 'react';
import { services } from '@/lib/data';
import { allAustralianCities } from '@/lib/locationData';

const XmlSitemap = () => {
  const [xmlContent, setXmlContent] = useState<string>('');
  const baseUrl = 'https://yourwebsite.com'; // Replace with your actual domain

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

      // Add location pages for all cities (including all South Australian cities)
      allAustralianCities.forEach(city => {
        xml += `
  <url>
    <loc>${baseUrl}/location/${city.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;

        // Add service-location combinations for all cities and all services using the correct URL pattern
        services.forEach(service => {
          xml += `
  <url>
    <loc>${baseUrl}/location/${city.slug}/${service.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
          
          // Also add SEO-friendly URL pattern (service-location)
          xml += `
  <url>
    <loc>${baseUrl}/${service.slug}-${city.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
        });
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
      const states = [...new Set(allAustralianCities.map(city => city.state))].filter(Boolean);
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

      xml += `
</urlset>`;

      return xml;
    };

    setXmlContent(generateSitemap());
  }, []);

  // Set the proper content type for the XML
  useEffect(() => {
    document.title = 'XML Sitemap';
    
    // Set the content type to XML
    const metaContentType = document.createElement('meta');
    metaContentType.httpEquiv = 'Content-Type';
    metaContentType.content = 'text/xml; charset=utf-8';
    document.head.appendChild(metaContentType);

    return () => {
      document.head.removeChild(metaContentType);
    };
  }, []);

  return (
    <div>
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
