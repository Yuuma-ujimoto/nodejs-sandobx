// npm i mongodb
const MongoClient = require("mongodb").MongoClient

const url = 'mongodb://localhost:27017/mydb';

const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

MongoClient.connect(url,
    option, (error, db) => {

        if (error) {
            throw error
        }
        console.log("connect")
        const dbname = db.db("mydb")
        dbname.collection("members").find().toArray((error, documents) => {
            console.log(documents)

        })
        dbname.collection("members").find()

        // dbname.collection("members").insertOne({name:"node-test",age:20},(error,documents)=>{
        //     if(error){
        //         throw error
        //     }
        // })

    })