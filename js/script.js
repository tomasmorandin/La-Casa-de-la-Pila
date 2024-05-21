/*SALUDO*/

let nombreYapellido = prompt("Ingrese su nombre y apellido");
alert("Bienvenido " + nombreYapellido + "!!" )
let suDomicilio = prompt("Ingrese su domicilio");
let suCiudad = prompt("Ingrese su ciudad");
const VACIO = ""

/*COTIZAR MONTO DE ALGUN PRODUCTO SEGUN CANTIDAD DE UNIDADES SELECCIONADAS*/

if(nombreYapellido != VACIO && suDomicilio != VACIO && suCiudad != VACIO){
  
  let resultado = parseInt(prompt("Elija el numero de producto que desea: 1-Pila comun 2-Pila recargable 3-Bateria de alarma"));
  let cantidadDelProducto = parseInt(prompt("Ingrese la cantidad de unidades que desea"));
  let valor1 = (5000 * cantidadDelProducto)
  let valor2 = (12000 * cantidadDelProducto)
  let valor3 = (18000 * cantidadDelProducto)

  if(resultado === 1){
    alert ("El total es " + "$" + valor1 + " + IVA 21%")
  } else if (resultado === 2) {
    alert ("El total es " + "$" + valor2 + " + IVA 21%")
  } else if (resultado === 3) {
    alert ("El total es " + "$" + valor3 + " + IVA 21%")}
  else {alert("¡Dato invalido!")}

}else {
  alert("¡Ingrese todos los datos por favor!")
};


/*CALCULAR MONTO DE LAS CUOTAS E INTERESES SEGUN PRODUCTO SELECCIONADO Y CANTIDAD DE CUOTAS SELECCIONADAS*/

let resultado1 = parseInt(prompt("Elija el numero de producto que desea: 1-Pila comun 2-Pila recargable 3-Bateria de alarma"));
let cantidadDelProducto1 = parseInt(prompt("Ingrese las unidades que desea"));
let cantidadDeCuotas1 = parseInt(prompt("Seleccione financiamiento 6 o 12 cuotas"));

let valorA = (3000 * cantidadDelProducto1)
let valorB = (12000 * cantidadDelProducto1)
let valorC = (20000 * cantidadDelProducto1)

if (cantidadDeCuotas1 === 6){
for (let cuota = 1; cuota <= 6; cuota++) {
  if(resultado1 == 1){
    console.log("Cuota Nº "+ cuota + " de $" + valorA / cantidadDeCuotas1 + " s/ intereses");
  } else if(resultado1 == 2){
    console.log("Cuota Nº "+ cuota + " de $" + valorB / cantidadDeCuotas1 + " s/ intereses");
  } else if(resultado1 == 3){1
    console.log("Cuota Nº "+ cuota + " de $" + valorC / cantidadDeCuotas1 + " s/ intereses");
  } 
}
} else if (cantidadDeCuotas1 === 12) {

  for (let cuota = 1; cuota <= 12; cuota++) {
    if(resultado1 == 1){
      console.log("Cuota Nº "+ cuota + " de $" + valorA * 1.15 / cantidadDeCuotas1 + " c/ 15% de interes");
    } else if(resultado1 == 2){
      console.log("Cuota Nº "+ cuota + " de $" + valorB * 1.15 / cantidadDeCuotas1 + " c/ 15% de interes");
    } else if(resultado1 == 3){
      console.log("Cuota Nº "+ cuota + " de $" + valorC * 1.15 / cantidadDeCuotas1 + " c/ 15% de interes");
    } 
  };

}else {alert("Debe seleccionar 6 o 12 cuotas")};


/*COMPRAR ALGUNA SELECCION DE OFERTA*/

/*Saludo*/

let nombreYapellido2 = prompt("Ingrese su nombre y apellido");
alert("Bienvenido " + nombreYapellido2 + "!!" )
let suDomicilio2 = prompt("Ingrese su domicilio");
const VALOR_CONTADO = 12000;
const VALOR_TARJETA = "3 cuotas sin interes de $4000";
const VACIO2 = ""

