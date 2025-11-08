import { Router } from 'express';
import { getMedecins, postMedecin, putMedecin, deleteMedecin } from '../../controllers/v1/medecin.controller.js';

const router = Router();

router.get('/', getMedecins);
router.post('/', postMedecin);
router.put('/:id', putMedecin);
router.delete('/:id', deleteMedecin);


export default router;