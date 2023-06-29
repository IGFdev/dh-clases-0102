module.exports = (sequelize, DataType) => {
    const alias = 'Club';

    const cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pais: {
            type: DataType.STRING,
            allowNull: false
        },
        nombre: {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        }
    }

    const config = {
        tableName: 'clubes',
        timestamps: false
    }

    const Club = sequelize.define(alias, cols, config);

    return Club;
}