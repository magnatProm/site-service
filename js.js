let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slider__item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
// / slides



// button menu
const menu_list = document.querySelector('.menu__list');
document.querySelector('.menu__btn-menu').addEventListener('click', () => {
    menu_list.style.display = (menu_list.style.display == "grid") ? "none" : "grid";

    function int() {
        let widthWrapper = document.querySelector('.wrapper').offsetWidth;

        if (widthWrapper > 700 && menu_list.style.display == "none") {
            menu_list.style.display = "grid";
        }
    }

    window.addEventListener('resize', int);
    int();
})
// / button menu



// button menu-service
const menu_1 = document.querySelector('.list');
document.querySelector('.menu__btn-service').addEventListener('click', () => {
    menu_1.style.display = (menu_1.style.display == "grid") ? "none" : "grid";

    function int() {
        let widthWrapper = document.querySelector('.wrapper').offsetWidth;

        if (widthWrapper > 700 && menu_1.style.display == "none") {
            menu_1.style.display = "grid";
        }
    }

    window.addEventListener('resize', int);
    int();
})
// / button menu-service



// tab
window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.menu__items'),
        tabsContent = document.querySelectorAll('.main__body'),
        tabsParent = document.querySelector('.menu__list');

    function hideTabContent() {
        tabsContent.forEach((item, i) => {
            tabs[i].classList.remove('menu__items_active');
            item.style.display = 'none';
        })
    }

    function showTabContent(i = 0) {
        tabsContent.forEach(item => {
            tabsContent[i].style.display = 'grid';
            tabs[i].classList.add('menu__items_active');
        })
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target.closest('.menu__items')) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })
})
// / tab



// incon
document.querySelector('.icon__plus').onclick = function () {
    let i = 0;
    while (i < 3) {
        document.querySelector('.footer__socials').insertAdjacentHTML("afterbegin", `<div class="footer__icon">`);
        i++;
    }
}
// / incon