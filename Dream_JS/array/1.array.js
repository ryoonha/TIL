// 배열 생성 방법

// 1. Array(클래스)로 생성 
let array = new Array(2); // ()만큼 들어갈 수 있음, 빈 배열
console.log(array); 

array = new Array(1,2,3); // 원하는 데이터 넣어서 만들 수 있음
console.log(array); 

// 2. static 중 of 으로 생성
array = Array.of(1,2,3,4) // (...items) items가 무한정 or 아직 정해지지 않았을 때
console.log(array); 

// 3. array의 리터럴 
const anotherArray = [1,2,3,4,5];
console.log(anotherArray); 


// 4. 기존의 배열에서 새로운 배열 만들고 싶을 때 - 배열 복붙
array = Array.from(anotherArray)  
console.log(array); 

arrayText = Array.from('text') // .from 은 iterable = 순회 가능 
console.log(arrayText); // 문자열 순회 [ 't', 'e', 'x', 't' ]

/**
일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있음.
하지만 자바스크립의 배열은 연속적으로 이어져 있지 않고, 오브젝트와 유사함!
= 자바스크립의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음(Typed Collections)
 */

array = Array.from ({
  0: '안',
  1: '녕',
  length: 2,
});

console.log(array); // [ '안', '녕' ]