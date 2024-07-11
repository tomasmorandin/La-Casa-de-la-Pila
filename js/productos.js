//ARRAYS DE PRODUCTOS//

//Pilas comunes alcalinas//
const PilasComunesAlcalinas = [
{codigo:1654, nombre: "Pila 9V X 1 Duracell", tipo: "Alcalina", marca:"Duracell", stock:195, precio:7600, imagen:"https://www.lacasadelapila.com.ar/image/cache/data/9vduracell-500x500.jpg"},
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
];   

//CARRITO HTML//
const mainCarrito = document.getElementById('mainCarrito');
const listaGuardada = document.createElement('div')
const linea = document.createElement('div')
const carritoProductos = document.createElement('div');
let totalCompra = document.createElement('div');
const divVaciar = document.createElement('div');
const divPagar = document.createElement('div');
const divPromocion = document.createElement('div')
const divError= document. createElement('div')
const tituloH2ListaGuardada = document.createElement('h2');
const tituloH2CarritoProductos = document.createElement('h2');

listaGuardada.id = 'cart-list'
carritoProductos.id= 'cart'
linea.classList= 'linea'
divError.id= 'msj_error'

mainCarrito.appendChild(tituloH2ListaGuardada);
mainCarrito.appendChild(listaGuardada);
mainCarrito.appendChild(linea)
mainCarrito.appendChild(carritoProductos);
mainCarrito.appendChild(totalCompra);
mainCarrito.appendChild(divVaciar);
mainCarrito.appendChild(divPagar);
mainCarrito.appendChild(divPromocion);
mainCarrito.appendChild(divError);

//Agrego un h2 a carritoProductos//
tituloH2CarritoProductos.innerText = "MI CARRITO";
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

let carrito = traerDeLocalStorage();

//Agregar al carrito//
function agregarAlCarrito(productoCodigo, cantidad){
const producto = todosLosProductos.find(p=> p.codigo === productoCodigo);
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
        };

guardarEnLocalStorage()
renderCarrito()
};


//Eliminar del Carrito//
function eliminarDelCarrito(productoCodigo){
    const itemCarrito = carrito.find(item => item.codigo === productoCodigo);
    
    if(itemCarrito){
        itemCarrito.cantidad -= 1;
        itemCarrito.precioTotal = itemCarrito.cantidad * itemCarrito.precio;
    } 
    
    if(itemCarrito.cantidad === 0){
        carrito = carrito.filter(item => item.codigo !== productoCodigo);
    }
    
    guardarEnLocalStorage()
    renderCarrito() 
};

//Renderizado del producto//
//Traer de json//

