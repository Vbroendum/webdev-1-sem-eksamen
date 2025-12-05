'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('serviceplans', [
      {
        
        serviceplan_done_at: new Date('2025-12-01T10:00:00Z'),
        serviceplan_expired_at: new Date('2026-12-01T10:00:00Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        
        serviceplan_done_at: new Date('2025-11-15T14:30:00Z'),
        serviceplan_expired_at: new Date('2026-11-15T14:30:00Z'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('serviceplans', null, {});
  }
};
