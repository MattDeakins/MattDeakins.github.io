// script.js

document.addEventListener('DOMContentLoaded', function() {
    let sections = document.querySelectorAll('section');

    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function checkAnimation() {
        sections.forEach(function(section) {
            if (isElementInViewport(section)) {
                section.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkAnimation);
    checkAnimation();
});