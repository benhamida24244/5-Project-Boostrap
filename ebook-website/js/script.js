
function useScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll' , () => {
    if (window.scrollY) {
        navbar.classList.add('navbar-dark');
        navbar.classList.remove('navbar-sticky');
        navbar.classList.add('bg-dark');
    }
    else {
        navbar.classList.remove('navbar-dark');
        navbar.classList.remove('navbar-sticky');
        navbar.classList.remove('bg-dark');
    }
    });    
}

document.addEventListener('DOMContentLoaded',useScroll);