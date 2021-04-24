const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const initMongoClient = async ()=>{
    const client = await MongoClient.connect("mongodb://localhost:27017/mydb",option)
    const db = client.db("blog-test")
    const collection = db.collection("article")
    return {client:client,db:db,collection:collection}
}

const getArticle = async ()=>{
    const mongo_client = await initMongoClient()
    const result = await mongo_client.collection.find({is_show:1}).toArray()
    console.log(result)
    return result
}



const getArticleSearchWord = async (word)=>{
    const mongo_client = await initMongoClient()
    const result = await mongo_client.collection.find({is_show:1})
}