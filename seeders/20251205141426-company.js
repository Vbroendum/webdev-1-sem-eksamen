'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [
  { name: 'Rengøringsservice A/S', 
    cvr: 12345678, 
    createdAt: new Date(), 
    updatedAt: new Date() },
  { name: 'Facility Management ApS', 
    cvr: 87654321, 
    createdAt: new Date(), 
    updatedAt: new Date() 
  }
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
