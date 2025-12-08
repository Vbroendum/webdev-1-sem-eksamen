'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      { products_name: 'Olie', unit_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { products_name: 'Filter', unit_id: '2', createdAt: new Date(), updatedAt: new Date() },
      { products_name: 'Vand', unit_id: '3', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
