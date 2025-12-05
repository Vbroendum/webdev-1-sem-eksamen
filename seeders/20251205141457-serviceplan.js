'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('serviceplans', [
  { 
    serviceplan_done_at: null, 
    serviceplan_expired_at: new Date(new Date().setMonth(new Date().getMonth() + 1)), 
    station_id: 1, 
    user_id: 2, 
    company_id: 1, 
    images_id: null, 
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
