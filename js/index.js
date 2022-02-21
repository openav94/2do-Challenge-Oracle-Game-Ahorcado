var botonIniciarJuego = document.querySelector(".btn-iniciar");
var botonNuevaPalabra = document.querySelector(".btn-agregar");

botonIniciarJuego.addEventListener("click", function(){
    window.location.href = "jugar-horca.html";
});

botonNuevaPalabra.addEventListener("click", function(){
    window.location.href = "agregar-palabra.html";
});