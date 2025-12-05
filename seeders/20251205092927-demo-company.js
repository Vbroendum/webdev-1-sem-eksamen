'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [
      { id: 1, name: 'Hovedkontor A/S', 
        cvr: 12345678, 
        createdAt: new Date(), 
        updatedAt: new Date() },
      { 
        id: 2, 
        name: 'Kunde Aps (Test)', 
        cvr: 87654321, 
        createdAt: new Date(), 
        updatedAt: new Date() }
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, {});
  }
};
