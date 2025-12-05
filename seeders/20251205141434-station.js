'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stations', [{ 
      company_id: 1, 
      station_name: 'Hovedstation Syd',
      station_address: 'Hovedvej 1',
      station_postal_code: 5200,
      station_has_bay: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      company_id: 2, 
      station_name: 'Nordisk Vask',
      station_address: 'Østgade 10',
      station_postal_code: 8000,
      station_has_bay: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stations', null, {});
  }
};
