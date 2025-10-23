import * as svc from '../../services/medecin.service.js';
import { serializeList, serializeMedecin } from '../../serializers/medecin.serializer.js';

/* GET /medecins */
export async function getMedecins(req, res, next) {
    const medecins = await svc.findAll();
    return res.json({
        data: serializeList(medecins),
        meta: { version: '1.0', count: medecins.length }
    });
}

/* POST /medecins */
export async function postMedecin(req, res, next) {
    const medecin = await svc.create(req.body);
    return res.status(201).json({ data: serializeMedecin(medecin) });
}