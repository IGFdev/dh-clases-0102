const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const model = {
    // Ruta del archivo JSON
    route: '../data/users.json',

    // Traer todos los usuarios
    findAll: function () {
        const usersJSON = fs.readFileSync(path.join(__dirname, this.route), 'utf-8');

        const users = JSON.parse(usersJSON);

        return users;
    },

    // Traer un usuario según su email
    findByEmail: function (email) {
        const users = this.findAll();

        let searched = users.find(user => user.email === email);

        if (!searched) {
            searched = null;
        }

        return searched;
    },

    // Agregar un usuario nuevo
    createOne: function (newUser) {
        // Buscamos todos los usuarios
        let users = this.findAll();

        // Le damos el ID al usuario nuevo        
        newUser.id = uuid.v4();

        // Agregamos el usuario nuevo al array original
        users.push(newUser);

        // Convertimos a JSON el array
        const usersJSON = JSON.stringify(users);

        // Sobreescribimos el JSON
        fs.writeFileSync(path.join(__dirname, this.route), usersJSON);
    }
}

module.exports = model;