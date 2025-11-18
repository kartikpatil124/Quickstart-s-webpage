document.addEventListener('DOMContentLoaded', function () {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    // Smooth scrolling (fixed — no error for "#")
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if href is "#" or empty — prevents the JS error
            if (!href || href === "#") return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Feature tabs functionality
    const featureTabs = document.querySelectorAll('.feature-tab');
    const featureImages = document.querySelectorAll('.feature-image');
    if (featureTabs.length && featureImages.length) {
        featureTabs.forEach((tab, index) => {
            tab.addEventListener('click', function () {
                featureTabs.forEach(t => t.classList.remove('active'));
                featureImages.forEach(img => img.classList.remove('active'));

                this.classList.add('active');
                featureImages[index].classList.add('active');
            });
        });
    }

    // Scroll animation trigger
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, delay * 1000);
            }
        });
    },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        }
    );
    animateElements.forEach(el => observer.observe(el));

    // Floating animation for hero image
    const heroImage = document.querySelector('.floating-animation');
    if (heroImage) {
        gsap.to(heroImage, {
            y: 15,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
});
