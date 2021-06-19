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
app.get('/', function (req, res) {
    res.send("0")
    return
});

app.get("/1", function (req, res) {
    res.send("1")
    // response返しても処理は動く
    console.log(1)
})

app.get("/2", function (req, res) {
    res.send("2")
    return
    // returnの後に書かれた命令は動かない
    console.log("2")
})

// nextは次の関数に処理を移動させるとおもってたけど
// どうやら nextの位置で次の関数を実行している扱いになるから
// nextの後ろに処理書いても動くみたい(nextの処理終了後)
app.get("/3",function (req,res,next){
    next()
    console.log("a")
    return
},function (req,res){
    console.log("next")
    res.send("3")
})

// nextでreturnしても前の関数ごと終了するわけじゃないのでaが出力される
app.get("/4",function (req,res,next){
    next()
    console.log("a")
},function (req,res){
    console.log("next")
    res.send("4")
    return
})


//　ポート番号3000番で起動
app.listen(3000);
//一応Logにローカルホストのアドレスを表示させておく
console.log("http://localhost:3000/")