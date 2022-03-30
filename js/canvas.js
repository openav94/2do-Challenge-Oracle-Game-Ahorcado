let pantalla = document.querySelector("#ahorcado");
let pincel = pantalla.getContext("2d");    
pincel.fillStyle = "#1963A8";
pincel.fillRect(0,0,1000,500); //dimension de pantalla (1000 x 500)
pincel.fillStyle = "white";
pincel.fillRect(10,10,980,480); //dimension de borde (980 x 480)

const anchoBarras = 6; //ancho de las lineas en el dibujo ahorcado

let xLetraInicialIncorrecta = 450;
let yLetraInicialIncorrecta = 250;
let indiceLetraIncorrecta = 0;

//funcion para dibujar la base de la horca
function crearBaseAhorcado(){
    pincel.strokeStyle ='#090160';
    pincel.lineWidth = anchoBarras;
    pincel.beginPath();
    pincel.moveTo(50, 470); //punto 1 - inicio base
    pincel.lineTo(250, 470); //punto 2 - complementa base
    pincel.lineTo(150, 430); //punto 3 - altura
    pincel.lineTo(50,470);
    pincel.stroke(); //relleno
}

//funcion para limpiar el canvas
function limpiarCanvas(){
    indiceLetraIncorrecta = 0;
    pincel.clearRect (0,0,1000,500);
    pincel.clearRect(10,10,980,480);
    pantalla.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
    });

}

// funcion para crear las lineas de la palabra secreta
function crearLineaPalabra(word){
    let xInicial = 350;
    let yInicial = 470;

    for(let i=0; i < word.length; i++){
        pincel.moveTo(xInicial, yInicial); 
        pincel.lineTo(xInicial + 30, yInicial);
        pincel.stroke();
        xInicial += 40;
    }
}

//Funcion para mostrar las letras correctas en pantalla
function mostrarLetraCorrecta(letra,arregloPosicion){
    let yInicial = 465;
    arregloPosicion.forEach((posicion) => {
        let xInicial = 357;
        console.log(letra,posicion);
        xInicial += (40 * posicion);

        var txt = document.querySelector("canvas").getContext("2d");
        txt.font = "30px Arial";
        txt.fillStyle = "#045819";
        txt.fillText(letra,xInicial,yInicial);
        
        /*pincel.fillStyle = 'green';
        pincel.stroke();
        pincel.fillText(letra,xInicial,yInicial);*/

    });
}

//Funcion para mostrar la letra incorrecta
function mostrarLetraErrada(errorLetra){
    xLetraInicialIncorrecta += (30 * indiceLetraIncorrecta);

    var txt2 = document.querySelector("canvas").getContext("2d");
    txt2.font = "30px Arial";
    txt2.fillStyle = "red";
    txt2.fillText(errorLetra,xLetraInicialIncorrecta,yLetraInicialIncorrecta);

    /*pincel.fillStyle = "red";
    pincel.fillText(errorLetra, xLetraInicialIncorrecta, yLetraInicialIncorrecta);*/
    xLetraInicialIncorrecta = 450;
    indiceLetraIncorrecta++;
}

function dibujarAhorcado(aleatorio){
    switch(aleatorio){
        case 1: 
            dibujarBarraVertical();
            break;
        case 2: 
            dibujarBarraHorizontal();
            break;
        case 3: 
            dibujarBarraCuerda();
            break;
        case 4: 
            dibujarCabeza();
            break;
        case 5: 
            dibujarCuerpo();
            break;
        case 6: 
            dibujarBrazoIzquierdo();
            break;
        case 7: 
            dibujarBrazoDerecho();
            break;
        case 8: 
            dibujarPiernaIzquierda();
            break;
        case 9: 
            dibujarPiernaDerecha();
            break;
    }
}


function dibujarBarraVertical (){
    //Dibujar barra vertical
    pincel.beginPath();
    pincel.strokeStyle="#090160";
    pincel.lineWidth = anchoBarras;
    pincel.moveTo(150,430);
    pincel.lineTo(150,70);
    pincel.stroke();

};

