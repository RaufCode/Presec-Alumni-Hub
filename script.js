const navigations = document.querySelector('#navigations');
const togglers = document.querySelectorAll('.toggler');

const toggleMenu = () => {
    const isOpen = navigations.style.left === '0px';

    if (isOpen) {
        navigations.style.left = '-200%';
        document.body.classList.remove('overflow-hidden');
    } else {
        navigations.style.left = '0';
        document.body.classList.add('overflow-hidden');
    }
};

togglers.forEach(btn => btn.addEventListener('click', toggleMenu));
