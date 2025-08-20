// Cusdis Integration for SafeAI-Aus MkDocs Site
// This script automatically sets up Cusdis comments on each page

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCusdis);
    } else {
        initCusdis();
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
        cusdisContainer.setAttribute('data-reaction', 'true');
        cusdisContainer.setAttribute('data-theme', 'auto');
        cusdisContainer.setAttribute('data-version', '2');
        
        // Create the Cusdis script
        const cusdisScript = document.createElement('script');
        cusdisScript.async = true;
        cusdisScript.defer = true;
        cusdisScript.src = 'https://cusdis.com/js/cusdis.es.js';
        
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
            insertPoint.appendChild(cusdisScript);
            
            // Add some styling
            addCommentsStyling();
            
            // Check if reactions are working after a delay
            setTimeout(checkReactions, 2000);
            
            // Also check when Cusdis is fully loaded
            cusdisScript.onload = function() {
                console.log('Cusdis script loaded, checking for reactions...');
                setTimeout(checkReactions, 1000);
            };
        }
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
        const style = document.createElement('style');
        style.textContent = `
            /* Main comments container */
            #cusdis_thread {
                margin-top: 1rem;
                padding-top: 0;
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
            #cusdis_thread * {
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
            #cusdis_thread .cusdis-comment-form textarea {
                min-height: 120px !important;
                max-height: none !important;
                overflow-y: auto !important;
                resize: vertical !important;
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
            
            /* Reaction buttons styling - more specific selectors */
            #cusdis_thread .cusdis-reaction,
            #cusdis_thread [class*="reaction"],
            #cusdis_thread .cusdis-reaction-button {
                display: inline-flex !important;
                align-items: center !important;
                gap: 0.25rem !important;
                margin-right: 0.5rem !important;
                margin-bottom: 0.5rem !important;
                padding: 0.5rem 0.75rem !important;
                background: var(--md-default-bg-color) !important;
                border: 2px solid var(--md-default-fg-color--lightest) !important;
                border-radius: 20px !important;
                cursor: pointer !important;
                transition: all 0.2s ease !important;
                font-size: 1em !important;
                color: var(--md-default-fg-color) !important;
                min-height: 36px !important;
                min-width: 60px !important;
                justify-content: center !important;
            }
            
            #cusdis_thread .cusdis-reaction:hover,
            #cusdis_thread [class*="reaction"]:hover,
            #cusdis_thread .cusdis-reaction-button:hover {
                background: var(--md-primary-fg-color) !important;
                color: var(--md-primary-bg-color) !important;
                border-color: var(--md-primary-fg-color) !important;
                transform: translateY(-1px) !important;
                box-shadow: 0 2px 8px rgba(0,0,0,0.15) !important;
            }
            
            #cusdis_thread .cusdis-reaction.active,
            #cusdis_thread [class*="reaction"].active,
            #cusdis_thread .cusdis-reaction-button.active {
                background: var(--md-primary-fg-color) !important;
                color: var(--md-primary-bg-color) !important;
                border-color: var(--md-primary-fg-color) !important;
            }
            
            #cusdis_thread .cusdis-reaction-count,
            #cusdis_thread [class*="reaction-count"] {
                font-weight: 600 !important;
                margin-left: 0.5rem !important;
                font-size: 0.9em !important;
            }
            
            /* Ensure reaction container is visible - multiple selector variations */
            #cusdis_thread .cusdis-reactions,
            #cusdis_thread [class*="reactions"],
            #cusdis_thread .reactions-container,
            #cusdis_thread .reactions {
                display: flex !important;
                flex-wrap: wrap !important;
                gap: 0.75rem !important;
                margin-top: 1rem !important;
                margin-bottom: 1rem !important;
                padding: 0.75rem 0 !important;
                border-top: 1px solid var(--md-default-fg-color--lightest) !important;
                padding-top: 1rem !important;
                visibility: visible !important;
                opacity: 1 !important;
            }
            
            /* Force show any hidden reaction elements */
            #cusdis_thread [style*="display: none"],
            #cusdis_thread [style*="visibility: hidden"] {
                display: flex !important;
                visibility: visible !important;
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
                
                #cusdis_thread .cusdis-reactions {
                    gap: 0.25rem !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    function checkReactions() {
        console.log('Cusdis: Checking for reactions...');
        
        // Check if reactions are visible with multiple selector variations
        const reactions = document.querySelectorAll('.cusdis-reaction, [class*="reaction"], .cusdis-reaction-button, .reaction-btn');
        if (reactions.length === 0) {
            console.log('Cusdis: No reaction buttons found, checking configuration...');
            
            // Try to force reactions to show
            const cusdisThread = document.getElementById('cusdis_thread');
            if (cusdisThread) {
                cusdisThread.setAttribute('data-reaction', 'true');
                cusdisThread.setAttribute('data-theme', 'auto');
                console.log('Cusdis: Reactions should be enabled');
                
                // Check again after a short delay
                setTimeout(() => {
                    const retryReactions = document.querySelectorAll('.cusdis-reaction, [class*="reaction"], .cusdis-reaction-button, .reaction-btn');
                    console.log(`Cusdis: Retry found ${retryReactions.length} reaction buttons`);
                }, 1000);
            }
        } else {
            console.log(`Cusdis: Found ${reactions.length} reaction buttons`);
        }
        
        // Also check for reaction containers
        const reactionContainers = document.querySelectorAll('.cusdis-reactions, [class*="reactions"], .reactions-container, .reactions');
        console.log(`Cusdis: Found ${reactionContainers.length} reaction containers`);
        
        // Check if there are any comments at all
        const comments = document.querySelectorAll('.cusdis-comment, [class*="comment"]');
        console.log(`Cusdis: Found ${comments.length} comments`);
        
        // Log the current Cusdis configuration
        const cusdisThread = document.getElementById('cusdis_thread');
        if (cusdisThread) {
            console.log('Cusdis configuration:', {
                'data-reaction': cusdisThread.getAttribute('data-reaction'),
                'data-theme': cusdisThread.getAttribute('data-theme'),
                'data-version': cusdisThread.getAttribute('data-version'),
                'data-lang': cusdisThread.getAttribute('data-lang')
            });
        }
    }
})();
