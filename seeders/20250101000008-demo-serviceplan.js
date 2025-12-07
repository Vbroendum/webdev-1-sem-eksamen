'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('serviceplans', [
      {
        serviceplan_done_at: new Date('2025-01-10'),
        serviceplan_expired_at: new Date('2025-02-10'),
        station_id: '1',
        user_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        serviceplan_done_at: new Date('2025-03-15'),
        serviceplan_expired_at: new Date('2025-04-15'),
        station_id: '2',
        user_id: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        serviceplan_done_at: new Date('2025-05-01'),
        serviceplan_expired_at: new Date('2025-06-01'),
        station_id: '3',
        user_id: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('serviceplans', null, {});
  }
};