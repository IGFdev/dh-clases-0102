// Promesas
buscarDatos() // Retorna array JSON
    .then(datosJson => JSON.parse(datosJson)) // recibe array JSON, retorna array JS
    .then(datosParsed => console.log(datosParsed)) // Recibe array JS, muestra por consola
    .catch(error => console.log(error))

// async await
const trabajarDatos = async () => {
    try {
        const datosJson = await buscarDatos();
        const datosParsed = JSON.parse(await datosJson);
    
        console.log(await datosParsed);
    } catch (error) {
        console.log(error);
    }
}

trabajarDatos();