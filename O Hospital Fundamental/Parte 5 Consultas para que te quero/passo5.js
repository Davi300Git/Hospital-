// Supondo que os nomes das coleções sejam: consultas, internacoes, medicos, pacientes, quartos, receituarios, enfermeiros, especialidades, convenios

// 1. Todos os dados e valor médio das consultas de 2020 e as feitas sob convênio
// a) Consultas de 2020
const consultas2020 = db.consultas.aggregate([
  { $match: { data: { $gte: ISODate("2020-01-01"), $lte: ISODate("2020-12-31") } } },
  { $group: {
    _id: null,
    mediaValor: { $avg: "$valor" },
    consultas: { $push: "$$ROOT" }
  }}
])

// b) Consultas com convênio
const consultasConvenio = db.consultas.find({ id_convenio: { $ne: null } })

// 2. Internações com data de alta maior que a prevista
const altasAtrasadas = db.internacoes.find({
  data_alta_efetiva: { $gt: "$data_alta_prevista" }
})

// 3. Receituário completo da primeira consulta com receituário
const primeiroReceituario = db.receituarios.find().sort({ data: 1 }).limit(1)

// 4. Consulta de maior e menor valor (sem convênio)
const maiorConsulta = db.consultas.find({ id_convenio: null }).sort({ valor: -1 }).limit(1)
const menorConsulta = db.consultas.find({ id_convenio: null }).sort({ valor: 1 }).limit(1)

// 5. Internações + seus quartos, com total calculado
const internacoesTotais = db.internacoes.aggregate([
  {
    $lookup: {
      from: "quartos",
      localField: "id_quarto",
      foreignField: "_id",
      as: "quarto"
    }
  },
  { $unwind: "$quarto" },
  {
    $addFields: {
      dias: { $dateDiff: { startDate: "$data_entrada", endDate: "$data_alta_efetiva", unit: "day" } },
      total: { $multiply: ["$quarto.valor_diaria", { $dateDiff: { startDate: "$data_entrada", endDate: "$data_alta_efetiva", unit: "day" } }] }
    }
  }
])

// 6. Data, procedimento e número do quarto de internações em apartamentos
const internacoesApartamentos = db.internacoes.aggregate([
  {
    $lookup: {
      from: "quartos",
      localField: "id_quarto",
      foreignField: "_id",
      as: "quarto"
    }
  },
  { $unwind: "$quarto" },
  { $match: { "quarto.tipo": "apartamento" } },
  { $project: { data_entrada: 1, procedimento: 1, "quarto.numero": 1 } }
])

// 7. Consultas com pacientes <18 e especialidade diferente de "pediatria"
const consultasNaoPediatria = db.consultas.aggregate([
  {
    $lookup: {
      from: "pacientes",
      localField: "id_paciente",
      foreignField: "_id",
      as: "paciente"
    }
  },
  { $unwind: "$paciente" },
  {
    $lookup: {
      from: "especialidades",
      localField: "id_especialidade",
      foreignField: "_id",
      as: "especialidade"
    }
  },
  { $unwind: "$especialidade" },
  {
    $addFields: {
      idade: {
        $dateDiff: {
          startDate: "$paciente.data_nascimento",
          endDate: ISODate("2022-01-01"),
          unit: "year"
        }
      }
    }
  },
  {
    $match: {
      idade: { $lt: 18 },
      "especialidade.nome": { $ne: "pediatria" }
    }
  },
  {
    $project: {
      nome_paciente: "$paciente.nome",
      data: 1,
      especialidade: "$especialidade.nome"
    }
  },
  { $sort: { data: 1 } }
])

// 8. Internações por médicos de "gastroenterologia" em "enfermaria"
const gastroInternacoes = db.internacoes.aggregate([
  {
    $lookup: {
      from: "medicos",
      localField: "id_medico",
      foreignField: "_id",
      as: "medico"
    }
  },
  { $unwind: "$medico" },
  {
    $lookup: {
      from: "especialidades",
      localField: "medico.id_especialidade",
      foreignField: "_id",
      as: "especialidade"
    }
  },
  { $unwind: "$especialidade" },
  {
    $lookup: {
      from: "quartos",
      localField: "id_quarto",
      foreignField: "_id",
      as: "quarto"
    }
  },
  { $unwind: "$quarto" },
  {
    $match: {
      "especialidade.nome": "gastroenterologia",
      "quarto.tipo": "enfermaria"
    }
  },
  {
    $lookup: {
      from: "pacientes",
      localField: "id_paciente",
      foreignField: "_id",
      as: "paciente"
    }
  },
  { $unwind: "$paciente" },
  {
    $project: {
      nome_paciente: "$paciente.nome",
      nome_medico: "$medico.nome",
      data: "$data_entrada",
      procedimento: 1
    }
  }
])

// 9. Nome, CRM e quantidade de consultas por médico
const consultasPorMedico = db.consultas.aggregate([
  {
    $lookup: {
      from: "medicos",
      localField: "id_medico",
      foreignField: "_id",
      as: "medico"
    }
  },
  { $unwind: "$medico" },
  {
    $group: {
      _id: "$medico._id",
      nome: { $first: "$medico.nome" },
      crm: { $first: "$medico.crm" },
      total_consultas: { $sum: 1 }
    }
  }
])

// 10. Médicos com "Gabriel" no nome
const medicosGabriel = db.medicos.find({ nome: /Gabriel/i })

// 11. Enfermeiros com +1 internação
const enfermeirosAtivos = db.internacoes.aggregate([
  { $unwind: "$id_enfermeiros" },
  {
    $group: {
      _id: "$id_enfermeiros",
      total: { $sum: 1 }
    }
  },
  { $match: { total: { $gt: 1 } } },
  {
    $lookup: {
      from: "enfermeiros",
      localField: "_id",
      foreignField: "_id",
      as: "enfermeiro"
    }
  },
  { $unwind: "$enfermeiro" },
  {
    $project: {
      nome: "$enfermeiro.nome",
      coren: "$enfermeiro.coren",
      total_internacoes: "$total"
    }
  }
])
