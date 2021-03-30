const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

MongoClient.connect("mongodb://localhost:27017/mydb",
    option,
    (error, client) => {
        if(error){
            throw error
        }
        check_mail_address(client,"test@example.com",(result)=>{
            console.log(result)
        })
    })


const check_mail_address = (db,mail_address,callback)=>{
    const dbname = db.db("mydb")
    dbname.collection("user").countDocuments({mail_address:mail_address},(error, documents) => {
        if (error) {
            throw error
        }
//        console.log(documents)
        callback(documents)
    })
}