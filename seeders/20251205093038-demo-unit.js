'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('units', [
      { id: 1, unit_name: 'Stk', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, unit_name: 'Liter', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, unit_name: 'Kg', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('units', null, {});
  }
};
