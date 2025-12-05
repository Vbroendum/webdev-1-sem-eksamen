'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [
      { name: 'Firma A', cvr: 12345678, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Firma B', cvr: 87654321, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Firma C', cvr: 11223344, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, {});
  }
};
