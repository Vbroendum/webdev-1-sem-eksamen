'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('images', [
  { 
    serviceplan_id: 1, 
    upload_date: new Date(), 
    image_state_id: 2, 
    filepath: '/uploads/sp1/image1.jpg', 
    delete_date: null, 
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
