// Select Dom Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBrand = document.querySelector('.menu-brand');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set initial State Of Menu
let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);
function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('active');
        menuBrand.classList.add('active');
        menuNav.classList.add('active');
        navItems.forEach(item => item.classList.add('active'));

        //Set Menu State
        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('active');
        menuBrand.classList.remove('active');
        menuNav.classList.remove('active');
        navItems.forEach(item => item.classList.remove('active'));
        
        //Set Menu State
        showMenu = false;
    }
}