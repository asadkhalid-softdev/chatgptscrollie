(function () {
    let isFixed = false;
    let observer = null;
    let urlObserver = null;
    let intersectionObserver = null;
    let debounceTimer = null;
    const TARGET_SELECTOR = "#thread > div > div.flex.basis-auto.flex-col.grow";
    const MAX_RETRIES = 5;
    let retryCount = 0;
    
    // Debounced function to prevent excessive calls
    function debounce(func, wait) {
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(debounceTimer);
                func(...args);
            };
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(later, wait);
        };
    }
    
    function fixScroll() {
        const startTime = performance.now();
        try {
            const el = document.querySelector(TARGET_SELECTOR);
            if (el) {
                // Check if already fixed to avoid redundant operations
                if (el.style.overflowY === 'scroll' && el.style.maxHeight === '100vh') {
                    return;
                }
                
                // Use requestAnimationFrame for smoother DOM manipulation
                requestAnimationFrame(() => {
                    el.style.overflowY = 'scroll';
                    el.style.maxHeight = '100vh';
                    el.style.paddingRight = '8px';
                    
                    const endTime = performance.now();
                    console.log(`[✅ Scrollie] Scroll fixed successfully in ${(endTime - startTime).toFixed(2)}ms`);
                });
                
                isFixed = true;
                retryCount = 0; // Reset retry count on success
                
                // Disconnect observer once fixed to reduce overhead
                if (observer) {
                    observer.disconnect();
                    observer = null;
                }
            } else {
                console.log('[❌ Scrollie] Scrollable element not found.');
                isFixed = false;
            }
        } catch (error) {
            console.error('[🚨 Scrollie] Error applying scroll fix:', error);
            isFixed = false;
        }
    }

    // Debounced version of fixScroll to prevent excessive calls
    const debouncedFixScroll = debounce(fixScroll, 100);

    function waitForElement() {
        // Try immediately first
        fixScroll();
        
        // If not found, set up observer for dynamic content
        if (!isFixed) {
            try {
                observer = new MutationObserver((mutations) => {
                    // Only check if mutations affect the target area
                    const hasRelevantChange = mutations.some(mutation => {
                        return mutation.type === 'childList' && 
                               (mutation.target.id === 'thread' || 
                                mutation.target.closest('#thread'));
                    });
                    
                    if (hasRelevantChange) {
                        debouncedFixScroll();
                    }
                });
                
                // Watch more targeted area instead of entire body
                const threadContainer = document.querySelector('#thread') || document.body;
                observer.observe(threadContainer, { 
                    childList: true, 
                    subtree: true,
                    attributeFilter: ['class', 'style'] // Only watch relevant attributes
                });
                
                // Fallback timeout with retry limit
                setTimeout(() => {
                    if (!isFixed && retryCount < MAX_RETRIES) {
                        retryCount++;
                        fixScroll();
                        console.log(`[🔄 Scrollie] Retry attempt ${retryCount}/${MAX_RETRIES}`);
                    } else if (retryCount >= MAX_RETRIES) {
                        console.warn('[⚠️ Scrollie] Max retries reached. Element may not exist on this page.');
                    }
                }, 2000);
            } catch (error) {
                console.error('[🚨 Scrollie] Error setting up mutation observer:', error);
            }
        }
    }

    // More efficient URL change detection using History API
    let handleUrlChange; // Declare in scope accessible by cleanup
    
    function setupUrlChangeDetection() {
        let currentUrl = location.href;
        
        // Listen to browser navigation events
        handleUrlChange = debounce(() => {
            if (location.href !== currentUrl) {
                currentUrl = location.href;
                isFixed = false;
                // Reset observers
                if (observer) {
                    observer.disconnect();
                    observer = null;
                }
                setTimeout(waitForElement, 300); // Reduced delay for better responsiveness
            }
        }, 150); // Debounce URL changes too
        
        // Modern approach: listen to navigation events
        window.addEventListener('popstate', handleUrlChange);
        
        // Also listen for pushstate/replacestate (common in SPAs)
        window.originalPushState = history.pushState;
        window.originalReplaceState = history.replaceState;
        
        history.pushState = function() {
            window.originalPushState.apply(history, arguments);
            setTimeout(handleUrlChange, 50);
        };
        
        history.replaceState = function() {
            window.originalReplaceState.apply(history, arguments);
            setTimeout(handleUrlChange, 50);
        };
        
        // Fallback: minimal mutation observer for SPA navigation
        // Only observe head changes which typically indicate navigation
        urlObserver = new MutationObserver(handleUrlChange);
        const head = document.head || document.querySelector('head');
        if (head) {
            urlObserver.observe(head, { 
                childList: true, 
                subtree: false // Only immediate children
            });
        }
    }

    // Cleanup function for better memory management
    function cleanup() {
        if (observer) {
            observer.disconnect();
            observer = null;
        }
        if (urlObserver) {
            urlObserver.disconnect();
            urlObserver = null;
        }
        if (intersectionObserver) {
            intersectionObserver.disconnect();
            intersectionObserver = null;
        }
        if (debounceTimer) {
            clearTimeout(debounceTimer);
            debounceTimer = null;
        }
        if (handleUrlChange) {
            window.removeEventListener('popstate', handleUrlChange);
        }
        
        // Restore original history methods
        if (window.originalPushState) {
            history.pushState = window.originalPushState;
        }
        if (window.originalReplaceState) {
            history.replaceState = window.originalReplaceState;
        }
        
        // Reset counters
        isFixed = false;
        retryCount = 0;
    }

    // Setup cleanup on page unload
    window.addEventListener('beforeunload', cleanup);

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            waitForElement();
            setupUrlChangeDetection();
        });
    } else {
        // DOM already loaded
        setTimeout(() => {
            waitForElement();
            setupUrlChangeDetection();
        }, 100); // Small delay for any pending renders
    }
})();