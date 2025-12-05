'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        products_name: 'Oliefilter',
        unit_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        products_name: 'Bremsevæske',
        unit_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        products_name: 'Motorolie 5W-30',
        unit_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        products_name: 'Tændrør',
        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        products_name: 'Luftfilter',
        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        products_name: 'Kølevæske',
        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        products_name: 'Viskerblade',
        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        products_name: 'Batteri 12V',
        
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
