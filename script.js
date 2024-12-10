// Scroll suave al hacer clic en los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Funcionalidad del carrusel
document.querySelectorAll('.carrusel').forEach(carrusel => {
    const slides = carrusel.querySelector('.slides');
    const prevButton = carrusel.querySelector('.prev');
    const nextButton = carrusel.querySelector('.next');
    let index = 0;

    const updateCarousel = () => {
        const slideWidth = slides.clientWidth;
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
    };

    nextButton.addEventListener('click', () => {
        if (index < slides.children.length - 1) {
            index++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    
});
