✋ Parte 1 - Mãos à Obra
📊 Analise a seguinte descrição e extraia dela os requisitos para o banco de dados em um diagrama, fluxograma ou afins:

O hospital necessita de um sistema para sua área clínica que ajude a controlar consultas realizadas.
👨‍⚕️ Os médicos podem ser generalistas, especialistas ou residentes e têm seus dados pessoais cadastrados em planilhas digitais. Cada médico pode ter uma ou mais especialidades, que podem ser 🧒 pediatria, 💼 clínica geral, 🥘 gastroenterologia e 🌿 dermatologia.
📄 Alguns registros antigos ainda estão em formulário de papel, mas será necessário incluir esses dados no novo sistema.

🧑‍🦰 Os pacientes também precisam de cadastro, contendo:

Dados pessoais: nome, data de nascimento, endereço, telefone e e-mail 📱

Documentos: CPF e RG 🪪

Convênio: nome, CNPJ e tempo de carência 📑

📅 As consultas têm sido registradas em planilhas, com:

Data e hora ⏰

Médico responsável 👨‍⚕️

Paciente 🧑

Valor da consulta 💵 ou nome do convênio com número da carteira 💳

Especialidade buscada 🩺

💊 Deseja-se ainda informatizar a receita médica, de modo que, ao fim da consulta, o médico possa registrar:

Medicamentos receitados 🧪

Quantidade 💊

Instruções de uso 📜
📤 A partir disso, o sistema deve permitir a impressão da receita ou sua visualização online.

🗂️ Exemplo de Requisitos do Banco de Dados
A Coleção de Médicos, por exemplo, teria suas características definidas como segue:

Campos:

_id (ObjectId)

nome (String)

data_nascimento (Date)

especialidades (Array de Strings) — Ex.: ["Pediatria", "Clínica Geral"]

tipo (String) — Ex.: "Generalista", "Especialista", "Residente"

contato: { telefone (String), email (String) }

documentos: { CPF (String), RG (String) }