'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('serviceplan_products', [
      {
        product_id: 1,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 2,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 3,
        quantity: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 4,
        quantity: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 5,
        quantity: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('serviceplan_products', null, {});
  }
};
