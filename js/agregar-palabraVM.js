let cerrar2 = document.querySelectorAll(".cerrar2")[0];
let abrir2 = document.querySelectorAll(".btn-agregar-palabra")[0]; /*CTA*/
let modal2 = document.querySelectorAll(".modal2")[0];
let modalC2 = document.querySelectorAll(".contenedor-modal2")[0];
let guardar = document.querySelectorAll("#btn-guardar")[0];
let palabra = document.querySelectorAll("#nueva-palabra")[0];

//Eventos para la ventana MODAL
abrir2.addEventListener("click", function(e){
    e.preventDefault();
    modalC2.style.opacity = "1";
    modalC2.style.visibility = "visible";
    modal2.classList.toggle("cerrar-modal2");
});

cerrar2.addEventListener("click", function(){
    modal2.classList.toggle("cerrar-modal2");
    setTimeout(function(){
        modalC2.style.opacity = "0";
        modalC2.style.visibility = "hidden";      
    },800);
});

window.addEventListener("click", function(e){
    if(e.target == modalC){
        modal2.classList.toggle("cerrar-modal2");
        setTimeout(function(){
            modalC2.style.opacity = "0";
            modalC2.style.visibility = "hidden";      
        },800);
    }
});


//Evento de cuando le den click a Guardar
guardar.addEventListener("click", () => {
    agregarPalabra();
})


function agregarPalabra(){
    palabrasSecretas.push(palabra.value);
    alert("La Nueva palabra ha sido guardada correctamente y esta palabra es: "+ palabra.value)
    palabra.value = " "; 
}





