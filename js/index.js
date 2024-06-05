
/*PILAS COMUNES ALCALINAS*/
function PilasComunesAlcalinas (tipo, marca, codigo, stock, precio){
  this.tipo = tipo.toUpperCase();
  this.marca = marca.toUpperCase();
  this.codigo = codigo;
  this.stock = parseInt((stock));
  this.precio = parseInt((precio));
}

const pila9VX1_Duracell = new PilasComunesAlcalinas ("Alcalina 9V", "Duracell", "1654", 195, 7600)
const pilaAAAX1_Energizer = new PilasComunesAlcalinas ("Alcalinas AAAX1", "Energizer", "7", 113, 1620)
const pilaAAX2_Energizer = new PilasComunesAlcalinas ("Alcalinas AAX2", "Energizer", "2", 110, 3300)

/*
console.log("Pila Duracell 9V x1", pila9VX1_Duracell);
console.log("Pila Energizer AAA x1", pilaAAAX1_Energizer);
console.log("Pila Energizer AA x2", pilaAAX2_Energizer);
*/

/*PILAS ESPECIALES*/
class PilasEspeciales {
  constructor (tipo, marca, codigo, stock, precio){
    this.tipo = tipo.toUpperCase();
    this.marca = marca.toUpperCase();
    this.codigo = codigo;
    this.stock = parseInt((stock));
    this.precio = parseInt((precio));
  };
  
  disponible() {
    console.log("El Producto " + this.tipo + " " + this.marca + " cuesta $" + this.precio)
  };

  agregamosIva() {
    this.precio = this.precio * 1.21;
}

  vender() {
    console.log("El Producto " + this.tipo + " " + this.marca + " fue Vendido.")
}

};

const pilaAAX2_Safety = new PilasEspeciales ("Recargables AAX2", "Safety Energy", "2657", 32, 12070); 
const pilaAAAX2_Energizer800 = new PilasEspeciales ("Recargables AAAX2", "Energizer", "3984", 60, 19800); 
const pilaAAAX2_Multilaser1000 = new PilasEspeciales ("Recargables AAAX2", "Multilazer", "4822", 27, 6392);

/*
console.log("Pila recargable Safety AA x2", pilaAAX2_Safety);
console.log("Pila recargable Energizer 800 AAA x2", pilaAAAX2_Energizer800);
console.log("Pila recargable Multilacer 1000 AAA x2", pilaAAAX2_Energizer800);
pilaAAX2_Safety.disponible();
pilaAAAX2_Energizer800.agregamosIva();
pilaAAAX2_Energizer800.vender();
*/

/*PILAS COMUNES CARBON*/
const pilasComunesCarbon = [
{nombre: "Pila 9V X 1 EUROENERGY", tipo: "Carbon", marca:"EUROENERGY", codigo:15, stock:47, precio:2650},
{nombre: "Pila 9V X 1 EVEREADY", tipo: "Carbon", marca:"EVEREADY", codigo:4541, stock:20, precio:3600},
{nombre: "Pila C X 2 EVEREADY", tipo: "Carbon", marca:"EVEREADY", codigo:33, stock:31, precio:4800},
{nombre: "Pila AA X 4 VINNIC", tipo: "Carbon", marca:"VINNIC", codigo:4543, stock:286, precio:2050},
];

for (let index = 0; index < pilasComunesCarbon.length; index++) {
  console.log(pilasComunesCarbon[index]);
}

/*BATERIAS DE CELULARES*/
const bateriasCelulares = [
{nombre: "Bat. Cel. SAMSUNG YOUNG", tipo: "2 3.7V /1300MAH / LITIO-ION", marca:"Samsung", codigo:3363, stock:10, precio:"19200"},
{nombre: "Bat. Cel.  IPHONE 5S", tipo: "Li-Polymer 1500mAh", marca:"Iphone", codigo:"3952", stock:15, precio:31400},
{nombre: "Bat. Cel.  MOTO G6", tipo: "3.85V / 4000MAH / LITIO-ION", marca:"Motorola", codigo: 4701, stock:10, precio:12300},
{nombre: "Bat. Cel. NOKIA 435", tipo: "3.7V / 1300MAH Li-ion", marca:"LG", codigo: 3392, stock:6, precio: 18300},
{nombre: "Bat. Cel. NOKIA 435", tipo: "3.7V / 1300MAH Li-ion", marca:"LG", codigo:3395, stock:6, precio: 15300}
];

