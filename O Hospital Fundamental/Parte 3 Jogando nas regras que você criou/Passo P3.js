//use hospital;

db.consultas.insertOne({
  _id: 811,
  data_hora: ISODate("2017-04-12T14:30:00Z"),
  paciente_id: 211,
  medico_id: 100,
  receita: {
    medicamentos: [
      { nome: "Ranitidina", dosagem: "150mg", frequencia: "2/dia" },
      { nome: "Metoclopramida", dosagem: "10mg", frequencia: "3/dia" }
    ]
  }
});

db.consultas.insertOne({
  _id: 813,
  data_hora: ISODate("2017-07-30T08:30:00Z"),
  paciente_id: 213,
  medico_id: 101
});

db.consultas.insertOne({
  _id: 814,
  data_hora: ISODate("2018-02-14T10:45:00Z"),
  paciente_id: 214,
  medico_id: 102
});

db.consultas.insertOne({
  _id: 815,
  data_hora: ISODate("2018-04-19T15:30:00Z"),
  paciente_id: 215,
  medico_id: 103,
  receita: {
    medicamentos: [
      { nome: "Ibuprofeno", dosagem: "400mg", frequencia: "12/12h" },
      { nome: "Dipirona", dosagem: "500mg", frequencia: "8/8h" }
    ]
  }
});

db.consultas.insertOne({
  _id: 816,
  data_hora: ISODate("2018-06-25T09:00:00Z"),
  paciente_id: 201,
  medico_id: 104
});

db.consultas.insertOne({
  _id: 817,
  data_hora: ISODate("2019-01-05T11:00:00Z"),
  paciente_id: 202,
  medico_id: 105
});

db.consultas.insertOne({
  _id: 818,
  data_hora: ISODate("2019-03-17T14:15:00Z"),
  paciente_id: 203,
  medico_id: 106,
  receita: {
    medicamentos: [
      { nome: "Amoxicilina", dosagem: "500mg", frequencia: "8/8h" },
      { nome: "Prednisona", dosagem: "20mg", frequencia: "1/dia" }
    ]
  }
});

db.consultas.insertOne({
  _id: 819,
  data_hora: ISODate("2020-10-21T10:30:00Z"),
  paciente_id: 204,
  medico_id: 107
});

db.consultas.insertOne({
  _id: 820,
  data_hora: ISODate("2021-11-30T09:00:00Z"),
  paciente_id: 205,
  medico_id: 108
});
