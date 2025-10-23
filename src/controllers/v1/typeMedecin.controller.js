import * as svc from '../../services/typeMedecin.service.js';
import { serializeList, serializeTypeMedecin } from '../../serializers/typeMedecin.serializer.js';

/* GET /typeMedecins */
export async function getTypeMedecins(req, res, next) {
    const typeMedecins = await svc.findAll();
    return res.json({
        data: serializeList(typeMedecins),
        meta: { version: '1.0', count: typeMedecins.length }
    });
}

/* POST /typeMedecins */
export async function postTypeMedecin(req, res, next){
    const typeMedecin = await svc.create(req.body);
    return res.status(201).json({ data: serializeTypeMedecin(typeMedecin) });
}