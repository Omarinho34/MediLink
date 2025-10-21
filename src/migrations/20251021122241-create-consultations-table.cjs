'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('consultations', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      id_medecin: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false
      },
      id_patient: {
        type : Sequelize.BIGINT.UNSIGNED,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      duree:{
        type: Sequelize.TIME,
        allowNull: false
      },
      motif: {
        type: Sequelize.TEXT,
        allowNull: true
      }
    },{
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('consultations');
  }
};
