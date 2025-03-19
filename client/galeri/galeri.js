let currentIndex1 = 0;

function updateOpacity(slider) {
    let slides = slider.children;
    for (let i = 0; i < slides.length; i++) {
        let opacity = i === currentIndex1 ? 1 : 0.5;
        let brightness = i === currentIndex1 ? 1 : 0.7;
        slides[i].style.opacity = opacity;
        slides[i].style.filter = `brightness(${brightness})`;
    }
}

function prevSlide(album) {
    let slider = document.getElementById(`slider${album}`);
    let total = slider.children.length;

    currentIndex1 = (currentIndex1 - 1 + total) % total;
    slider.style.transform = `translateX(-${currentIndex1 * 100}%)`;

    updateOpacity(slider);
}

function nextSlide(album) {
    let slider = document.getElementById(`slider${album}`);
    let total = slider.children.length;

    currentIndex1 = (currentIndex1 + 1) % total;
    slider.style.transform = `translateX(-${currentIndex1 * 100}%)`;

    updateOpacity(slider);
}

// Inisialisasi awal efek transparan
document.addEventListener("DOMContentLoaded", () => {
    let slider = document.getElementById("slider1");
    updateOpacity(slider);
});
