var botonGuardar = document.querySelector(".btn-guardar");
var botonCancelar = document.querySelector(".btn-cancelar");
var botonIniciarJuego = document.querySelector(".btn-iniciar2");
var nuevaPalabra = document.querySelector("#nueva-palabra");
var nuevaPalabra2 = document.querySelector(".inp-palabra");

botonCancelar.addEventListener("click", function(){
    nuevaPalabra.value = "";   
    window.location.href = "index.html";
})

botonIniciarJuego.addEventListener("click", function(){ 
    window.location.href = "jugar-horca.html";
})

/*botonGuardar.addEventListener("click", function(){
    // Validar la nueva palabra a ingresar
    var errores = nuevaPalabra.length;

    if (errores.length < 0){
        mostrarMensajesErrores(errores);
        return;
    }

}):*/

console.log(nuevaPalabra);
console.log(nuevaPalabra2);

function validarPalabraNueva (palabra){
    var errores = []

    if (nuevaPalabra.length == 0){
        error.push("El campo de nueva palabra no puede estar vació");
    }
    if (nuevaPalabra.length > 7){
        error.push("No puede ingresar una palabra con mas de 8 caracteres");
    }

    return errores;

}

function mostrarMensajesErrores (errores){
    var ul = document.querySelector("");
    ul.innerHTML = "";

    error.forEach (function (error){
        var li = document.createElement ("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}
