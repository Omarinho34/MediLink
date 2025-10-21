import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index.js";

export class Consultation extends Model {}

Consultation.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_patient: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_medecin: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    duree: {
        type: DataTypes.TIME,
        allowNull: false
    },
    motif: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, { sequelize, tableName: "consultations", modelName: "Consultation", timestamps: false })

export default Consultation;