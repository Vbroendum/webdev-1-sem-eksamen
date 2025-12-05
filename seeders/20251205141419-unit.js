'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('units', [{ 
      unit: 'liter',
      short_unit: 'L',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      unit: 'kilogram',
      short_unit: 'KG',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      unit: 'styk',
      short_unit: 'STK',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('units', null, {});
  }
};
