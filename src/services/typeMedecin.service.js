import TypeMedecin from "../models/TypeMedecin.js";

export async function findAll(){
    return TypeMedecin.findAll();
}

export async function findById(id){
    return TypeMedecin.findByPk(id);
}

export async function create(data){
    return TypeMedecin.create(data);
}

export async function update(id, data){
    const typeMedecin = await TypeMedecin.findByPk(id);
    if(!typeMedecin) throw new Error('TypeMedecin not found');
    return typeMedecin.update(data);
}

export async function remove(id){
    const typeMedecin = await TypeMedecin.findByPk(id);
    if(!typeMedecin) throw new Error('TypeMedecin not found');
    return typeMedecin.destroy();
}