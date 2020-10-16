const button = document.getElementById("submit");


//CREAMOS FUNCION PARA RECUPERAR DATOS DE LA BBDD
const getData = (id) => {
    let miLista = document.getElementById('table');
    //BUSCAMOS EN EL ARCHIVO MARVEL.PHP
    fetch('http://192.168.33.10/Marvel/marvel.php')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        if(select.length <= 0){
            for(superheroe of res){
                let option = document.createElement('option');
                //CREAMOS Y APLICAMOS VALOR AL ATRIBUTO VALUE CON EL ID DE CADA SUPERHEROE
                option.setAttribute('value', superheroe.ID);
                //AÑADIMOS AL SELECT
                let nombre = document.createTextNode(superheroe.Name);
                option.appendChild(nombre);
                select.appendChild(option);   
            }
        }else{
            //BUSCAMOS POR ID
            fetch(`http://192.168.33.10/Marvel/marvel.php?id=${id}`)
            .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
            .then(res => res.json())
            .then(res => {
                let miTr = document.createElement('tr');
                let miTd = document.createElement('td');
                let miTexto = document.createTextNode(res[0].Name);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
                miTd = document.createElement('td');
                miTexto = document.createTextNode(res[0].Gender);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
                miTd = document.createElement('td');
                miTexto = document.createTextNode(res[0].Fighting_Skills);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
            });
        }
    });
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    getData(select.value);
});