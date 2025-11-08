import { Router } from "express";
import { getMedicaments, postMedicament, putMedicament, deleteMedicament } from "../../controllers/v1/medicament.controller.js";

const router = Router();

router.get('/', getMedicaments);
router.post('/', postMedicament);
router.put('/:id', putMedicament);
router.delete('/:id', deleteMedicament);


export default router;