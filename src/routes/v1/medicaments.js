import { Router } from "express";
import { getMedicaments, postMedicament } from "../../controllers/v1/medicament.controller.js";

const router = Router();

router.get('/', getMedicaments);
router.post('/', postMedicament);

export default router;