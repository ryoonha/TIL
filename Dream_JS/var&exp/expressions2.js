
// 5.7 대소 관계 비교 연산자 Relational operators
/**
 * > 크다 
 * < 작다 
 * >= 크거나 같다 
 * <= 작거나 같다 
 

console.log( 2 > 3 ); // false
console.log( 2 < 3 ); // true

*/

/*
// 5.8 연산자 우선순위
// * 가 +- 보다 먼저 계산된다 

let a = 2;
let b = 3;
let result1 = a + b * 4; // 14

console.log(result);

// 우선하고 싶으면 () 안에 넣으면 됨 
*/

// 5.9. 동등 비교 관계 연산자 Equality operators

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2');
console.log(2 === '2'); // 👍 ===

console.log(true == 1); // true
console.log(true === 1); // false


console.clear();

const obj1 = {
    name:'kim'
};

const obj2 = {
    name: 'kim'
};

console.log(obj1 == obj2); // false
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true


