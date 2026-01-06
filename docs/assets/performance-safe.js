// Safe Performance Optimizations for SafeAI-Aus
// This script only adds lightweight optimizations that won't break the layout

(function() {
    'use strict';

    const SAFETY_MARGIN_PX = 120;

    function raf(callback) {
        if (typeof window.requestAnimationFrame === 'function') {
            return window.requestAnimationFrame(callback);
        }
        return window.setTimeout(callback, 16);
    }

    function whenLayoutSettled(callback) {
        const run = function() {
            raf(callback);
        };

        // Running twice helps ensure fonts/layout have settled
        raf(function() {
            if (document.fonts && typeof document.fonts.ready === 'object' && typeof document.fonts.ready.then === 'function') {
                document.fonts.ready.then(run).catch(run);
            } else {
                run();
            }
        });
    }

    function markLazyImages(images) {
        if (!images.length) {
            return;
        }

        whenLayoutSettled(function() {
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
            images.forEach(function(img) {
                if (img.hasAttribute('loading')) {
                    return;
                }

                const rect = img.getBoundingClientRect();
                if (rect.bottom <= 0) {
                    return; // Above the viewport, keep eager
                }

                const threshold = viewportHeight + SAFETY_MARGIN_PX;
                if (rect.top >= threshold) {
                    img.loading = 'lazy';
                }
            });
        });
    }

    function markLazyImagesWithObserver(images) {
        const observer = new IntersectionObserver(function(entries, obs) {
            entries.forEach(function(entry) {
                const img = entry.target;
                if (img.hasAttribute('loading')) {
                    obs.unobserve(img);
                    return;
                }

                if (entry.isIntersecting) {
                    obs.unobserve(img);
                    return;
                }

                const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
                if (entry.boundingClientRect.top >= viewportHeight + SAFETY_MARGIN_PX) {
                    img.loading = 'lazy';
                    obs.unobserve(img);
                }
            });
        }, { rootMargin: SAFETY_MARGIN_PX + 'px 0px' });

        images.forEach(function(img) {
            observer.observe(img);
        });
    }

    // Safe image optimization - only adds lazy loading to images below the fold
    function optimizeImages() {
        const images = Array.prototype.slice.call(document.querySelectorAll('img'));
        if (!images.length) {
            return;
        }

        const candidates = images.filter(function(img) {
            return !img.hasAttribute('loading');
        });

        if (!candidates.length) {
            return;
        }

        if ('IntersectionObserver' in window) {
            markLazyImagesWithObserver(candidates);
        } else {
            markLazyImages(candidates);
        }
    }

    // Safe resource hints - only adds DNS prefetch for external domains
    function addResourceHints() {
        const externalDomains = [
            'fonts.googleapis.com',
            'fonts.gstatic.com',
            'cloud.umami.is'
        ];

        const head = document.head || document.getElementsByTagName('head')[0];
        if (!head) {
            return;
        }

        if (!document.querySelector('meta[http-equiv="x-dns-prefetch-control"]')) {
            const meta = document.createElement('meta');
            meta.httpEquiv = 'x-dns-prefetch-control';
            meta.content = 'on';
            head.insertBefore(meta, head.firstChild);
        }

        externalDomains.forEach(domain => {
            if (!document.querySelector(`link[rel="dns-prefetch"][href="//${domain}"]`)) {
                const link = document.createElement('link');
                link.rel = 'dns-prefetch';
                link.href = `//${domain}`;
                head.insertBefore(link, head.firstChild);
            }
        });
    }

    // Initialize only safe optimizations
    function init() {
        // Run immediately
        addResourceHints();

        // Run after DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', optimizeImages, { once: true });
        } else {
            optimizeImages();
        }
    }

    // Start optimizations
    init();

})();
