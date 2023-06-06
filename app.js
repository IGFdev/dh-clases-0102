const express = require('express');
const path = require('path');
const fs = require('fs')
const methodOverride = require('method-override');
const morgan = require('morgan')

const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.set('view engine', 'ejs');

app.set('views', [
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/products')
]);

// --- Middlewares ---
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('tiny'));

app.use((req, res, next) => {
    const ruta = req.originalUrl + '\n';
    fs.appendFileSync(path.join(__dirname, './data/rutas.txt'), ruta);
    next();
});

/* --- Routers --- */
app.use(mainRoutes);
app.use('/products', productRoutes);

app.use((req, res) => {
    res.render('404');
})

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto http://localhost:3000');
});