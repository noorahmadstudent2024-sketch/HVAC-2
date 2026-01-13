// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
    if (!isClickInsideNav && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });

            // Close mobile menu after clicking
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Add scroll event listener for navbar shadow effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Image Click-to-Zoom Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close-btn');
const zoomableImages = document.querySelectorAll('.zoomable-image');

// Open lightbox when zoomable image is clicked
zoomableImages.forEach(img => {
    img.addEventListener('click', function(e) {
        e.stopPropagation();
        const imgSrc = this.src;
        const imgAlt = this.alt;

        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = imgAlt;
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
});

// Close lightbox with close button
closeBtn.addEventListener('click', function() {
    lightbox.classList.remove('show');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close lightbox when clicking on the background
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('show')) {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
});

// Prevent lightbox image click from closing the lightbox
lightboxImg.addEventListener('click', function(e) {
    e.stopPropagation();
});