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