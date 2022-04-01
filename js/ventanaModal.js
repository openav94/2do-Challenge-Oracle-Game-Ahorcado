let cerrar = document.querySelectorAll(".cerrar")[0];
let abrir = document.querySelectorAll(".btn-ayuda")[0]; /*CTA*/
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".contenedor-modal")[0];



//Eventos para la ventana MODAL
abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("cerrar-modal");
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("cerrar-modal");
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";      
    },800);
});

window.addEventListener("click", function(e){ 
    if(e.target == modalC){
        modal.classList.toggle("cerrar-modal");
        setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";      
        },800);
    }
});

