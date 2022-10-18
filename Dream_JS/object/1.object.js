/** 객체 만드는 방법
1. Object literal { key: value }
    key(데이터를 접근) - 문자, 숫자, 문자열, 심볼
    value(실제 데이터 값) - 원시값, 다른 객체(함수 포함)
2. new Object()
3. Object.create();
 */

// 1번 방법
let something = { // 왼쪽: = key
    name: 'apple', // 문자 
    'hello': '✋', // '문자열' - 이용해서 연결 가능(문자에선 불가)
    0: 1, // 숫자 
    ['hello-bye 222']: '🙌' // ['문자, 문자열, 숫자']도 가능
}

// 속성, 데이터에 접근
// 객체이름.key: 마침표 표기법
// 객체이름['']: 대괄호 표기법 (. 접근 안될 때 사용)

console.log(something.name);
console.log(something.hello);
console.log(something['hello-bye 222']);

console.clear();

// 속성 추가: 객체명.속성 = '값'; 
something.emoji = '🍎';
// console.log(something.emoji);
// console.log(something['emoji']);

console.log(something);


// 속성 삭제
delete something.emoji;
console.log(something);


