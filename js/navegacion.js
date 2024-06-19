
//BARRA DE NAVEGACION HTML//
const header = document.getElementsByTagName('header');
const navbar = document.createElement('navbar');
const divNav = document.createElement('div')
const nav = document.createElement('nav');
const ul = document.createElement ('ul');

const links = ["Index", "Productos", "Contacto"];

const logo = document.createElement ('img');
const liImg = document.createElement ('li');
/*const ORIGEN = document.createElement ('a');*/

const liIcon1 = document.createElement('li');
const A_ICON1 = document.createElement ('a');

const liIcon2 = document.createElement('li');
const A_ICON2 = document.createElement ('a');

const liIcon3 = document.createElement('li');
const A_ICON3 = document.createElement ('a');

navbar.classList.add('navbar', 'navbar-expand-sm', 'navbar-light');
divNav.classList.add ('container-fluid');
nav.classList.add ('collapse', 'navbar-collapse');
nav.id = 'collapsibleNavbar'
ul.classList.add ('navbar-nav');


header[0].appendChild(navbar);
navbar.appendChild(divNav);
divNav.innerHTML= `<a class="navbar-brand" href="#"></a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
<span class="navbar-toggler-icon"></span></button>`
divNav.appendChild(nav);
nav.appendChild(ul);


//Logo marca//
const ORIGEN = document.querySelector('.navbar-brand');
ORIGEN.appendChild(logo);
ORIGEN.href='/';
logo.src = 'img/web_LOGO AZUL.png'
logo.alt= 'La Casa de la Pila'
logo.style.height =  '50px'


//Links//
for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLocaleLowerCase()}.html">${link}</a>`
    ul.appendChild(li);
}


//Icono Carrito//
A_ICON2.href="carrito.html";
ul.appendChild(liIcon2);
liIcon2.appendChild(A_ICON2);
A_ICON2.innerHTML='<i class="fa-solid fa-cart-shopping"></i>';
A_ICON2.style.height = '50px'

//Icono Favoritos//
A_ICON1.href='/';
ul.appendChild(liIcon1);
liIcon1.appendChild(A_ICON1);
A_ICON1.innerHTML='<i class="fa-regular fa-heart"></i>';
A_ICON1.style.height = '50px'

//Icono Buscar//
A_ICON3.href='/';
ul.appendChild(liIcon3);
liIcon3.appendChild(A_ICON3);
A_ICON3.innerHTML='<i class="fa-solid fa-magnifying-glass"></i>';
A_ICON3.style.height = '50px'

//FOOTER HTML//

const footer = document.getElementsByTagName ('footer');
const divConteinerFluid = document.createElement ('div')
const divRow = document.createElement ('div')
const divRedes = document.createElement ('div');
const divParrafos = document.createElement ('div');
const divLogo = document.createElement ('div');
const divWp = document.createElement ('div');
const parrafoFooter1 = document.createElement ('p');
const parrafoFooter2 = document.createElement ('p');
const parrafoFooter3 = document.createElement ('p');
const parrafoFooter4 = document.createElement ('p');
const parrafoFooter5 = document.createElement ('p');
const A_INSTAGRAM = document.createElement ('a')
const A_FACEBOOK = document.createElement ('a')
const A_TIKTOK = document.createElement ('a')
const A_WHATSSAPP = document.createElement ('a')
const A_LOGO = document.createElement ('a')
const logo2 = document.createElement ('img');
const TIME = new Date().getFullYear();
divConteinerFluid.classList.add('container-fluid');
divRow.classList.add ('row', 'text-center');
divRedes.classList.add('redes', 'col-sm-4','text-sm-end');
divParrafos.classList.add ('col-sm-4','text-center');
divLogo.classList.add ('col-sm-4','text-sm-start');

//Logo y copyright//
divRow.appendChild(divLogo);
divLogo.appendChild(A_LOGO);
A_LOGO.href='/';
A_LOGO.appendChild(logo2)
logo2.src = 'img/web_LOGO AZUL.png'
logo2.alt= 'La Casa de la Pila'
logo2.style.height = '50px'
logo2.style.paddingBottom = '12px'
divLogo.appendChild(parrafoFooter4);
divLogo.appendChild(parrafoFooter5);
parrafoFooter4.innerHTML = 'Developed by Tomas Morandin'
parrafoFooter5.innerHTML= 'Todos los derechos recervados®'


