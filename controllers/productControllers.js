const path = require('path');

const controllers = {
    getProducts: (req, res) => {
        const productos = [
            {
                id: 1,
                name: 'Licuadora',
                price: 4500,
                img: '/imgs/producto1.jpg',
                icon: 'fa-bed'
            },
            {
                id: 2,
                name: 'Tostadora',
                price: 4501,
                img: '/imgs/producto1.jpg'
            },
            {
                id: 3,
                name: 'Heladera',
                price: 4502,
                img: '/imgs/producto1.jpg'
            },
        ];

        res.render('productList', { 
            title: 'Productos', 
            productos 
        });
    },

    getProductDetail: (req, res) => {
        res.render('productDetail', { title: 'Detalle' });
    },

    getCart: (req, res) => {
        res.render('cart', { title: 'Carrito' });
    }
}

module.exports = controllers;