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
          model: 'users',
          key: 'id'
        }
      },
      company_id: {
        type: Sequelize.INTEGER,
          references: {
          model: 'companies',
          key: 'id'
        }
      },
      images_id: {
        type: Sequelize.INTEGER,
          references: {
          model: 'images',
          key: 'id'
        }
      },
      onetime_link_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'onetime_links',
          key: 'id'
        }
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