const buttonFilter = document.getElementById("submitFilter")
const selectFilter = document.getElementById("selectFilter");

//BUSCAMOS POR PARAMETROS
const getFilter = (alignment, gender) => {
    
    //RECUPERAMOS LA TABLA Y BORRAMOS SU CONTENIDO, ANTES DE HACER ESTO MI CÓDIGO NO SUSTITUIA LOS RESULTADOS
    //IBA AÑADIENDO ELEMENTO TRAS ELEMENTO AUNQUE SE CAMBIASEN LOS FILTROS DE BUSQUEDA
    //CREANDO ASÍ UNA TABLA INFINITA SI LO DESEAMOS
    let miListaFilter = document.getElementById('tableFilter');
    miListaFilter.innerHTML="";
    //PASAMOS LOS PARAMETROS A MARVEL.PHP POR GET
    fetch(`http://192.168.33.10/Marvel/Ejercicio%202/marvel.php?gender=${gender} && alignment=${alignment}`)
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        for(superheroe of res){
            //PARA CADA SUPERHEROE VOLVEMOS A GENERAR LOS CAMPOS DE LA TABLA Y AÑADIMOS SUS DATOS
            let cabecera = document.createElement('tr');
            let thName = document.createElement('th');
            let textoCabecera = document.createTextNode('NAME');
            thName.appendChild(textoCabecera);
            cabecera.appendChild(thName);
            miListaFilter.appendChild(cabecera);
            let thName2 = document.createElement('th');
            let textoCabecera2 = document.createTextNode('ALIGNMENT');
            thName2.appendChild(textoCabecera2);
            cabecera.appendChild(thName2);
            miListaFilter.appendChild(cabecera);
            let thName3 = document.createElement('th');
            let textoCabecera3 = document.createTextNode('GENDER');
            thName3.appendChild(textoCabecera3);
            cabecera.appendChild(thName3);
            miListaFilter.appendChild(cabecera);
            let miTr = document.createElement('tr');
            let miTd = document.createElement('td');
            let miTexto = document.createTextNode(superheroe.Name);
            miTd.appendChild(miTexto);
            miTr.appendChild(miTd);
            miListaFilter.appendChild(miTr);
            miTd = document.createElement('td');
            miTexto = document.createTextNode(superheroe.Alignment);
            miTd.appendChild(miTexto);
            miTr.appendChild(miTd);
            miListaFilter.appendChild(miTr);
            miTd = document.createElement('td');
            miTexto = document.createTextNode(superheroe.Gender);
            miTd.appendChild(miTexto);
            miTr.appendChild(miTd);
            miListaFilter.appendChild(miTr);
        }        
    });
}

buttonFilter.addEventListener("click", (e) => {
    e.preventDefault();
    let radio = document.getElementById("male").checked;
    if(radio == false){
        radio = document.getElementById("female").value;
    }else{
        radio = document.getElementById("male").value;
    }
    getFilter(selectFilter.value, radio);
});