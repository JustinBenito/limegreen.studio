/**
 * Generate Breadcrumb List Schema
 * @param {Array} items - Array of breadcrumb items [{name, url}]
 * @returns {Object} BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Service Schema for solution pages
 * @param {Object} solution - The solution object
 * @returns {Object} Service schema
 */
export function generateServiceSchema(solution) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.name,
    description: solution.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Lime Green Studios",
      url: "https://limegreen.studio",
      logo: "https://limegreen.studio/LGS.svg",
    },
    serviceType: solution.name,
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `https://limegreen.studio/solutions/${solution.slug}`,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceRange: "$$$",
    },
  };
}

/**
 * Generate FAQ Page Schema
 * @param {Array} faqs - Array of FAQ objects [{question, answer}]
 * @returns {Object} FAQPage schema
 */
export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Article Schema for blog posts
 * @param {Object} article - The blog post object
 * @param {string} slug - The blog post slug
 * @returns {Object} Article schema
 */
export function generateArticleSchema(article, slug) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "Lime Green Studios",
      url: "https://limegreen.studio",
    },
    publisher: {
      "@type": "Organization",
      name: "Lime Green Studios",
      logo: {
        "@type": "ImageObject",
        url: "https://limegreen.studio/LGS.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://limegreen.studio/blogs/${slug}`,
    },
  };
}

/**
 * Get canonical URL for a path
 * @param {string} path - The path (e.g., "/solutions/saas-development")
 * @returns {string} Full canonical URL
 */
export function getCanonicalUrl(path) {
  const baseUrl = "https://limegreen.studio";
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${baseUrl}/${cleanPath}`;
}

/**
 * Generate Organization Schema (for homepage and key pages)
 * @returns {Object} Organization schema
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lime Green Studios",
    alternateName: "Lime Green Labs",
    url: "https://limegreen.studio",
    logo: "https://limegreen.studio/LGS.svg",
    description:
      "Leading product development agency. We build and ship your product from 0 to 1 in just 4 weeks. Product studio specializing in MVP development, AI products, and SaaS applications.",
    email: "contact@limegreen.studio",
    sameAs: [
      "https://instagram.com/limegreen.studio",
      "https://www.linkedin.com/company/lime-green-studios/",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Tamil Nadu",
    },
    founder: {
      "@type": "Person",
      name: "Lime Green Studios Team",
    },
    foundingDate: "2023",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "15",
    },
  };
}

/**
 * Generate WebSite Schema with search action
 * @returns {Object} WebSite schema
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lime Green Studios",
    url: "https://limegreen.studio",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://limegreen.studio/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Format structured data for Next.js injection
 * @param {Object} schema - The schema object
 * @returns {Object} Object ready for dangerouslySetInnerHTML
 */
export function formatStructuredData(schema) {
  return {
    __html: JSON.stringify(schema),
  };
}
