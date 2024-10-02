function menuHome() {
    document.querySelector('.dropdown-about').classList.remove('dropdown-active');
    document.querySelector('.dropdown-team').classList.remove('dropdown-active');
    document.querySelector('.dropdown-home').classList.add('dropdown-active');
    document.querySelector('.menu-btn-about').classList.remove('btn-active');
    document.querySelector('.menu-btn-team').classList.remove('btn-active');
    document.querySelector('.menu-btn-home').classList.add('btn-active');
}

function menuAbout() {
    document.querySelector('.dropdown-home').classList.remove('dropdown-active');
    document.querySelector('.dropdown-team').classList.remove('dropdown-active');
    document.querySelector('.dropdown-about').classList.add('dropdown-active');
    document.querySelector('.menu-btn-home').classList.remove('btn-active');
    document.querySelector('.menu-btn-team').classList.remove('btn-active');
    document.querySelector('.menu-btn-about').classList.add('btn-active');
}

function menuTeam() {
    document.querySelector('.dropdown-home').classList.remove('dropdown-active');
    document.querySelector('.dropdown-about').classList.remove('dropdown-active');
    document.querySelector('.dropdown-team').classList.add('dropdown-active');
    document.querySelector('.menu-btn-home').classList.remove('btn-active');
    document.querySelector('.menu-btn-about').classList.remove('btn-active');
    document.querySelector('.menu-btn-team').classList.add('btn-active');
}

function selectPage1() {
    document.getElementById('feedback-slide2').classList.remove('item-active');
    document.getElementById('feedback-slide1').classList.add('item-active');
    document.getElementById('pagination2').classList.remove('active-dot');
    document.getElementById('pagination1').classList.add('active-dot');
}

function selectPage2() {
    document.getElementById('feedback-slide1').classList.remove('item-active');
    document.getElementById('feedback-slide2').classList.add('item-active');
    document.getElementById('pagination1').classList.remove('active-dot');
    document.getElementById('pagination2').classList.add('active-dot');
}

let currentSlide = 0;

function prevSlide() {
    if (currentSlide === 0) {
        selectPage2();
        currentSlide = 1;
    } else {
        selectPage1();
        currentSlide = 0;
    }
}

function nextSlide() {
    prevSlide();
}

let accordion1Toggle = false;
let accordion2Toggle = false;
let accordion3Toggle = false;

function toggleAnswer1() {
    const answer1 = document.getElementById('answer1');
    if (!accordion1Toggle) {
        answer1.style.display = 'block';
        accordion1Toggle = true;
    } else {
        answer1.style.display = 'none';
        accordion1Toggle = false;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var tabButtons = document.querySelectorAll('.pricing-tab-button');
    var tabPanes = document.querySelectorAll('.tab-content');

    tabButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            tabButtons.forEach(function (btn) {
                btn.classList.remove('active-tab');
            });
            tabPanes.forEach(function (pane) {
                pane.classList.remove('active-content');
            });

            this.classList.add('active-tab');
            tabPanes[index].classList.add('active-content');
        });
    });
});

var modal = document.getElementById("customModal");

var closeModalButton = document.getElementsByClassName("close-button")[0];

window.onload = function () {
    setTimeout(function () {
        modal.style.display = "block";
    }, 3000);
};

closeModalButton.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

let faqLink = document.querySelector(".faq-link");
let faqSection = document.querySelector(".faq-section");

let observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                faqLink.classList.add("show");
            } else {
                faqLink.classList.remove("show");
            }
        });
    },
    {
        threshold: 0.1,
    }
);

observer.observe(faqSection);
