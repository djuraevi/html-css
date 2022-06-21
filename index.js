const header = document.querySelector('.header');
const memu = document.querySelector('.menu');

header.addEventListener('click', ({target}) => {
    if(!target.classList.contains('header__menu')) {
        return;
    }
    memu.classList.toggle('menu__active');
});