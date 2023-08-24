const express = require('express');
const jugadorControllers = require('../controllers/jugadorControllers');

const router = express.Router();

// @GET - /jugadores
router.get('/', jugadorControllers.listForm);

// @GET - /jugadores/:id/update
router.get('/:id/update', jugadorControllers.getUpdate);

// @POST - /jugadores
router.post('/', jugadorControllers.create);

// @PUT- /jugadores
router.put('/', jugadorControllers.updatePlayer);

module.exports = router;