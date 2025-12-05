'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('onetime_links', [{
      uuid: Sequelize.literal('UUID()'), 
      serviceplan_id: 1, 
      is_used: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('onetime_links', null, {});
  }
};
