import { Router } from "express";
import { getTypeMedecins, postTypeMedecin } from "../../controllers/v1/typeMedecin.controller.js";

const router = Router();

router.get('/', getTypeMedecins);
router.post('/', postTypeMedecin);

export default router;
