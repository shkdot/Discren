import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../config/site';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string; // Kept for backwards compatibility but not rendered into document
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  ogType?: 'website' | 'article' | 'business.business';
  ogImage?: string;
  ogImageAlt?: string;
  canonicalPath?: string;
}

export const SEO = ({
  title,
  description,
  schema,
  ogType = 'website',
  ogImage = '/og-image.jpg',
  ogImageAlt = 'DISCREN B2B Apparel Printing Studio in Mumbai',
  canonicalPath,
}: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Page Title
    document.title = title;

    const setMetaTag = (selector: string, attr: string, value: string, createAttr: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const key = createAttr === 'name' ? selector.replace('meta[name="', '').replace('"]', '') : selector.replace('meta[property="', '').replace('"]', '');
        element.setAttribute(createAttr, key);
        document.head.appendChild(element);
      }
      element.setAttribute(attr, value);
    };

    // 2. Remove any legacy meta keywords tag completely (Google ignores it)
    const existingKeywords = document.querySelector('meta[name="keywords"]');
    if (existingKeywords) {
      existingKeywords.remove();
    }

    // 3. Meta Description
    if (description) {
      setMetaTag('meta[name="description"]', 'content', description, 'name');
    }

    // 4. Robots
    setMetaTag('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large', 'name');

    // 5. Theme color
    setMetaTag('meta[name="theme-color"]', 'content', '#f4f0e8', 'name');

    // 6. Canonical URL (Uses SITE_URL)
    const currentPath = canonicalPath || location.pathname;
    const cleanPath = currentPath === '/' ? '/' : currentPath.replace(/\/+$/, '');
    const canonicalUrl = `${SITE_URL}${cleanPath}`;

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 7. Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'content', title, 'property');
    if (description) {
      setMetaTag('meta[property="og:description"]', 'content', description, 'property');
    }
    setMetaTag('meta[property="og:type"]', 'content', ogType, 'property');
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl, 'property');
    setMetaTag('meta[property="og:site_name"]', 'content', 'DISCREN', 'property');
    setMetaTag('meta[property="og:locale"]', 'content', 'en_IN', 'property');

    const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;
    setMetaTag('meta[property="og:image"]', 'content', fullImageUrl, 'property');
    setMetaTag('meta[property="og:image:width"]', 'content', '1200', 'property');
    setMetaTag('meta[property="og:image:height"]', 'content', '630', 'property');
    setMetaTag('meta[property="og:image:alt"]', 'content', ogImageAlt, 'property');

    // 8. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image', 'name');
    setMetaTag('meta[name="twitter:title"]', 'content', title, 'name');
    if (description) {
      setMetaTag('meta[name="twitter:description"]', 'content', description, 'name');
    }
    setMetaTag('meta[name="twitter:image"]', 'content', fullImageUrl, 'name');

    // 9. Structured Data (JSON-LD)
    const scriptId = 'aeo-json-ld';
    let scriptElement = document.getElementById(scriptId);
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }

    // Canonical LocalBusiness schema (strictly real business facts, no unresolved placeholders in output)
    const defaultLocalBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${SITE_URL}/#organization`,
      name: 'DISCREN',
      alternateName: 'DISCREN Apparel Printing',
      description: 'B2B apparel and garment printing partner for clothing brands in Mumbai.',
      url: SITE_URL,
      image: `${SITE_URL}/og-image.jpg`,
      telephone: '+919987635634',
      email: 'info.discren@gmail.com',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Opposite Vijay Vishal Building, Jogeshwari West',
        addressLocality: 'Jogeshwari West, Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400102',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '19.1363',
        longitude: '72.8468',
      },
      areaServed: 'Mumbai, Maharashtra, India',
      sameAs: [
        'https://instagram.com/discren'
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '20:00',
        },
      ],
    };

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'DISCREN',
      url: SITE_URL,
    };

    const combinedSchema = [
      defaultLocalBusinessSchema,
      websiteSchema,
      ...(schema ? (Array.isArray(schema) ? schema : [schema]) : []),
    ];

    scriptElement.textContent = JSON.stringify(combinedSchema, null, 2);
  }, [title, description, schema, ogType, ogImage, ogImageAlt, canonicalPath, location]);

  return null;
};
