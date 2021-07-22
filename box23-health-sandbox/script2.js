// pushの挙動調査

let def_list = ["a"]

def_list.push(["b", "c"])

console.log(def_list)

// 実行結果　　[ 'a', [ 'b', 'c' ] ]
// 欲しい結果　[ 'a', 'b', 'c' ]

let def_list2 = ["a"]

let def_list3 = def_list2.concat(["b","c"])

console.log(def_list3)

// 実行結果[ 'a', 'b', 'c' ]
// 欲しい結果にはなった
// concatはpushと違って指定した配列を操作するのではなく連結した配列を戻り値で返す仕様になってるので注意