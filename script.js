const navigations = document.getElementById('navigations');
const hamburgers = document.querySelectorAll('.hamburger');


const toggleMenu = () => {
    const isOpen = navigations.style.left === '0px';

    if (isOpen) {
        navigations.style.left = '-300%';
        document.body.classList.remove('overflow-hidden');
    } else {I want you to design a perfect about page for this and use tailwind classes cdn
    
        navigations.style.left = '0';
        document.body.classList.add('overflow-hidden');
    }
};

hamburgers.forEach(btn => btn.addEventListener('click', toggleMenu));

const slidesContainer = document.getElementById('slides');
const dots = document.querySelectorAll('.carousel-dot');
let currentIndex = 0;

function showSlide(index) {
    currentIndex = index;
    // slide the container
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;

    // update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('bg-white', i === index);
        dot.classList.toggle('bg-white/40', i !== index);
        dot.classList.toggle('scale-125', i === index);
    });
}

// dot click
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        showSlide(Number(dot.dataset.index));
    });
});

// Optional: auto-slide every 5s
setInterval(() => {
    const next = (currentIndex + 1) % dots.length;
    showSlide(next);
}, 5000);