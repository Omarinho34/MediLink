import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index.js";

export class Patient extends Model {}

Patient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prenom:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_naissance: {
            type: DataTypes.DATE,
            allowNull: false
        },
        sexe: {
            type: DataTypes.ENUM('H', 'F', 'A'),
            allowNull: true
        }
    },
    { sequelize, tableName: "patients", modelName: "Patient", timestamps: false }
)

export default Patient;