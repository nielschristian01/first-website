const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    //Animate Links
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0,5s ease forwards ${index / 7 + 1.5}s`;
    });
}

navSlide();

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
    // window.scrollTo(0, 0);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

