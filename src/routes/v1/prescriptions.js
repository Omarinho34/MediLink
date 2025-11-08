import { Router } from "express";
import { getPrescriptions, postPrescription, putPrescription, deletePrescription } from "../../controllers/v1/prescription.controller.js";

const router = Router();

router.get('/', getPrescriptions);
router.post('/', postPrescription);
router.put('/:id', putPrescription);
router.delete('/:id', deletePrescription);

export default router;