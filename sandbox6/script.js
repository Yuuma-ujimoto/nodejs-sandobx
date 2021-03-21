const express = require("express")
const router = express.Router()

const connection = require("./mysql")

router.get("/", (req, res, next) => {
    res.render("sign-in")
})

router.post("/", (req, res, next) => {
    const mail_address = req.body.mail_address
    const password = req.body.password
    const check_data = !(!!mail_address && !!password)
    if (check_data) {
        res.render("sign-in", {error: true})
        return
    }
    next()
}, (req, res, next) => {
    const sql = "select count(*) as count from user_data where mail_address = ? and password = ?"
    const mail_address = req.body.mail_address
    const password = req.body.password
    // Hash化後で実装

    connection.query(sql, [mail_address, password], (err, result) => {
        if (err) {
            console.log(err)
            res.render("sign-in", {error: true})
            return
        }
        if (!result[0].count) {
            // ログイン失敗
            res.render("sign-in", {error: true})
            return
        }
        next()
    })
}, (req, res) => {
    const sql = "select id from user_data where mail_address = ?"
    const mail_address = req.body.mail_address
    connection.query(sql,[mail_address],(err, result) => {
        if(err){
            console.log(err)
            res.render("sign-in",{error:true})
            return
        }
        // SESSIONに情報を書き込む
        req.session.user_id = result[0].id
        //トップページ（マイページとかでもいいかも）にリダイレクト
        res.redirect("/")
    })
})


module.exports = router