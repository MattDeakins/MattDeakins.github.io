document.addEventListener('DOMContentLoaded', function () {
    // Navbar functionality
    const navbar = document.getElementById('navbar');
    const approachSection = document.getElementById('approach');

    window.addEventListener('scroll', function () {
        const approachPosition = approachSection.getBoundingClientRect();
        if (approachPosition.top <= 50) {
            navbar.classList.remove('hidden');
        } else {
            navbar.classList.add('hidden');
        }
    });

    // Cookie banner functionality
    const cookieBanner = document.getElementById('cookie-banner');

    const cookiesAccepted = document.cookie.split('; ').find(row => row.startsWith('cookies_accepted='));
    if (!cookiesAccepted) {
        cookieBanner.classList.remove('hidden');
    }

    // Accept cookies
    document.getElementById('accept-cookies').addEventListener('click', function () {
        document.cookie = "cookies_accepted=true; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        // Enable PostHog tracking
        posthog.opt_in_capturing();
        cookieBanner.classList.add('hidden');
    });

    // Reject cookies
    document.getElementById('reject-cookies').addEventListener('click', function () {
        document.cookie = "cookies_accepted=false; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        // Disable PostHog tracking
        posthog.opt_out_capturing();
        cookieBanner.classList.add('hidden');
    });

    // Carousel functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    prev.addEventListener('click', () => {
        prevSlide();
        resetAutoScroll();
    });

    next.addEventListener('click', () => {
        nextSlide();
        resetAutoScroll();
    });

    // Auto-scroll functionality
    let autoScrollInterval = setInterval(nextSlide, 8000); // Change 5000 to desired interval in milliseconds

    // Function to reset auto-scroll interval
    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(nextSlide, 8000);
    }

    // Initialize EmailJS
    emailjs.init("yr7wJ6hm-JtFhDcO_"); // Replace with your actual Public Key

    // Contact form submission using EmailJS
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();

        // Generate a five-digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;

        // Send the form data using EmailJS
        emailjs.sendForm('service_lmzpdec', 'template_2f5k0hh', this)
            .then(() => {
                alert('Thank you for your message!');
                this.reset();
            }, (error) => {
                alert('Oops! Something went wrong. Please try again.');
                console.log('FAILED EMAIL...', error);
            });
    });

});

// Initialize Particles.js
    particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#fcdc4d" },
        shape: { type: "circle" },
        opacity: {
            value: 0.8,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.5, sync: false },
        },
        size: {
            value: 5,
            random: true,
            anim: { enable: true, speed: 3, size_min: 1, sync: false },
        },
        line_linked: { enable: false },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: false }, onclick: { enable: false } },
    },
    retina_detect: true,
});