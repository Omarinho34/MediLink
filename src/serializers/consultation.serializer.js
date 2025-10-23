export function serializeConsultation(consultation){
    return {
        id: consultation.id,
        id_medecin: consultation.id_medecin,
        id_patient: consultation.id_patient,
        date: consultation.date,
        duree: consultation.duree,
        motif: consultation.motif
    }
}

export function serializeList(consultations){
    return consultations.map(serializeConsultation)
}