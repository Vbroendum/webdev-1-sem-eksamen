'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('units', [
  { unit: 'Kilogram', 
    short_unit: 'kg', 
    createdAt: new Date(), 
    updatedAt: new Date() 
  },
  { unit: 'Liter', 
    short_unit: 'L', 
    createdAt: new Date(), 
    updatedAt: new Date() },
  { unit: 'Piece', 
    short_unit: 'stk', 
    createdAt: new Date(), 
    updatedAt: new Date() }
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
