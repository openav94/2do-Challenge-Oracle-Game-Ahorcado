const d = document;
const btnRendirse = document.querySelector(".rendirse");
var mensaje = "Adivina la palabra correcta";



function inicioPantalla(){
    //base con menos codigo
    pincel.strokeStyle ='#090160';
    pincel.lineWidth = anchoBarras;
    pincel.beginPath();
    pincel.moveTo(50, 470); //punto 1 - inicio base
    pincel.lineTo(250, 470); //punto 2 - complementa base
    pincel.lineTo(150, 430); //punto 3 - altura
    pincel.lineTo(50,470);
    pincel.stroke(); //relleno
    
}

function inicioMensaje(m){
    //Mensaje de inicio
    var txt = document.querySelector("canvas").getContext("2d");
    txt.font = "50px Arial";
    txt.fillStyle = "#045819";
    txt.fillText(m,250,250);

}

function ganasteMensaje (){
    //Mensaje Ganaste
    var txt = document.querySelector("canvas").getContext("2d");
    txt.font = "40px Arial";
    txt.fillStyle = "#045819";
    txt.fillText("Ganaste, felicidades!",50,50);

}

function perdisteMensaje(){
    //Mensaje perdiste
    var txt2 = document.querySelector("canvas").getContext("2d");
    txt2.font = "40px Arial";
    txt2.fillStyle = "red";
    txt2.fillText("Fin del juego!",400,50);

}

function escribirMensaje(letra){
    var txt3 = document.querySelector("canvas").getContext("2d");
    txt3.font = "40px Arial";
    txt3.fillStyle = "red";
    txt3.fillText(letra,400,50);
}



function soloLetras (e){
    key = e.keyCode || e.which;

    teclado = String.fromCharCode(key);

    letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (letras.indexOf(teclado) == -1){
        return false;
    }

    escribirMensaje(teclado);
    
}

window.addEventListener("load",() => {
    inicioPantalla();
    inicioMensaje(mensaje);
        
});


d.addEventListener ("keydown",(e)=>{
   soloLetras(e);
   mensaje = "";
   inicioMensaje(mensaje);
   
});


