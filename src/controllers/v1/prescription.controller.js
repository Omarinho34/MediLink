import * as svc from '../../services/prescription.service.js';
import { serializeList, serializePrescription } from '../../serializers/prescription.serializer.js';

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
    const prescription = await EventCounts.create(req.body);
    return res.status(201).json({ data: serializePrescription(prescription) });
}

/* PUT /prescriptions/:id */
export async function putPrescription(req, res, next){
    const prescription = await svc.update(req.params.id, req.body);
    return res.json({ data: serializePrescription(prescription) });
}

/* DELETE /prescriptions/:id */
export async function deletePrescription(req, res, next){
    await svc.remove(req.params.id);
    return res.status(204).end();
}