import { Router } from "express";
import { getTypeMedecins, postTypeMedecin, putTypeMedecin, deleteTypeMedecin } from "../../controllers/v1/typeMedecin.controller.js";

const router = Router();

router.get('/', getTypeMedecins);
router.post('/', postTypeMedecin);
router.put('/:id', putTypeMedecin);
router.delete('/:id', deleteTypeMedecin);

export default router;
