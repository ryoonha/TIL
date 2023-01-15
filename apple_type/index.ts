// 문제 1번
function message (name: string) :string {
  if(name){
    return "안녕하세요 `${name}`";
  } else {
    return "이름이 없습니다";
  }
}

function sayHi(x? :string ){
  if (x) {
    // console.log('안녕하세요 ' + x)
  } else {
    // console.log('왜입력안함')
  }
}

const result = message("kim");
const answer = sayHi("Lee");
// console.log(result);
// console.log(answer);


