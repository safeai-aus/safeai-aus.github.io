// SEO enhancements and structured data helpers for SafeAI-Aus
(function () {
    'use strict';

    // Load Umami Cloud Analytics only once per page.
    (function loadAnalytics() {
        if (document.querySelector('script[src="https://cloud.umami.is/script.js"]')) {
            return;
        }
        const script = document.createElement('script');
        script.defer = true;
        script.src = 'https://cloud.umami.is/script.js';
        script.setAttribute('data-website-id', 'f228fe92-e13d-456d-92f8-018fac9d587c');
        document.head.appendChild(script);
    })();

    function getRevisionDateISO() {
        const revisionMeta = document.querySelector('meta[name="page:git-revision-date-iso"]');
        if (revisionMeta?.content) {
            return revisionMeta.content;
        }

        if (typeof window.__SAFEAI_PAGE_REVISION__ === 'string' && window.__SAFEAI_PAGE_REVISION__) {
            return window.__SAFEAI_PAGE_REVISION__;
        }

        return null;
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

    function addOrganizationSchemas() {
        const path = window.location.pathname.replace(/index\.html$/, '');
        const isHome = path === '/' || path === '';
        if (!isHome) {
            return;
        }

        const organization = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'SafeAI-Aus',
            url: 'https://safeaiaus.org/',
            logo: 'https://safeaiaus.org/assets/safeaiaus-logo-600px.png',
            description: 'Australian AI Safety Knowledge Hub — practical tools, open standards, and trusted guidance for responsible AI adoption.',
            sameAs: [
                'https://github.com/safeai-aus/safeai-aus.github.io',
                'https://twitter.com/safeai_aus'
            ],
            foundingDate: '2025',
            areaServed: 'Australia',
            knowsAbout: [
                'Artificial Intelligence Safety',
                'AI Governance',
                'AI Risk Management',
                'Australian AI Standards',
                'AI Compliance',
                'AI Ethics'
            ]
        };

        const localBusiness = {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'SafeAI-Aus',
            alternateName: 'Safe AI Australia',
            description: 'Australian AI Safety Knowledge Hub providing practical tools, open standards, and trusted guidance for responsible AI adoption.',
            url: 'https://safeaiaus.org/',
            logo: 'https://safeaiaus.org/assets/safeaiaus-logo-600px.png',
            image: 'https://safeaiaus.org/assets/safeaiaus-logo-600px.png',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'AU'
            },
            areaServed: {
                '@type': 'Country',
                name: 'Australia'
            },
            serviceArea: {
                '@type': 'Country',
                name: 'Australia'
            }
        };

        addJsonLd('structured-data-organization', organization);
        addJsonLd('structured-data-local-business', localBusiness);
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

        const revisionDateISO = getRevisionDateISO();
        const fallbackDate = new Date(document.lastModified);
        const fallbackISO = Number.isNaN(fallbackDate.getTime()) ? new Date().toISOString() : fallbackDate.toISOString();
        const datePublished = revisionDateISO || fallbackISO;
        const dateModified = revisionDateISO || fallbackISO;

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
                    url: 'https://safeaiaus.org/'
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'SafeAI-Aus',
                    url: 'https://safeaiaus.org/'
                },
                datePublished,
                dateModified
            }
        };

        addJsonLd('structured-data-ai-page', aiSchema);
    }

    function addFAQSchema() {
        const faqElements = Array.from(document.querySelectorAll('.md-content h3, .md-content h4'));
        const faqItems = [];

        faqElements.forEach((element) => {
            const question = element.textContent?.trim();
            if (!question) {
                return;
            }

            let answer = '';
            let next = element.nextElementSibling;
            while (next && answer === '') {
                if (next.matches('p, ul, ol')) {
                    answer = next.textContent.trim();
                }
                next = next.nextElementSibling;
            }

            if (answer) {
                faqItems.push({
                    '@type': 'Question',
                    name: question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: answer
                    }
                });
            }
        });

        if (faqItems.length === 0) {
            return;
        }

        const schema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.slice(0, 5)
        };

        addJsonLd('structured-data-faq', schema);
    }

    function addHowToSchema() {
        const path = window.location.pathname;
        const isTemplate = /governance-templates\//.test(path) || /checklist/.test(path);
        if (!isTemplate) {
            return;
        }

        const pageTitle = document.querySelector('h1')?.textContent?.trim();
        const pageDescription = document.querySelector('meta[name="description"]')?.content?.trim();
        if (!pageTitle || !pageDescription) {
            return;
        }

        const howToSchema = {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: pageTitle,
            description: pageDescription,
            about: {
                '@type': 'Thing',
                name: 'AI Safety Implementation'
            },
            audience: {
                '@type': 'Audience',
                audienceType: 'Australian Businesses'
            },
            step: [
                {
                    '@type': 'HowToStep',
                    name: 'Review Template',
                    text: 'Review the provided template structure and requirements.'
                },
                {
                    '@type': 'HowToStep',
                    name: 'Customise Content',
                    text: 'Adapt the template to your organisation’s specific needs.'
                },
                {
                    '@type': 'HowToStep',
                    name: 'Implement',
                    text: 'Apply the template within your AI governance framework.'
                }
            ]
        };

        addJsonLd('structured-data-howto', howToSchema);
    }

    function initialiseStructuredData() {
        addOrganizationSchemas();
        addAISchemaData();
        addFAQSchema();
        addHowToSchema();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialiseStructuredData);
    } else {
        initialiseStructuredData();
    }
})();
