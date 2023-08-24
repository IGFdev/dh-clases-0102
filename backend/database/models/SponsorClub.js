module.exports = (sequelize, DataType) => {
    const alias = 'SponsorClub';

    const cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sponsor_id: {
            type: DataType.INTEGER,
            allowNull: false,
            references: {
                model: 'sponsors',
                key: 'id'
            }
        },
        club_id: {
            type: DataType.INTEGER,
            allowNull: false,
            references: {
                model: 'clubes',
                key: 'id'
            }
        },
        pago_mensual: {
            type: DataType.FLOAT,
            allowNull: false,
            default: 50000
        }
    }

    const config = {
        tableName: 'sponsor_club',
        timestamps: false
    }

    const SponsorClub = sequelize.define(alias, cols, config);

    return SponsorClub;
}