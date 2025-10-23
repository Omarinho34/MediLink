'use strict';

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

    await queryInterface.bulkInsert('patients', [{
      nom: 'Doe',
      prenom: 'John',
      email: 'john.doe@example.com',
      date_naissance: new Date('1990-01-01'),
      sexe: 'H'
    },
    {
      nom: 'Smith',
      prenom: 'Jane',
      email: 'smith.jane@example.com',
      date_naissance: new Date('1985-05-15'),
      sexe: 'F'
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('patients', null, {});
  }
};