//Parrafo datos//
divRow.appendChild(divParrafos);
divParrafos.appendChild(parrafoFooter1);
divParrafos.appendChild(parrafoFooter2);
divParrafos.appendChild(parrafoFooter3);
parrafoFooter1.innerHTML = 'Monte Caseros 295, Paraná, Entre Ríos. CP 3100';
parrafoFooter2.innerHTML = 'Tel 0343 4079 400, Cel +54 9 343 480 6723';
parrafoFooter3.innerHTML = 'La Casa de la Pila - ' + TIME;

//Redes//
footer[0].appendChild(divConteinerFluid);
divConteinerFluid.appendChild(divRow);
divRow.appendChild(divRedes);
divRedes.appendChild(A_FACEBOOK);
divRedes.appendChild(A_INSTAGRAM);
divRedes.appendChild(A_TIKTOK);
A_INSTAGRAM.innerHTML = '<i class="fa-brands fa-instagram"></i>'
A_INSTAGRAM.href='https://www.instagram.com/lacasadelapila/?hl=es-la';
A_FACEBOOK.innerHTML = '<i class="fa-brands fa-facebook"></i>'
A_FACEBOOK.href='/';
A_TIKTOK.innerHTML = '<i class="fa-brands fa-tiktok"></i>'
A_TIKTOK.href='/';


//EVENTOS BARRA DE NAVEGACION//
window.addEventListener('scroll', () => {
    if (window.scrollY >= 5) {
        navbar.classList.add('navbar-scrolled');
        navbar.classList.add('navbar-dark');
        logo.src = 'img/web_LOGO BLANCO.png'
        logo.alt= 'La Casa de la Pila'
    } else if (window.scrollY < 5) {
        navbar.classList.remove('navbar-scrolled');
        navbar.classList.remove('navbar-dark');
        logo.src = 'img/web_LOGO AZUL.png'
        logo.alt= 'La Casa de la Pila'
    }
});

//EVENTOS FOOTER//


A_FACEBOOK.addEventListener('mouseover',() => {
    A_FACEBOOK.style.color = 'white';
    A_FACEBOOK.style.transition ='all 0.6s';
});
A_FACEBOOK.addEventListener('mouseout',() => {
    A_FACEBOOK.style.color = '#031A51';
    A_FACEBOOK.style.transition ='all 0.6s';
});
A_INSTAGRAM.addEventListener('mouseover',() => {
    A_INSTAGRAM.style.color = 'white';
    A_INSTAGRAM.style.transition ='all 0.6s';
});
A_INSTAGRAM.addEventListener('mouseout',() => {
    A_INSTAGRAM.style.color = '#031A51';
    A_INSTAGRAM.style.transition ='all 0.6s';
});
A_TIKTOK.addEventListener('mouseover',() => {
    A_TIKTOK.style.color = 'white';
    A_TIKTOK.style.transition ='all 0.6s';
});
A_TIKTOK.addEventListener('mouseout',() => {
    A_TIKTOK.style.color = '#031A51';
    A_TIKTOK.style.transition ='all 0.6s';
});


//EVENTOS WHATSAPP//

divWp.setAttribute("style", "background-color: #00E676; height: 60px; width: 60px; border-radius: 50%; box-shadow: 0 0 12px rgba(0, 0, 0, .5); text-align: center; position: fixed; left: 20px; bottom: 20px; align-content: center")
A_WHATSSAPP.setAttribute("style", "font-size: 30px; color: white");

divWp.addEventListener('mouseover',() => {
    divWp.style.boxShadow = '0px 0px';
});
divWp.addEventListener('mouseout',() => {
    divWp.style.boxShadow = '0 0 12px rgba(0, 0, 0, .5)';
});

//Whatsapp//
footer[0].appendChild(divWp)
divWp.appendChild(A_WHATSSAPP)
A_WHATSSAPP.innerHTML = '<i class="fa-brands fa-whatsapp"></i>'
A_WHATSSAPP.href='https://walink.co/b3100e';
A_WHATSSAPP.className='whatsapp';
A_WHATSSAPP.target='_blank';
A_WHATSSAPP.ariaLabel='Whatsapp';
A_WHATSSAPP.style.zIndex = '9999'