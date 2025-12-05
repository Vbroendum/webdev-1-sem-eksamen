'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const [stationsResult] = await queryInterface.sequelize.query(`SELECT id FROM stations ORDER BY id ASC`);
    const stations = stationsResult;
    const [rolesResult] = await queryInterface.sequelize.query(`SELECT id FROM user_roles ORDER BY id ASC`);
    const roles = rolesResult;

    await queryInterface.bulkInsert('users', [
      { first_name: 'Jonas', last_name: 'Hansen', user_email: 'jonas@example.com', user_password: 'pass1', station_id: stations[0].id, role_id: roles[0].id, createdAt: new Date(), updatedAt: new Date() },
      { first_name: 'Maria', last_name: 'Jensen', user_email: 'maria@example.com', user_password: 'pass2', station_id: stations[1].id, role_id: roles[1].id, createdAt: new Date(), updatedAt: new Date() },
      { first_name: 'Peter', last_name: 'Nielsen', user_email: 'peter@example.com', user_password: 'pass3', station_id: stations[2].id, role_id: roles[2].id, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
