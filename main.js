document.addEventListener('DOMContentLoaded', () => {
    console.log('TriWow Website Loaded');

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        console.log('Menu elements found');
        menuToggle.addEventListener('click', () => {
            console.log('Menu toggled');
            navLinks.classList.toggle('active');
        });
    } else {
        console.error('Menu elements NOT found');
    }

    // Smooth Scroll for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close menu on click (mobile)
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
});
