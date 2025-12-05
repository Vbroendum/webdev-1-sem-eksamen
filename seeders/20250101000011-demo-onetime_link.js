'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const [serviceplans] = await queryInterface.sequelize.query(`SELECT id FROM serviceplans ORDER BY id ASC`);

    await queryInterface.bulkInsert('onetime_links', [
      { uuid: 'uuid1', serviceplan_id: serviceplans[0].id, is_used: false, createdAt: new Date(), updatedAt: new Date() },
      { uuid: 'uuid2', serviceplan_id: serviceplans[1].id, is_used: false, createdAt: new Date(), updatedAt: new Date() },
      { uuid: 'uuid3', serviceplan_id: serviceplans[2].id, is_used: false, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('onetime_links', null, {});
  }
};
