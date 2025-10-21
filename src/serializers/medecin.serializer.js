// Ressources
export function serializeMedecin(medecin){
    return {
        id: medecin.id,
        nom: medecin.nom,
        prenom: medecin.prenom,
        email: medecin.email,
        date_naissance: medecin.date_naissance,
        sexe: medecin.sexe,
        id_type: medecin.id_type
    }
}

export function serializeList(medecins){
    return medecins.map(serializeMedecin);
}