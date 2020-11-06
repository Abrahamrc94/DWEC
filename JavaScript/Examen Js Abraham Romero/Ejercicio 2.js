//Recuperamos los botones

const button = document.getElementById("submit");
const select = document.getElementById('select');


//Recogemos los datos de todos los usuarios o de un usuario por id en el select y los añadimos a la tabla

const getData = (id) => {
    let miLista = document.getElementById('table');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        if(select.length <= 0){
            for(person of res){
                let option = document.createElement('option');
                option.setAttribute('value', person.id);
                let nombre = document.createTextNode(person.name);
                option.appendChild(nombre);
                select.appendChild(option);
            }
        }else{
            fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
            .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
            .then(res => res.json())
            .then(res =>{
                let miTr = document.createElement('tr');
                let miTd = document.createElement('td');
                let miTexto = document.createTextNode(res[0].id);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
                miTd = document.createElement('td');
                miTexto = document.createTextNode(res[0].name);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
                miTd = document.createElement('td');
                miTexto = document.createTextNode(res[0].username);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
                miTd = document.createElement('td');
                miTexto = document.createTextNode(res[0].email);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
                miTd = document.createElement('td');
                direccion = res[0].address;
                miTexto = document.createTextNode(direccion.city);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
                miTd = document.createElement('td');
                direccion = res[0].address;
                miTexto = document.createTextNode(direccion.street);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
                miTd = document.createElement('td');
                direccion = res[0].address;
                miTexto = document.createTextNode(direccion.suite);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
                miTd = document.createElement('td');
                direccion = res[0].address;
                miTexto = document.createTextNode(direccion.zipcode);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
                miTd = document.createElement('td');
                miTexto = document.createTextNode(res[0].phone);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
            })
        }
    })
};

//Buscamos al usuario con el id seleccionado al pulsar el boton y cargamos los datos en el capo de tipo select
button.addEventListener('click', (e) => {
    e.preventDefault();
    getData(select.value);
});