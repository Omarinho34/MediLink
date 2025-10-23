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