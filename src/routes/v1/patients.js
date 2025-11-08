import { Router } from 'express';
import { getPatients, postPatient, putPatient, deletePatient } from '../../controllers/v1/patient.controller.js';

const router = Router();

router.get('/', getPatients);
router.post('/', postPatient);
router.put('/:id', putPatient);
router.delete('/:id', deletePatient);

export default router;