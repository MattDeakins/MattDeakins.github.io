// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if(window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
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
            if(i === index) {
                slide.classList.add('active');
            }
        });
    }

    showSlide(currentSlide);

    prev.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    next.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

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