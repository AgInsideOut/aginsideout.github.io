// Image path table
const imagePaths = [];

for (let i = 1; i <= 18; i++) {
    imagePaths.push(`./images/image${i}.jpg`);
}

// Finding elements in the DOM
const carousel = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

// Previous slide function
function prevSlide() {
    // Download all slides
    const slides = document.querySelectorAll('.carousel-slide');

    // Hide current slide
    slides[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
    // View new slide
    slides[currentIndex].classList.remove('hidden');
}

// Next slide function
function nextSlide() {
    // Download all slides
    const slides = document.querySelectorAll('.carousel-slide');

    // Hide current slide
    slides[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex + 1) % imagePaths.length;
    // View new slide
    slides[currentIndex].classList.remove('hidden');
}

// Adding support for button clicks
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Adding images to the carousel
imagePaths.forEach((path) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide hidden';
    const img = document.createElement('img');
    img.src = path;
    img.alt = 'Image';
    slide.appendChild(img);
    carousel.appendChild(slide);
});

// Displaying the first slide
document.querySelector('.carousel-slide').classList.remove('hidden');