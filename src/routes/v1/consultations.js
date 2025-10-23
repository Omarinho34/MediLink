import { Router } from "express";
import { getConsultations, postConsultation } from "../../controllers/v1/consultation.controller.js";

const router = Router();

router.get('/', getConsultations);
router.post('/', postConsultation);

export default router;