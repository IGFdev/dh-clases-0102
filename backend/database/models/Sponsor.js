module.exports = (sequelize, DataType) => {
    const alias = 'Sponsor';

    const cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataType.STRING,
            allowNull: false
        }
    }

    const config = {
        tableName: 'sponsors',
        timestamps: false
    }

    const Sponsor = sequelize.define(alias, cols, config);

    Sponsor.associate = models => {
        Sponsor.belongsToMany(models.Club, {
            as: 'sponsor-club',
            foreignKey: 'sponsor_id',
            through: 'SponsorClub'
        })
    }

    return Sponsor;
}