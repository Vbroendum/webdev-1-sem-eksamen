'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('images', [{
      serviceplan_id: 2, 
      upload_date: new Date(), 
      filepath: '/uploads/sp2/before_area_a.jpg', 
      image_state: 'Approved', 
      delete_date: null, 
      createdAt: new Date(), 
      updatedAt: new Date() 
    }, {
      serviceplan_id: 2, 
      upload_date: new Date(), 
      filepath: '/uploads/sp2/after_area_a.jpg', 
      image_state: 'Pending', 
      delete_date: null, 
      createdAt: new Date(), 
      updatedAt: new Date() 
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('images', null, {});
  }
};
