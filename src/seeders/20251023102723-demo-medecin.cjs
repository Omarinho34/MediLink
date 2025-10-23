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

    await queryInterface.bulkInsert('medecins', [{
      nom: 'Doe',
      prenom: 'John',
      email: 'doe.john@example.com',
      date_naissance: new Date('1975-03-20'),
      sexe: 'H',
      id_type: 1
    },
    {
      nom: 'Brown',
      prenom: 'Lisa',
      email: 'brown.lisa@example.com',
      date_naissance: new Date('1980-07-12'),
      sexe: 'F',
      id_type: 2
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('medecins', null, {});
  }
};
