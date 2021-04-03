const readline = require("readline").createInterface({
    input: process.stdin,
    output:process.stdout
})

readline.question("test>",(answer => {
    console.log(answer)
    readline.close()
}))