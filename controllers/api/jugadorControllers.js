const { Jugador } = require('../../database/models');

module.exports = {
    getAll: async (req, res) => {
        const jugadores = await Jugador.findAll({
            raw: true
        });

        res.json(jugadores);
    },

    createOne: async (req, res) => {
        const nuevoJugador = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            club_id: req.body.club
        };

        try {
            const datos = await Jugador.create(nuevoJugador);
            console.log(datos);
            res.send(datos.dataValues);
        } catch (error) {
            console.log(error);
        }

    }
}