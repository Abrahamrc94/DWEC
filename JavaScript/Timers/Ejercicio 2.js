setInterval(() => {
    
let fecha = new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth()+1;
let ano = fecha.getFullYear();
let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();
let confirmar;

document.getElementById("alarma").innerHTML= "Hoy es " + dia + "-" + mes + "-" + ano + " y son las " + hora + ":" + minutos + ":" + segundos;

let horaAlarma = parseInt((document.getElementById("hora")).value);
let minutosAlarma = parseInt((document.getElementById("minutos")).value);

    if(hora == horaAlarma && minutos == minutosAlarma && segundos ==00){

        confirmar=confirm("¡Alarma!");
        if(confirmar == true){
            setTimeout(()=>{
                alert("¡Alarma!");
            },120000);
        }
    }
}, 1000);