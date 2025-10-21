import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const {
    DB_HOST = '127.0.0.1',
    DB_PORT = 3306,
    DB_NAME = 'api_express',
    DB_USER = 'root',
    DB_PASSWORD = null
} = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  logging: false
});

console.log(process.env.DB_HOST);

export async function initDB(){
  await sequelize.authenticate();
}


// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// // Import des modèles
// const Patient = require('./Patient')(sequelize, Sequelize.DataTypes);
// const Medecin = require('./Medecin')(sequelize, Sequelize.DataTypes);
// const TypeMedecin = require('./TypeMedecin')(sequelize, Sequelize.DataTypes);
// const Consultation = require('./Consultation')(sequelize, Sequelize.DataTypes);
// const Prescription = require('./Prescription')(sequelize, Sequelize.DataTypes);
// const Medicament = require('./Medicament')(sequelize, Sequelize.DataTypes);

// // Consultation > Patient
// Consultation.belongsTo(Patient, { foreignKey: 'id_patient' });
// Patient.hasMany(Consultation, { foreignKey: 'id_patient' });

// // Consultation > Medecin
// Consultation.belongsTo(Medecin, { foreignKey: 'id_medecin' });
// Medecin.hasMany(Consultation, { foreignKey: 'id_medecin' });

// // Medecin > TypeMedecin
// Medecin.belongsTo(TypeMedecin, { foreignKey: 'id_type' });
// TypeMedecin.hasMany(Medecin, { foreignKey: 'id_type' });

// // Prescription > Consultation
// Prescription.belongsTo(Consultation, { foreignKey: 'id_consultation' });
// Consultation.hasMany(Prescription, { foreignKey: 'id_consultation' });

// // Prescription > Medicament
// Prescription.belongsTo(Medicament, { foreignKey: 'id_medicament' });
// Medicament.hasMany(Prescription, { foreignKey: 'id_medicament' });

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = {
//   db,
//   Patient,
//   Medecin,
//   TypeMedecin,
//   Consultation,
//   Prescription,
//   Medicament
// };
