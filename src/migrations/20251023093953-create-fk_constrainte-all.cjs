'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addConstraint('medecins', {
      fields: ['id_type'],
      type: 'foreign key',
      name: 'fk_medecin_typeMedecin',
      references: {
        table: 'types_medecin',
        field: 'id'
    }});

    await queryInterface.addConstraint('consultations', {
      fields: ['id_medecin'],
      type: 'foreign key',
      name: 'fk_consultation_medecin',
      references: {
        table: 'medecins',
        field: 'id'
    }});

    await queryInterface.addConstraint('consultations', {
      fields: ['id_patient'],
      type: 'foreign key',
      name: 'fk_consultation_patient',
      references: {
        table: 'patients',
        field: 'id'
    }});

    await queryInterface.addConstraint('prescriptions', {
      fields: ['id_consultation'],
      type: 'foreign key',
      name: 'fk_prescription_consultation',
      references: {
        table: 'consultations',
        field: 'id'
    }});

    await queryInterface.addConstraint('prescriptions', {
      fields: ['id_medicament'],
      type: 'foreign key',
      name: 'fk_prescription_medicament',
      references: {
        table: 'medicaments',
        field: 'id'
    }});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
