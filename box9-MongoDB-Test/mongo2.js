const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

MongoClient.connect("mongodb://localhost:27017/mydb",option,
    (err,db)=>{
    if(err){
        throw err
    }
        console.log("connect")
    selectDoc(db,(doc)=>{
        console.log(doc)
        db.close()
    })
})

const selectDoc = (db,callback)=>{
    const dbname = db.db("mydb")

    dbname.collection("members").find().toArray((error, documents) => {
        if(error){
            throw error
        }
//        console.log(documents)
        callback(documents)
    })
}