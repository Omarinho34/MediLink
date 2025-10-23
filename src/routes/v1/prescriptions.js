import { Router } from "express";
import { getPrescriptions, postPrescription } from "../../controllers/v1/prescription.controller.js";

const router = Router();

router.get('/', getPrescriptions);
router.post('/', postPrescription);

export default router;