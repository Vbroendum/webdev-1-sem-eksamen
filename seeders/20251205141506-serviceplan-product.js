'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('serviceplan_products', [{ 
    serviceplan_id: 1, 
      product_id: 1,
      quantity: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      serviceplan_id: 1, 
      product_id: 3,
      quantity: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      serviceplan_id: 2,
      product_id: 2,
      quantity: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('serviceplan_products', null, {});
  }
};