function renderProducto(){
    const listadoDeLosProductos = document.getElementById('cart-list');
    listadoDeLosProductos.innerHTML = '';
    
    const getData1 = async () => {
    const res = await fetch('productos.json');
    const products = await res.json();
    const product = await products

    product.forEach(p=>{
        const divProducto = document.createElement('div');
        divProducto.className='card'
        divProducto.style.width = "290px"
        divProducto.style.height = "auto"
        divProducto.innerHTML = `
                    <img class="card-img-top" src=${p.imagen} alt=${p.nombre} />
                    <div class="card-body">
                    <h5 class="card-text1">${p.nombre}</h5>
                    <p class="card-text2">Tipo: ${p.tipo}</p>
                    <p class="card-text2">Precio: $${p.precio}.-</p>
                    <p class="card-text2">Stock: ${p.stock}</p>
                    <button class="button_icon"  onclick="agregarAlCarrito(${p.codigo}, 1)">Comprar</button>
                </div>`
            listadoDeLosProductos.appendChild(divProducto);

            const boton = document.getElementsByClassName('button_icon')
            for (let i = 0; i < boton.length; i++) {
                boton[i].addEventListener('click', () => {
                    Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Agregado al carrito!`,
                    showConfirmButton: false,
                    timer: 1400,
                    timerProgressBar: true,
                    });
                });
            }; 

    });

}

getData1();

};

//Renderizado del carrito//
function renderCarrito(){
    const divCarrito = document.getElementById('cart')
    divCarrito.innerHTML = '';
    divCarrito.appendChild(tituloH2CarritoProductos);

    carrito.length === 0 && vacio()

    function vacio() {
        carritoProductos.innerHTML = `<p>(CARRITO VACIO)</p>`
        totalCompra.innerHTML = ``
        divVaciar.innerHTML = ``
        divPagar.innerHTML = ``
        return;
    }

    carrito.forEach(item => {
        const divItemCarrito = document.createElement('div');
        divItemCarrito.innerHTML= `<p>Codigo: ${item.codigo} - Nombre: ${item.nombre} - Cantidad: ${item.cantidad} - Subtotal: $${item.precioTotal}</p> 
        <button onclick="eliminarDelCarrito(${item.codigo}, 1)" class="button_icon eliminado">Eliminar</button>`;
        divCarrito.appendChild(divItemCarrito);

        const boton1 = document.getElementsByClassName('eliminado')
        for (let i = 0; i < boton1.length; i++) {
            boton1[i].addEventListener('click', () => {
                Swal.fire({
                position: "center",
                icon: "error",
                title: `Eliminado del carrito!`,
                showConfirmButton: false,
                timer: 1400,
                timerProgressBar: true,
                });
            });
        }; 

        //Calculo Total de la compra//
        
        totalCarrito = carrito.reduce ((acumulador, elemento)=> acumulador + elemento.precioTotal, 0);
        
        totalArticulos = carrito.reduce ((acumulador, elemento)=> acumulador + elemento.cantidad, 0);

        totalCompra.innerHTML = `<p>ARTICULOS: ${totalArticulos} - TOTAL: $${totalCarrito}</p>`
        totalCompra.style.textAlign="center"
        totalCompra.style.fontSize="22px"
        totalCompra.style.color="white"

        divVaciar.innerHTML = `<button id="vaciar">VACIAR CARRITO</button>`
        divVaciar.style.textAlign="center"

        const vaciar = document.getElementById('vaciar');
        vaciar.addEventListener('click', () => {
            Swal.fire({
                     position: "center",
                     icon: "info",
                     title: "Carrito vacio",
                     showConfirmButton: false,
                     timer: 1800,
                     timerProgressBar: true,
                 });
                 carrito = []
                 renderCarrito()
        })


        divPagar.innerHTML = `<button id="procesar">PROCESAR COMPRA</button>`
        divPagar.style.textAlign="center"

        const botonProcesar = document.getElementById('procesar');
        botonProcesar.addEventListener('click', () => {
            Swal.fire({
             title: "Llevando más de 3 articulos tiene -10% en la compra. Quiere finalizar la compra?",
             showDenyButton: true,
             showCancelButton: false,
             confirmButtonText: "Aceptar",
             denyButtonText: `Cancelar`,
         }).then((result) => {
             /* Read more about isConfirmed, isDenied below */
             if (result.isConfirmed) {
                
                carrito = []
                renderCarrito()

                const promocion = (totalArticulos) =>{
                    return new Promise((resolve, reject) => {
                        (totalArticulos > 3) ? resolve (`<p>Su compra es de ${totalArticulos} articulos. Obtiene -10% en su compra. TOTAL = $${totalCarrito * 0.9}
                        </p>`) : reject (`<p>Su compra de ${totalArticulos} articulo/s. No tiene descuento!</p>`)
                    })
                }

                promocion (totalArticulos)
                .then((res)=>{
                    Swal.fire(res, "Gracias por su compra!", "success");
                })
                .catch((error)=>{
                    Swal.fire(error, "Gracias por su compra!", "success");
                })

             } else if (result.isDenied) {
                 Swal.fire("Compra cancelada", "", "info");
             }
         });
        })

    });
};

//Guardar en Local//
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
    agregarAlCarrito();
    procesarCompra()
});



