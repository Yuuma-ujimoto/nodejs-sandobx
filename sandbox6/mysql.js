const mysql = require("mysql2")

module.exports = mysql.createConnection({
    host: "localhost",
    user: "user_name",
    password: "password",
    database: "database_name",
    multipleStatements: true
})