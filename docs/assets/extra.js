// SEO and social media optimization for SafeAI-Aus
(function() {
    'use strict';
    
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
        const image = 'https://safeai-aus.github.io/assets/safeaiaus-logo-600px.png';
        
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
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SafeAI-Aus",
            "url": "https://safeai-aus.github.io/",
            "logo": "https://safeai-aus.github.io/assets/safeaiaus-logo-600px.png",
            "description": "Australian AI Safety Knowledge Hub — practical tools, open standards, and trusted guidance for responsible AI adoption.",
            "sameAs": [
                "https://github.com/safeai-aus/safeai-aus.github.io"
            ],
            "foundingDate": "2025",
            "areaServed": "Australia",
            "serviceType": "AI Safety Resources"
        };
        
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
    }
    
    // Add structured data when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addStructuredData);
    } else {
        addStructuredData();
    }
    
})();
