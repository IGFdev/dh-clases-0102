const express = require('express');
const path = require('path');

const productRoutes = require('../controllers/productControllers');

const router = express.Router();

router.get('/', productRoutes.getProducts);

router.get('/detail', productRoutes.getProductDetail);

router.get('/cart', productRoutes.getCart);

module.exports = router;