const express = require('express');
const path = require('path');
const fs = require('fs')
const methodOverride = require('method-override');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const { Club, Jugador } = require('./database/models');

const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const jugadorRoutes = require('./routes/jugadorRoutes');
const clubRoutes = require('./routes/clubRoutes');
const apiJugadorRoutes = require('./routes/api/jugadoresRoutes');

const app = express();

app.set('view engine', 'ejs');

app.set('views', [
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/products'),
    path.join(__dirname, './views/users'),
    path.join(__dirname, './views/jugadores'),
]);

/* --- Middlewares --- */
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('tiny'));
app.use(cookieParser());

app.use(expressSession({
    secret: 'este es mi secreto monito123',
    resave: false,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    const ruta = req.originalUrl + '\n';
    fs.appendFileSync(path.join(__dirname, './data/rutas.txt'), ruta);
    next();
});

app.use((req, res, next) => {
    if (req.cookies.email) {
        const userModel = require('./models/User');

        const user = userModel.findByEmail(req.cookies.email);

        delete user.id;
        delete user.password;

        req.session.user = user;
    }

    next();
});

/* --- Routers --- */
app.use(mainRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/jugadores', jugadorRoutes)
app.use('/clubes', clubRoutes);
app.use('/api/jugadores', apiJugadorRoutes)


/* --- 404 --- */
app.use((req, res) => {
    res.render('404');
})

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto http://localhost:3000');
});


/* 
    Una API REST es una API que devuelve JSONs
        Comunica servidor y cliente
        Uno hace una solicitud y el otro la responde con JSON
        Se comunican mediante endpoints (las diferentes rutas), y podemos especificar el pedido mediante queryString en cada endpoint
        Para usarlas, sí o sí, hay que ver la documentación previamente
*/