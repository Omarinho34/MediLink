import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index.js";

export class Medecin extends Model {}

Medecin.init({
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
    },
    id_type : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { sequelize, tableName: "medecins", modelName: "Medecin", timestamps: false})

export default Medecin;