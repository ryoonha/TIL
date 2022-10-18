/**

Iterable 하다 = 순회가 가능하다
[Symbol.iterator](): Iterator <- next(); 가능한 iterator 
심볼 정의를 가진 객체나, 특수한 함수가 Iterator를 리턴한다는 것은 순회 가능한 객체임

순회 가능하면, 무엇을 할 수 있는가? for ... of , spread - 빙글빙글 도는 연산자 사용 가능
일반 객체는 for ... of 사용할 수 없지만, for ... in 사용 가능 
 */


// for of 연산자 
const array = [1, 2, 3];
// for(const item of array){ // 배열 안의 원소를 하나씩 받아오는 연산자
//     console.log(array);
// }

const obj = { 0: 1, 1: 2};

/**

for (const item of obj){
    console.log(item); 
}
// symbol.iterable 정의가 없음 -> 에러 "obj is not iterable"

 */

// for ... in 
for (const item in obj){
    console.log(item); 
}


// values 연산자
// for(const item of array.values()){ // 배열 안의 원소를 하나씩 받아오는 연산자
//     console.log(item);
// }

// keys 연산자
// for(const item of array.keys()){ // 배열 안의 원소를 하나씩 받아오는 연산자
//     console.log(item);
// }

// entries 연산자
// for(const item of array.entries()){ // 배열 안의 원소를 하나씩 받아오는 연산자
//     console.log(item); 
// }



