const positionYElement = document.querySelector('.headerArrow');
const  positionY = positionYElement.getBoundingClientRect();

window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navbar');

    if(window.scrollY > positionY.top) {
        navbar.classList.remove('navbar-hide');
    }else {
        navbar.classList.add('navbar-hide');
    }
});