// Cusdis Integration for SafeAI-Aus MkDocs Site
// This script automatically sets up Cusdis comments on each page

(function() {
    'use strict';

    let cusdisScriptPromise = null;

    if (typeof document$ !== 'undefined') {
        document$.subscribe(() => {
            removeExistingCusdis();
            initCusdis();
        });
    } else {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                removeExistingCusdis();
                initCusdis();
            });
        } else {
            removeExistingCusdis();
            initCusdis();
        }
    }

    function initCusdis() {
        // Get current page information
        const currentPath = window.location.pathname;
        const currentTitle = document.title || 'SafeAI-Aus Documentation';
        
        // Generate a unique page ID based on the current path
        const pageId = generatePageId(currentPath);
        
        // Create the Cusdis thread container
        const cusdisContainer = document.createElement('div');
        cusdisContainer.id = 'cusdis_thread';
        cusdisContainer.setAttribute('data-host', 'https://cusdis.com');
        cusdisContainer.setAttribute('data-app-id', 'ba73617f-2ff4-4c7e-95cd-c27d72c41e8e');
        cusdisContainer.setAttribute('data-page-id', pageId);
        cusdisContainer.setAttribute('data-page-url', window.location.href);
        cusdisContainer.setAttribute('data-page-title', currentTitle);
        cusdisContainer.setAttribute('data-lang', 'en');
        cusdisContainer.setAttribute('data-theme', 'auto');
        
        // Find the best place to insert the comments
        const insertPoint = findInsertPoint();

        if (insertPoint) {
            // Add a heading for the comments section
            const commentsHeading = document.createElement('h2');
            commentsHeading.textContent = 'Comments & Feedback';
            commentsHeading.id = 'comments';
            
            // Insert the comments section
            insertPoint.appendChild(commentsHeading);
            insertPoint.appendChild(cusdisContainer);

            // Add extra spacing at the bottom
            const bottomSpacer = document.createElement('div');
            bottomSpacer.style.height = '4rem';
            bottomSpacer.style.marginBottom = '2rem';
            bottomSpacer.id = 'cusdis-bottom-spacer';
            insertPoint.appendChild(bottomSpacer);

            // Add some styling
            addCommentsStyling();

            // Load the Cusdis script once and render comments
            ensureCusdisScript().then(cusdis => {
                if (cusdis && typeof cusdis.renderTo === 'function') {
                    cusdis.renderTo(cusdisContainer, {
                        host: 'https://cusdis.com',
                        appId: 'ba73617f-2ff4-4c7e-95cd-c27d72c41e8e',
                        pageId,
                        pageUrl: window.location.href,
                        pageTitle: currentTitle,
                        theme: 'auto',
                        lang: 'en'
                    });
                }

                // Wait a bit for Cusdis to initialize, then force textarea expansion
                setTimeout(forceTextareaExpansion, 1000);
            }).catch(error => {
                console.error('Failed to load Cusdis script', error);
            });
        }
    }

    function removeExistingCusdis() {
        const existingThread = document.getElementById('cusdis_thread');
        if (existingThread) {
            existingThread.remove();
        }

        const existingHeading = document.getElementById('comments');
        if (existingHeading) {
            existingHeading.remove();
        }

        const existingSpacer = document.getElementById('cusdis-bottom-spacer');
        if (existingSpacer) {
            existingSpacer.remove();
        }
    }

    function ensureCusdisScript() {
        if (window.CUSDIS && typeof window.CUSDIS.renderTo === 'function') {
            return Promise.resolve(window.CUSDIS);
        }

        if (cusdisScriptPromise) {
            return cusdisScriptPromise;
        }

        const existingScript = document.querySelector('script[data-cusdis-script]');
        if (existingScript) {
            if (existingScript.dataset.loaded === 'true') {
                return Promise.resolve(window.CUSDIS);
            }

            cusdisScriptPromise = new Promise((resolve, reject) => {
                existingScript.addEventListener('load', () => resolve(window.CUSDIS), { once: true });
                existingScript.addEventListener('error', reject, { once: true });
            });
            return cusdisScriptPromise;
        }

        cusdisScriptPromise = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.async = true;
            script.defer = true;
            script.src = 'https://cusdis.com/js/cusdis.es.js';
            script.setAttribute('data-cusdis-script', 'true');
            script.addEventListener('load', () => {
                script.dataset.loaded = 'true';
                resolve(window.CUSDIS);
            }, { once: true });
            script.addEventListener('error', reject, { once: true });
            document.head.appendChild(script);
        });

        return cusdisScriptPromise;
    }
    
    function generatePageId(path) {
        // Remove leading slash and convert to a safe ID
        let pageId = path.replace(/^\//, '').replace(/\/$/, '');
        
        // If it's the home page, use a specific ID
        if (!pageId || pageId === 'index.html' || pageId === '') {
            pageId = 'home';
        }
        
        // Replace any remaining slashes with underscores
        pageId = pageId.replace(/\//g, '_');
        
        // Remove file extensions
        pageId = pageId.replace(/\.(html|md)$/, '');
        
        return pageId;
    }
    
    function findInsertPoint() {
        // Try to find the main content area
        const mainContent = document.querySelector('.md-content__inner');
        if (mainContent) {
            return mainContent;
        }
        
        // Fallback: look for the main content div
        const contentDiv = document.querySelector('[data-md-component="content"]');
        if (contentDiv) {
            return contentDiv;
        }
        
        // Last resort: find any article or main element
        return document.querySelector('article, main, .content') || document.body;
    }
    
    function addCommentsStyling() {
        if (document.getElementById('cusdis-style')) return;
        const style = document.createElement('style');
        style.id = 'cusdis-style';
        style.textContent = `
            /* Main comments container */
            #cusdis_thread {
                margin-top: 1rem;
                padding-top: 0;
                padding-bottom: 3rem;
                margin-bottom: 2rem;
                border-top: none;
                font-family: var(--md-text-font-family);
                font-size: var(--md-typeset-font-size);
                line-height: var(--md-typeset-line-height);
                max-height: none !important;
                overflow: visible !important;
                height: auto !important;
            }
            
            /* Comments list styling */
            #cusdis_thread .cusdis-comments {
                font-family: var(--md-text-font-family);
                color: var(--md-default-fg-color);
                max-height: none !important;
                overflow: visible !important;
            }
            
            /* Individual comment styling */
            #cusdis_thread .cusdis-comment {
                border: 1px solid var(--md-default-fg-color--lightest);
                border-radius: 8px;
                margin-bottom: 1.5rem;
                padding: 1.5rem;
                background: var(--md-default-bg-color);
                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                transition: box-shadow 0.2s ease;
            }
            
            #cusdis_thread .cusdis-comment:hover {
                box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            }
            
            /* Comment author and metadata */
            #cusdis_thread .cusdis-comment .cusdis-comment-header {
                margin-bottom: 0.75rem;
                font-weight: 600;
                color: var(--md-primary-fg-color);
            }
            
            #cusdis_thread .cusdis-comment .cusdis-comment-date {
                font-size: 0.875em;
                color: var(--md-default-fg-color--light);
                font-weight: 400;
            }
            
            /* Comment content */
            #cusdis_thread .cusdis-comment .cusdis-comment-content {
                color: var(--md-default-fg-color);
                line-height: 1.6;
            }
            
            /* Comment form styling */
            #cusdis_thread .cusdis-comment-form {
                background: var(--md-default-bg-color);
                border: 2px solid var(--md-default-fg-color--lightest);
                border-radius: 12px;
                padding: 1.5rem;
                margin-top: 2rem;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            }
            
            #cusdis_thread .cusdis-comment-form:hover {
                border-color: var(--md-primary-fg-color);
                box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            }
            
            /* Form labels - override Cusdis defaults */
            #cusdis_thread .cusdis-comment-form label,
            #cusdis_thread .cusdis-comment-form .cusdis-label {
                display: block !important;
                margin-bottom: 0.5rem !important;
                font-weight: 600 !important;
                color: var(--md-default-fg-color) !important;
                font-family: var(--md-text-font-family) !important;
                font-size: var(--md-typeset-font-size) !important;
            }
            
            /* Form inputs and textarea - using !important to override Cusdis defaults */
            #cusdis_thread .cusdis-comment-form textarea,
            #cusdis_thread .cusdis-comment-form input[type="text"],
            #cusdis_thread .cusdis-comment-form input[type="email"],
            #cusdis_thread .cusdis-comment-form input[type="url"] {
                width: 100% !important;
                background: var(--md-default-bg-color) !important;
                color: var(--md-default-fg-color) !important;
                border: 2px solid var(--md-default-fg-color--lightest) !important;
                border-radius: 8px !important;
                padding: 0.75rem !important;
                font-family: var(--md-text-font-family) !important;
                font-size: var(--md-typeset-font-size) !important;
                line-height: 1.5 !important;
                transition: all 0.2s ease !important;
                box-sizing: border-box !important;
                min-height: 120px !important;
                resize: vertical !important;
            }
            
            /* Fix height constraints on all Cusdis containers */
            #cusdis_thread *:not(iframe) {
                max-height: none !important;
                overflow: visible !important;
                height: auto !important;
            }
            
            /* Aggressively override any Cusdis inline styles */
            #cusdis_thread [style*="height"],
            #cusdis_thread [style*="max-height"],
            #cusdis_thread [style*="overflow"] {
                height: auto !important;
                max-height: none !important;
                overflow: visible !important;
            }
            
            /* Specific height fixes for common Cusdis elements */
            #cusdis_thread .cusdis-comment-form,
            #cusdis_thread .cusdis-comments,
            #cusdis_thread .cusdis-comment,
            #cusdis_thread .cusdis-loading,
            #cusdis_thread .cusdis-error {
                max-height: none !important;
                overflow: visible !important;
                height: auto !important;
            }
            
            /* Ensure textarea has proper height */
            #cusdis_thread .cusdis-comment-form textarea,
            #cusdis_thread textarea,
            #cusdis_thread [class*="textarea"],
            #cusdis_thread [class*="input"] {
                min-height: 120px !important;
                max-height: none !important;
                height: auto !important;
                overflow: visible !important;
                resize: vertical !important;
            }
            
            /* Override any inline styles that Cusdis might add */
            #cusdis_thread .cusdis-comment-form textarea[style*="height"],
            #cusdis_thread .cusdis-comment-form textarea[style*="max-height"],
            #cusdis_thread .cusdis-comment-form textarea[style*="overflow"] {
                height: auto !important;
                max-height: none !important;
                overflow: visible !important;
            }
            
            /* Force the page to expand to fit content */
            .md-content__inner {
                height: auto !important;
                min-height: auto !important;
                overflow: visible !important;
                padding-bottom: 2rem !important;
            }
            
            /* Ensure the main content area expands */
            [data-md-component="content"] {
                height: auto !important;
                min-height: auto !important;
                overflow: visible !important;
                padding-bottom: 2rem !important;
            }
            
            /* Add extra space after the entire content */
            .md-content__inner:after {
                content: '';
                display: block;
                height: 3rem;
                clear: both;
            }
            
            #cusdis_thread .cusdis-comment-form textarea:focus,
            #cusdis_thread .cusdis-comment-form input[type="text"]:focus,
            #cusdis_thread .cusdis-comment-form input[type="email"]:focus,
            #cusdis_thread .cusdis-comment-form input[type="url"]:focus {
                outline: none !important;
                border-color: var(--md-primary-fg-color) !important;
                box-shadow: 0 0 0 3px rgba(var(--md-primary-fg-color--rgb), 0.1) !important;
            }
            
            /* Override Cusdis placeholder text color */
            #cusdis_thread .cusdis-comment-form textarea::placeholder,
            #cusdis_thread .cusdis-comment-form input[type="text"]::placeholder,
            #cusdis_thread .cusdis-comment-form input[type="email"]::placeholder,
            #cusdis_thread .cusdis-comment-form input[type="url"]::placeholder {
                color: var(--md-default-fg-color--light) !important;
                opacity: 0.7 !important;
            }
            
            /* Form buttons */
            #cusdis_thread .cusdis-comment-form button {
                background: var(--md-primary-fg-color);
                color: var(--md-primary-bg-color);
                border: none;
                border-radius: 8px;
                padding: 0.75rem 1.5rem;
                cursor: pointer;
                font-family: var(--md-text-font-family);
                font-weight: 600;
                font-size: var(--md-typeset-font-size);
                transition: all 0.2s ease;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            
            #cusdis_thread .cusdis-comment-form button:hover {
                background: var(--md-primary-fg-color);
                transform: translateY(-1px);
                box-shadow: 0 4px 8px rgba(0,0,0,0.15);
            }
            
            #cusdis_thread .cusdis-comment-form button:active {
                transform: translateY(0);
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            
            /* Comment count and pagination */
            #cusdis_thread .cusdis-comment-count {
                color: var(--md-default-fg-color--light);
                font-size: 0.875em;
                margin-bottom: 1rem;
                font-family: var(--md-text-font-family);
            }
            
            /* Loading states */
            #cusdis_thread .cusdis-loading {
                color: var(--md-default-fg-color--light);
                font-style: italic;
                text-align: center;
                padding: 2rem;
                font-family: var(--md-text-font-family);
            }
            
            /* Error states */
            #cusdis_thread .cusdis-error {
                color: var(--md-typeset-color);
                background: var(--md-default-bg-color);
                border: 1px solid var(--md-default-fg-color--lightest);
                border-radius: 8px;
                padding: 1rem;
                margin: 1rem 0;
                font-family: var(--md-text-font-family);
            }
            
            /* Dark mode compatibility */
            [data-md-color-scheme="slate"] #cusdis_thread .cusdis-comment-form {
                border-color: var(--md-default-fg-color--lightest);
            }
            
            [data-md-color-scheme="slate"] #cusdis_thread .cusdis-comment-form:hover {
                border-color: var(--md-primary-fg-color);
            }
            

            
            /* Responsive design */
            @media (max-width: 768px) {
                #cusdis_thread .cusdis-comment-form {
                    padding: 1rem;
                }
                
                #cusdis_thread .cusdis-comment {
                    padding: 1rem;
                }
                
                #cusdis_thread .cusdis-comment-form button {
                    width: 100%;
                    margin-top: 1rem;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    function forceTextareaExpansion() {
        console.log('Forcing textarea expansion...');
        
        // Find all textareas in the Cusdis thread
        const textareas = document.querySelectorAll('#cusdis_thread textarea');
        console.log(`Found ${textareas.length} textareas`);
        
        textareas.forEach((textarea, index) => {
            console.log(`Processing textarea ${index + 1}`);
            
            // Remove any inline styles that might be constraining height
            textarea.style.height = 'auto';
            textarea.style.maxHeight = 'none';
            textarea.style.overflow = 'visible';
            textarea.style.minHeight = '120px';
            
            // Set a larger initial height
            textarea.style.height = '200px';
            
            // Add event listener to expand as user types
            textarea.addEventListener('input', function() {
                this.style.height = 'auto';
                this.style.height = Math.max(200, this.scrollHeight) + 'px';
            });
            
            // Force immediate expansion
            textarea.style.height = Math.max(200, textarea.scrollHeight) + 'px';
            
            console.log(`Textarea ${index + 1} expanded to height: ${textarea.style.height}`);
        });
        
        // Also try to find and expand any Cusdis comment containers
        const commentContainers = document.querySelectorAll('#cusdis_thread .cusdis-comment, #cusdis_thread .cusdis-comments');
        commentContainers.forEach(container => {
            container.style.height = 'auto';
            container.style.maxHeight = 'none';
            container.style.overflow = 'visible';
        });
    }
})();
