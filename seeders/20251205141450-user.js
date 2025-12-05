'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{ 
      station_id: 1, 
      role_id: 1, 
      first_name: 'Hans',
      last_name: 'Jensen',
      user_email: 'hans.admin@firma.dk',
      user_password: 'hashed_admin_password',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      station_id: 1, 
      role_id: 2,
      first_name: 'Ida',
      last_name: 'Nielsen',
      user_email: 'ida.rengoering@firma.dk',
      user_password: 'hashed_user_password',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
