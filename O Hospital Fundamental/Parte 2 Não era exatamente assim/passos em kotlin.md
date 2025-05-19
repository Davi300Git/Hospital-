Passos para usar MongoDB com Kotlin:
Adicione a dependência do driver MongoDB no seu build.gradle.kts (Kotlin DSL):

kotlin -

dependencies {
    implementation("org.mongodb:mongodb-driver-sync:4.10.2")
}

Exemplo de código Kotlin para conectar, criar documento de internação e inserir no MongoDB:

kotlin -

import com.mongodb.client.MongoClients
import com.mongodb.client.MongoCollection
import org.bson.Document
import java.util.*

fun main() {
    // Conecta ao MongoDB (ajuste a string de conexão conforme seu setup)
    val mongoClient = MongoClients.create("mongodb://localhost:27017")
    val database = mongoClient.getDatabase("hospital")
    val internacoesCollection: MongoCollection<Document> = database.getCollection("internacoes")

    // Criar documento da internação
    val internaoDoc = Document().apply {
        append("data_entrada", Date(2025 - 1900, 4, 10, 14, 0)) // 10 maio 2025 14:00
        append("data_prevista_alta", Date(2025 - 1900, 4, 20, 10, 0)) // 20 maio 2025 10:00
        append("data_efetiva_alta", null) // ainda internado
        append("procedimentos", "Monitoramento cardíaco, fisioterapia diária, medicação intravenosa")
        append("id_quarto", 101)
        append("id_tipo_quarto", 1)
        append("id_paciente", 555)
        append("id_medico", 200)

        // Lista de enfermeiros
        append("enfermeiros", listOf(
            Document(mapOf("nome" to "Ana Paula", "cpf" to "12345678900", "corem" to "COREN-SP12345")),
            Document(mapOf("nome" to "Marcos Silva", "cpf" to "98765432100", "corem" to "COREN-SP67890"))
        ))
    }

    // Inserir documento na coleção
    internacoesCollection.insertOne(internaoDoc)

    println("Internação inserida com sucesso!")

    // Fecha conexão
    mongoClient.close()
}