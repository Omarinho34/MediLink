import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index.js";

export class TypeMedecin extends Model {}

TypeMedecin.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    libelle: { 
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, tableName: "type_medecins", modelName: "TypeMedecin", timestamps: false })

export default TypeMedecin;