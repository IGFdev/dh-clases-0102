'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sponsor_club', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      club_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'club',
          key: 'id'
        }
      },
      sponsor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'sponsors',
          key: 'id'
        }
      },
      pago_mensual: {
        type: Sequelize.FLOAT,
        allowNull: false,
        default: 50000
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
