const express = require("express")
const app = express()
const path = require("path")

app.set("view engine","ejs")
app.set('views', path.join(__dirname, 'views'));

app.get("/",(req, res) => {
    res.render("index")
})

app.get("/api",(req, res) => {
    res.json({m:"hello world"})
})

app.listen(3000)