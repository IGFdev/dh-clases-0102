const { Jugador } = require('../database/models');

const controllers = {
    create: async (req, res) => {
        const nuevoJugador = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            club_id: req.body.club
        };

        try {
            const datos = await Jugador.create(nuevoJugador);
            console.log(datos);
        } catch (error) {
            console.log(error);
        }

        res.send('Jugador creado con exito');
    },

    listForm: async (req, res) => {
        try {
            const jugadores = await Jugador.findAll({
                raw: true,
                include: 'club',
                nest: true
            });            

            res.render('jugadoresList', { jugadores });
        } catch (error) {
            res.render('jugadoresList', { jugadores: [] });
            console.log(error);
        }
    },

    updatePlayer: async (req, res) => {
        console.log(req.body);

        const newValues = req.body;

        try {
            await Jugador.update(newValues, {
                where: {
                    id: req.body.id
                }
            });

            res.redirect('/jugadores');
        } catch (error) {
            res.send('No se pudo actualizar!')
            console.log(error);
        }
    },

    getUpdate: async (req, res) => {
        try {
            const jugador = await Jugador.findByPk(req.params.id);

            res.render('updateJugador', { jugador })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = controllers;