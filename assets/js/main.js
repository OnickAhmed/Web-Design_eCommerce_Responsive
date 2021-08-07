/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId)=>{
    const toggleMenu = document.getElementById(toggleId),
    navMenu = document.getElementById(navId);

    if(toggleMenu && navMenu){
        toggleMenu.addEventListener('click', ()=>{
            navMenu.classList.toggle('showMenu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav_link'),
navMenu = document.getElementById('nav-menu');

function linkAction() {
    navMenu.classList.remove('showMenu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id')
window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*='+ sectionId + ']').classList.add('active');
        }
        else{
            document.querySelector('.nav_menu a[href*='+ sectionId + ']').classList.remove('active');
        }
    })
}

/*===== CHANGE COLOR HEADER =====*/ 
window.onscroll = () => {
    const nav = document.getElementById('header');
    (this.scrollY >= 200) ? 
    nav.classList.add('scroll-Header') :
    nav.classList.remove('scroll-Header')
}