const express = require('express');
const clubControllers = require('../controllers/clubControllers');

const router = express.Router();

// @GET - /clubes
router.get('/', clubControllers.getList);

module.exports = router;