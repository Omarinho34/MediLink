import express from 'express';
import { initDB } from './src/models/index.js'
import bodyParser from 'body-parser';
import v1patientsRoutes from './src/routes/v1/patients.js';
import v1defaultRoutes from './src/routes/v1/default.js';
import v1medecinsRoutes from './src/routes/v1/medecins.js';
import v1typesMedecinRoutes from './src/routes/v1/typesMedecin.js';

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