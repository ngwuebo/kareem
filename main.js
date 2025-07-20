// Hero image slider (loop all images in the project with smooth fade)
document.addEventListener('DOMContentLoaded', function() {
    const sliderImg = document.getElementById('hero-slider-img');
    if (!sliderImg) return;

    // Restore to default: just show the hero image, no animation, no swipe
sliderImg.src = 'https://bullionriseconsult.com/wp-content/uploads/2024/04/3-bedroom-bungalow-nigeria-scaled.webp';
// Remove all swipe/animation logic for service card images
// Remove all swipe/animation logic for service card images
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
