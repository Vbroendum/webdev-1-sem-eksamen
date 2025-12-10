'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword1 = await bcrypt.hash('pass1', 10);
    const hashedPassword2 = await bcrypt.hash('pass2', 10);
    const hashedPassword3 = await bcrypt.hash('pass3', 10);
    await queryInterface.bulkInsert('users', [
      { first_name: 'Jonas', last_name: 'Hansen', user_email: 'jonas@example.com', user_password: hashedPassword1, role_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { first_name: 'Maria', last_name: 'Jensen', user_email: 'maria@example.com', user_password: hashedPassword2, role_id: '2', createdAt: new Date(), updatedAt: new Date() },
      { first_name: 'Peter', last_name: 'Nielsen', user_email: 'peter@example.com', user_password: hashedPassword3, role_id: '2', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
