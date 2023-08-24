const express = require('express');
const path = require('path');
const multer = require('multer');
const validationMiddlewares = require('../middlewares/validations');
const authMiddlewares = require('../middlewares/authMiddlewares');

const productControllers = require('../controllers/productControllers');

const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/imgs/products');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

const pepitoware = (req, res, next) => {
    console.log('Se usó la ruta!!!');
    next();
}

// @GET /products 
router.get('/', authMiddlewares.allowSignedIn, productControllers.getProducts);

// @POST /products
router.post('/', [authMiddlewares.allowAdmin, validationMiddlewares.validateCreateProduct, upload.any('img')], productControllers.postProduct);

// @GET /products/create
router.get('/create', authMiddlewares.allowAdmin, productControllers.getCreate);

// @GET /products/:id/detail ---> /products/5/detail
router.get('/:id/detail', pepitoware, productControllers.getProductDetail);

// @DELETE /products/:id/delete ---> /products/5/delete
router.delete('/:id/delete', authMiddlewares.allowAdmin, productControllers.deleteProduct);

// @GET /products/:id/update 
router.get('/:id/update', authMiddlewares.allowAdmin, productControllers.getUpdate);

// @PUT /products/:id/update ---> /products/5/put
router.put('/:id/update', authMiddlewares.allowAdmin, productControllers.updateProduct);

// @GET /products/cart
router.get('/cart', productControllers.getCart);

module.exports = router;