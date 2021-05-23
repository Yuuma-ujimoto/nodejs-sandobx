

const  t = async ()=>{
    const mysql = require("mysql2/promise")
    const connection =  await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "db-name",
        multipleStatements: true
    })
    try {
        // 適当なSQLを実行
        const [rows,fields] = await connection.query("select count(*) from table");
        // SQL自体の結果はrowsに入る
        console.log(rows)
    }
    catch (e) {
        console.log(e)
    }

}

t()
// 雑だけど多分こんな感じでいける