import Medicament from '../models/Medicament.js';

export async function findAll(){
    return Medicament.findAll();
}

export async function findById(id){
    return Medicament.findByPk(id);
}

export function create(data){
    return Medicament.create(data);
}

export async function update(id, data){
    const medicament = await Medicament.findByPk(id);
    if(!medicament) throw new Error('Medicament not found');
    return medicament.update(data);
}

export async function remove(id){
    const medicament = await Medicament.findByPk(id);
    if(!medicament) throw new Error('Medicament not found');
    return medicament.destroy();
}