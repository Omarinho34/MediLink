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