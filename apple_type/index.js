// 문제 1번
function message(name) {
    if (name) {
        return "안녕하세요 `${name}`";
    }
    else {
        return "이름이 없습니다";
    }
}
function sayHi(x) {
    if (x) {
        // console.log('안녕하세요 ' + x)
    }
    else {
        // console.log('왜입력안함')
    }
}
var result = message("kim");
var answer = sayHi("Lee");
// console.log(result);
// console.log(answer);
