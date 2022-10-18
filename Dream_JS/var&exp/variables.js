// null 과 undefiend
/**
console.log(typeof null);
console.log(typeof undefined);
 */

// 4.8 object - 연관 있는 것끼리 원시 데이티 묶어서 사용
/**

let name = 'apple';
let color = 'red';
let display = '이모지';

let apple = {
    name: 'apple',
    color: 'red',
    display: '🍎'
}

console.log(apple);

let orange = {
    name: '오렌지',
    color: 'orange',
    display: '🍊'
}

console.log(orange);

 */


// 4.9 reference
// 원시타입은 값이 복사되어 전달됨
/**
let a = 1;
let b = a; // 1

console.log(a);
console.log(b);

// // 객체 타입은 참조값(메모리주소, 레퍼런스 -> 힙주소)가 복사되어 잔달됨

let apple = {
    name: '사과',
};

let orange = apple; // apple 변수 셀에 담긴 레퍼런스가 복사됨

orange.name = '오렌지';

console.log(apple);
console.log(orange);
*/

// 4.10 상수 변수 const 
/*
// let 재할당 가능
let a = 1;
console.log(a);
a = 2;
console.log(a);

// const 재할당 불가능 
1. 상수
const MAX_FRUITS = 5;

2. 재할당 불가능한 상수변수 또는 변수
const apple = {
    name: 'apple',
    color: 'red',
    display: '🍎'
};

apple = {}; 안 됨
*/

// 4.11 동적 타입, typeof

let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123; 
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function(){};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);