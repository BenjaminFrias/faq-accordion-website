const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(acc => {
    acc.addEventListener('click', () => {
        acc.classList.toggle('active');
    });
});