const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

find_by_regexp().then(r =>{
    console.log("x",r)
    }
)

async function find_by_regexp(){
    let client
    try {
        client = await MongoClient.connect("mongodb://localhost:27017/mydb",option)
        const db = client.db("mydb")
        const collection = db.collection("task")
        const result = await collection.find({task_content:new RegExp("a","i")}).toArray()
        // RegExpを使わない方法
        const result2 = await collection.find({task_content:/a/}).toArray()
        console.log(result)
        console.log(result2)
        return true
    }
    catch (e) {
        return false
    }
    finally {
        console.log("close")
        client.close()
    }
}
