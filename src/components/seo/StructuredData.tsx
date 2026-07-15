import { BUSINESS_CONFIG, getSiteUrl } from "@/data/business.ts";
import { faqsData } from "@/data/faqs.ts";

export default function StructuredData() {
  const siteUrl = getSiteUrl().replace(/\/$/, "");
  
  // 1. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": BUSINESS_CONFIG.name,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "telephone": BUSINESS_CONFIG.phoneDisplay,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": BUSINESS_CONFIG.phoneDisplay,
      "contactType": "customer service",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Greater London and M25 areas"
      },
      "availableLanguage": "English"
    }
  };

  // 2. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "url": siteUrl,
    "name": BUSINESS_CONFIG.name,
    "description": "Professional rat and mouse control, trapping and proofing services in London.",
    "publisher": {
      "@id": `${siteUrl}/#organization`
    }
  };

  // 3. WebPage Schema
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    "url": siteUrl,
    "name": "Rodent Control London | Rat & Mouse Treatment and Proofing",
    "description": "Professional rat and mouse control across London. Rodent inspections, trapping, treatment and proofing for homes and businesses. Call 0800 211 8166.",
    "isPartOf": {
      "@id": `${siteUrl}/#website`
    }
  };

  // 4. Service Schema (Primary Service)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/#service`,
    "serviceType": "Rodent Control, Trapping and Proofing",
    "provider": {
      "@id": `${siteUrl}/#organization`
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Greater London"
      },
      {
        "@type": "AdministrativeArea",
        "name": "M25 Ring"
      }
    ],
    "description": "Specialist rat and mouse eradication, mechanical trapping, cavity proofing, and drain survey investigations in London.",
    "name": "Rodent Control, Trapping and Proofing Services",
    "offers": {
      "@type": "Offer",
      "priceCurrency": BUSINESS_CONFIG.currency,
      "price": "Call for Quote"
    }
  };

  // 5. FAQPage Schema (Only for published, visible FAQs)
  const publishedFaqs = faqsData.filter(faq => faq.status === "published");
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": publishedFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        id="schema-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
