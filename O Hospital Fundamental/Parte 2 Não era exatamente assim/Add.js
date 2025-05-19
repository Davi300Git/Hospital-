db.internacoes.insertOne({
  data_entrada: new Date("2025-05-10T14:00:00Z"),
  data_prevista_alta: new Date("2025-05-20T10:00:00Z"),
  data_efetiva_alta: null,
  procedimentos: "Monitoramento cardíaco, fisioterapia diária, medicação intravenosa",
  id_quarto: 101,
  id_tipo_quarto: 1,
  id_paciente: 555,
  id_medico: 200,
  enfermeiros: [
    { nome: "Ana Paula", cpf: "12345678900", corem: "COREN-SP12345" },
    { nome: "Marcos Silva", cpf: "98765432100", corem: "COREN-SP67890" }
  ]
});
