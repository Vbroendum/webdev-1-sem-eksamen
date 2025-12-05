'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
  { 
    station_id: 1, 
    role_id: 1,
    first_name: 'Anna', 
    last_name: 'Admin', 
    user_email: 'anna.admin@example.com', 
    user_password: 'hashed_password_placeholder',
    createdAt: new Date(), 
    updatedAt: new Date() 
  },
  { 
    station_id: 2, 
    role_id: 3,
    first_name: 'Bente', 
    last_name: 'Rengøring', 
    user_email: 'bente.rengoring@example.com', 
    user_password: 'hashed_password_placeholder',
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
