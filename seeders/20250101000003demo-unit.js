'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('units', [
      { unit: 'Kilogram', short_unit: 'kg', createdAt: new Date(), updatedAt: new Date() },
      { unit: 'Gram', short_unit: 'g', createdAt: new Date(), updatedAt: new Date() },
      { unit: 'Liter', short_unit: 'L', createdAt: new Date(), updatedAt: new Date() },
      { unit: 'Milliliter', short_unit: 'ml', createdAt: new Date(), updatedAt: new Date() },
      { unit: 'Piece', short_unit: 'pc', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('units', null, {});
  }
};
