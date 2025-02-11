
const galleryContainer = document.querySelector('.slide');
const prev = document.querySelector('.control.icon-prev');
const next = document.querySelector('.control.icon-next');
const imagenes = ['web_SLIDE 2', 'web_SLIDE 3', 'web_SLIDE 4'];
let currentIndex = 0;

// Función para generar los elementos de la galería//
function createGallery() {
    imagenes.forEach((img, index) => {
        const li = document.createElement('li');
        const image = document.createElement('img');
        image.src = `img/${img}.jpg`;
        image.alt = `img ${index + 1}`;
        li.appendChild(image);
        index === 0 && li.classList.add('active')
        galleryContainer.appendChild(li);
    });
}

setInterval(()=>{
  currentIndex = (currentIndex + 1) % imagenes.length;
  showImage(currentIndex);
}, 3000)

// Función para mostrar la imagen en el índice especificado//
function showImage(index) {
    const galleryItems = document.querySelectorAll('.slide li');
    galleryItems.forEach((li, i) => {
        li.classList.toggle('active', i === index);
    });
}

// Función para mostrar la siguiente imagen//
function showNextImage() {
  currentIndex = (currentIndex + 1) % imagenes.length;
  showImage(currentIndex);
}

// Función para mostrar la imagen anterior//
function showPrevImage() {
    currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
    showImage(currentIndex);
}

// Añadir eventos a los botones//
next.addEventListener('click', showNextImage);
prev.addEventListener('click', showPrevImage);

// Inicializar la galería//
createGallery();
showImage(currentIndex);


//SWIPER PRODUCTOS
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    }
  });

/* AOS */

AOS.init();

/*WOW*/ 

new WOW().init();


