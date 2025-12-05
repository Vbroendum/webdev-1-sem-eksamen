'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [{ 
      products_name: 'Højkoncentreret Affedtning',
      unit_id: 1, 
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      products_name: 'Specialvoks',
      unit_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      products_name: 'Mikrofiberklud',
      unit_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
