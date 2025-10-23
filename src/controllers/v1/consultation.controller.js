import * as svc from '../../services/consultation.service.js';
import { serializeList, serializeConsultation } from '../../serializers/consultation.serializer.js';
import { errorHandler } from '../../middlewares/error-handler.js';

/* GET /consultations */

export async function getConsultations(req, res, next){
    const consultations = await svc.findAll();
    return res.json({
        data: serializeList(consultations),
        meta: { version: '1.0', count: consultations.length }
    });
}

export async function postConsultation(req, res, next){
    try{
        const consultation =  await svc.create(req.body);
        return res.status(201).json({ data: serializeConsultation(consultation) });
    }
    catch (error){
        next(errorHandler(error, req, res, next));
    }
}