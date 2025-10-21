import * as svc from '../../services/patient.service.js';
import { serializeList, serializePatient } from '../../serializers/patient.serializer.js';

/* GET /patients */
export async function getPatients(req, res, next) {
    const patients = await svc.findAll();
    return res.json({
        data: serializeList(patients),
        meta: { version: '1.0', count: patients.length }
    });
}

/* POST /patients */
export async function postPatient(req, res, next) {
    const patient = await svc.create(req.body);
    return res.status(201).json({ data: serializePatient(patient) });
}