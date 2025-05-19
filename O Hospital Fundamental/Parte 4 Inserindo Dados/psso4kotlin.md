import com.mongodb.client.MongoClients
import com.mongodb.client.model.Filters.eq
import com.mongodb.client.model.Updates.set

fun main() {
    val mongoClient = MongoClients.create("mongodb://localhost:27017")
    val db = mongoClient.getDatabase("hospital")
    val medicos = db.getCollection("medicos")

    // Adiciona o campo em_atividade = true para todos
    medicos.updateMany(
        org.bson.Document(),
        set("em_atividade", true)
    )

    // Marca 2 médicos específicos como inativos
    medicos.updateOne(eq("_id", 1), set("em_atividade", false))
    medicos.updateOne(eq("_id", 2), set("em_atividade", false))

    println("Atualizações realizadas com sucesso.")
    mongoClient.close()
}
