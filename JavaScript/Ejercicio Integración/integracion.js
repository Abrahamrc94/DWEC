//Muestra todos los datos del endpoint
const buttonGetAll = document.getElementById("GetAll");

buttonGetAll.addEventListener("click", () => {

    let miLista = document.getElementById('ul');

    //Al hacer click en el boton se lanza una petición mediante la api Fetch a la url del endpoint
    fetch('http://localhost:8080/api/productos')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        for(variable of res){
            //Para cada elemento encontrado añadimos un punto a la lista 
            let miPunto = document.createElement('li');
            let miValor = document.createTextNode(`Nombre: ${variable.nombre}` + ' - ' + `Precio: ${variable.precio}` + ' - ' + `Stock: ${variable.stock}`);
            let miPunto2 = document.createElement('li');
            let miValor2 = document.createTextNode(`----------------------------------------------`);
            miPunto2.appendChild(miValor2);
            miPunto.appendChild(miValor);
            miLista.appendChild(miPunto);
            miLista.appendChild(miPunto2);
        }
    });
});
//------------------------------------------------------*------------------------------------------------------------------------------
//Mostrar solo el producto con el nombre dado
const buttonGetProduct= document.getElementById("GetProduct");

buttonGetProduct.addEventListener("click", () =>{
    //Recogemos los datos y los campos del formulario
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio');
    let stock = document.getElementById('stock');

    //Buscamos el producto por el nombre introducido en el formulario
    fetch('http://localhost:8080/api/productos/' + nombre)
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        //Como el nombre ya lo tenemos rellenamos el resto de los campos con los datos que encontramos
        precio.value=res.precio;
        stock.value=res.stock;
    })
});

//-------------------------------------------------------------------------------------------------------

//Cuando clickamos obtenemos los datos de los imputs y creamos un objeto con los datos del producto
const buttonSendProduct=document.getElementById("SendProduct");

buttonSendProduct.addEventListener('click', (e) => {
    e.preventDefault();

    let inputnombre = document.getElementById('nombre').value;
    let inputprecio = document.getElementById('precio').value;
    let inputstock = document.getElementById('stock').value;

    //Hacemos la petición POST a nuestro endpoint y le pasamos los datos como JSON en el body
    fetch("http://localhost:8080/api/productos", {
            method: 'POST',
            body: JSON.stringify({
                nombre:inputnombre,
                precio: inputprecio,
                stock: inputstock
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        // .then(res => {
        //     if (!res.ok) throw Error(res.status);
        //     return res;
        // })
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
        .catch(error =>{
            throw Error(error.status);
        })
})

//---------------------------------------------------------------------------------------------------------

//Método para actualizar un producto

