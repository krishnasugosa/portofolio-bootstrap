//game
const karakter = document.getElementById('karakter');
const btn1 = document.getElementById('right');
const btn2 = document.getElementById('left');

let left = 0;

btn1.addEventListener('click',()=>{
    left-=5;
    karakter.style.left = left + 'px';
    karakter.style.backgroundImage = 'url(skull4.png)';
    ResetKarakter1();
});

function ResetKarakter1(){
    setTimeout(() => {
     karakter.style.backgroundImage = 'url(skull3.png)';
    }, 100);
 };

btn2.addEventListener('click',()=>{
    left+=5;
    karakter.style.left = left + 'px';
    karakter.style.backgroundImage = 'url(skull2.png)';
    ResetKarakter2();
});

function ResetKarakter2(){
   setTimeout(() => {
    karakter.style.backgroundImage = 'url(skull1.png)';
   }, 100);
};

//toggle navbar
const OpenBtn = document.getElementById('Openbtn');
const Closebtn = document.getElementById('Closebtn');
const navbar = document.querySelector('.nav');
const NavLinks1 = document.querySelector('.nav-links1');
const NavLinks2 = document.querySelector('.nav-links2');
const NavLinks3 = document.querySelector('.nav-links3');
const body = document.querySelector('body');
OpenBtn.addEventListener('click',()=>{
    navbar.classList.add('show');
    body.classList.add('Turnofthescroll');
});
Closebtn.addEventListener('click',()=>{
    navbar.classList.remove('show');
    body.classList.remove('Turnofthescroll');
});

NavLinks1.addEventListener('click',()=>{
    navbar.classList.remove('show');
    body.classList.remove('Turnofthescroll');
});

NavLinks2.addEventListener('click',()=>{
    navbar.classList.remove('show');
    body.classList.remove('Turnofthescroll');
});

NavLinks3.addEventListener('click',()=>{
    navbar.classList.remove('show');
    body.classList.remove('Turnofthescroll');
});
