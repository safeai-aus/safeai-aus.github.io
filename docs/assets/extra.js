// SEO and social media optimization for SafeAI-Aus
(function() {
    'use strict';
    
    // Security: Prevent prototype pollution and enhance object security
    Object.freeze(Object.prototype);
    
    // Umami Cloud Analytics
    (function() {
        const script = document.createElement('script');
        script.defer = true;
        script.src = 'https://cloud.umami.is/script.js';
        script.setAttribute('data-website-id', 'f228fe92-e13d-456d-92f8-018fac9d587c');
        document.head.appendChild(script);
    })();
    
    // Function to add meta tags
    function addMetaTag(name, content) {
        if (!document.querySelector(`meta[name="${name}"]`)) {
            const meta = document.createElement('meta');
            meta.name = name;
            meta.content = content;
            document.head.appendChild(meta);
        }
    }

    function getRevisionDateISO() {
        const meta = document.querySelector('meta[name="page:git-revision-date-iso"]');
        if (meta && meta.content) {
            return meta.content;
        }

        if (typeof window.__SAFEAI_PAGE_REVISION__ === 'string' && window.__SAFEAI_PAGE_REVISION__) {
            return window.__SAFEAI_PAGE_REVISION__;
        }

        return null;
    }
    
    // Function to add property meta tags (Open Graph)
    function addPropertyMetaTag(property, content) {
        if (!document.querySelector(`meta[property="${property}"]`)) {
            const meta = document.createElement('meta');
            meta.setAttribute('property', property);
            meta.content = content;
            document.head.appendChild(meta);
        }
    }
    
    // Get page-specific data from front matter or defaults
    function getPageData() {
        const title = document.title || 'SafeAI-Aus: Australia\'s AI Safety Knowledge Hub';
        const description = document.querySelector('meta[name="description"]')?.content || 
                          'Practical tools, open standards, and trusted guidance for Australian businesses to adopt AI safely';
        let pathname = window.location.pathname;
        if (pathname !== '/' && pathname.endsWith('/')) {
            pathname = pathname.slice(0, -1);
        }
        const url = window.location.origin + pathname;
        const image = 'https://safeaiaus.org/assets/safeaiaus-logo-600px.png';
        
        return { title, description, url, image };
    }
    
    // Add Open Graph meta tags
    function addOpenGraphTags() {
        const data = getPageData();
        
        addPropertyMetaTag('og:title', data.title);
        addPropertyMetaTag('og:description', data.description);
        addPropertyMetaTag('og:type', 'website');
        addPropertyMetaTag('og:url', data.url);
        addPropertyMetaTag('og:image', data.image);
        addPropertyMetaTag('og:site_name', 'SafeAI-Aus');
        addPropertyMetaTag('og:locale', 'en_AU');
    }
    
    // Add Twitter Card meta tags
    function addTwitterCardTags() {
        const data = getPageData();
        
        addMetaTag('twitter:card', 'summary_large_image');
        addMetaTag('twitter:title', data.title);
        addMetaTag('twitter:description', data.description);
        addMetaTag('twitter:image', data.image);
        addMetaTag('twitter:site', '@safeai_aus');
        addMetaTag('twitter:creator', '@safeai_aus');
    }
    
    // Add additional SEO meta tags
    function addSEOTags() {
        const data = getPageData();
        
        // Keywords (if not already present)
        if (!document.querySelector('meta[name="keywords"]')) {
            addMetaTag('keywords', 'AI safety, Australian AI standards, AI governance, AI risk assessment, AI compliance, AI safety templates, Australian business AI');
        }
        
        // Author (if not already present)
        if (!document.querySelector('meta[name="author"]')) {
            addMetaTag('author', 'SafeAI-Aus');
        }
        
        // Robots (if not already present)
        if (!document.querySelector('meta[name="robots"]')) {
            addMetaTag('robots', 'index, follow');
        }
        
        // Canonical URL (if not already present)
        if (!document.querySelector('link[rel="canonical"]')) {
            const link = document.createElement('link');
            link.rel = 'canonical';
            link.href = data.url;
            document.head.appendChild(link);
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            addOpenGraphTags();
            addTwitterCardTags();
            addSEOTags();
        });
    } else {
        addOpenGraphTags();
        addTwitterCardTags();
        addSEOTags();
    }
    
    // Add structured data for better search results
    function addStructuredData() {
        const currentUrl = window.location.href;
        
        // Enhanced organization schema for the main site
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SafeAI-Aus",
            "url": "https://safeaiaus.org/",
            "logo": "https://safeaiaus.org/assets/safeaiaus-logo-600px.png",
            "description": "Australian AI Safety Knowledge Hub — practical tools, open standards, and trusted guidance for responsible AI adoption.",
            "sameAs": [
                "https://github.com/safeai-aus/safeai-aus.github.io"
            ],
            "foundingDate": "2025",
            "areaServed": "Australia",
            "serviceType": "AI Safety Resources",
            "knowsAbout": [
                "Artificial Intelligence Safety",
                "AI Governance",
                "AI Risk Management",
                "Australian AI Standards",
                "AI Compliance",
                "AI Ethics"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Safety Resources",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "AI Governance Templates",
                            "description": "Comprehensive templates for AI policies, risk assessments, and compliance"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "AI Safety Standards",
                            "description": "Guidance on Australian AI safety standards and voluntary guardrails"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Business Resources",
                            "description": "Tools, frameworks, and funding information for AI adoption"
                        }
                    }
                ]
            }
        };
        
        // Add Local Business Schema for better local SEO
        const localBusinessSchema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SafeAI-Aus",
            "alternateName": "Safe AI Australia",
            "description": "Australian AI Safety Knowledge Hub providing practical tools, open standards, and trusted guidance for responsible AI adoption.",
            "url": "https://safeaiaus.org/",
            "logo": "https://safeaiaus.org/assets/safeaiaus-logo-600px.png",
            "image": "https://safeaiaus.org/assets/safeaiaus-logo-600px.png",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "AU",
                "addressRegion": "Australia",
                "addressLocality": "Australia"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-25.2744",
                "longitude": "133.7751"
            },
            "serviceArea": {
                "@type": "Country",
                "name": "Australia"
            },
            "areaServed": [
                {
                    "@type": "Country",
                    "name": "Australia"
                },
                {
                    "@type": "State",
                    "name": "New South Wales"
                },
                {
                    "@type": "State",
                    "name": "Victoria"
                },
                {
                    "@type": "State",
                    "name": "Queensland"
                },
                {
                    "@type": "State",
                    "name": "Western Australia"
                },
                {
                    "@type": "State",
                    "name": "South Australia"
                },
                {
                    "@type": "State",
                    "name": "Tasmania"
                },
                {
                    "@type": "State",
                    "name": "Northern Territory"
                },
                {
                    "@type": "State",
                    "name": "Australian Capital Territory"
                }
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Safety Resources and Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "AI Governance Templates",
                            "description": "Comprehensive templates for AI policies, risk assessments, and compliance",
                            "category": "AI Governance"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "AI Safety Standards",
                            "description": "Guidance on Australian AI safety standards and voluntary guardrails",
                            "category": "AI Safety Standards"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Business Resources",
                            "description": "Tools, frameworks, and funding information for AI adoption",
                            "category": "Business Resources"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "AI Risk Assessment",
                            "description": "Risk assessment checklists and frameworks for AI implementation",
                            "category": "Risk Management"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "AI Vendor Evaluation",
                            "description": "Vendor selection and evaluation criteria for AI solutions",
                            "category": "Vendor Management"
                        }
                    }
                ]
            },
            "knowsAbout": [
                "Artificial Intelligence Safety",
                "AI Governance",
                "AI Risk Management",
                "Australian AI Standards",
                "AI Compliance",
                "AI Ethics",
                "AI Legislation Australia",
                "AI Safety Guardrails",
                "AI Incident Management",
                "AI Vendor Management"
            ],
            "keywords": "AI safety, Australian AI standards, AI governance, AI risk assessment, AI compliance, AI safety templates, Australian business AI, AI safety Australia, AI governance templates, AI risk management",
            "foundingDate": "2025",
            "slogan": "Safe AI, Stronger Australia",
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English",
                "areaServed": "AU"
            }
        };
        
        // Add both schemas to the page
        const schemas = [structuredData, localBusinessSchema];
        
        schemas.forEach((schema, index) => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(schema);
            script.id = `structured-data-${index}`;
            document.head.appendChild(script);
        });
    }
    
    // Add AI-specific structured data
    function addAISchemaData() {
        // Get page-specific content
        const pageTitle = document.querySelector('h1')?.textContent || '';
        const pageDescription = document.querySelector('meta[name="description"]')?.content || '';
        const currentUrl = window.location.href;
        
        // Determine page type based on URL structure
        let pageType = "WebPage";
        let mainEntityType = "TechArticle";
        
        if (currentUrl.includes('/governance-templates/')) {
            pageType = "WebPage";
            mainEntityType = "TechArticle";
        } else if (currentUrl.includes('/safety-standards/')) {
            pageType = "WebPage";
            mainEntityType = "TechArticle";
        } else if (currentUrl.includes('/business-resources/')) {
            pageType = "WebPage";
            mainEntityType = "TechArticle";
        }
        
        const revisionDateISO = getRevisionDateISO();
        const fallbackDate = new Date(document.lastModified);
        const fallbackDateISO = Number.isNaN(fallbackDate.getTime()) ? new Date().toISOString() : fallbackDate.toISOString();

        const aiSchema = {
            "@context": "https://schema.org",
            "@type": pageType,
            "name": pageTitle,
            "description": pageDescription,
            "url": currentUrl,
            "mainEntity": {
                "@type": mainEntityType,
                "headline": pageTitle,
                "about": {
                    "@type": "Thing",
                    "name": "Artificial Intelligence Safety"
                },
                "audience": {
                    "@type": "Audience",
                    "audienceType": "Australian Businesses"
                },
                "keywords": "AI safety, Australian AI standards, AI governance, AI risk assessment, AI compliance",
                "author": {
                    "@type": "Organization",
                    "name": "SafeAI-Aus",
                    "url": "https://safeaiaus.org/"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "SafeAI-Aus",
                    "url": "https://safeaiaus.org/"
                },
                "datePublished": revisionDateISO || "2025-01-27",
                "dateModified": revisionDateISO || fallbackDateISO
            }
        };
        
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(aiSchema);
        document.head.appendChild(script);
    }
    
    // Add FAQ schema for pages with FAQ content
    function addFAQSchema() {
        const faqElements = document.querySelectorAll('h3, h4');
        const faqItems = [];
        
        faqElements.forEach((element, index) => {
            if (index < 5) { // Limit to first 5 for schema
                const question = element.textContent;
                const nextElement = element.nextElementSibling;
                let answer = '';
                
                if (nextElement && nextElement.tagName === 'P') {
                    answer = nextElement.textContent;
                } else if (nextElement && nextElement.tagName === 'UL') {
                    answer = nextElement.textContent;
                }
                
                if (answer) {
                    faqItems.push({
                        "@type": "Question",
                        "name": question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": answer
                        }
                    });
                }
            }
        });
        
        if (faqItems.length > 0) {
            const faqSchema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqItems
            };
            
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(faqSchema);
            document.head.appendChild(script);
        }
    }
    
    // Add HowTo schema for template and checklist pages
    function addHowToSchema() {
        const currentUrl = window.location.href;
        
        if (currentUrl.includes('/governance-templates/') || currentUrl.includes('/checklist')) {
            const pageTitle = document.querySelector('h1')?.textContent || '';
            const pageDescription = document.querySelector('meta[name="description"]')?.content || '';
            
            const howToSchema = {
                "@context": "https://schema.org",
                "@type": "HowTo",
                "name": pageTitle,
                "description": pageDescription,
                "about": {
                    "@type": "Thing",
                    "name": "AI Safety Implementation"
                },
                "audience": {
                    "@type": "Audience",
                    "audienceType": "Australian Businesses"
                },
                "step": [
                    {
                        "@type": "HowToStep",
                        "name": "Review Template",
                        "text": "Review the provided template structure and requirements"
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Customize Content",
                        "text": "Adapt the template to your organization's specific needs"
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Implement",
                        "text": "Apply the template in your AI governance framework"
                    }
                ]
            };
            
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(howToSchema);
            document.head.appendChild(script);
        }
    }
    
    // Add structured data when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            addStructuredData();
            addAISchemaData();
            addFAQSchema();
            addHowToSchema();
        });
    } else {
        addStructuredData();
        addAISchemaData();
        addFAQSchema();
        addHowToSchema();
    }
    
})();
