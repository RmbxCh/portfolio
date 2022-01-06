const hamburger = document.querySelector('.l-main-nav-ham');
const menu = document.querySelector('.l-main-nav');
const lienNav = document.querySelectorAll('.l-main-nav a');
const breakpoint = 1024;

const toggleShow = document.querySelector('.toggleShow');
const showContent = document.querySelector('.m-about-description-more');
const toggleShowIcon = document.querySelector('.fa-plus-square');

const imgParallax = document.querySelector('.m-about-picture');


function gestionMenu(){
    hamburger.classList.toggle('active');
    menu.classList.toggle('active-menu');
}

/* Gestion du menu responsive */

hamburger.addEventListener('click', gestionMenu);

for (const element of lienNav) {
    element.addEventListener('click', () => {
        if(window.innerWidth < breakpoint){
            gestionMenu();
        }
    });
}

/* Gestion du toggle voir-plus */
toggleShow.addEventListener('click', () => {
    if(showContent.style.display == 'none'){
        showContent.style.display = 'block';
        toggleShowIcon.className = 'far fa-minus-square';
    }else{
        showContent.style.display = 'none';
        toggleShowIcon.className = 'far fa-plus-square';
    }
});

/* Gestion de l'effet "parallax" pour photo about */
imgParallax.addEventListener('mousemove', (e) =>{
    let mouseX = (window.innerWidth - e.pageX) / 50;
    let mouseY = (window.innerHeight - e.pageY) / 50;

    imgParallax.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});