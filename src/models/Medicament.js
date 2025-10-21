import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index.js";

export class Medicament extends Model {}
Medicament.init(
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
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    { sequelize, tableName: "medicaments", modelName: "Medicament", timestamps: false }
);

export default Medicament;