if(nombreYapellido2 != VACIO2 && suDomicilio2 != VACIO2){

  let tipoDeEntrega = prompt("Elija modo de entrega: Retiro o Envio");
  let medioDePago = prompt("Elija medio de pago: Contado o Tarjeta");
  let respuesta = (tipoDeEntrega+medioDePago);


  switch (respuesta.toLowerCase()){
    case "enviocontado": 
    alert("Hola " + nombreYapellido2 + ", el valor del producto contado es: $" + VALOR_CONTADO + " y sera enviado mañana a calle " + suDomicilio2 + " de 8 a 13hs");
    break;

    case "retirocontado":
    alert("Hola " + nombreYapellido2 +", el valor del producto contado es: $" + VALOR_CONTADO + " y podra retirarlo por el local de 8 a 13 hs");
    break;

    case "enviotarjeta":
    alert("Hola " + nombreYapellido2 +", el valor del producto con tarjeta es: " + VALOR_TARJETA + " y podrá retirarlo por el local de 8 a 13 hs");
    break;

    case "retirotarjeta":
    alert("Hola " + nombreYapellido2 + ", el valor del producto con tarjeta es: " + VALOR_TARJETA + " y será enviado mañana a calle " + suDomicilio2 + " de 8 a 13hs");
    break;

    default:
    alert("¡Ingrese las opciones validas!");
  };

} 
  else {
    alert("¡Ingrese sus datos por favor!")
  };


/*CONSULTA DE PRECIO DE CADA PRODUCTO SELECCIONADO*/

let ingreseProducto = parseInt(prompt("Elija el numero del producto: 1-Pila AA x1 Energizer 2-Pila recargable AA x1 3-Pila recargable 9V"))
let producto1 = "Pila AA x1 Energizer"
let producto2 = "Pila recargable AA x1"
let producto3 = "Pila recargable 9V"

if(ingreseProducto === 1){ 
  alert("El precio final de " + producto1 + " es de $5000 + iva 21% c/u")
} else if(ingreseProducto === 2){ 
  alert("El precio final de " + producto2 + " es de $12000 + iva 21% c/u");
} else if(ingreseProducto === 3){ 
  alert("El precio final de " + producto3 + " es de $18000 + iva 21% c/u");
} else {
  alert("El producto ingresado es incorrecto, elija las opciones 1, 2 o 3!")
}


/*CARACTERISTICAS DE PRUDUCTOS*/
/*Pilas Comunes*/

function  PilasComunes (tipo, marca, codigo, stock, precio){
  this.tipo = tipo.toUpperCase();
  this.marca = marca.toUpperCase();
  this.codigo = codigo;
  this.stock = stock;
  this.precio = precio;
}

const pila9VX1_Duracell = new PilasComunes ("Alcalina 9V", "Duracell", 1654, 195, 7600)
const pilaAAAX1_Energizer = new PilasComunes ("Alcalinas AAAX1", "Energizer", 7, 113, 1620)
const pilaAAX2_Energizer = new PilasComunes ("Alcalinas AAX2", "Energizer", 2, 110, 3300)

console.log("Pila Duracell 9V x1", pila9VX1_Duracell);
console.log("Pila Energizer AAA x1", pilaAAAX1_Energizer);
console.log("Pila Energizer AA x2", pilaAAX2_Energizer);

/*Pilas Especiales*/

class PilasEspeciales {
  constructor (tipo, marca, codigo, stock, precio){
    this.tipo = tipo.toUpperCase();
    this.marca = marca.toUpperCase();
    this.codigo = codigo;
    this.stock = stock;
    this.precio = precio;
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

const pilaAAX2_SafetyEnergy = new PilasEspeciales ("Recargables AAX2", "Safety Energy", 2657, 32, 12070); 
const AAAX2_Energizer800 = new PilasEspeciales ("Recargables AAAX2", "Energizer", 3984, 60, 19800); 
const AAAX2_Multilaser1000m = new PilasEspeciales ("Recargables AAAX2", "Multilazer", 4822, 27, 6392);

console.log("Pila recargable Safety AA x2", pilaAAX2_SafetyEnergy);
console.log("Pila recargable Energizer 800 AAA x2", AAAX2_Energizer800);
console.log("Pila recargable Multilacer 1000 AAA x2", AAAX2_Multilaser1000m);

pilaAAX2_SafetyEnergy.disponible();
AAAX2_Energizer800.agregamosIva();
AAAX2_Energizer800.vender();


/*Swiper inicio*/

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

/*Swiper Productos*/

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

/* Initialize aos */
/*
AOS.init();

/*Initialize Wow*/ 
/*
new WOW().init();*/