const burger = document.querySelector('.burger--js');
console.log(burger);

burger.addEventListener('click', (e) => {
    const hamburger = document.querySelector('.about__links-section-flex--js');
    hamburger.classList.toggle('about__links-section-flex--visible');
})