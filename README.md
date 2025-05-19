🏥 Sistema de Gerenciamento Hospitalar — MongoDB

Este repositório documenta a construção de um sistema de gerenciamento hospitalar utilizando MongoDB. O projeto cobre o ciclo completo: modelagem de dados, inserção, atualização e consultas com foco em operações reais de um ambiente clínico e hospitalar.

📁 Estrutura do Projeto

* `scripts/hospital_queries.js`: comandos MongoDB Shell para atualizações e consultas.
* `dados/`: contém arquivos JSON com dados de médicos, pacientes, internações, consultas e tipos de quartos.
* `assets/modelo`: imagem do modelo relacional ou estrutura das coleções.
* `sobre-as-queries.md`: detalhamento técnico das principais queries utilizadas.

  <p align="center">
  <img src="O Hospital Fundamental/assets/img_diagrama.jpg" alt="Diagrama" width="700"/>
</p>

📚 Funcionalidades por Coleção

📌 **medicos**

* Armazena informações como CRM, CPF, especialidade, status (campo novo: `em_atividade`).
* Script de atualização define 2 médicos como inativos e os demais como ativos.

📌 **pacientes**

* Inclui dados pessoais, convênios, alergias, medicamentos e histórico básico de consultas.

📌 **consultas**

* Registra data, médico, paciente, valor, forma de pagamento, status e receituário (com múltiplos medicamentos quando aplicável).
* Inclui consultas com e sem convênio.

📌 **internacoes**

* Campos principais: data entrada/alta prevista/efetiva, quarto (com `tipo_quarto` e `valor_diaria`), procedimento e equipe de enfermagem (com `nome`, `CPF`, `COREN`).

📌 **quartos e tipos\_quartos**

* Identifica a numeração, tipo e valor de diária dos quartos disponíveis (enfermaria, quarto duplo, apartamento).

📌 **convenios** e **especialidades**

* Povoados automaticamente no início do sistema com scripts de inserção.

🧾 Progresso do Projeto

✅ 12 médicos de diferentes especialidades
✅ 7 especialidades distintas
✅ 15 pacientes
✅ 20 consultas (10 com receituário múltiplo)
✅ Período de consultas entre 01/01/2015 e 01/01/2022
✅ 7 internações, com 2 pacientes internados mais de uma vez
✅ 3 tipos de quarto: apartamento, duplo e enfermaria
✅ 10 profissionais de enfermagem, cada internação com pelo menos 2
✅ Scripts para povoamento inicial dos dados essenciais

🔍 Consultas Implementadas (Parte 5)

✔️ Valor médio das consultas de 2020 e feitas com convênio
✔️ Internações cuja data de alta foi maior que a prevista
✔️ Receituário completo da primeira consulta com medicamentos
✔️ Consultas de maior e menor valor (sem convênio)
✔️ Internações + tipo do quarto, com cálculo do valor total da estadia
✔️ Internações em apartamentos com data, número do quarto e procedimento
✔️ Consultas de pacientes <18 anos, especialidade ≠ pediatria, ordenadas por data
✔️ Internações em enfermarias feitas por médicos de gastroenterologia, com nome do paciente, médico e procedimento
✔️ Médicos com suas quantidades de consultas realizadas
✔️ Médicos com "Gabriel" no nome
✔️ Enfermeiros com mais de uma internação e seus respectivos CORENs

📦 Banco de dados NoSQL escalável e otimizado para ambientes hospitalares

💡 Perfeito para fins educacionais ou como base para sistemas hospitalares reais em clínicas ou hospitais de médio porte.
