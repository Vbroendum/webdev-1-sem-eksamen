'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('units', [
      {  unit: 'Styk', short_unit: 'stk', createdAt: new Date(), updatedAt: new Date() },
      {  unit: 'Liter', short_unit: 'L', createdAt: new Date(), updatedAt: new Date() },
      {  unit: 'Kil', short_unit: 'kg', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('units', null, {});
  }
};
