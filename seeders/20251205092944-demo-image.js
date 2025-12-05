'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('images', [
      {
        
        
        upload_date: new Date(),
        image_state_id: 2, // FK til Approved
        filepath: '',
        delete_date: null,
        createdAt: new Date(), 
        updatedAt: new Date()
      }
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('images', null, {});
  }
};