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

export async function update(id, data){
    const prescription = await Prescription.findByPk(id);
    if(!prescription) throw new Error('Prescription not found');
    return prescription.update(data);
}

export async function remove(id){
    const prescription = await Prescription.findByPk(id);
    if(!prescription) throw new Error('Prescription not found');
    return prescription.destroy();
}