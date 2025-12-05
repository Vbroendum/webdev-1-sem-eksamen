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
          model: 'stations', // Navnet på den tabel der refereres til
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // Navnet på den tabel der refereres til
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      company_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'companies', // Navnet på den tabel der refereres til
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      images_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'images', // Navnet på den tabel der refereres til
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
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