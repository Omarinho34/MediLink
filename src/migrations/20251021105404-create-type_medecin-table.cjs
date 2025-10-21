'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('types_medecin', { 
      id: {
              type: Sequelize.BIGINT.UNSIGNED,
              primaryKey: true,
              autoIncrement: true
          },
          libelle: { 
              type: Sequelize.STRING,
              allowNull: false
          }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('types_medecin');

  }
};
