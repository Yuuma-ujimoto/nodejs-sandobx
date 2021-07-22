const fetch = require("node-fetch")
const axios = require("axios")

async function f() {


    console.log("a")
    let G = []

       for(item of [1, 2, 3, 5, 8]) {


        let url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${item}&cityCode=-`

        let response = await axios(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": "FrI3uZXQMTCp1eD0CJBeZ5NlolU6vC02yjkL0kpL"
            }
        })
        console.log(response.data.result.data[0].data)
        console.log("c")
           G.push(response.data.result.data[0].data)
    }
    console.log(G)
}

f()
