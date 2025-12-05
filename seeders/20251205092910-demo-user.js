'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        station_id: 1,
        role_id: 1, 
        first_name: 'Anders',
        last_name: 'Hansen',
        user_email: 'anders.hansen@example.com',
        user_password: 'hashed_password_1', // skift til rigtig hash hvis du bruger bcrypt
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        station_id: 1,
        role_id: 2,
        first_name: 'Maria',
        last_name: 'Larsen',
        user_email: 'maria.larsen@example.com',
        user_password: 'hashed_password_2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        station_id: 2,
        role_id: 1,
        first_name: 'Jonas',
        last_name: 'Poulsen',
        user_email: 'jonas.poulsen@example.com',
        user_password: 'hashed_password_3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
