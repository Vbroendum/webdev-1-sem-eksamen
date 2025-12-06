'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const [users] = await queryInterface.sequelize.query(`SELECT id FROM users ORDER BY id ASC`);

    await queryInterface.bulkInsert('images', [
      { filepath: 'image1.jpg', upload_date: new Date(), is_after: '1', serviceplan_id: '', delete_date: null, createdAt: new Date(), updatedAt: new Date() },
      { filepath: 'image2.jpg', upload_date: new Date(), is_after: '0', serviceplan_id: '', delete_date: null, createdAt: new Date(), updatedAt: new Date() },
      { filepath: 'image3.jpg', upload_date: new Date(), is_after: '1', serviceplan_id: '', delete_date: null, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('images', null, {});
  }
};
