const d = document;
let btnRendirse = document.querySelector(".rendirse");
let btnIniciarJuego = document.querySelector(".iniciar-juego");
var mensaje = "";
let palabrasSecretas = ['JAVA','JAVASCRIPT','PROGRAMAR','CODE','PROGRAMACION', 'MEXICO','REPUBLICA','DOMINICANA','COMPUTADORA','SOFTWARE','ALURA','BRASIL','ORACLE','CSS','ABACO','MONITOR','CASE','DISCO','MALWARE','VIRUS','BIT','BYTE','PHYTON','DATOS'];
const posibilidades = 8;
let aleatorio = 0;
let palabraSecreta;
let posicionLetra = [];
let validarLetras = [];
let errorLetras = [];
let finJuego = false;

//Evento clic btnIniciarJuego
btnIniciarJuego.addEventListener("click", () => {
    iniciarJuego(); // funcion creada
});


//Funcion para iniciar el juego
function iniciarJuego (seleccionarPalabra = null){
    finJuego = false;
    resetearJuego();  //funcion creada
    limpiarCanvas(); //funcion creada en canvas.js
    crearBaseAhorcado(); //funcion creada en canvas.js
    palabraSecreta = seleccionarPalabra ?? elegirPalabraAleatoria(); //funcion creada
    crearLineaPalabra(palabraSecreta);  //funcion creada en canvas.js
    document.addEventListener("keyup",detectarTeclaPresionada); //funcion creada
    
}

//Funcion para generar el numero aleatorio
function generarNumeroAleatorio (maxArray){
    return Math.floor(Math.random()*maxArray);

}

// Funcion para seleccionar la palabra aleatoria
function elegirPalabraAleatoria(){
    let indiceAleatorio = generarNumeroAleatorio(palabrasSecretas.length);
    return palabrasSecretas[indiceAleatorio].split("");

}

//Funcion para detectar la tecla presionada
function detectarTeclaPresionada (e){
    if(!validarTecla(e.keyCode)){    //funcion creada
        return;
    }
    let letraBien = e.key.toUpperCase();

    if (letraEnArreglo (letraBien,validarLetras) || letraEnArreglo(letraBien, errorLetras)){
        return;
    }
    let estadoBandera = letraEnPalabraSecreta(letraBien); //funcion creada
    if (!estadoBandera){
        malElegida (letraBien);
        mostrarLetraErrada (letraBien); //Funcion en canvas.js
        dibujarAhorcado (aleatorio); //Funcion en canvas.js
        validarPerdedor();
        return;

    }
    mostrarLetraCorrecta (letraBien, posicionLetra); //funcion en canvas.js
    validarGanador();

}

//Funcion para verificar si la letra pertenece a las letras permitidas
function validarTecla(letraCodigo){
    if (letraCodigo >= 65 && letraCodigo <= 90 || letraCodigo == 186){
        return true;

    }
}

/*Funcion para comprobar si la letra esta en la palabra secreta.
En caso de que la letra esté en la palabra secreta.
Guarda la letra y la posición en la matriz.*/
function letraEnPalabraSecreta (letra){
    let bandera = false;
    posicionLetra = [];
    palabraSecreta.forEach((element,index)=> {
        if (element == letra){
            bandera = true;
            validarLetras.push(element);
            posicionLetra.push(index);

        }
    })
    return bandera;   

}

//Funcion para confirmar si la letra esta en el arreglo
function letraEnArreglo (letra, array){
    if (array.indexOf(letra) == -1){
        return false;
    }
        return true;

}

//Función para incrementar la vuelta y guardar la letra equivocada.
function malElegida (letra){
    aleatorio++;
    errorLetras.push(letra);

}

//Funcion para validar que el usuario ha perdido
function validarPerdedor () {
    if (aleatorio > posibilidades){
        finJuego = true;
        mostrarMensajePerdedor(palabraSecreta); //funcion en canvas.js
        eliminarTeclaArriba();

    }
}

//Funcion para validar si el usuario gano
function validarGanador (){
    if (validarLetras.length == palabraSecreta.length){
        finJuego = true;
        mostrarMensajeGanador(); //funcion en canvas.js
        eliminarTeclaArriba();
    }
}

//Funcion para eliminar el evento KeyUp
function eliminarTeclaArriba(){
    document.removeEventListener('keyup',detectarTeclaPresionada);

}

//Funcion para reiniciar variables
function resetearJuego(){
    aleatorio = 0;
    palabraSecreta = [];
    posicionLetra = [];
    validarLetras = [];
    errorLetras = [];
    finJuego = false;
    
}


/*function inicioMensaje(m){
    //Mensaje de inicio
    var txt = document.querySelector("canvas").getContext("2d");
    txt.font = "50px Arial";
    txt.fillStyle = "#045819";
    txt.fillText(m,200,250);

}*/
