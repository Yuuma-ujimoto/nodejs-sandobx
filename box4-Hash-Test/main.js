const crypto = require("crypto")

const message = "hello world"
const hash = crypto.createHash("sha1")
hash.update(message)
const crypto_message = hash.digest("hex")

console.log(crypto_message)