console.log("Hello from index.js wich is my Homepage");


/****************************************************
 * WEBFLOW ANIMATION SYSTEM
 * 
 * This file controls all our cool animations.
 * Think of it like a choreographer for a dance -
 * it tells everything when and how to move!
 ****************************************************/

// First, let's get our animation tools
// GSAP is like a super-powered animation paintbrush
import { gsap } from 'gsap';
// ScrollTrigger helps us make animations happen when we scroll
import ScrollTrigger from 'gsap/ScrollTrigger';

// Let's add some helpful messages so we can see what's happening
console.log('Starting up our animation system!');

// Get Webflow ready to work with our animations
// This is like preparing our stage before the show
window.Webflow ||= [];

// Now let's tell Webflow what we want to do
// Think of this as our main show director
window.Webflow.push(() => {
    // This is our main function that sets everything up
    function initializeAnimations() {
        console.log('Getting our animations ready...');

        // Clear any existing background colors
        // Like wiping our canvas clean before we start
        document.body.style.backgroundColor = '';
        
        // Tell GSAP we want to use ScrollTrigger
        // It's like activating our special animation powers
        gsap.registerPlugin(ScrollTrigger);
        console.log('Special scroll effects are ready!');
        
        // PART 1: Making the background change color when we scroll
        function initializeScrollColors() {
            // Find the main scrolling container
            const scrollWrapper = document.querySelector('.section-scrolling-wrapper');
            // Keep track of where we are
            let inWorksSection = false;
            
            // Watch for scrolling
            scrollWrapper?.addEventListener('scroll', function() {
                const works = document.querySelector('.section_home-works');
                if (!works) return;
                
                const worksRect = works.getBoundingClientRect();
                const threshold = window.innerHeight * 0.4;
                const currentlyInWorks = worksRect.top <= threshold && worksRect.bottom >= threshold;
                
                if (currentlyInWorks !== inWorksSection) {
                    gsap.to('body', {
                        backgroundColor: currentlyInWorks ? 'var(--background-alternate)' : '',
                        duration: 0.3
                    });
                    inWorksSection = currentlyInWorks;
                }
            });
        }

        // PART 2: Organize our elements into groups
        // Think of this like sorting our toys into different boxes
        const fadeElements = [
            ...document.querySelectorAll('.home-shoutouts_top-illustration'),
            ...document.querySelectorAll('.home-work_top-illustration'),
            ...document.querySelectorAll('.home-services_top-illustration'),
            ...document.querySelectorAll('.container-small')
        ];
        
        const normalElements = [
            ...document.querySelectorAll('.home_capbility-specific')
        ];

        const fastElements = [
            ...document.querySelectorAll('.home-works_wrapper-container'),
            ...document.querySelectorAll('.home-works_wrapper-accordion'),
            ...document.querySelectorAll('.customer-testimonal--1'),
            ...document.querySelectorAll('.cta-box')
        ];
        
        // Put all our animated elements together
        const allAnimatedElements = [...normalElements, ...fastElements];

        // PART 3: Set up how everything should start
        // Like putting all our dancers in their starting positions
        function setInitialStates() {
            // Make fade elements start invisible
            fadeElements.forEach(element => {
                gsap.set(element, { opacity: 0 });
            });

            // Set up elements that will slide up
            allAnimatedElements.forEach(element => {
                gsap.set(element, {
                    y: 25,  // Start a bit below their final position
                    opacity: 0
                });

                // Special setup for accordion elements
                if (element.classList.contains('home-works_wrapper-accordion')) {
                    const accordionChildren = element.querySelectorAll('[data-w-id*="4339224"]');
                    gsap.set(accordionChildren, {
                        y: 15,
                        opacity: 0
                    });
                }
            });
        }

        // PART 4: The main animation magic
        // This makes everything come to life!
        function animateElements() {
            // Check if we're on a mobile device
            const isMobile = window.matchMedia("(max-width: 767px)").matches;
            
            // Handle fade-in animations
            fadeElements.forEach((element, index) => {
                const rect = element.getBoundingClientRect();
                const triggerPoint = isMobile ? window.innerHeight * 0.55 : window.innerHeight * 0.95;
                
                if (rect.top <= triggerPoint) {
                    gsap.to(element, {
                        opacity: 1,
                        duration: 0.5,
                        delay: isMobile ? 0 : index * 0.02,
                        ease: "power1.out"
                    });
                }
            });

            // Handle slide-up animations
            allAnimatedElements.forEach((element, index) => {
                const rect = element.getBoundingClientRect();
                const isInView = element.classList.contains('home-works_wrapper-accordion') || 
                                element.classList.contains('cta-box')
                                ? rect.top <= window.innerHeight * .95
                                : rect.top <= window.innerHeight * .9;
                
                if (isInView) {
                    const isFastElement = fastElements.includes(element);
                    
                    gsap.to(element, {
                        y: 0,
                        opacity: 1,
                        duration: isFastElement ? 0.15 : 0.3,
                        delay: (isMobile ? 0 : index * 0.02) + 0.5,
                        ease: "power2.out",
                        onComplete: () => {
                            if (element.classList.contains('home-works_wrapper-accordion')) {
                                const accordionChildren = element.querySelectorAll('[data-w-id*="4339224"]');
                                gsap.to([...accordionChildren], {
                                    y: 0,
                                    opacity: 1,
                                    duration: 0.15,
                                    stagger: isMobile ? 0 : 0.03,
                                    ease: "power2.out"
                                });
                            }
                        }
                    });
                }
            });
        }

        // PART 5: Start everything up!
        function initialize() {
            console.log('Starting up all our animations!');
            const scrollWrapper = document.querySelector('.section-scrolling-wrapper');
            
            initializeScrollColors();
            setInitialStates();
            
            // Watch for scrolling and window size changes
            scrollWrapper?.addEventListener('scroll', animateElements);
            window.addEventListener('resize', animateElements);
            
            // Start our first animation
            animateElements();
        }

        // Give everything a moment to get ready
        setTimeout(initialize, 100);
    }

    // Start everything!
    initializeAnimations();
});



