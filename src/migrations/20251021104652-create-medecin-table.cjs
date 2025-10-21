'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('medecins', {
      id: {
          type: Sequelize.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
      },
      nom: {
          type: Sequelize.STRING,
          allowNull: false
      },
      prenom:{
          type: Sequelize.STRING,
          allowNull: false
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      date_naissance: {
          type: Sequelize.DATE,
          allowNull: false
      },
      sexe: {
          type: Sequelize.ENUM('H', 'F', 'A'),
          allowNull: true
      },
      id_type : {
          type: Sequelize.BIGINT.UNSIGNED,
          allowNull: false
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('medecins');
  }
};
