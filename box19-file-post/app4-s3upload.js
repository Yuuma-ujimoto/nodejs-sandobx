
//諸々のPackage読み込み
const express = require("express")
const path = require("path")
const cookieParser = require('cookie-parser');
const fileUpload = require("express-fileupload")
const AWS = require("aws-sdk")


//app init
const app = express()

app.use(fileUpload())
// appの各種設定
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('/public'));
app.use(express.urlencoded({extended: true, limit: "50mb"}));
app.use(cookieParser());

// routing
app.get('/', function(req, res) {
    res.render("index");
});

app.post("/post",(req, res) => {
    console.log(req.files.file)
    console.log(req.body)
    res.send("uploaded")

    //アクセスキー周り
    //後でいい感じにしておく
    const config = {
        accessKeyId: "xxxx",
        secretAccessKey: "x",
        region: "ap-northeast-1"
    }

    AWS.config.update(config)
    const params = {
        Bucket: "crea-test-bucket",
        Key: `u22/${req.files.file.md5}.png`,
        Body: req.files.file.data,
        ContentType: "image/png"
    }
    const s3 = new AWS.S3()

    s3.putObject(params,(err, data) => {
        if(err){
            console.log(err)
            console.log("失敗")
            return
        }
        console.log("upload完了")
    })
})

//　ポート番号3000番で起動
app.listen(3000);
//一応Logにローカルホストのアドレスを表示させておく
console.log("http://localhost:3000/")

