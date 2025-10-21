'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('prescriptions', {
      id_consultation : {
        type : Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false
      },
      id_medicament : {
        type : Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false
      },
      nb_boites : {
        type : Sequelize.INTEGER,
        allowNull: false
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('prescriptions');
  }
};
