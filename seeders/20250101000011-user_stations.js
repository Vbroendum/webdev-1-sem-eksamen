'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_stations', [
      { user_id: '1', station_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { user_id: '2', station_id: '2', createdAt: new Date(), updatedAt: new Date() },
      { user_id: '3', station_id: '3', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_stations', null, {});
  }
};