for (let index = 0; index < bateriasCelulares.length; index++) {
  console.log(bateriasCelulares[index]);
}

const marcaPilasComunes =  pilasComunesCarbon.map((elemento) => elemento.marca);

const marcaBateriasCelulares = bateriasCelulares.map
((elemento) => elemento.marca);


/*LISTA DE PRODUCTOS MAS VENIDOS*/
/*Agrego un h2*/
const listaDeProductos = document.getElementsByTagName('article');

const tituloH2 = document.createElement('h2');
tituloH2.classList.add('title', 'text-center');
listaDeProductos[0].appendChild(tituloH2)
tituloH2.innerText = "PRODUCTOS MAS VENDIDOS";
tituloH2.style.padding= '0, 35px'
tituloH2.style.color= '#031A51'
tituloH2.style.fontSize= '30px'

/*Agrego un Div*/
const productos = document.createElement('div');
productos.classList.add('productos', 'text-center');
listaDeProductos[0].appendChild(productos)
productos.style.color = '#031A51'
productos.style.padding = '20px'

/*Agrego un Div*/
const productos1 = document.createElement('div');
productos1.classList.add('productos', 'text-center');
listaDeProductos[0].appendChild(productos1)
productos1.style.color = '#031A51'
productos1.style.padding = '20px'

/*Agrego un h3*/
const subtitle1 = document.createElement('h3');
subtitle1.classList.add('subtitle', 'text-center');
productos.appendChild(subtitle1)
subtitle1.innerText = "BATERIAS CELULARES";

/*Agrego un h3*/
const subtitle2 = document.createElement('h3');
subtitle2.classList.add('subtitle', 'text-center');
productos1.appendChild(subtitle2)
subtitle2.innerText = "PILAS COMUNES CARBON";


/*Lista mas vendidos del stock*/
for (producto of bateriasCelulares){
  let productosMasVendidos = `*NOMBRE: ${producto.nombre} * TIPO: ${producto.tipo} * CODIGO: ${producto.codigo} * PRECIO: $${producto.precio}`;
  const textoh4 = document.createElement('h4')
  textoh4.innerHTML = productosMasVendidos;
  productos.appendChild(textoh4);
}
for (producto of pilasComunesCarbon){
  let productosMasVendidos = `*NOMBRE: ${producto.nombre} * TIPO: ${producto.tipo} * CODIGO: ${producto.codigo} * PRECIO: $${producto.precio}`;
  const textoh4 = document.createElement('h4')
  textoh4.innerHTML = productosMasVendidos;
  productos1.appendChild(textoh4);
}

/*CARRITO DE PRODUCTOS*/
/*Agrega producto al carrito*/

const carrito = [];
let totalDeCarrito = [];
carrito.push(pilasComunesCarbon[0]);
carrito.push(pilasComunesCarbon[2]);
let suCompra = prompt("Sus productos seleccionados son: " + pilasComunesCarbon[0].nombre + " y " + pilasComunesCarbon[2].nombre + ". Escriba la palabra OK para ver el total");

if (suCompra.toLowerCase() === "ok") {totalDeCarrito = carrito.reduce ((acumulador, elemento)=> acumulador + elemento.precio, 0)
  alert ("Total carrito: $" + totalDeCarrito);
  console.log (carrito.length + " articulos");
  for (items of carrito) {
  console.log("El precio del producto " + items.nombre + " es: $"+ items.precio)};
} else {
  alert ("Inserte OK para ver el total!")
};


/*Busca producto disponible*/

let ingreseMarcaPila = prompt("Ingrese alguna marca de pila que desea: " + marcaPilasComunes.join(" , "))
const filtrarPorMarca = pilasComunesCarbon.filter( (elemento2) => elemento2.marca.includes(ingreseMarcaPila.toUpperCase()));
console.log(filtrarPorMarca[0]);


/*COTIZAR MONTO DE ALGUN PRODUCTO SEGUN CANTIDAD DE UNIDADES SELECCIONADAS*/

let nombreYapellido = prompt("Ingrese su nombre y apellido");
alert("Bienvenido " + nombreYapellido + "!!" )
let numeroCategoria = parseInt(prompt("Ingrese el numero de la categoria: 1- Baterias celulares 2-Pilas comunes carbon"));
const VACIO = ""

