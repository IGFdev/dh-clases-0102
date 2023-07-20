const express = require('express');
const apiControllers = require('../../controllers/api/jugadorControllers');

const router = express.Router();

// @GET - /api/jugadores
router.get('/', apiControllers.getAll);

// @POST - /api/jugadores
router.post('/', apiControllers.createOne);


module.exports = router;