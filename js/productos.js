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
            
    //PRODUCTOS HTML//
    const mainProducto = document.getElementById('mainProducto');
    const stockProductos = document.createElement('div');
    const divBateriasCelulares = document.createElement('div');
    const divPilasCarbon = document.createElement('div');
    const divPilasAlcalinas = document.createElement('div');
    const divPilasRecargables = document.createElement('div');
            
    const tituloH2 = document.createElement('h2');
    const subtitle1 = document.createElement('h3');
    const subtitle2 = document.createElement('h3');
    const subtitle3 = document.createElement('h3');
    const subtitle4 = document.createElement('h3');
    stockProductos.className='stock'
        
    mainProducto.appendChild(tituloH2);
        
    mainProducto.appendChild(stockProductos)
    stockProductos.appendChild(divBateriasCelulares);
    divBateriasCelulares.appendChild(subtitle1);
        
    stockProductos.appendChild(divPilasCarbon);
    divPilasCarbon.appendChild(subtitle2);
        
    stockProductos.appendChild(divPilasAlcalinas);
    divPilasAlcalinas.appendChild(subtitle3);
        
    stockProductos.appendChild(divPilasRecargables);
    divPilasRecargables.appendChild(subtitle4);
        
    //Agrego un h2//
    tituloH2.innerText = "STOCK DE PRODUCTOS";
    tituloH2.style.textAlign = 'center'
    tituloH2.style.paddingTop = '20px'
    tituloH2.style.paddingBottom = '20px'
    tituloH2.style.fontSize = '30px'
        
    //Agrego un h3//
    subtitle1.innerText = "BATERIAS CELULARES";
    subtitle1.style.paddingTop = '20px'
    subtitle1.style.paddingBottom = '20px'
    subtitle1.style.textAlign = 'center'
    subtitle1.style.fontSize = '25px'
        
    //Agrego un h3//
    subtitle2.innerText = "PILAS COMUNES CARBON";
    subtitle2.style.paddingTop = '20px'
    subtitle2.style.paddingBottom = '20px'
    subtitle2.style.textAlign = 'center'
    subtitle2.style.fontSize = '25px'
        
    //Agrego un h3//
    subtitle3.innerText = "PILAS COMUNES ALCALINAS";
    subtitle3.style.paddingTop = '20px'
    subtitle3.style.paddingBottom = '20px'
    subtitle3.style.textAlign = 'center'
    subtitle3.style.fontSize = '25px'
        
    //Agrego un h3//
    subtitle4.innerText = "PILAS RECARGABLES";
    subtitle4.style.paddingTop = '20px'
    subtitle4.style.paddingBottom = '20px'
    subtitle4.style.textAlign = 'center'
    subtitle4.style.fontSize = '25px'

//FUNCIONES PRODUCTOS//

for (producto of bateriasCelulares){
    let listaDeProductos = `* CODIGO: ${producto.codigo} * NOMBRE: ${producto.nombre} * TIPO: ${producto.tipo} * PRECIO: $${producto.precio}`;
    const textoh4 = document.createElement('h4');
    textoh4.innerHTML = listaDeProductos;
    divBateriasCelulares.appendChild(textoh4);
};

for (producto of pilasComunesCarbon){
    let listaDeProductos = `* CODIGO: ${producto.codigo} * NOMBRE: ${producto.nombre} * TIPO: ${producto.tipo} * PRECIO: $${producto.precio}`;
    const textoh4 = document.createElement('h4');
    textoh4.innerHTML = listaDeProductos;
    divPilasCarbon.appendChild(textoh4);
};

for (producto of PilasComunesAlcalinas){
    let listaDeProductos = `* CODIGO: ${producto.codigo} *NOMBRE: ${producto.nombre} * TIPO: ${producto.tipo} * PRECIO: $${producto.precio}`;
    const textoh4 = document.createElement('h4');
    textoh4.innerHTML = listaDeProductos;
    divPilasAlcalinas.appendChild(textoh4);
};

for (producto of pilasRecargables){
    let listaDeProductos = `* CODIGO: ${producto.codigo} *NOMBRE: ${producto.nombre} * TIPO: ${producto.tipo} * PRECIO: $${producto.precio}`;
    const textoh4 = document.createElement('h4');
    textoh4.innerHTML = listaDeProductos;
    divPilasRecargables.appendChild(textoh4);
};


