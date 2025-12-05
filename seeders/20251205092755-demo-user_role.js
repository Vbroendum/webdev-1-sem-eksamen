'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_roles', [
      {
        
        role_name: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        
        role_name: 'basicbitch',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_roles', null, {});
  }
};