if(numeroCategoria === 1 && nombreYapellido != VACIO){

  let ingreseCodigo = parseInt(prompt("Ingrese el código del producto"));
  let cantidadDelProducto = parseInt(prompt("Ingrese la cantidad de unidades que desea"));

  if(ingreseCodigo === bateriasCelulares[0].codigo){
    alert ("El total es " + "$" + bateriasCelulares[0].precio * cantidadDelProducto)
  } else if (ingreseCodigo === bateriasCelulares[1].codigo) {
    alert ("El total es " + "$" + bateriasCelulares[1].precio * cantidadDelProducto)
  } else if (ingreseCodigo === bateriasCelulares[2].codigo) {
    alert ("El total es " + "$" + bateriasCelulares[2].precio * cantidadDelProducto)
  } else if (ingreseCodigo === bateriasCelulares[3].codigo) {
    alert ("El total es " + "$" + bateriasCelulares[3].precio * cantidadDelProducto)
  } else if (ingreseCodigo === bateriasCelulares[4].codigo) {
    alert ("El total es " + "$" + bateriasCelulares[4].precio * cantidadDelProducto)
  } else {alert("¡Dato invalido!")}

} else if (numeroCategoria === 2 && nombreYapellido != VACIO) {

  let ingreseCodigo = parseInt(prompt("Ingrese el código del producto"));
  let cantidadDelProducto = parseInt(prompt("Ingrese la cantidad de unidades que desea"));
 
  if(ingreseCodigo === pilasComunesCarbon[0].codigo){
    alert ("El total es " + "$" + pilasComunesCarbon[0].precio * cantidadDelProducto)
  } else if (ingreseCodigo === pilasComunesCarbon[1].codigo) {
    alert ("El total es " + "$" + pilasComunesCarbon[1].precio * cantidadDelProducto)
  } else if (ingreseCodigo === pilasComunesCarbon[2].codigo) {
    alert ("El total es " + "$" + pilasComunesCarbon[2].precio * cantidadDelProducto)
  } else if (ingreseCodigo === pilasComunesCarbon[3].codigo) {
    alert ("El total es " + "$" + pilasComunesCarbon[3].precio * cantidadDelProducto)
  } else {alert("¡Dato invalido!")}

} else {
  alert("¡Ingrese los datos por favor!")
};

/*CONSULTA DE PRECIO DE CADA PRODUCTO SELECCIONADO*/


let ingreseProducto = parseInt(prompt("Escriba el numero del producto que desea: 1-" + bateriasCelulares[0].nombre + " 2-"+ bateriasCelulares[1].nombre + " 3-"+ bateriasCelulares[2].nombre + " 4-"+ bateriasCelulares[3].nombre));

if(ingreseProducto === 1){ 
  alert("El precio final de " + bateriasCelulares[0].nombre + " es de $" + bateriasCelulares[0].precio)
} else if(ingreseProducto === 2){ 
  alert("El precio final de " + bateriasCelulares[1].nombre + " es de $" + bateriasCelulares[1].precio);
} else if(ingreseProducto === 3){ 
  alert("El precio final de " + bateriasCelulares[2].nombre + " es de $" + bateriasCelulares[2].precio);
} else if(ingreseProducto === 4){ 
  alert("El precio final de " + bateriasCelulares[3].nombre + " es de $" + bateriasCelulares[3].precio);
} else {
  alert("El producto ingresado es incorrecto, elija las opciones 1, 2, 3 o 4")
}

/*CALCULAR MONTO DE LAS CUOTAS E INTERESES SEGUN PRODUCTO SELECCIONADO Y CANTIDAD DE CUOTAS SELECCIONADAS*/

let resultado1 = parseInt(prompt("Elija el numero del producto: 1-" + pilasComunesCarbon[0].nombre + " 2-"+ pilasComunesCarbon[1].nombre + " 3-"+ pilasComunesCarbon[2].nombre + " 4-"+ pilasComunesCarbon[3].nombre));
let cantidadDelProducto1 = parseInt(prompt("Ingrese la cantidad de unidades que desea"));
let cantidadDeCuotas1 = parseInt(prompt("Seleccione financiamiento 6 o 12 cuotas"));

let valorA = (pilasComunesCarbon[0].precio* cantidadDelProducto1)
let valorB = (pilasComunesCarbon[1].precio * cantidadDelProducto1)
let valorC = (pilasComunesCarbon[2].precio * cantidadDelProducto1)
let valorD = (pilasComunesCarbon[3].precio * cantidadDelProducto1)

