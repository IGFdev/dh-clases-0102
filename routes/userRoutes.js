const express = require('express');
const controllers = require('../controllers/userControllers');

const router = express.Router();

// @GET - /users/sign-out
router.get('/sign-out', controllers.signOut);

// @GET - /users/register
router.get('/register', controllers.getRegister);

// @POST - /users
router.post('/', controllers.registerUser);

// @GET - /users/login
router.get('/login', controllers.getLogin);

// @POST - /users/login
router.post('/login', controllers.loginUser);

module.exports = router;