const mysql = require("mysql")
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})

connection.connect()

// 通常SQLの実行

let sql = "select * from test"
connection.query(sql,(err, result) => {
    //errにエラーが発生した際のエラー文
    //resultにSQLの結果がそれぞれ格納される
    if(err){
        // エラー判定
        //エラーが起きない時はerrはnullになるのでif文をスルーする
        console.log(err)
        // expressとかだとここでres.render()とか書いてreturn
        return
    }
    console.log(result)
})

// プリペアドステートメント
sql = "select * from test where id = ?"
let id = 1
// queryの第一引数sqlに格納されたSQL文の?部分に第二引数の配列の中のあたいが適応される。
// この場合 select * from test where id = 1 となる。

connection.query(sql,[id],(err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})

connection.end()