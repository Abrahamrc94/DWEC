//Primero recuperamos los datos de los botones

const botonRegistrar = document.getElementById("submit");
const botonBorrar = document.getElementById("borrar");
const botonBusaUser = document.getElementById("buscaUser");
const botonBuscaLogin = document.getElementById("ultimoLogin");


//Recuperamos los datos de los campos y validamos la contraseña al hacer click
botonRegistrar.addEventListener('click', (e) => {
    e.preventDefault();
    let nickname = document.getElementById("nickname").value;
    let nombre = document.getElementById("nombre").value;
    let password = document.getElementById("password").value;
    let dni = document.getElementById("dni").value;
    let edad = document.getElementById("edad").value;

    validatePasswordModerate(password);
    altaUser(nickname, nombre, password, dni, edad);


});
//Expresión regular para validar que la password tiene un nivel de complejidad moredado
const validatePasswordModerate = (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
    if(passwordRegex.test(password)) {
        console.log('password válido')
    }
    else {
        alert('password incorrecto')
    }
}
//Función para dar de alta a usuarios
const altaUser = (nickname, nombre, password, dni, edad) => {
     
    const usuario={
        nickname: nickname,
        nombre: nombre,
        password: password,
        dni: dni,
        edad: edad
    }

     //Añade a localStorage el objeto usuario y su key será el nickname
     localStorage.setItem(nickname, JSON.stringify(usuario));
};

//Borra los datos 
botonBorrar.addEventListener('click', (e) =>{

    e.preventDefault();
    localStorage.clear();
});

//Busca al usuario con el nickname introducido
botonBusaUser.addEventListener('click', (e) =>{
    e.preventDefault();

    let miTabla = document.getElementById("table");

    
    //Convertimos el usuario a tipo objeto
    let nickname = document.getElementById("nickname").value;
    let user = JSON.parse(localStorage.getItem(nickname));
    if(user==null){
        alert("No hay ningún usuario con ese nickname");
    }else {
        let miTr = document.createElement('tr');
        let miTd = document.createElement('td');
        let miText = document.createTextNode(nickname);
        miTd.appendChild(miText);
        miTr.appendChild(miTd);
        miTabla.appendChild(miTr);
        miTd = document.createElement('td');
        miText = document.createTextNode(user.nombre);
        miTd.appendChild(miText);
        miTr.appendChild(miTd);
        miTabla.appendChild(miTr);
        miTd = document.createElement('td');
        miText = document.createTextNode(user.dni);
        miTd.appendChild(miText);
        miTr.appendChild(miTd);
        miTabla.appendChild(miTr);
        miTd = document.createElement('td');
        miText = document.createTextNode(user.edad);
        miTd.appendChild(miText);
        miTr.appendChild(miTd);
        miTabla.appendChild(miTr);
    
    }
    
});

//Busca al usuario con el último login registrado
botonBuscaLogin.addEventListener('click', (e) =>{

    e.preventDefault();
    alert("Esta funcionalidad aun no ha sido implementada");
});