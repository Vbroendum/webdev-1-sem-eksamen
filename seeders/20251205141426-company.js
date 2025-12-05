'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [{ 
      name: 'Rensefirma A/S',
      cvr: 12345678,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      name: 'VaskeCentralen ApS',
      cvr: 87654321,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, {});
  }
};
