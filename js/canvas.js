var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");    
pincel.fillStyle = "#1963A8";
pincel.fillRect(0,0,1000,500); //dimension de pantalla (1000 x 500)
pincel.fillStyle = "white";
pincel.fillRect(10,10,980,480); //dimension de borde (980 x 480)

var anchoBarras = 6; //ancho de las lineas en el dibujo ahorcado



//Dibujar base de la Horca

/* Dibujo de base codigo largo
pincel.fillStyle='#090160';
pincel.beginPath();
pincel.moveTo(50, 470); //punto 1 - inicio base
pincel.lineTo(250, 470); //punto 2 - complementa base
pincel.lineTo(150, 430); //punto 3 - altura
pincel.fill(); //relleno


pincel.fillStyle='white';
pincel.beginPath();
pincel.moveTo(75, 465); //punto 1 - inicio base
pincel.lineTo(225, 465); //punto 2 - complementa base
pincel.lineTo(150, 435); //punto 3 - altura
pincel.fill(); //relleno
*/

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
    pincel.lineTo(400,70);
    pincel.stroke();

};

function dibujarBarraCuerda (){
    //Dibujar cuerda de la horca
    pincel.beginPath();
    pincel.strokeStyle = "#090160";
    pincel.lineWidth = anchoBarras;
    pincel.moveTo(397,70);
    pincel.lineTo(400,130);
    pincel.stroke();

};

function dibujarCabeza (){
    //Dibujar cabeza 
    pincel.strokeStyle = "#090160";
    pincel.lineWidth = anchoBarras;
    pincel.beginPath();
    pincel.arc(400,170,40,0,2*3.14);
    pincel.stroke();

};

function dibujarCuerpo (){
    //Dibujar cuerpo
    pincel.beginPath();
    pincel.strokeStyle = "#090160";
    pincel.lineWidth = anchoBarras;
    pincel.moveTo(400,210);
    pincel.lineTo(400,350);
    pincel.stroke();

};

function dibujarPiernaIzquierda (){
    //Dibujar pierna izquierda
    pincel.beginPath();
    pincel.strokeStyle = "#090160";
    pincel.lineWidth = anchoBarras;
    pincel.moveTo(400,350);
    pincel.lineTo(340,400);
    pincel.stroke();

};

function dibujarPiernaDerecha (){
    //Dibujar pierna derecha
    pincel.beginPath();
    pincel.strokeStyle = "#090160";
    pincel.lineWidth = anchoBarras;
    pincel.moveTo(400,350);
    pincel.lineTo(460,400);
    pincel.stroke();
    
};

function dibujarBrazoIzquierdo (){
    //Dibujar brazo izquierdo
    pincel.beginPath();
    pincel.strokeStyle = "#090160";
    pincel.lineWidth = anchoBarras;
    pincel.moveTo(400,260);
    pincel.lineTo(340,210);
    pincel.stroke();


};


function dibujarBrazoDerecho (){
    //Dibujar brazo derecho
    pincel.beginPath();
    pincel.strokeStyle = "#090160";
    pincel.lineWidth = anchoBarras;
    pincel.moveTo(400,260);
    pincel.lineTo(460,210);
    pincel.stroke();
    
}






