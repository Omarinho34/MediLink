import Patient from "../models/Patient.js"

export async function findAll(){
    return Patient.findAll();
}

export async function findById(id){
    return Patient.findByPk(id);
}

export async function create(data){
    return Patient.create(data)
}

export async function update(id, data){
    const patient = await Patient.findByPk(id);
    if(!patient) throw new Error('Patient not found');
    return patient.update(data);
}

export async function remove(id){
    const patient = await Patient.findByPk(id);
    if(!patient) throw new Error('Patient not found');
    return patient.destroy();
}