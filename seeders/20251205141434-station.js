'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stations', [
  { 
    company_id: 1,
    station_address: 'Hovedgade 1', 
    station_postal_code: 5000, 
    station_has_bay: true, 
    station_name: 'Odense Hovedbanegård', 
    createdAt: new Date(), 
    updatedAt: new Date() 
  },
  { 
    company_id: 2,
    station_address: 'Østergade 45', 
    station_postal_code: 8000, 
    station_has_bay: false, 
    station_name: 'Aarhus City', 
    createdAt: new Date(), 
    updatedAt: new Date() 
  }
]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
