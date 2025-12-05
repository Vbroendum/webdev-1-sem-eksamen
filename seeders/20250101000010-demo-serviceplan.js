'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Hent eksisterende IDs dynamisk
    const stationsResult = await queryInterface.sequelize.query(
      `SELECT id FROM stations ORDER BY id ASC`
    );
    const stations = stationsResult[0]; // array af station-rækker

    const usersResult = await queryInterface.sequelize.query(
      `SELECT id FROM users ORDER BY id ASC`
    );
    const users = usersResult[0]; // array af user-rækker

    const imagesResult = await queryInterface.sequelize.query(
      `SELECT id FROM images ORDER BY id ASC`
    );
    const images = imagesResult[0]; // array af image-rækker

    // Tjek at der findes nok rækker
    if (stations.length < 3 || users.length < 3 || images.length < 3) {
      throw new Error('Ikke nok rækker i stations, users eller images til at køre serviceplan seeder.');
    }

    // Indsæt serviceplaner med dynamiske FK'er
    await queryInterface.bulkInsert('serviceplans', [
      {
        serviceplan_done_at: new Date('2025-01-10'),
        serviceplan_expired_at: new Date('2025-02-10'),
        station_id: stations[0].id,
        user_id: users[0].id,
        images_id: images[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        serviceplan_done_at: new Date('2025-03-15'),
        serviceplan_expired_at: new Date('2025-04-15'),
        station_id: stations[1].id,
        user_id: users[1].id,
        images_id: images[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        serviceplan_done_at: new Date('2025-05-01'),
        serviceplan_expired_at: new Date('2025-06-01'),
        station_id: stations[2].id,
        user_id: users[2].id,
        images_id: images[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('serviceplans', null, {});
  }
};