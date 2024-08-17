document.addEventListener('DOMContentLoaded', () => {
    // Expandable sections
    const sections = document.querySelectorAll('section > h2');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            const subSegment = section.nextElementSibling;
            subSegment.style.display = subSegment.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Clickable images to expand
    const images = document.querySelectorAll('.sub-segment img');
    images.forEach(image => {
        image.addEventListener('click', () => {
            if (image.classList.contains('expanded')) {
                image.classList.remove('expanded');
            } else {
                images.forEach(img => img.classList.remove('expanded'));
                image.classList.add('expanded');
            }
        });
    });
});
