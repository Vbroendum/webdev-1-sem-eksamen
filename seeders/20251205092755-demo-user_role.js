'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_roles', [
      {
        user_roles_id: 1,
        role_name: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_roles_id: 2,
        role_name: 'basic bitch',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_roles', null, {});
  }
};
