'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('serviceplans', [{ 
      station_id: 1, 
      user_id: 2, 
      company_id: 1, 
      serviceplan_done_at: null, 
      serviceplan_expired_at: new Date(new Date().setDate(new Date().getDate() + 7)), 
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      station_id: 2, 
      user_id: 2, 
      company_id: 2, 
      serviceplan_done_at: new Date(), 
      serviceplan_expired_at: new Date(new Date().setDate(new Date().getDate() - 1)),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('serviceplans', null, {});
  }
};
