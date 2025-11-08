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

/* PUT /typeMedecins/:id */
export async function putTypeMedecin(req, res, next){
    const typeMedecin = await svc.update(req.params.id, req.body);
    return res.json({ data: serializeTypeMedecin(typeMedecin) });
}

/* DELETE /typeMedecins/:id */
export async function deleteTypeMedecin(req, res, next){
    await svc.remove(req.params.id);
    return res.status(204).end();
}