import { Router } from "express";
import { getConsultations, postConsultation, putConsultation, deleteConsultation } from "../../controllers/v1/consultation.controller.js";

const router = Router();

router.get('/', getConsultations);
router.post('/', postConsultation);
router.put('/:id', putConsultation);
router.delete('/:id', deleteConsultation);


export default router;