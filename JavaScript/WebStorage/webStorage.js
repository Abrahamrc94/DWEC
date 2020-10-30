//LOCAL STORAGE

const buttonAltaLocal = document.getElementById('altaLocal');
const buttonBorrarTodoLocal = document.getElementById('borrarTodoLocal');
const buttonBorrarUsuarioLocal = document.getElementById('borrarUsuarioLocal');
const buttonRecuperarPassLocal = document.getElementById('recuperarPassLocal');

//METODO PARA SUBIR OBJETO CON 2 PARAMETROS A LOCALSTORAGE
const upDataLocal = (usuario, pass) => {

    //CREAMOS OBJETO CON USUARIO Y PASS
    const person = {
        name: usuario,
        password: pass
    }

    //AÑADE A LOCALSTORAGE EL OBJETO PERSON, Y SU KEY SERA EL NOMBRE USUARIO
    localStorage.setItem(usuario, JSON.stringify(person));
}

//BORRAR TODO
const delDataLocal = () => {
    localStorage.clear();
}

//BORRAR POR USUARIO
const delUserLocal = (usuario) => {
    localStorage.removeItem(usuario);
}

//BUSCAR PASS
const passDataLocal = (usuario) => {
    console.log(localStorage.getItem(usuario));
}

//EVENTOS
buttonAltaLocal.addEventListener("click", (e) => {
    let usuario = document.getElementById("userLocal").value;
    let pass = document.getElementById("passLocal").value;
    e.preventDefault();
    upDataLocal(usuario, pass);
});

buttonBorrarTodoLocal.addEventListener("click", (e) => {
    e.preventDefault();
    delDataLocal();
});

buttonBorrarUsuarioLocal.addEventListener("click", (e) => {
    let usuario = document.getElementById("userLocal").value;
    let pass = document.getElementById("passLocal").value;
    e.preventDefault();
    delUserLocal(usuario, pass);
});

buttonRecuperarPassLocal.addEventListener("click", (e) => {
    let usuario = document.getElementById("userLocal").value;
    e.preventDefault();
    passDataLocal(usuario);
});

//SESSION STORAGE----------------------------------------------------------------------------------------------------

const buttonAltaSesion = document.getElementById('altaSesion');
const buttonBorrarTodoSesion = document.getElementById('borrarTodoSesion');
const buttonBorrarUsuarioSesion = document.getElementById('borrarUsuarioSesion');
const buttonRecuperarPassSesion = document.getElementById('recuperarPassSesion');

//METODO PARA SUBIR OBJETO CON 2 PARAMETROS A SESIONSTORAGE
const upDataSesion = (usuario, pass) => {

    //CREAMOS OBJETO CON USUARIO Y PASS
    const person = {
        name: usuario,
        password: pass
    }

    //AÑADE A SesionSTORAGE EL OBJETO PERSON, Y SU KEY SERA EL NOMBRE USUARIO
    sessionStorage.setItem(usuario, JSON.stringify(person));
}

//BORRAR TODO
const delDataSesion = () => {
    sessionStorage.clear();
}

//BORRAR POR USUARIO
const delUserSesion = (usuario) => {
    sessionStorage.removeItem(usuario);
}

//BUSCAR PASS
const passDataSesion = (usuario) => {
    console.log(sessionStorage.getItem(usuario));
}

//EVENTOS
buttonAltaSesion.addEventListener("click", (e) => {
    let usuario = document.getElementById("userSesion").value;
    let pass = document.getElementById("passSesion").value;
    e.preventDefault();
    upDataSesion(usuario, pass);
});

buttonBorrarTodoSesion.addEventListener("click", (e) => {
    e.preventDefault();
    delDataSesion();
});

buttonBorrarUsuarioSesion.addEventListener("click", (e) => {
    let usuario = document.getElementById("userSesion").value;
    let pass = document.getElementById("passSesion").value;
    e.preventDefault();
    delUserSesion(usuario, pass);
});

buttonRecuperarPassSesion.addEventListener("click", (e) => {
    let usuario = document.getElementById("userSesion").value;
    e.preventDefault();
    passDataSesion(usuario);
});