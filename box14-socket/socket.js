const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const app = express()
const mongodb = require("mongodb").MongoClient
const config = require("./mongodb-config")

var http = require('http').Server(app);
const io = require('socket.io')(http);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('/public'));
app.use(express.urlencoded({extended: true, limit: "50mb"}));
app.use(cookieParser());


app.get('/', function(req, res) {
    res.render("index.ejs")
});

app.post("/get-room",async (req,res)=>{
    let client
    try {
        client = await mongodb.connect(config.url,config.option)
         const result = await client.db(config.dbname).collection("room").find().toArray()
        res.json({error:false,result:result})
    }catch (e){
        console.log(e)
    }
    finally {
       await client.close()
    }
})

app.post("/create-room",async (req,res)=>{
    const room_name = req.body.room_name
    let client
    try{
        client = await mongodb.connect(config.url,config.option)
        const room_collection = client.db(config.dbname).collection("room")
        const check_room_name = await room_collection.countDocuments({room_name:room_name})
        if(check_room_name){
            res.send("すでに存在してるルーム名")
            return
        }
        await room_collection.insertOne({room_name:room_name})
        res.redirect("/room/"+room_name)
    }catch (e){
        console.log(e)
    }finally {

    }
})

app.post("/get-chat",async (req,res)=>{
    const room_id = req.body.room_id
    let client
    try {
        client = await mongodb.connect(config.url,config.option)
        const result = await client.db(config.dbname).collection("chat").find({room_id:room_id}).toArray()
        res.json({error:false,result:result})
    }catch (e){
        res.json({error:true})
    }
    finally {
        await client.close()
    }
})

app.get("/room/:name",(req,res)=>{
    res.render("room.ejs",{id:req.params.name})
})



let client

const io_func = async ()=> {
    client = await mongodb.connect(config.url,config.option)
    io.sockets.on("connection", (socket) => {
        socket.on("join", (room_id) => {
            console.log("room id", room_id)
            socket.join(room_id)
        })
        socket.on("post", async (data) => {
            console.log(data)
            try {
                io.to(data.room_id).emit("post", {message:data.message,user_name:data.user_name})
                await client.db(config.dbname).collection("chat").insertOne({message:data.message,user_name:data.user_name,room_id:data.room_id})
            } catch (e) {
                console.log(e)
            }
        })
    })
}



http.listen(3000,async ()=>{
    await io_func()
})

