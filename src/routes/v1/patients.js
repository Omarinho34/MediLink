import { Router } from 'express';
import { getPatients, postPatient } from '../../controllers/v1/patient.controller.js';

const router = Router();

router.get('/', getPatients);
router.post('/', postPatient);

export default router;