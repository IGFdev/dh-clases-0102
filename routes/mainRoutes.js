const express = require('express');

const mainControllers = require('../controllers/mainControllers');

const router = express.Router();

router.get('/', mainControllers.getIndex);

router.get('/contact', mainControllers.getContact);

router.get('/about-us', mainControllers.getAbout);

module.exports = router;