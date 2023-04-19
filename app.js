const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    const rutaCompleta = path.join(__dirname, './views/index.html');

    res.sendFile(rutaCompleta);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000 🚀');
});