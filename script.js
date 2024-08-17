// document.addEventListener('DOMContentLoaded', () => {
//     // Expandable Sections
//     const sections = document.querySelectorAll('section > h2');
//     sections.forEach(section => {
//         section.addEventListener('click', () => {
//             const subSegment = section.nextElementSibling;
//             const arrow = section.querySelector('.arrow');
//             subSegment.style.display = subSegment.style.display === 'block' ? 'none' : 'block';
//             arrow.style.transform = subSegment.style.display === 'block' ? 'rotate(90deg)' : 'rotate(0deg)';
//         });
//     });
//     // const sections = document.querySelectorAll('section > h2');
//     // sections.forEach(section => {
//     //     section.addEventListener('click', () => {
//     //         const subSegment = section.nextElementSibling;
//     //         const arrow = section.querySelector('.arrow');
//     //         const isVisible = subSegment.style.display === 'block';
//     //         subSegment.style.display = isVisible ? 'none' : 'block';
//     //         arrow.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(90deg)';
//     //     });
//     // });


//     // Lightbox for Image Gallery
//     let currentImageIndex;
//     const lightbox = document.getElementById('lightbox');
//     const lightboxImg = document.getElementById('lightbox-img');
//     const images = document.querySelectorAll('.image-gallery img');
//     const closeBtn = document.querySelector('.lightbox .close');
//     const prevBtn = document.querySelector('.lightbox .prev');
//     const nextBtn = document.querySelector('.lightbox .next');

//     function showImage(index) {
//         currentImageIndex = index;
//         lightboxImg.src = images[index].src;
//         lightbox.style.display = 'flex';
//     }

//     images.forEach((img, index) => {
//         img.addEventListener('click', () => showImage(index));
//     });

//     closeBtn.addEventListener('click', () => {
//         lightbox.style.display = 'none';
//     });

//     prevBtn.addEventListener('click', () => {
//         currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//         showImage(currentImageIndex);
//     });

//     nextBtn.addEventListener('click', () => {
//         currentImageIndex = (currentImageIndex + 1) % images.length;
//         showImage(currentImageIndex);
//     });

//     window.addEventListener('click', (e) => {
//         if (e.target === lightbox) {
//             lightbox.style.display = 'none';
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    // Expandable Sections
    const sections = document.querySelectorAll('section > h2');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            const subSegments = section.parentElement.querySelectorAll('.sub-segment');
            const arrow = section.querySelector('.arrow');
            
            // Toggle each sub-segment
            subSegments.forEach(subSegment => {
                const isVisible = subSegment.style.display === 'block';
                subSegment.style.display = isVisible ? 'none' : 'block';
            });

            // Toggle arrow direction
            const firstSubSegment = subSegments[0];
            if (firstSubSegment.style.display === 'block') {
                arrow.style.transform = 'rotate(90deg)';
            } else {
                arrow.style.transform = 'rotate(0deg)';
            }
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

    window.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                // Left arrow key for previous image
                currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                showImage(currentImageIndex);
            } else if (e.key === 'ArrowRight') {
                // Right arrow key for next image
                currentImageIndex = (currentImageIndex + 1) % images.length;
                showImage(currentImageIndex);
            } else if (e.key === 'Escape') {
                // Escape key to close the lightbox
                lightbox.style.display = 'none';
            }
        }
    });
});