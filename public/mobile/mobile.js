// Welcome Overlay
document.addEventListener('DOMContentLoaded', function() {
    const welcomeOverlay = document.getElementById('welcomeOverlay');
    const continueMobileButton = document.getElementById('continueMobileButton');
    const body = document.body;

    // Check if user has already dismissed the overlay (using sessionStorage)
    const hasSeenWelcome = sessionStorage.getItem('fullhouse-welcome-dismissed');

    if (hasSeenWelcome) {
        // Hide overlay immediately if already seen
        if (welcomeOverlay) {
            welcomeOverlay.classList.add('hidden');
            body.classList.remove('overlay-active');
        }
    } else {
        // Show overlay and prevent body scroll
        if (welcomeOverlay) {
            body.classList.add('overlay-active');
        }
    }

    // Handle continue to mobile button
    if (continueMobileButton) {
        continueMobileButton.addEventListener('click', function() {
            if (welcomeOverlay) {
                welcomeOverlay.classList.add('hidden');
                body.classList.remove('overlay-active');
                // Remember that user dismissed the overlay for this session
                sessionStorage.setItem('fullhouse-welcome-dismissed', 'true');
            }
        });
    }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on button click
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking on a nav link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (menuToggle && navMenu) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu && navMenu.contains(event.target);
        const isClickOnToggle = menuToggle && menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle && navMenu && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Footer Impressum/Datenschutz Toggle
    const impressumButton = document.getElementById('impressumButton');
    const datenschutzButton = document.getElementById('datenschutzButton');
    const impressumSection = document.getElementById('impressumSection');
    const datenschutzSection = document.getElementById('datenschutzSection');

    function toggleSection(button, section, otherSection) {
        if (button && section) {
            button.addEventListener('click', function() {
                const isActive = section.classList.contains('active');
                
                // Close other section
                if (otherSection) {
                    otherSection.classList.remove('active');
                }
                
                // Toggle current section
                if (isActive) {
                    section.classList.remove('active');
                } else {
                    section.classList.add('active');
                    // Scroll to section
                    setTimeout(function() {
                        section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 100);
                }
            });
        }
    }

    toggleSection(impressumButton, impressumSection, datenschutzSection);
    toggleSection(datenschutzButton, datenschutzSection, impressumSection);
});

