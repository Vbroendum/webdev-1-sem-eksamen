'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serviceplan_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'serviceplans',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      image_state_id: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Pending',
      },
      upload_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      filepath: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      delete_date: {
        type: Sequelize.DATE,
        allowNull: true,
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
    await queryInterface.dropTable('images');
  }
};