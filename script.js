document.addEventListener('DOMContentLoaded', () => {
    // Expandable Sections
    const sections = document.querySelectorAll('section > h2');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            const subSegment = section.nextElementSibling;
            const arrow = section.querySelector('.arrow');
            subSegment.style.display = subSegment.style.display === 'block' ? 'none' : 'block';
            arrow.style.transform = subSegment.style.display === 'block' ? 'rotate(90deg)' : 'rotate(0deg)';
        });
    });

    // Lightbox for Image Gallery
    let currentImageIndex;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const images = document.querySelectorAll('.image-gallery img');
    const closeBtn = document.querySelector('.lightbox .close');
    const prevBtn = document.querySelector('.lightbox .prev');
    const nextBtn = document.querySelector('.lightbox .next');

    function showImage(index) {
        currentImageIndex = index;
        lightboxImg.src = images[index].src;
        lightbox.style.display = 'flex';
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => showImage(index));
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });

    window.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
