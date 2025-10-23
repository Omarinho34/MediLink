export function serializeMedicament(medicament){
    return {
        id: medicament.id,
        nom: medicament.nom,
        description: medicament.description
    }
}

export function serializeList(medicaments){
    return medicaments.map(serializeMedicament);
}