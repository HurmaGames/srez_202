function menu1(){
    document.querySelector('.vklad-menu2').classList.remove('vklad-menu--active');
    document.querySelector('.vklad-menu3').classList.remove('vklad-menu--active');
    document.querySelector('.vklad-menu1').classList.add('vklad-menu--active');
    document.querySelector('.vklad-menu-btn2').classList.remove('vklad-menu-btn--active');
    document.querySelector('.vklad-menu-btn3').classList.remove('vklad-menu-btn--active');
    document.querySelector('.vklad-menu-btn1').classList.add('vklad-menu-btn--active')
}
function menu2(){
    document.querySelector('.vklad-menu1').classList.remove('vklad-menu--active');
    document.querySelector('.vklad-menu3').classList.remove('vklad-menu--active');
    document.querySelector('.vklad-menu2').classList.add('vklad-menu--active');
    document.querySelector('.vklad-menu-btn3').classList.remove('vklad-menu-btn--active');
    document.querySelector('.vklad-menu-btn1').classList.remove('vklad-menu-btn--active');
    document.querySelector('.vklad-menu-btn2').classList.add('vklad-menu-btn--active')
}
function menu3(){
    document.querySelector('.vklad-menu2').classList.remove('vklad-menu--active');
    document.querySelector('.vklad-menu1').classList.remove('vklad-menu--active');
    document.querySelector('.vklad-menu3').classList.add('vklad-menu--active');
    document.querySelector('.vklad-menu-btn2').classList.remove('vklad-menu-btn--active');
    document.querySelector('.vklad-menu-btn1').classList.remove('vklad-menu-btn--active');
    document.querySelector('.vklad-menu-btn3').classList.add('vklad-menu-btn--active')
}

function pag1(){
    document.getElementById('slide2').classList.remove('block--active');
    document.getElementById('slide1').classList.add('block--active');
    document.getElementById('pag2').classList.remove('pag--active');
    document.getElementById('pag1').classList.add('pag--active');
}

function pag2(){
    document.getElementById('slide1').classList.remove('block--active');
    document.getElementById('slide2').classList.add('block--active');
    document.getElementById('pag1').classList.remove('pag--active');
    document.getElementById('pag2').classList.add('pag--active');
}

let slide = 0;

function prev(){
    if(slide == 0){
        document.getElementById('slide1').classList.remove('block--active');
        document.getElementById('slide2').classList.add('block--active');
        document.getElementById('pag1').classList.remove('pag--active');
        document.getElementById('pag2').classList.add('pag--active');
        slide++;
    }
    else if (slide == 1) {
        document.getElementById('slide2').classList.remove('block--active');
        document.getElementById('slide1').classList.add('block--active');
        document.getElementById('pag2').classList.remove('pag--active');
        document.getElementById('pag1').classList.add('pag--active');
        slide--;
    }
}

let click = 0;
let clicks = 0;
let clickt = 0;

function click1(){
    if(click == 0) {
        document.getElementById('otvet1').classList.add('accard-otvet--active');
        click++;
    }
    else if (click == 1) {
        document.getElementById('otvet1').classList.remove('accard-otvet--active');
        click--;
    }
}
function click2(){
    if(clicks == 0) {
        document.getElementById('otvet2').classList.add('accard-otvet--active');
        clicks++;
    }
    else if (clicks == 1) {
        document.getElementById('otvet2').classList.remove('accard-otvet--active');
        clicks--;
    }
}
function click3(){
    if(clickt == 0) {
        document.getElementById('otvet3').classList.add('accard-otvet--active');
        clickt++;
    }
    else if (clickt == 1) {
        document.getElementById('otvet3').classList.remove('accard-otvet--active');
        clickt--;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var tabButtons = document.querySelectorAll('.tab-btn');
    var tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {

            tabButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            tabPanes.forEach(function (pane) {
                pane.classList.remove('active');
            });

            this.classList.add('active');
            tabPanes[index].classList.add('active');
        });
    });
});

var modal = document.getElementById("myModal"); 
 
var span = document.getElementsByClassName("close")[0]; 
 
window.onload = function () { 
  setTimeout(function () { 
    modal.style.display = "block"; 
  }, 3000); 
}; 
 
span.onclick = function () { 
  modal.style.display = "none"; 
}; 
 
window.onclick = function (event) { 
  if (event.target == modal) { 
    modal.style.display = "none"; 
  } 
};

let phone = document.querySelector(".faq-link"); 
let faqBlock = document.querySelector(".faq"); 
 
let observer = new IntersectionObserver( 
    (entries) => { 
        entries.forEach((entry) => { 
            if (entry.isIntersecting) { 
                phone.classList.add("show"); 
            } else { 
                phone.classList.remove("show"); 
            } 
        }); 
    }, 
    { 
        threshold: 0.1, 
    } 
); 
 
observer.observe(faqBlock);