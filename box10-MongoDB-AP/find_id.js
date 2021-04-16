const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
find_id()
// async await使うとちょっと楽？
async function find_id(){
    let client
    try {
        client = await MongoClient.connect("mongodb://localhost:27017/mydb", option)
        const db = client.db("mydb")
        const collection = db.collection("user")
        const result = await collection.findOne()
        // result._id でもできる
        console.log(result["_id"])
    }
    catch (e) {
        console.log(e)
    }
    finally {
        client.close()
    }


}


