/**

함수 선언문 function name(){}
함수의 표현식 const name = function(){}
화살표 함수 const name = () => { 실행하고자 하는 코드 }

 */

console.clear();

// 무명함수: 함수 이름이 없음 
let add = function(a,b){ 
    return a + b;
}

console.log(add(1, 2)); // 3

// 함수 이름 있고, 함수 이름으로 출력하면 

let add2 = function sum(a,b){ 
    return a + b;
}

// console.log(sum(1, 2)); // 에러

// 화살표 함수 

add3 = (a, b) => {
    return a + b;
}

console.log(add3(3, 5));


// 값으로 함수가 호출될 때 1.함수(값아님) 2.(값으로할당된)함수 - IIFE
function run(){
    console.log('🔥'); // 출력 X
}

(function run(){
    console.log('🔥');
})(); // 🔥, 함수 바로 호출하고 싶을 때 

/* note 

// 1. 함수 선언문
function a(x){ // x: 함수 선언에 들어가면 매개변수 -> 호출할 땐 인자 
    // 실행하고자 하는 코드; 
    return // 값을 함수 밖으로 출력 
}

// 2. 함수 표현식 
const b = function(){
    // 실행하고자 하는 코드; 
}

// 3. 화살표 함수 
const c = () => {
    // 실행하고자 하는 코드;
}

// 함수 호출: 함수이름()
// 함수는 값이 아니므로, 동작하는 걸 확인하기 위해서는 인자(값)를 넣어야 함.
console.log(a(x))

*/