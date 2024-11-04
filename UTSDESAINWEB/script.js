// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Back-to-Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerText = "↑ Top";
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Fade-In Effect on Hero Section
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.hero').classList.add('fade-in');
});

// Lightbox for Featured Products Images
document.querySelectorAll('.item img').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('lightbox');
        const imgClone = img.cloneNode();
        overlay.appendChild(imgClone);
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', () => {
            overlay.remove();
        });
    });
});
