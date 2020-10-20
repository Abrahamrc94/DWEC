const buttonFilter = document.getElementById("submitFilter")
const selectFilter = document.getElementById("selectFilter");

//BUSCAMOS POR PARAMETROS
const getFilter = (alignment, gender) => {
    
    let miListaFilter = document.getElementById('tableFilter');
    //PASAMOS LOS PARAMETROS A MARVEL.PHP POR GET
    fetch(`http://192.168.33.10/Marvel/Ejercicio%202/marvel.php?gender=${gender} && alignment=${alignment}`)
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        for(superheroe of res){
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