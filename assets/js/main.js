const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } 
    else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  })
}
window.addEventListener('scroll', scrollActive);

// Swiper JS
const swiper = new Swiper('.projects__container', {
    // Optional parameters
    cssMode: true,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal('.home__data, .home__button');
sr.reveal('.home__handle', {delay: 700});
sr.reveal('.home__social, .home__scroll', {delay: 900, origin: 'bottom'});
sr.reveal('.about');

// Smooth Scroll Browser Compatible
let scroll = new SmoothScroll('a[href*="#"]');