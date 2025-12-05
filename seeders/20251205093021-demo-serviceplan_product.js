'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('serviceplan_products', [
      {
        
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        
        quantity: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        
        quantity: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        
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
