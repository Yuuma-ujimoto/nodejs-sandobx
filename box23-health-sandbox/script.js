

const n = new Date()
console.log(n)
console.log(n.getDate())
console.log(n.getHours())


let m = null

m = n.getMonth() + 1
e_m = m < 10 ? "0" + m : m;

console.log(e_m)