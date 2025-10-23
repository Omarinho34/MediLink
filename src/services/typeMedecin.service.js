import TypeMedecin from '../models/typeMedecin.js';

export async function findAll(){
    return TypeMedecin.findAll();
}

export async function findById(id){
    return TypeMedecin.findByPk(id);
}

export async function create(data){
    return TypeMedecin.create(data);
}

