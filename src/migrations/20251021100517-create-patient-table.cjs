'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('patients', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nom: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      prenom: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      date_naissance: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      sexe: {
        type: Sequelize.ENUM('H', 'F', 'A'),
        allowNull: true
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('patients');
  }
};