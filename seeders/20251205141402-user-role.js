'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_roles', [
  { role_name: 'Admin', 
    createdAt: new Date(), 
    updatedAt: new Date() 
  },
  { role_name: 'Supervisor', 
    createdAt: new Date(), 
    updatedAt: new Date() 
  },
  { role_name: 'Cleaning Staff', 
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
