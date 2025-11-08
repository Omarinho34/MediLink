import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index.js";

export class Utilisateur extends Model {}

Utilisateur.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, tableName: "utilisateurs", modelName: "Utilisateur", timestamps: false });

export default Utilisateur;