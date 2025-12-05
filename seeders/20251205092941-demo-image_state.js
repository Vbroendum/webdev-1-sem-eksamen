'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('image_states', [
      { id: 1, image_state: 'Pending', 
        createdAt: new Date(), 
        updatedAt: new Date() },
      { 
        id: 2, image_state: 'Approved', 
        createdAt: new Date(), 
        updatedAt: new Date() },
      { id: 3, image_state: 'Rejected', 
        createdAt: new Date(), 
        updatedAt: new Date() }
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('image_states', null, {});
  }
};
