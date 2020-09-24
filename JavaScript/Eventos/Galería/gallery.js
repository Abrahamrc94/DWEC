const gallery=document.getElementById("gallery");

//Reemplazamos el color de fondo del boton al hacer click
gallery.addEventListener("click", (event) => {
        event.target.classList.replace("gallery-item", "gallery-red");
});
