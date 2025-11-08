import Prescription from '../models/Prescription.js';

export async function findAll(){
    return Prescription.findAll();
}

export async function findById(id){
    return Prescription.findByPk(id);
}

export async function create(data){
    return Prescription.create(data);
}

export async function update(id_consultation, id_medicament, data){
    const prescription = await Prescription.findOne({ where: { id_consultation, id_medicament } });
    if(!prescription) throw new Error('Prescription not found');
    return prescription.update(data);
}

export async function remove(id_consultation, id_medicament){
    const prescription = await Prescription.findOne({ where: { id_consultation, id_medicament } });
    if(!prescription) throw new Error('Prescription not found');
    return prescription.destroy();
}