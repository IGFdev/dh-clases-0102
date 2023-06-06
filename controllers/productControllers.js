const path = require('path');
const expressValidator = require('express-validator');

const productModel = require('../models/product');

const controllers = {
    // @GET /products 
    getProducts: (req, res) => {
        const productos = productModel.findAll();

        //     localhost:3000/products?nombre=nacho&apellido=garcia

        console.log(req.query.nombre);

        res.render('productList', {
            title: 'Productos',
            productos
        });
    },

    // @GET /products 
    getUpdate: (req, res) => {
        const id = Number(req.params.id);

        const productoAModificar = productModel.findById(id)

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
        const productoAMostrar = productModel.findById(id);

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

        productModel.deleteById(id);

        res.redirect('/products');
    },

    updateProduct: (req, res) => {
        const id = Number(req.params.id);
        const nuevosDatos = req.body;

        productModel.updateById(id, nuevosDatos);

        res.redirect('/products');
    },

    // @GET /products/cart
    getCart: (req, res) => {
        res.render('cart', { title: 'Carrito' });
    },

    // @GET /products/create
    getCreate: (req, res) => {
        res.render('createProduct', { errors: [], values: {} });
    },

    // @POST /products
    postProduct: (req, res) => {
        const validation = expressValidator.validationResult(req);

        if(validation.errors.length > 0){
            return res.render('createProduct', { errors: validation.errors, values: req.body });
        }

        let datos = req.body;

        datos.price = Number(datos.price);
        /* datos.img = '/imgs/products/' + req.file.filename; */
        datos.imgs = req.files.map(file => '/imgs/products' + file.filename);

        productModel.createOne(datos);

        res.redirect('/products');
    }
}

module.exports = controllers;