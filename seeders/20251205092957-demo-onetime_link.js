'use strict';
const { v4: uuidv4 } = require('uuid'); // Kræver 'uuid' npm-pakken

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('onetime_links', [
      {
        
        uuid: uuidv4(), 
        serviceplan_id: 10000, // FK til Serviceplan 10000
        is_used: false,
        createdAt: new Date(), updatedAt: new Date()
      }
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('onetime_links', null, {});
  }
};