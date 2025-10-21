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