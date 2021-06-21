//諸々のPackage読み込み
const express = require("express")
const path = require("path")
const cookieParser = require('cookie-parser');
const fileUpload = require("express-fileupload")


//app init
const app = express()

app.use(fileUpload())
// appの各種設定
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('/public'));
app.use(express.urlencoded({extended: false, limit: "50mb"}));
app.use(cookieParser());

// routing
app.get('/', function (req, res) {
    res.render("index");
});

app.post("/post", (req, res) => {
    console.log(req.files)
    console.log(req.body)

    req.body.bbbb.split(",").forEach(i => {
            console.log(i)
        console.log(i.toLowerCase()==="true")
        if(i){
            console.log("t")
        }
        else {
            console.log("f")
        }
        }
    )
    res.send("uploaded")
})

//　ポート番号3000番で起動
app.listen(3000);
//一応Logにローカルホストのアドレスを表示させておく
console.log("http://localhost:3000/")