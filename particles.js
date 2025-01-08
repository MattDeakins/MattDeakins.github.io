particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: { enable: true, value_area: 800 },
        },
        color: { value: "#fcdc4d" },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
            random: true,
        },
        size: {
            value: 4,
            random: true,
        },
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            speed: 2,
            random: true,
            direction: "none",
            out_mode: "out",
        },
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
        },
    },
    retina_detect: true,
});