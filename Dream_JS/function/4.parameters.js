/** note
매개변수를 전달하지 않으면 기본값으로 undefined

function add(a, b){
    console.log(a); // undefined
    console.log(b); // undefined
}

매개변수의 정보는 함수 내부에서 접근 가능한 arguments 객체에 저장됨
매개변수 기본값 (Default Parameters) a = 1 <- console.log 결과  

 */

// 

function add(a, b){
    console.log(a); // undefined
    console.log(b); // undefined

    console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 } <- mapping
    console.log(arguments[0]); // 일부만 꺼낼 때 

    return a + b;
}

add(1,2,3); // 1, 2만 출력 

/** Rest 매개변수(Rest Parameters): (매개변수 자리에 쓰는) ...
1. 얼마나 많은 매개변수를 받을지 모를 때 = 받아오는 인자의 갯수를 모를 때 
2. 인자를 배열로 출력 
 */

function sum(...numbers){
    console.log(numbers);
}

sum(1,2,3,4,5,6,7,8,9); // [    1, 2, 3, 4, 5,    6, 7, 8, 9  ]