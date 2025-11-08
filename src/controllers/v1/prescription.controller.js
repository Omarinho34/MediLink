import * as svc from '../../services/prescription.service.js';
import { serializeList, serializePrescription } from '../../serializers/prescription.serializer.js';
import Prescription from '../../models/Prescription.js';

/* GET /prescriptions */
export async function getPrescriptions(req, res, next){
    const prescriptions = await svc.findAll();
    return res.json({
        data: serializeList(prescriptions),
        meta: { version: '1.0', count: prescriptions.length }
    });
}

/* POST /prescriptions */

export async function postPrescription(req, res, next){
    const prescription = await svc.create(req.body);
    return res.status(201).json({ data: serializePrescription(prescription) });
}

/* PUT /prescriptions/:idconsultation/:idmedicament   TODO : ajouter un id de prescription en base de donnée */ 
export async function putPrescription(req, res, next){
    const prescription = await svc.update(req.params.idconsultation, req.params.idmedicament, req.body);
    return res.json({ data: serializePrescription(prescription) });
}

/* DELETE /prescriptions/:idconsultation/:idmedicament */
export async function deletePrescription(req, res, next){
    await svc.remove(req.params.idconsultation, req.params.idmedicament);
    return res.status(204).end();
}