const tiempo = setInterval(() =>{
    
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth()+1;
    let ano = fecha.getFullYear();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    document.getElementById("texto").innerHTML= "Hoy es " + dia + "-" + mes + "-" + ano + " y son las " + hora + ":" + minutos + ":" + segundos;

},1000);