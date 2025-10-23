'use strict';

const { TIME } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('consultations', [{
      date: new Date('2023-10-01T10:00:00Z'),
      motif: 'Consultation de routine',
      id_patient: 1,
      id_medecin: 1,
      duree: 15
    },
    {
      date: new Date('2023-10-05T14:30:00Z'),
      motif: 'Problème de peau',
      id_patient: 2,
      id_medecin: 2,
      duree: 30
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('consultations', null, {});
  }
};
