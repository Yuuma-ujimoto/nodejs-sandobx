const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
const input = () => {


    readline.question("test>", (answer => {
        console.log(answer)
        readline.close()
    }))

}

async function test(){
    await input()
}

test()