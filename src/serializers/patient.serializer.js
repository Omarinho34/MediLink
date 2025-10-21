// Ressources
export function serializePatient(patient){
    return {
        id: patient.id,
        nom: patient.nom,
        prenom: patient.prenom,
        email: patient.email,
        date_naissance: patient.date_naissance,
        sexe: patient.sexe
    }
}

export function serializeList(patients){
    return patients.map(serializePatient);
}