'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stations', [
      {
          
        station_name: 'Station København',
        station_address: 'Hovedgade 12',
        station_postal_code: 2100,
        station_has_bay: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        
        station_name: 'Station Aarhus',
        station_address: 'Lille Torv 4',
        station_postal_code: 8000,
        station_has_bay: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        
        station_name: 'Station Odense',
        station_address: 'Vestergade 81',
        station_postal_code: 5000,
        station_has_bay: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stations', null, {});
  }
};