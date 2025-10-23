import * as svc from '../../services/medicament.service.js';
import { serializeList, serializeMedicament } from '../../serializers/medicament.serializer.js';

/* GET /medicaments */
export async function getMedicaments(req, res, next){
    const medicaments = await svc.findAll();
    return res.json({
        data: serializeList(medicaments),
        meta: { version: '1.0', count: medicaments.length }
    });
}

export async function postMedicament(req, res, next){
    const medicament =  await svc.create(req.body);
    return res.status(201).json({ data: serializeMedicament(medicament) });
}