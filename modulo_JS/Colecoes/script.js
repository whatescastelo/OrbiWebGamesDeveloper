function getAdmins (map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Administrador'){
            admins.push(key);
        }
    }

    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Administrador');
usuarios.set('Pedro', 'Administrador');
usuarios.set('Ruan', 'Usuário');
usuarios.set('Matheus', 'Administrador');

console.log(getAdmins(usuarios));