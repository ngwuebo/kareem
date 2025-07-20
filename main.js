// Hero image slider (loop all images in the project with smooth fade)
document.addEventListener('DOMContentLoaded', function() {
    const sliderImg = document.getElementById('hero-slider-img');
    if (!sliderImg) return;

    // Restore to default: just show the hero image, no animation, no swipe
    sliderImg.src = 'https://bullionriseconsult.com/wp-content/uploads/2024/04/3-bedroom-bungalow-nigeria-scaled.webp';
// Read More section image slider (fade swipe left to right)
// Read More section image slider (swipe left/right)
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('#services .card');
    const readMoreImages = [
        'https://bullionriseconsult.com/wp-content/uploads/2024/10/interior-designs-nigeria-bullionrise-consult1-1024x569.jpg',
        'https://bullionriseconsult.com/wp-content/uploads/2024/04/building-construction-nigeria-bullionrise-1024x569.webp',
        'https://bullionriseconsult.com/wp-content/uploads/2024/10/5-bedroom-duplex-house-plan-nigeria-psn00022ba-bullionrise-consult-2-1024x569.jpg',
    ];
    serviceCards.forEach((card, idx) => {
        const img = card.querySelector('img');
        if (!img) return;
        let current = idx % readMoreImages.length;
        img.src = readMoreImages[current];
        let startX = null;
        // Touch events
        img.style.position = 'relative';
        img.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
        });
        img.addEventListener('touchend', function(e) {
            if (startX === null) return;
            let endX = e.changedTouches[0].clientX;
            let direction = 0;
            if (endX - startX > 50) direction = -1;
            else if (startX - endX > 50) direction = 1;
            if (direction !== 0) {
                let next = (current + direction + readMoreImages.length) % readMoreImages.length;
                const newImg = img.cloneNode();
                newImg.src = readMoreImages[next];
                newImg.style.position = 'absolute';
                newImg.style.left = direction > 0 ? '100%' : '-100%';
                newImg.style.top = img.offsetTop + 'px';
                newImg.style.width = img.offsetWidth + 'px';
                newImg.style.height = img.offsetHeight + 'px';
                newImg.style.transition = 'left 0.4s cubic-bezier(0.4,0,0.2,1)';
                newImg.style.zIndex = 2;
                img.parentNode.style.position = 'relative';
                img.parentNode.appendChild(newImg);
                img.style.transition = 'left 0.4s cubic-bezier(0.4,0,0.2,1)';
                img.style.position = 'absolute';
                img.style.left = '0';
                img.style.zIndex = 1;
                setTimeout(() => {
                    newImg.style.left = '0';
                    img.style.left = direction > 0 ? '-100%' : '100%';
                }, 10);
                setTimeout(() => {
                    img.src = readMoreImages[next];
                    img.style.transition = 'none';
                    img.style.position = '';
                    img.style.left = '';
                    img.style.zIndex = '';
                    newImg.remove();
                    current = next;
                }, 420);
            }
            startX = null;
        });
        // Mouse drag events
        let mouseDown = false, mouseStartX = null;
        img.addEventListener('mousedown', function(e) {
            mouseDown = true;
            mouseStartX = e.clientX;
        });
        img.addEventListener('mouseup', function(e) {
            if (!mouseDown) return;
            let mouseEndX = e.clientX;
            let direction = 0;
            if (mouseEndX - mouseStartX > 50) direction = -1;
            else if (mouseStartX - mouseEndX > 50) direction = 1;
            if (direction !== 0) {
                let next = (current + direction + readMoreImages.length) % readMoreImages.length;
                const newImg = img.cloneNode();
                newImg.src = readMoreImages[next];
                newImg.style.position = 'absolute';
                newImg.style.left = direction > 0 ? '100%' : '-100%';
                newImg.style.top = img.offsetTop + 'px';
                newImg.style.width = img.offsetWidth + 'px';
                newImg.style.height = img.offsetHeight + 'px';
                newImg.style.transition = 'left 0.4s cubic-bezier(0.4,0,0.2,1)';
                newImg.style.zIndex = 2;
                img.parentNode.style.position = 'relative';
                img.parentNode.appendChild(newImg);
                img.style.transition = 'left 0.4s cubic-bezier(0.4,0,0.2,1)';
                img.style.position = 'absolute';
                img.style.left = '0';
                img.style.zIndex = 1;
                setTimeout(() => {
                    newImg.style.left = '0';
                    img.style.left = direction > 0 ? '-100%' : '100%';
                }, 10);
                setTimeout(() => {
                    img.src = readMoreImages[next];
                    img.style.transition = 'none';
                    img.style.position = '';
                    img.style.left = '';
                    img.style.zIndex = '';
                    newImg.remove();
                    current = next;
                }, 420);
            }
            mouseDown = false;
        });
        img.addEventListener('mouseleave', function() { mouseDown = false; });
    });
});
});
// Main JS for Bullionrise Consult Clone
// Add interactivity as needed

document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
