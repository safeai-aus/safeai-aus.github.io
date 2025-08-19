// SEO and social media optimization for SafeAI-Aus
(function() {
    'use strict';
    
    // Goat Counter Analytics
    (function() {
        const script = document.createElement('script');
        script.setAttribute('data-goatcounter', 'https://safeaiaus.goatcounter.com/count');
        script.async = true;
        script.src = '//gc.zgo.at/count.js';
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
        const url = window.location.href;
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
        
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
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
                "datePublished": "2025-01-27",
                "dateModified": new Date().toISOString().split('T')[0]
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
