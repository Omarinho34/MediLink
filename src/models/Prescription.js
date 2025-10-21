import { DataTypes, Model} from 'sequelize';
import { sequelize } from './index.js';

export class Prescription extends Model {}

Prescription.init({
    id_consultation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    id_medicament: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nb_boites: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { sequelize, tableName: "prescriptions", modelName: "Prescription", timestamps: false })

export default Prescription;