import Medecin from '../models/Medecin.js';

export async function findAll(){
    return Medecin.findAll();
}

export async function findById(id){
    return Medecin.findByPk(id);
}

export async function create(data){
    return Medecin.create(data);
}

export async function update(id, data){
    const medecin = await Medecin.findByPk(id);
    if(!medecin) throw new Error('Medecin not found');
    return medecin.update(data);
}

export async function remove(id){
    const medecin = await Medecin.findByPk(id);
    if(!medecin) throw new Error('Medecin not found');
    return medecin.destroy();
}