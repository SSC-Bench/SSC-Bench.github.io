// SSC-Bench Interactive Script
// Smooth scrolling, nav highlight, and subtle animations

(function() {
    'use strict';

    // ========== Smooth Scroll for Nav Links ==========
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========== Active Nav Link Highlighting ==========
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navHeight = document.querySelector('.nav').offsetHeight;
        const scrollPosition = window.scrollY + navHeight + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ========== Nav Shadow on Scroll ==========
    function handleNavScroll() {
        const nav = document.querySelector('.nav');
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    }

    // ========== Scroll Event Listener ==========
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        handleNavScroll();

        // Debounce active link update
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveNavLink, 50);
    });

    // ========== Intersection Observer for Fade-In Animations ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.stat-card, .path-card, .finding-card, .download-card, .feature-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ========== External Link Warning (Optional) ==========
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        // Add rel attributes for security
        link.setAttribute('rel', 'noopener noreferrer');

        // Optional: Add visual indicator
        if (!link.querySelector('.btn-icon')) {
            link.style.position = 'relative';
        }
    });

    // ========== Initialize ==========
    document.addEventListener('DOMContentLoaded', function() {
        updateActiveNavLink();
        handleNavScroll();

        // Add loading complete class
        document.body.classList.add('loaded');
    });

    // ========== Placeholder Image Handler ==========
    const figureImage = document.querySelector('.figure-image');
    if (figureImage && !figureImage.complete) {
        figureImage.addEventListener('error', function() {
            // Create placeholder content
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 100%;
                height: 400px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
                border-radius: 16px;
                color: #9ca3af;
                font-size: 1.1rem;
                font-weight: 600;
            `;
            placeholder.textContent = 'Framework Overview Figure (assets/fig_overview.png)';

            this.parentNode.replaceChild(placeholder, this);
        });
    }

})();