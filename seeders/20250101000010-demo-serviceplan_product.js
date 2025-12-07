'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('serviceplan_products', [
      { product_id: '1', serviceplan_id: '1', quantity: 5, createdAt: new Date(), updatedAt: new Date() },
      { product_id: '2', serviceplan_id: '2', quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { product_id: '3', serviceplan_id: '3', quantity: 10, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('serviceplan_products', null, {});
  }
};
