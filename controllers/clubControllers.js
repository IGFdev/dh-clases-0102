const { Club } = require('../database/models');

module.exports = {
    getList: async (req, res) => {
        const clubes = await Club.findAll({
            include: 'sponsor-club',
            nest: true
        });

        console.log(clubes);

        res.send(clubes);
    }

}