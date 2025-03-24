
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

      // Display count for debugging
      console.log(`Total cities in XML sitemap: ${allAustralianCities.length}`);

      // Process all cities in smaller batches to avoid browser performance issues
      const cityBatchSize = 100;
      
      for (let i = 0; i < allAustralianCities.length; i += cityBatchSize) {
        const cityBatch = allAustralianCities.slice(i, i + cityBatchSize);
        
        // Add location pages for cities in this batch
        cityBatch.forEach(city => {
          // Create a proper slug for each city if it doesn't already have one
          const citySlug = city.slug || city.name.toLowerCase().replace(/\s+/g, '-');

          xml += `
  <url>
    <loc>${baseUrl}/location/${citySlug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;

          // Add service-location combinations for this city and all services
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
        });
      }

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
        .filter(city => typeof city === 'object' && city.state)
        .map(city => (city as any).state))]
        .filter(Boolean);
      
      states.forEach(state => {
        if (state && state !== "Various") {
          const stateSlug = typeof state === 'string' ? state.toLowerCase().replace(/\s+/g, '-') : '';
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
      <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 mb-4">
        <p className="text-sm text-yellow-800">
          This XML sitemap contains all {allAustralianCities.length} locations and their service combinations.
        </p>
      </div>
      <pre style={{ 
        whiteSpace: 'pre-wrap', 
        fontFamily: 'monospace', 
        fontSize: '12px',
        padding: '20px',
        maxHeight: '80vh',
        overflow: 'auto'
      }}>
        {xmlContent}
      </pre>
    </div>
  );
};

export default XmlSitemap;
