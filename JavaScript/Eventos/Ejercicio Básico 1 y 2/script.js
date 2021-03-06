const caja = document.getElementById("box");
const texto = document.getElementById("text");

caja.addEventListener( "mouseenter", () => {
    caja.style.background = "green";
});

caja.addEventListener( "mouseleave", () => {
    caja.style.background = "red";
});

caja.addEventListener( "mousedown", () => {
    console.log("Has pulsado la caja!");
});

caja.addEventListener( "mouseup", () => {
    console.log("Has soltado el botón izquierdo dentro de la caja!");
});

//Ejercicio 2
texto.addEventListener( "keydown", () => {
    console.log("Has pulsado una tecla!");
});

//Para saber en concreto que tecla se ha pulsado
texto.addEventListener( "keydown", (event) => {
    console.log("La tecla " + event.key);
});

texto.addEventListener( "keyup", () => {
    console.log("Has soltado una tecla!");
});