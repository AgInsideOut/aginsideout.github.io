// Stworzenie tablicy ścieżek do obrazów
const imagePaths = [];

for (let i = 1; i <= 23; i++) {
    imagePaths.push(`./images/image${i}.jpg`);
}

// Znalezienie elementów w DOM
const carousel = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

// Funkcja obsługująca poprzedni slajd
function prevSlide() {
    // Pobierz wszystkie slajdy
    const slides = document.querySelectorAll('.carousel-slide');

    // Ukryj aktualny slajd
    slides[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
    // Wyświetl nowy slajd
    slides[currentIndex].classList.remove('hidden');
}

// Funkcja obsługująca następny slajd
function nextSlide() {
    // Pobierz wszystkie slajdy
    const slides = document.querySelectorAll('.carousel-slide');

    // Ukryj aktualny slajd
    slides[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex + 1) % imagePaths.length;
    // Wyświetl nowy slajd
    slides[currentIndex].classList.remove('hidden');
}

// Dodanie obsługi kliknięć przycisków
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Dodanie obrazów do karuzeli
imagePaths.forEach((path) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide hidden'; // Dodaj klasę 'hidden' na początku
    const img = document.createElement('img');
    img.src = path;
    img.alt = 'Image';
    slide.appendChild(img);
    carousel.appendChild(slide);
});

// Wyświetlenie pierwszego slajdu
document.querySelector('.carousel-slide').classList.remove('hidden');