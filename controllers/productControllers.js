const path = require('path');

let productos = [
    {
        id: 1,
        title: 'Licuadora',
        price: 4500
    },
    {
        id: 2,
        title: 'Tostadora',
        price: 4501
    },
    {
        id: 3,
        title: 'Heladera',
        price: 4502
    }
];

const controllers = {
    // @GET /products 
    getProducts: (req, res) => {

        res.render('productList', {
            title: 'Productos',
            productos
        });
    },

    // @GET /products 
    getUpdate: (req, res) => {
        const id = Number(req.params.id);

        const productoAModificar = productos.find(productoActual => productoActual.id === id);

        if (!productoAModificar) {
            // Con el return detenemos la ejecución del controller, y con el res.send enviamos un mensaje de error
            // *queremos detener la ejecución para que no se ejecute el otro res.render (la otra respuesta)
            return res.send('error de id');
        }

        res.render('updateProduct', { product: productoAModificar });
    },

    // @GET /products/:id/detail
    getProductDetail: (req, res) => {
        // Agarramos el ID que nos pasaron por parámetro de ruta, y lo convertimos en number
        const id = Number(req.params.id);

        // Buscamos en el array de productos, el producto cuyo ID coincida con el que nos enviaron por params
        const productoAMostrar = productos.find(productoActual => productoActual.id === id);

        // Si el producto no se encuentra (su id es inválido)
        if (!productoAMostrar) {
            // Con el return detenemos la ejecución del controller, y con el res.send enviamos un mensaje de error
            // *queremos detener la ejecución para que no se ejecute el otro res.render (la otra respuesta)
            return res.send('error de id');
        }

        // Renderizamos la vista productDetail, y le pasamos los datos del producto solicitado
        res.render('productDetail', { title: 'Detalle', product: productoAMostrar });
    },

    // @DELETE /products/:id/delete
    deleteProduct: (req, res) => {
        const id = Number(req.params.id);

        const nuevosProductos = productos.filter(productoActual => productoActual.id !== id);

        productos = nuevosProductos;

        res.redirect('/products');
    },

    updateProduct: (req, res) => {
        const id = Number(req.params.id);
        const nuevosDatos = req.body;

        console.log(nuevosDatos)

        // Con el find, buscamos el objeto cuyo id sea el indicado por params
        const productoAActualizar = productos.find(productoActual => productoActual.id === id);

        // Con el indexOf, buscamos el índice en el cual se encuentra el objeto entero del producto a modificar
        const indice = productos.indexOf(productoAActualizar);

        // Actualizamos los datos en el indice correspondiente del array, con los datos que nos pasaron en el formulario del update
        productos[indice].title = nuevosDatos.title;
        productos[indice].price = nuevosDatos.price;

        res.redirect('/products');
    },

    // @GET /products/cart
    getCart: (req, res) => {
        res.render('cart', { title: 'Carrito' });
    },

    // @GET /products/create
    getCreate: (req, res) => {
        res.render('createProduct');
    },

    // @POST /products
    postProduct: (req, res) => {
        let datos = req.body;

        datos.id = productos.length + 1;

        productos.push(datos);

        res.redirect('/products');
    }
}

module.exports = controllers;