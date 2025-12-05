'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const [units] = await queryInterface.sequelize.query(`SELECT id FROM units ORDER BY id ASC`);

    await queryInterface.bulkInsert('products', [
      { products_name: 'Olie', unit_id: units[0].id, createdAt: new Date(), updatedAt: new Date() },
      { products_name: 'Filter', unit_id: units[4].id, createdAt: new Date(), updatedAt: new Date() },
      { products_name: 'Vand', unit_id: units[2].id, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
