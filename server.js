import express from 'express';
import { initDB } from './src/models/index.js'
import bodyParser from 'body-parser';
import v1patientsRoutes from './src/routes/v1/patients.js';
import v1defaultRoutes from './src/routes/v1/default.js';
import v1medecinsRoutes from './src/routes/v1/medecins.js';
import v1typesMedecinRoutes from './src/routes/v1/typesMedecin.js';
import v1medicamentsRoutes from './src/routes/v1/medicaments.js';
import v1consultationsRoutes from './src/routes/v1/consultations.js';
import v1prescriptionsRoutes from './src/routes/v1/prescriptions.js';

var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

console.log("Server is starting...");

const app = express();
const PORT = 3000;
const router = express.Router();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/v1', v1defaultRoutes);
app.use('/v1/patients', v1patientsRoutes);
app.use('/v1/medecins', v1medecinsRoutes);
app.use('/v1/typesMedecin', v1typesMedecinRoutes);
app.use('/v1/medicaments', v1medicamentsRoutes);
app.use('/v1/consultations', v1consultationsRoutes);
app.use('/v1/prescriptions', v1prescriptionsRoutes);

initDB().then(() => {
    console.log('DB OK');
    app.listen(PORT, () => {
        console.log(`API démarrée on http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error('DB init failed:', err);
    process.exit(1);
});

export default app;