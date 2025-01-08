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
});