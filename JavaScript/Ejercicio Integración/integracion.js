//Muestra todos los datos del endpoint
const GetAll = document.getElementById("GetAll");

GetAll.addEventListener("click", () => {

    let miLista = document.getElementById('ul');

    //Al hacer click en el boton se lanza una petición mediante la api Fetch a la url del endpoint
    fetch('http://localhost:8080/api/productos')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        for(variable of res){
            //Para cada elemento encontrado añadimos un punto a la lista 
            //y usamos el método stringify para convertir cada objeto json en una cadena
            let miPunto = document.createElement('li');
            let miValor = document.createTextNode(JSON.stringify(variable));
            miPunto.appendChild(miValor);
            miLista.appendChild(miPunto);
        }
    });
    //Al final de la función deshabilito el botón para que así no se pueda crear una lista infinita
    //button.disabled = true;
});

//Mostrar solo el producto con el nombre dado
const GetProducto= document.getElementById("GetProducto");

GetProducto.addEventListener("click", () =>{
    let nombre = document.getElementById("nombre");
    fetch('http://localhost:8080/api/productos/${nombre}')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        console.log(res);
        let texto=document.createTextNode(res[0].nombre);
        nombre.appendChild(texto);
        let precio = document.getElementById("precio");
        texto=document.createTextNode(res[0].precio);
        precio.appendChild(texto);
        let stock = document.getElementById("stock");
        texto=document.createTextNode(res[0].stock);
        stock.appendChild(texto);
    })
});