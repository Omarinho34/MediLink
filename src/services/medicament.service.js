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