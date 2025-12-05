'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const [imageStates] = await queryInterface.sequelize.query(`SELECT id FROM image_states ORDER BY id ASC`);
    const [users] = await queryInterface.sequelize.query(`SELECT id FROM users ORDER BY id ASC`);

    await queryInterface.bulkInsert('images', [
      { filepath: 'image1.jpg', upload_date: new Date(), image_state_id: imageStates[0].id, serviceplan_id: null, delete_date: null, createdAt: new Date(), updatedAt: new Date() },
      { filepath: 'image2.jpg', upload_date: new Date(), image_state_id: imageStates[1].id, serviceplan_id: null, delete_date: null, createdAt: new Date(), updatedAt: new Date() },
      { filepath: 'image3.jpg', upload_date: new Date(), image_state_id: imageStates[0].id, serviceplan_id: null, delete_date: null, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('images', null, {});
  }
};
