Dependência no Gradle (build.gradle.kts):

kotlin-

dependencies {
    implementation("org.mongodb:mongodb-driver-sync:4.11.0") // Ou versão mais recente
}

Exemplo de código Kotlin para inserir as consultas no MongoDB:

kotlin-

import com.mongodb.client.MongoClients
import com.mongodb.client.MongoCollection
import org.bson.Document
import java.time.Instant
import java.time.LocalDateTime
import java.time.ZoneOffset

fun main() {
    // Cria cliente e conecta ao banco hospital
    val mongoClient = MongoClients.create("mongodb://localhost:27017")
    val database = mongoClient.getDatabase("hospital")
    val collection: MongoCollection<Document> = database.getCollection("consultas")

    // Exemplo: criar documento consulta com receituário
    val consulta1 = Document()
        .append("_id", 811)
        .append("data_hora", Instant.parse("2017-04-12T14:30:00Z"))
        .append("paciente_id", 211)
        .append("medico_id", 100)
        .append("receita", Document("medicamentos", listOf(
            Document("nome", "Ranitidina").append("dosagem", "150mg").append("frequencia", "2/dia"),
            Document("nome", "Metoclopramida").append("dosagem", "10mg").append("frequencia", "3/dia")
        )))

    val consulta2 = Document()
        .append("_id", 813)
        .append("data_hora", Instant.parse("2017-07-30T08:30:00Z"))
        .append("paciente_id", 213)
        .append("medico_id", 101)

    // Inserir documentos
    collection.insertOne(consulta1)
    collection.insertOne(consulta2)

    println("Consultas inseridas com sucesso!")

    mongoClient.close()
}