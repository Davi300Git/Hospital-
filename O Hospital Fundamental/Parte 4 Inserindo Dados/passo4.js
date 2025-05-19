// Adiciona o campo 'em_atividade' = true para todos os médicos
db.medicos.updateMany(
  {},
  { $set: { em_atividade: true } }
)

// Marca 2 médicos como inativos (exemplo pelos IDs)
db.medicos.updateOne(
  { _id: 1 },
  { $set: { em_atividade: false } }
)
db.medicos.updateOne(
  { _id: 2 },
  { $set: { em_atividade: false } }
)
