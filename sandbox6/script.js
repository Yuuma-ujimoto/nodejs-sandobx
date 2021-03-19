const express = require("express")
const router = express.Router()

const connection = require("./mysql")

router.get("/",(req, res, next) => {
    res.render("sign-in")
})

router.post("/",(req, res, next) => {
    const mail_address = req.body.mail_address
    const password = req.body.password
    const check_data = !(!!mail_address&&!!password)
    if(check_data){
        res.render("sign-in",{error:true})
        return
    }
    next()
},(req, res, next) => {

})


module.exports = router