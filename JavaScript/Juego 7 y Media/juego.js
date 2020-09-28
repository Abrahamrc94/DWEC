let arrayPalos=['Oros', 'Copas', 'Espadas', 'Bastos'];
let puntosTotales=0;
let puntosJugador=0;
let puntosMaquina=0;

let filaJugador=document.getElementById("tr");
let tablaJugador=document.getElementById("td");
let tablaMaquina=document.getElementById("tablaMaquina");
let filaMaquina=document.getElementById("trMaquina");

const img2=document.getElementById("img2");
const img3=document.getElementById("img3");

const jugador = () =>{
    let random = parseInt((Math.random()*10)+1);
    let palos = parseInt(Math.random()*4);

    document.getElementById("img2-1").src='imagenes/imagenes/' + random + '' + arrayPalos[palos]+'.jpg';

    let imagen=document.createElement("img");
    let columna=document.createElement("td");

    imagen.src='imagenes/imagenes/' + random + '' + arrayPalos[palos]+'.jpg';
    imagen.width=65;

    if(random<8){
        puntosJugador=puntosJugador+random;
    }else{
        puntosJugador=puntosJugador+0.5;
    }
    document.getElementById("pointsJugador").innerHTML=puntosJugador;
    if(puntosJugador>=7.5){
        final();
    }
}

img2.addEventListener("click", jugador);



const final = () =>{
    document.getElementById("winner").innerHTML="Gana la banca";
    img2.removeEventListener("click", player);
}