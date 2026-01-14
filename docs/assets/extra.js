// SEO enhancements and structured data helpers for SafeAI-Aus
(function () {
    'use strict';

    // Prevent the analytics script from being injected multiple times (for example, during page reloads)
    // while preserving the behaviour introduced in the legacy script.
    function loadAnalytics() {
        if (document.querySelector('script[src="https://cloud.umami.is/script.js"]')) {
            return;
        }

        // Umami Cloud Analytics. A previous merge dropped the IIFE invocation around this logic,
        // leaving the loader unexecuted and analytics disabled. Keep the implementation explicit
        // so it is harder for future edits to regress.
        const script = document.createElement('script');
        script.defer = true;
        script.src = 'https://cloud.umami.is/script.js';
        script.setAttribute('data-website-id', 'f228fe92-e13d-456d-92f8-018fac9d587c');

        const target = document.head || document.querySelector('head') || document.documentElement;
        target.appendChild(script);
    }

    loadAnalytics();

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAnalytics, { once: true });
    }

    function getCanonicalUrl() {
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink?.href) {
            return canonicalLink.href;
        }

        try {
            return window.location.href;
        } catch (error) {
            return null;
        }
    }

    function getSiteUrl() {
        const canonical = getCanonicalUrl();
        if (canonical) {
            try {
                const url = new URL(canonical);
                return url.origin;
            } catch (error) {
                // ignore invalid canonical URLs and fall back to location
            }
        }

        try {
            return window.location.origin;
        } catch (error) {
            return null;
        }
    }

    function addJsonLd(id, data) {
        if (!data || document.getElementById(id)) {
            return;
        }

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = id;
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
    }

    function addOrganizationSchema() {
        const path = window.location.pathname.replace(/index\.html$/, '');
        const isHome = path === '/' || path === '';
        if (!isHome) {
            return;
        }

        const siteOrigin = (getSiteUrl() || 'https://safeaiaus.org').replace(/\/$/, '');
        const siteUrl = `${siteOrigin}/`;
        const logoUrl = `${siteOrigin}/assets/safeaiaus-logo-600px.png`;

        const organization = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'SafeAI-Aus',
            alternateName: 'Safe AI Australia',
            url: siteUrl,
            logo: logoUrl,
            description: 'Australian AI Safety Knowledge Hub — practical tools, open standards, and trusted guidance for responsible AI adoption.',
            sameAs: [
                'https://github.com/safeai-aus/safeai-aus.github.io',
                'https://twitter.com/safeai_aus'
            ],
            foundingDate: '2025',
            areaServed: {
                '@type': 'Country',
                name: 'Australia'
            },
            contactPoint: [
                {
                    '@type': 'ContactPoint',
                    contactType: 'customer support',
                    email: 'contact@safeaiaus.org',
                    availableLanguage: 'English',
                    areaServed: 'AU'
                }
            ],
            keywords: [
                'AI safety',
                'AI governance',
                'AI risk management',
                'Australian AI standards',
                'Responsible AI'
            ]
        };

        addJsonLd('structured-data-organization', organization);
    }

    function addAISchemaData() {
        const contentContainer = document.querySelector('.md-content');
        const pageTitle = document.querySelector('h1')?.textContent?.trim();
        const pageDescription = document.querySelector('meta[name="description"]')?.content?.trim();

        if (!contentContainer || !pageTitle || !pageDescription) {
            return;
        }

        const currentUrl = getCanonicalUrl();
        if (!currentUrl) {
            return;
        }

        let siteOrigin = getSiteUrl();
        if (!siteOrigin) {
            try {
                siteOrigin = new URL(currentUrl).origin;
            } catch (error) {
                siteOrigin = 'https://safeaiaus.org';
            }
        }
        siteOrigin = siteOrigin.replace(/\/$/, '');

        // Use document.lastModified as fallback for dates (git revision dates not available in Zensical yet)
        const fallbackDate = new Date(document.lastModified);
        const fallbackISO = Number.isNaN(fallbackDate.getTime()) ? new Date().toISOString() : fallbackDate.toISOString();
        const datePublished = fallbackISO;
        const dateModified = fallbackISO;

        const keywordMeta = document.querySelector('meta[name="keywords"]')?.content || '';
        const keywords = keywordMeta
            .split(',')
            .map((item) => item.trim())
            .filter((item) => item.length > 0)
            .slice(0, 10);

        const aiSchema = {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: pageTitle,
            description: pageDescription,
            url: currentUrl,
            mainEntity: {
                '@type': 'TechArticle',
                headline: pageTitle,
                about: {
                    '@type': 'Thing',
                    name: 'Artificial Intelligence Safety'
                },
                audience: {
                    '@type': 'Audience',
                    audienceType: 'Australian Businesses'
                },
                keywords: keywords.length ? keywords : undefined,
                author: {
                    '@type': 'Organization',
                    name: 'SafeAI-Aus',
                    url: siteOrigin
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'SafeAI-Aus',
                    url: siteOrigin
                },
                datePublished,
                dateModified
            }
        };

        addJsonLd('structured-data-ai-page', aiSchema);
    }

    function initialiseStructuredData() {
        addOrganizationSchema();
        addAISchemaData();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialiseStructuredData);
    } else {
        initialiseStructuredData();
    }
})();
