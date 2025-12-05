'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_roles', [
      { role_name: 'Admin', createdAt: new Date(), updatedAt: new Date() },
      { role_name: 'Techniker', createdAt: new Date(), updatedAt: new Date() },
      { role_name: 'Bruger', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_roles', null, {});
  }
};
