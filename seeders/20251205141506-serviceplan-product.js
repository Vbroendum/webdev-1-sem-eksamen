'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('serviceplan_products', [
  { 
    serviceplan_id: 1, 
    product_id: 1, 
    quantity: 10, 
    createdAt: new Date(), 
    updatedAt: new Date() 
  },
  { 
    serviceplan_id: 1, 
    product_id: 2, 
    quantity: 2, 
    createdAt: new Date(), 
    updatedAt: new Date() 
  }
]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
