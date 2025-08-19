// Safe Performance Optimizations for SafeAI-Aus
// This script only adds lightweight optimizations that won't break the layout

(function() {
    'use strict';
    
    // Safe font optimization - only adds font-display: swap to Google Fonts
    function optimizeFonts() {
        const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
        fontLinks.forEach(link => {
            if (!link.href.includes('display=')) {
                link.href += (link.href.includes('?') ? '&' : '?') + 'display=swap';
            }
        });
    }
    
    // Safe image optimization - only adds lazy loading to images below the fold
    function optimizeImages() {
        const images = document.querySelectorAll('img:not([loading])');
        images.forEach(img => {
            // Only add lazy loading to images that are below the fold
            if (img.offsetTop > window.innerHeight) {
                img.loading = 'lazy';
            }
        });
    }
    
    // Safe resource hints - only adds DNS prefetch for external domains
    function addResourceHints() {
        const externalDomains = [
            'fonts.googleapis.com',
            'fonts.gstatic.com',
            'gc.zgo.at',
            'safeaiaus.goatcounter.com'
        ];
        
        externalDomains.forEach(domain => {
            if (!document.querySelector(`link[href="//${domain}"]`)) {
                const link = document.createElement('link');
                link.rel = 'dns-prefetch';
                link.href = `//${domain}`;
                document.head.appendChild(link);
            }
        });
    }
    
    // Initialize only safe optimizations
    function init() {
        // Run immediately
        optimizeFonts();
        addResourceHints();
        
        // Run after DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', optimizeImages);
        } else {
            optimizeImages();
        }
    }
    
    // Start optimizations
    init();
    
})();
