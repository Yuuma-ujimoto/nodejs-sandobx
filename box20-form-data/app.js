//諸々のPackage読み込み
const express = require("express")
const path = require("path")
const cookieParser = require('cookie-parser');





//app init
const app = express()

// appの各種設定
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('/public'));
app.use(express.urlencoded({extended: true, limit: "50mb"}));
app.use(cookieParser());

// routing
app.get('/', function(req, res) {
    res.render("index2");
});

app.post("/post",(req, res) => {
    console.log(req.body)
    res.send("uploaded")
})

app.post("/post2",(req, res, next) => {
    let category
    const check = req.body.check;
    if(check === "他" && req.body.check_ext){
        console.log(req.body.check_ext)
        category = req.body.check_ext
    }
    else{
        category = check
    }
    res.send(category)
})

//　ポート番号3000番で起動
app.listen(3000);
//一応Logにローカルホストのアドレスを表示させておく
console.log("http://localhost:3000/")