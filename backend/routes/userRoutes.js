const express = require('express');
const controllers = require('../controllers/userControllers');
const middlewares = require('../middlewares/authMiddlewares');

const router = express.Router();

// @GET - /users/sign-out
router.get('/sign-out', controllers.signOut);

// @GET - /users/register
router.get('/register', middlewares.allowUnsignedIn, controllers.getRegister, );

// @POST - /users
router.post('/', controllers.registerUser);

// @GET - /users/login
router.get('/login', middlewares.allowUnsignedIn, controllers.getLogin);

// @POST - /users/login
router.post('/login', controllers.loginUser);

// @GET - /users
router.get('/', controllers.getList)

module.exports = router;