'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('image_states', [
      {  image_state: '0', 
        createdAt: new Date(), 
        updatedAt: new Date() },
      { 
         image_state: '1', 
        createdAt: new Date(), 
        updatedAt: new Date() },
      {  image_state: '1', 
        createdAt: new Date(), 
        updatedAt: new Date() }
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('image_states', null, {});
  }
};
