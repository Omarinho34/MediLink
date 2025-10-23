export function serializeTypeMedecin(typeMedecin){
    return{
        id: typeMedecin.id,
        libelle: typeMedecin.libelle
    }
}

export function serializeList(typeMedecins){
    return typeMedecins.map(serializeTypeMedecin);
}
