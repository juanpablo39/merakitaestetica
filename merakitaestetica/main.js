const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras=document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado'); 
    barras.forEach(child=> {child.classList.toggle('animado')});
});

const menuLinks = document.querySelectorAll('.enlaces-menu a[href^="#"]')

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(){
        menu.classList.remove("activado")
    })
})

const footerLinks = document.querySelectorAll('.footer-li a[href^="#"]')

footerLinks.forEach(footerLink => {
    footerLink.addEventListener("click", function(){
        
     } )
})