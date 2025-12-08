'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      { first_name: 'Jonas', last_name: 'Hansen', user_email: 'jonas@example.com', user_password: 'pass1', station_id: '1', role_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { first_name: 'Maria', last_name: 'Jensen', user_email: 'maria@example.com', user_password: 'pass2', station_id: '2', role_id: '2', createdAt: new Date(), updatedAt: new Date() },
      { first_name: 'Peter', last_name: 'Nielsen', user_email: 'peter@example.com', user_password: 'pass3', station_id: '3', role_id: '3', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
