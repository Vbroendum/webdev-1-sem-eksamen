'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('image_states', [
  { image_state: 'Approved', 
    createdAt: new Date(), 
    updatedAt: new Date() },
  { image_state: 'Pending Review', 
    createdAt: new Date(), 
    updatedAt: new Date() },
  { image_state: 'Missing', 
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
