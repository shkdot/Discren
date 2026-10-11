import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  ogType?: 'website' | 'article' | 'business.business';
  ogImage?: string;
}

export const SEO = ({
  title,
  description,
  keywords,
  schema,
  ogType = 'website',
  ogImage = '/images/home-hero-image.png',
}: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Page Title
    document.title = title;

    const setMetaTag = (selector: string, attr: string, value: string, createAttr: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(createAttr, createAttr === 'name' ? selector.replace('meta[name="', '').replace('"]', '') : selector.replace('meta[property="', '').replace('"]', ''));
        document.head.appendChild(element);
      }
      element.setAttribute(attr, value);
    };

    // 2. Standard Meta Description & Keywords
    if (description) {
      setMetaTag('meta[name="description"]', 'content', description, 'name');
    }

    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'content', keywords, 'name');
    }

    // 3. Canonical URL
    const canonicalUrl = `${window.location.origin}${location.pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. Open Graph Tags (for Social & AI Bots)
    setMetaTag('meta[property="og:title"]', 'content', title, 'property');
    if (description) {
      setMetaTag('meta[property="og:description"]', 'content', description, 'property');
    }
    setMetaTag('meta[property="og:type"]', 'content', ogType, 'property');
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl, 'property');
    setMetaTag('meta[property="og:site_name"]', 'content', 'DISCREN Apparel Printing', 'property');
    setMetaTag('meta[property="og:locale"]', 'content', 'en_IN', 'property');
    if (ogImage) {
      const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`;
      setMetaTag('meta[property="og:image"]', 'content', fullImageUrl, 'property');
    }

    // 5. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image', 'name');
    setMetaTag('meta[name="twitter:title"]', 'content', title, 'name');
    if (description) {
      setMetaTag('meta[name="twitter:description"]', 'content', description, 'name');
    }
    if (ogImage) {
      const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`;
      setMetaTag('meta[name="twitter:image"]', 'content', fullImageUrl, 'name');
    }

    // 6. AEO & AI Search: JSON-LD Structured Data
    const scriptId = 'aeo-json-ld';
    let scriptElement = document.getElementById(scriptId);
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }

    // Default Organization & LocalBusiness schema
    const defaultLocalBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${window.location.origin}/#organization`,
      name: 'DISCREN',
      alternateName: 'DISCREN Apparel Printing',
      description: 'B2B apparel printing and garment production job-work facility in Jogeshwari West, Mumbai. Specializing in plastisol, water-based, discharge, high-density, puff, metallic foil, and reflective printing.',
      url: window.location.origin,
      telephone: '+919987635634',
      email: 'info.discren@gmail.com',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Opposite Vijay Vishal Building, Jogeshwari West',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400102',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '19.1363',
        longitude: '72.8468'
      },
      areaServed: [
        { '@type': 'City', name: 'Mumbai' },
        { '@type': 'State', name: 'Maharashtra' },
        { '@type': 'Country', name: 'India' }
      ],
      knowsAbout: [
        'Plastisol Screen Printing',
        'Water-Based Textile Printing',
        'Discharge Printing on Cotton',
        'High-Density 3D Silicone Printing',
        'Puff Printing for Hoodies',
        'Metallic and Foil Screen Printing',
        'Glow in the Dark and Reflective Printing',
        'Cut Panel Apparel Printing',
        'Finished Garment Job Work'
      ]
    };

    const combinedSchema = schema
      ? (Array.isArray(schema) ? [defaultLocalBusinessSchema, ...schema] : [defaultLocalBusinessSchema, schema])
      : defaultLocalBusinessSchema;

    scriptElement.textContent = JSON.stringify(combinedSchema, null, 2);

  }, [title, description, keywords, schema, ogType, ogImage, location]);

  return null;
};
