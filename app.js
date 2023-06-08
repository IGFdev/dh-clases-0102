const express = require('express');
const path = require('path');
const fs = require('fs')
const methodOverride = require('method-override');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.set('view engine', 'ejs');

app.set('views', [
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/products'),
    path.join(__dirname, './views/users')
]);

// --- Middlewares ---
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('tiny'));
app.use(cookieParser());
app.use(expressSession({ secret: 'este es mi secreto monito123' }));

app.use((req, res, next) => {
    const ruta = req.originalUrl + '\n';
    fs.appendFileSync(path.join(__dirname, './data/rutas.txt'), ruta);
    next();
});

app.use((req, res, next) => {
    if(req.cookies.email){
        const userModel = require('./models/user');

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

app.use((req, res) => {
    res.render('404');
})

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto http://localhost:3000');
});


// Manejamos la creación de usuarios con el modelo
//      - Hasheo de contraseña
//      - Ids con uuid.v4()
// Mantener sesión iniciada
//      - Crear cookie al iniciar sesión
//      - Guardar en session el usuario al iniciar sesión
//      - Volver a guardar en sessión el usuario cuando la cookie existe
// Cerrar sesión
//      - Formulario con ruta para cerrar sesión