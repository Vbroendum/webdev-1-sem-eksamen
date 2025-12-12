'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('serviceplans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serviceplan_done_at: {
        type: Sequelize.DATE
      },
      serviceplan_expired_at: {
        type: Sequelize.DATE
      },
      station_id: {
        type: Sequelize.INTEGER,
          references: {
          model: 'stations',
          key: 'id'
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
          references: {
          allowNull: true,
          model: 'users',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('serviceplans');
  }
};