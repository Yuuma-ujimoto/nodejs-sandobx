const test_object1 = {
    "a":null,
    1:1
}
function check_null(check_object) {
    for (let key in check_object){
        if(check_object.hasOwnProperty(key)){
            if(!check_object[key]){
                return true
            }
        }
    }
    return false
}

console.log(check_null(test_object1))

