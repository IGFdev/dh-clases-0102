module.exports = (sequelize, DataType) => {
    const alias = 'Jugador';

    const cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataType.STRING,
            allowNull: false
        },
        apellido: {
            type: DataType.STRING,
            allowNull: false
        },
        club_id: {
            type: DataType.INTEGER,
            allowNull: false,
            references: {
                model: 'clubes',
                key: 'id'
            }
        }
    }

    const config = {
        tableName: 'jugadores',
        timestamps: false
    }


    const Jugador = sequelize.define(alias, cols, config);

    Jugador.associate = models => {
        Jugador.belongsTo(models.Club, {
            as: 'club',
            timestamps: false,
            foreignKey: 'club_id'
        });
    }

    return Jugador;
}