
//NODOS CONTACTOS//
const mainContacto = document.getElementById('mainContacto')
let formulario = document.getElementById('form')
const nombreForm = document.getElementById('nombreForm')
const correoForm = document.getElementById('correoForm')
const telefonoForm = document.getElementById('telefonoForm')
const botonForm = document.getElementById('boton')
const divContacto = document.createElement('div');
const textoContacto = document.createElement('h4');
mainContacto.appendChild(divContacto)
const inputs = document.getElementsByClassName('input')
let contador = 0;


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    Swal.fire({
    position: "center",
    icon: "success",
    title: `Gracias ${nombreForm.value} por suscribirte!`,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
 });
});

formulario.addEventListener ('submit', (e) => {
    e.preventDefault();
    divContacto.appendChild(textoContacto)
    textoContacto.innerHTML = `Gracias ${nombreForm.value} por suscribirte!`
});

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click',() => {
        inputs[i].style.boxShadow = '0px 0px 1px 2px rgba(255, 172, 17, 0.658)';
        inputs[i].style.fontSize = '12px';
        inputs[i].style.padding = '15px 15px 15px';
    });
};

mensajeForm.addEventListener('click',() => {
    mensajeForm.style.boxShadow = '0px 0px 1px 2px rgba(255, 172, 17, 0.658)';
});

botonForm.addEventListener('mouseover',() => {
    botonForm.style.backgroundColor = '#FFAB11';
    botonForm.style.color = '#031A51';
    botonForm.style.border = '#FFAB11';
});

botonForm.addEventListener('mouseout',() => {
    botonForm.style.backgroundColor = '#031A51';
    botonForm.style.color = 'white';
});

