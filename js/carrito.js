//ARRAYS DE PRODUCTOS//

//Pilas comunes alcalinas//
const PilasComunesAlcalinas = [
{codigo:1654, nombre: "Pila 9V X 1 Duracell", tipo: "Alcalina", marca:"Duracell", stock:195, precio:7600},
{codigo:7, nombre: "Pila AAA X 1 Energizer", tipo: "Alcalinas", marca:"Energizer", stock:113, precio:1620},
{codigo:2, nombre: "Pila AA X 2 Energizer", tipo: "Alcalinas", marca:"Energizer", stock:110, precio:3300},
];
            
//Pilas especiales recargables//
const pilasRecargables = [
{codigo:2657, nombre: "Pila AA X2 Safety Energy", tipo: "Recargables", marca:"Safety Energy", stock:32, precio:12070},
{codigo:3984, nombre: "Pila AAA X2 Energizer", tipo: "Recargables", marca:"Energizer", stock:60, precio:19800},
{codigo:4822, nombre: "Pila AAA X2 Multilazer", tipo: "Recargables", marca:"Multilazer", stock:27, precio:6392},
{codigo:4643, nombre: "Pila AA X 4 VINNIC", tipo: "Recargables", marca:"VINNIC", stock:286, precio:2050},
];
            
//Pilas Comunes Carbon//
const pilasComunesCarbon = [
{codigo:15, nombre: "Pila 9V X 1 EUROENERGY", tipo: "Carbon", marca:"EUROENERGY",stock:47, precio:2650},
{codigo:4541, nombre: "Pila 9V X 1 EVEREADY", tipo: "Carbon", marca:"EVEREADY", stock:20, precio:3600},
{codigo:33, nombre: "Pila C X 2 EVEREADY", tipo: "Carbon", marca:"EVEREADY", stock:31, precio:4800},
{codigo:4543, nombre: "Pila AA X 4 VINNIC", tipo: "Carbon", marca:"VINNIC", stock:286, precio:2050},
];
            
//Bateria de celulares//
const bateriasCelulares = [
{codigo:3363, nombre: "Bat. Cel. SAMSUNG YOUNG", tipo: "2 3.7V /1300MAH / LITIO-ION", marca:"Samsung", stock:10, precio:19200},
{codigo:3952, nombre: "Bat. Cel.  IPHONE 5S", tipo: "Li-Polymer 1500mAh", marca:"Iphone", stock:15, precio: 31400},
{codigo: 4701, nombre: "Bat. Cel.  MOTO G6", tipo: "3.85V / 4000MAH / LITIO-ION", marca:"Motorola", stock:10, precio:12300},
{codigo: 3392, nombre: "Bat. Cel. NOKIA 435", tipo: "3.7V / 1300MAH Li-ion", marca:"LG", stock:6, precio: 18300},
{codigo:3395, nombre: "Bat. Cel. NOKIA 435", tipo: "3.7V / 1300MAH Li-ion", marca:"LG", stock:6, precio: 15300}
];   

//CARRITO HTML//
const mainCarrito = document.getElementById('mainCarrito');
const listaGuardada = document.createElement('div')
const carritoProductos = document.createElement('div');
const linea = document.createElement('div')
const divError= document. createElement('div')
const tituloH2ListaGuardada = document.createElement('h2');
const tituloH2CarritoProductos = document.createElement('h2');

listaGuardada.id = 'cart-list'
carritoProductos.id= 'cart'
linea.classList= 'linea'
divError.id= 'msj_error'

mainCarrito.appendChild(listaGuardada);
mainCarrito.appendChild(linea)
mainCarrito.appendChild(carritoProductos);
mainCarrito.appendChild(divError)

//Agrego un h2 a carritoProductos//
tituloH2CarritoProductos.innerText = "CARRITO DE PRODUCTOS";
tituloH2CarritoProductos.style.textAlign = 'center'
tituloH2CarritoProductos.style.color = 'white'
tituloH2CarritoProductos.style.paddingTop = '20px'
tituloH2CarritoProductos.style.paddingBottom = '20px'

//Agrego un h2 a listaCarrito//
tituloH2ListaGuardada.innerText = "LISTA DE PRODUCTOS";
tituloH2ListaGuardada.style.textAlign = 'center'
tituloH2ListaGuardada.style.color = 'white'
tituloH2ListaGuardada.style.paddingTop = '20px'
tituloH2ListaGuardada.style.paddingBottom = '20px'
    

//FUNCIONES CARRITO//

const todosLosProductos = [...PilasComunesAlcalinas, ...pilasRecargables, ...pilasComunesCarbon, ...bateriasCelulares];

const imagenes = ['web_CATEGORIA 1', 'web_CATEGORIA 2', 'web_CATEGORIA 3', 'web_CATEGORIA 4', 'web_CATEGORIA 5', 'web_CATEGORIA 6', 'web_OFERTA 1', 'web_OFERTA 2', 'web_OFERTA 3', 'web_OFERTA 4', 'web_OFERTA 5', 'web_OFERTA 6', 'web_OFERTA 6', 'web_OFERTA 6', 'web_OFERTA 6', 'web_OFERTA 6'];

let carrito = traerDeLocalStorage();

const msjError = document.getElementById('msj_error');
msjError.style.color = 'red';

function enviarMsjError(productoCodigo){
    msjError.innerHTML = `<p>Producto con código: ${productoCodigo} no encontrado</p>`;    
}

function agregarAlCarrito(productoCodigo, cantidad){
const producto = todosLosProductos.find(p=> p.codigo === productoCodigo);
if (!producto){
    enviarMsjError(productoCodigo);
    return;
}

const itemCarrito = carrito.find(item => item.codigo === productoCodigo);

if (itemCarrito){
    itemCarrito.cantidad += cantidad;
    itemCarrito.precioTotal = itemCarrito.cantidad * producto.precio;
} else {carrito.push({
                    codigo: producto.codigo,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    cantidad: cantidad,
                    precioTotal: cantidad * producto.precio,
                })
        }

guardarEnLocalStorage()
renderCarrito()

};

function renderProducto(){
    const listadoDeLosProductos = document.getElementById('cart-list');
    listadoDeLosProductos.innerHTML = '';
    listadoDeLosProductos.appendChild(tituloH2ListaGuardada);

    todosLosProductos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.innerHTML = `
            <p>${producto.nombre} - $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.codigo}, 1)" class="button_icon">Comprar</button>`;
        listadoDeLosProductos.appendChild(divProducto);
    });
};


function renderCarrito(){
    const divCarrito = document.getElementById('cart')
    divCarrito.innerHTML = '';
    divCarrito.appendChild(tituloH2CarritoProductos);

    carrito.forEach(item => {
        const divItemCarrito = document.createElement('div');
        divItemCarrito.innerHTML= `<p>Codigo: ${item.codigo} - Nombre: ${item.nombre} - Cantidad: ${item.cantidad} - Precio total: $${item.precioTotal}</p>`;
        
        divCarrito.appendChild(divItemCarrito);
        
    });
}

function guardarEnLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(carrito))
};

function traerDeLocalStorage(){
    const datosDeCarrito = localStorage.getItem('cart');
    return datosDeCarrito ? JSON.parse(datosDeCarrito) : [];
};

document.addEventListener('DOMContentLoaded', () => {
    renderProducto();
    renderCarrito();
    agregarAlCarrito(999, 1);
});


