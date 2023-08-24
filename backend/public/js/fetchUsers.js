// Lo único que hace es retornar el array de usuarios que consiguió de la API
const fetchUsers = async (cantidad) => {
    // La función recibe una cantidad, y fectchea esa cantidad de usuarios
    const data = await fetch(`https://randomuser.me/api/?results=${cantidad}`);
    
    const resultado = await data.json();
    
    return resultado.results;
}

// Lo único que hace es agregar los usuarios fetcheados al HTML
const addUsersToDom = async () => {
    const usersDiv = document.querySelector('.users');

    // URLSearchParams recibe el queryString y nos ayuda a buscar los datos dentro del mismo
    const queryParams = new URLSearchParams(window.location.search);
    // Mediante el get, accedemos al valor de la variable cantidad que se encuentra dentro del queryString
    const cantidad = queryParams.get('cantidad');
    // Al llamar a la función fetchUsers, le pasamos por parámetro la cantidad que el usuario ingresó y que obtuvimos desde el queryString
    const users = await fetchUsers(cantidad);

    users.forEach(user => {
        const newUser = document.createElement('article');

        const username = document.createElement('h3');
        username.innerText = `${user.name.first} ${user.name.last}`;
        newUser.appendChild(username);

        const profileImg = document.createElement('img');
        profileImg.setAttribute('src', user.picture.large);
        profileImg.style.borderRadius = '50%'
        newUser.appendChild(profileImg);

        usersDiv.appendChild(newUser);
    });
}

addUsersToDom();