import Consultation from '../models/Consultation.js';

export async function findAll(){
    return Consultation.findAll();
}

export async function findById(id){
    return Consultation.findByPk(id);
}

export async function create(data){
    return Consultation.create(data);
}

export async function update(id, data){
    const consultation = await Consultation.findByPk(id);
    if(!consultation) throw new Error('Consultation not found');
    return consultation.update(data);
}

export async function remove(id){
    const consultation = await Consultation.findByPk(id);
    if(!consultation) throw new Error('Consultation not found');
    return consultation.destroy();
}