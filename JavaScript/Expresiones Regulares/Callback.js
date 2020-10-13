const users = [{
    id: 1,
    name: 'Abraham'
},
{
    id: 2,
    name: 'Gonzalo'
},
{
    id: 3,
    name: 'Raul'
}];

id=prompt("Introduzca un id de usuario");

const getUSer = (id, cb) =>{
    const user = users.find(user => user.id == id);
    if(!user){
        cb(`No existe el usuario con el id: ${id}`);
    }else{
        cb(user, null);
    }
}

getUSer(id, (user, err) => {
    if(err){
        returnconsole.log(err);
    }else{
        console.log(`El nombre del usuario es ${user.name}`);
    }
});