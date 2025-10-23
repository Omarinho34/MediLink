export function serializePrescription(prescription){
    return{
        id_consultation: prescription.id_consultation,
        id_medicament: prescription.id_medicament,
        nb_boites: prescription.nb_boites,
    }
}

export function serializeList(prescriptions){
    return prescriptions.map(serializePrescription)
}