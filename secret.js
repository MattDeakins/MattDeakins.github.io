document.addEventListener('DOMContentLoaded', function () {
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