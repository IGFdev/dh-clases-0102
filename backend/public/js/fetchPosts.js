const fetchPosts = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');

    const results = await data.json();

    console.log(results);

    return results;
}

const addPostsToDom = async () => {
    const postsDiv = document.querySelector('.posts');

    // Al llamar a la función fetchUsers, le pasamos por parámetro la cantidad que el usuario ingresó y que obtuvimos desde el queryString
    const posts = await fetchPosts();

    posts.forEach(post => {
        const newPost = document.createElement('article');

        const title = document.createElement('h3');
        title.innerText = post.title;
        newPost.appendChild(title);

        const body = document.createElement('p');
        body.innerText = post.body;
        newPost.appendChild(body);

        newPost.style.border = '1px solid black';
        newPost.style.margin = '12px';

        const favButton = document.createElement('input');
        favButton.type = 'checkbox';
        favButton.classList.add('favButton');
        favButton.id = post.id;
        newPost.appendChild(favButton);


        postsDiv.appendChild(newPost);
    });
}


const addOnClick = async () => {
    // llamamos a la función que agrega los posteos al html para después poder agarrar los inputs
    await addPostsToDom();

    // Agarramos los checkboxes y los convertimos en array
    const allFavButtons = Array.from(document.querySelectorAll('.favButton'));
    

    allFavButtons.forEach(favBtn => {
        // Para cada checkbox le agregamos el evento onclick 
        favBtn.onclick = e => {
            // Buscamos en LS el array de favoritos actuales
            let lsFavs = localStorage.getItem('favoritos');

            // Chequeamos si ya existen favoritos
            if(lsFavs !== null) {
                // Convertimos el string a array para poder pushear
                lsFavs = lsFavs.split(',');

                // Pusheamos el ID del nuevo favorito
                lsFavs.push(e.target.id);

                // Guardamos en LS los nuevos favoritos
                localStorage.setItem('favoritos', lsFavs);
            } else {
                // Si no habían favoritos guardados previamente, guardamos directamente el id del clickeado
                localStorage.setItem('favoritos', e.target.id);
            }
        }
    });
}

addOnClick();