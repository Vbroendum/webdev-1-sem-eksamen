'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
  { products_name: 'Desinfektionsmiddel', 
    unit_id: 2, 
    createdAt: new Date(), 
    updatedAt: new Date() },
  { products_name: 'Toiletpapir (stor pakke)', 
    unit_id: 3, 
    createdAt: new Date(), 
    updatedAt: new Date() 
  },
  { products_name: 'Vaskepulver', 
    unit_id: 1, 
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