if (cantidadDeCuotas1 <= 6){

  if(resultado1 == 1){
    parseInt(alert(pilasComunesCarbon[0].nombre + ": el precio financiado en "+ cantidadDeCuotas1 + " cuotas es de $" + valorA / cantidadDeCuotas1 + " s/ intereses"));
  } else if(resultado1 == 2){
    parseInt(alert(pilasComunesCarbon[1].nombre + ": el precio financiado en "+ cantidadDeCuotas1 + " cuotas es de $" + valorB / cantidadDeCuotas1 + " s/ intereses"));
  } else if(resultado1 == 3){1
    parseInt(alert(pilasComunesCarbon[2].nombre + ": el precio financiado en "+ cantidadDeCuotas1 + " cuotas es de $" + valorC / cantidadDeCuotas1 + " s/ intereses"));
  } else if(resultado1 == 4){1
    parseInt(alert(pilasComunesCarbon[3].nombre + ": el precio financiado en "+ cantidadDeCuotas1 + " cuotas es de $" + valorD / cantidadDeCuotas1 + " s/ intereses"));
  } 

} else if (cantidadDeCuotas1 <= 12) {

    if(resultado1 == 1){
      parseInt(alert(pilasComunesCarbon[0].nombre + ": el precio financiado en " + cantidadDeCuotas1 + " cuotas es de $" + valorA * 1.15 / cantidadDeCuotas1 + " c/ 15% de interes"));
    } else if(resultado1 == 2){
      parseInt(alert(pilasComunesCarbon[1].nombre + ": el precio financiado en "+ cantidadDeCuotas1 + " cuotas es de $" + valorB * 1.15 / cantidadDeCuotas1 + " c/ 15% de interes"));
    } else if(resultado1 == 3){
      parseInt(alert(pilasComunesCarbon[2].nombre + ": el precio financiado en "+ cantidadDeCuotas1 + " cuotas es de $" + valorC * 1.15 / cantidadDeCuotas1 + " c/ 15% de interes"));
    } else if(resultado1 == 4){
      parseInt(alert(pilasComunesCarbon[3].nombre + ": el precio financiado en "+ cantidadDeCuotas1 + " cuotas es de $" + valorD * 1.15 / cantidadDeCuotas1 + " c/ 15% de interes"));
    } 

}else {alert("Debe seleccionar hasta 12 cuotas")};


/*COMPRAR ALGUNA SELECCION DE OFERTA*/


let nombreYapellido2 = prompt("Ingrese su nombre y apellido");
alert("Bienvenido " + nombreYapellido2 + "!!" )
let suDomicilio = prompt("Ingrese su domicilio");
const VACIO2 = ""

if(nombreYapellido2 != VACIO2 && suDomicilio != VACIO2){

  let tipoDeEntrega = prompt("Elija modo de entrega: Retiro o Envio");
  let medioDePago = prompt("Elija medio de pago: transferencia o debito");
  let respuesta = (tipoDeEntrega+medioDePago);


  switch (respuesta.toLowerCase()){
    case "enviotransferencia": 
    alert("Hola " + nombreYapellido2 + ", el valor del producto contado es: $" + bateriasCelulares[0].precio + " y sera enviado mañana a calle " + suDomicilio + " de 8 a 13hs");
    break;

    case "retirotransferencia":
    alert("Hola " + nombreYapellido2 +", el valor del producto contado es: $" + bateriasCelulares[0].precio + " y podra retirarlo por el local de 8 a 13 hs");
    break;

    case "enviodebito":
    alert("Hola " + nombreYapellido2 +", el valor del producto con debito es: $" + bateriasCelulares[0].precio + " y podrá retirarlo por el local de 8 a 13 hs");
    break;

    case "retirodebito":
    alert("Hola " + nombreYapellido2 + ", el valor del producto con debito es: $" + bateriasCelulares[0].precio + " y será enviado mañana a calle " + suDomicilio + " de 8 a 13hs");
    break;

    default:
    alert("¡Ingrese las opciones validas!");
  };

} 
  else {
    alert("¡Ingrese sus datos por favor!")
  };


/*---------------------------------------------*/

/*SWIPER HOME*/
/*
const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });


/*SWIPER PRODUCTOS*/
/*
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
/*
AOS.init();

/*WOW*/ 
/*
new WOW().init();

*/