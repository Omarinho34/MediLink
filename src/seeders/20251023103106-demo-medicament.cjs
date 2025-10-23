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
    await queryInterface.bulkInsert('medicaments', [{
      nom: 'Paracétamol',
      description: 'Analgésique et antipyrétique couramment utilisé pour soulager la douleur et réduire la fièvre.'
    },
    {
      nom: 'Ibuprofène',
      description: 'Anti-inflammatoire non stéroïdien (AINS) utilisé pour traiter la douleur, l\'inflammation et la fièvre.'
    },
    {
      nom: 'Amoxicilline',
      description: 'Antibiotique de la famille des pénicillines, utilisé pour traiter diverses infections bactériennes.'
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('medicaments', null, {});
  }
};
