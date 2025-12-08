'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stations', [
      { company_id: '1', station_name: 'Hovedstationen', station_address: 'Hovedgade 1', station_postal_code: 1000, station_has_bay: true, createdAt: new Date(), updatedAt: new Date() },
      { company_id: '2', station_name: 'Veststationen', station_address: 'Vestergade 5', station_postal_code: 2000, station_has_bay: false, createdAt: new Date(), updatedAt: new Date() },
      { company_id: '3', station_name: 'Øststationen', station_address: 'Østergade 10', station_postal_code: 3000, station_has_bay: true, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stations', null, {});
  }
};
