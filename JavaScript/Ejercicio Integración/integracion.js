//Muestra todos los datos del endpoint
const buttonGetAll = document.getElementById("GetAll");

buttonGetAll.addEventListener("click", (e) => {
    e.preventDefault();

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
    })
    .catch(error => {
        // Si nos devuelve un 404 es que no existen productos
        if (error.status == 404) {
            alert("No existen productos");
            // Cualquier otro error es inesperado
        } else {
            alert("Se ha producido un error inesperado");
        }
    });
});
//------------------------------------------------------*------------------------------------------------------------------------------
//Mostrar solo el producto con el nombre dado
const buttonGetProduct= document.getElementById("GetProduct");

buttonGetProduct.addEventListener("click", (e) =>{
    e.preventDefault();

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
    // Vamos a controlar los errores
    .catch(res => {
        // Si nos devuelve un 404 es que no existe ningún producto con el nombre introducido
        if (error.status == 404) {
            alert(`No existe ningún producto con el nombre introducido`);
            // Cualquier otro error es inesperado
        } else {
            alert("Se ha producido un error inesperado");
        }
    });
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
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            alert("El producto se ha añadido de forma correcta");
        })
        // Si no se puede crear el producto
        .catch(error => {
            // Si el error es el 409 quiere decir que ya existe un producto con ese nombre
            if (error.status == 409) {
                alert('Ya existe un producto con ese nombre');
                // Cualquier otro error es inesperado
            } else {
                alert('Se ha producido un error inesperado.');
            }
        })
})

//---------------------------------------------------------------------------------------------------------

//Método para actualizar un producto

const buttonUpdateProduct=document.getElementById("UpdateProduct");

buttonUpdateProduct.addEventListener('click', (e) => {
    e.preventDefault();

    //Recuperamos el nombre, si no existe mostramos el mensaje de error
    let nombre=document.getElementById("nombre").value;

    if (nombre == "") {
        alert("Debe introducir un nombre");
    } else {
        // Comprobamos el valor del todos los campos. Si no se ha introducido nada almacenamos "null"
        let precio = document.getElementById("precio").value;
        if(precio==""){
            precio=null;
        }
        let stock = document.getElementById("stock").value;
        if(stock ==""){
            stock=null;
        }

        //Hacemos la petición PUT a nuestro endpoint y le pasamos los datos como JSON en el body
    fetch("http://localhost:8080/api/productos", {
        method: 'PUT',
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            stock: stock
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        // Si se actualiza el producto mostramos un mensaje
        alert("El producto se ha actualizado de forma correcta");
    })
    // Si no se puede actualizar el producto
    .catch(error => {
        // Si devuelve el error 404 es que no existe ningún producto con ese nombre
        if (error.status == 404) {
            alert(`No existe ningún producto con el nombre ${nombre}`);
            // Cualquier otro error es inesperado
        } else {
            alert('Se ha producido un error inesperado.');
        }
    })
}
});


//--------------------------------------------------------------------------------------------------------------
//Método para borrar un  producto
const buttonDeleteProduct=document.getElementById("DeleteProduct");


buttonDeleteProduct.addEventListener('click', (e) => {

    e.preventDefault();

    //Recuperamos el nombre, si no existe mostramos el mensaje de error
    let nombre=document.getElementById("nombre").value;

    if (nombre == "") {
        alert("Debe introducir un nombre");
    } else {
        // Comprobamos el valor del todos los campos. Si no se ha introducido nada almacenamos "null"
        let precio = document.getElementById("precio").value;
        if(precio==""){
            precio=null;
        }
        let stock = document.getElementById("stock").value;
        if(stock ==""){
            stock=null;
        }

        //Hacemos la petición PUT a nuestro endpoint y le pasamos los datos como JSON en el body
    fetch("http://localhost:8080/api/productos", {
        method: 'DELETE',
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            stock: stock
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        // Si se borra el producto mostramos un mensaje
        alert("El producto se ha borrado de forma correcta");
    })
    // Si no se puede borrar el producto
    .catch(error => {
        // Si devuelve el error 404 es que no existe ningún producto con ese nombre
        if (error.status == 404) {
            alert(`No existe ningún producto con el nombre ${nombre}`);
            // Cualquier otro error es inesperado
        } else {
            alert('Se ha producido un error inesperado.');
        }
    })
}
})
