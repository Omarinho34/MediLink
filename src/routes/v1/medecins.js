import { Router } from 'express';
import { getMedecins, postMedecin } from '../../controllers/v1/medecin.controller.js';

const router = Router();

router.get('/', getMedecins);
router.post('/', postMedecin);

export default router;