function dibujarBarraHorizontal (){
    //Dibujar barra horizontal
    pincel.beginPath();
    pincel.strokeStyle = "#090160";
    pincel.lineWidth = anchoBarras;
    pincel.moveTo(147,70);
    pincel.lineTo(300,70);
    pincel.stroke();

};

function dibujarBarraCuerda (){
    //Dibujar cuerda de la horca
    pincel.beginPath();
    pincel.strokeStyle = "#090160";
    pincel.lineWidth = anchoBarras;
    pincel.moveTo(297,70);
    pincel.lineTo(297,130);
    pincel.stroke();

};

function dibujarCabeza (){
    //Dibujar cabeza 
    pincel.strokeStyle = "#090160";
    pincel.lineWidth = anchoBarras;
    pincel.beginPath();
    pincel.arc(297,170,40,0,2*3.14);
    pincel.stroke();

};

function dibujarCuerpo (){
    //Dibujar cuerpo
    pincel.beginPath();
    pincel.strokeStyle = "#090160";
    pincel.lineWidth = anchoBarras;
    pincel.moveTo(297,210);
    pincel.lineTo(297,350);
    pincel.stroke();

};

function dibujarBrazoIzquierdo (){
    //Dibujar brazo izquierdo
    pincel.beginPath();
    pincel.strokeStyle = "#090160";
    pincel.lineWidth = anchoBarras;
    pincel.moveTo(297,260);
    pincel.lineTo(340,210);
    pincel.stroke();

};


function dibujarBrazoDerecho (){
    //Dibujar brazo derecho
    pincel.beginPath();
    pincel.strokeStyle = "#090160";
    pincel.lineWidth = anchoBarras;
    pincel.moveTo(297,260);
    pincel.lineTo(250,210);
    pincel.stroke();
    
}

function dibujarPiernaIzquierda (){
    //Dibujar pierna izquierda
    pincel.beginPath();
    pincel.strokeStyle = "#090160";
    pincel.lineWidth = anchoBarras;
    pincel.moveTo(297,350);
    pincel.lineTo(340,400);
    pincel.stroke();

};

function dibujarPiernaDerecha (){
    //Dibujar pierna derecha
    pincel.beginPath();
    pincel.strokeStyle = "#090160";
    pincel.lineWidth = anchoBarras;
    pincel.moveTo(297,350);
    pincel.lineTo(250,400);
    pincel.stroke();
    
};

//funcion para mostrar mensaje perdedor
function mostrarMensajePerdedor(palabraSecreta){
    let msjError = "TU PERDISTE!!!!";
    palabraSecreta = palabraSecreta.join('');
    let palabra = 'LA PALABRA ERA: ' + palabraSecreta;
    xInicial = 550;
    yInicial = 150;
       
    var txt = document.querySelector("#ahorcado").getContext("2d");
    txt.font = "30px Arial";
    txt.fillStyle = "red";
    txt.fillText(msjError,xInicial,yInicial);

    var txt1 = document.querySelector("#ahorcado").getContext("2d");
    txt1.font = "30px Arial";
    txt1.fillStyle = "red";
    txt1.fillText(palabra,xInicial - 100, yInicial + 40);
}

//funcion para mostrar mensjae al ganador
function mostrarMensajeGanador(){
    let msjGanador = "ACABAS DE GANAR";
    let msjGanador2 = "FELICIDADES!!!";
    xInicial = 550;
    yInicial = 150;

    var txt = document.querySelector("#ahorcado").getContext("2d");
    txt.font = "40px Arial";
    txt.fillStyle = "green";
    txt.fillText(msjGanador,xInicial,yInicial);

    var txt1 = document.querySelector("#ahorcado").getContext("2d");
    txt1.font = "40px Arial";
    txt1.fillStyle = "green";
    txt1.fillText(msjGanador2,xInicial + 45 ,yInicial + 45);
}





