'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const [products] = await queryInterface.sequelize.query(`SELECT id FROM products ORDER BY id ASC`);

    await queryInterface.bulkInsert('serviceplan_products', [
      { product_id: products[0].id, serviceplan_id: '1', quantity: 5, createdAt: new Date(), updatedAt: new Date() },
      { product_id: products[1].id, serviceplan_id: '2', quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { product_id: products[2].id, serviceplan_id: '3', quantity: 10, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('serviceplan_products', null, {});
  }
};
