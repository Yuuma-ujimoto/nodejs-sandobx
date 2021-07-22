let before_date = "2020-07-30"
let after_date = "2020-08-11"

let before = new Date(before_date.split("-"))
let after = new Date(after_date.split("-"))

console.log(before)
console.log(after)
console.log((after - before) / (60*60*24*1000))