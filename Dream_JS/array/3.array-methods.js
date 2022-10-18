/**
배열의 함수들
- 배열 자체를 변경하는지, 새로운 배열을 반환하는지
- 메서드 작성 후, 마우스 올리고 + 커맨드 -> 함수 API 읽는 것 추천 👍
 */

// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지 

const fruits = ['🍌', '🍎', '🍋'];

/* 
// 배열인지 확인 - isArray
console.log(Array.isArray(fruits));

// 특정한 아이템의 위치 찾을 때 - indexOf
console.log(fruits.indexOf('🍎'));

// 배열 안에 특정 아이템이 있는지 확인(체크) - includes
console.log(fruits.includes('🍉'));

// 추가 - 맨 뒤 
fruits.push('🍑'); // 배열 자체 수정(업데이트)
console.log(fruits);
console.log(fruits.length);

// 추가 - 맨 앞 
fruits.unshift('🍓'); // 배열 자체 수정(업데이트)
console.log(fruits);
console.log(fruits.length);

// 삭제 - 맨 뒤
let lastItem = fruits.pop(); // 배열 자체 수정(업데이트)
console.log(fruits);
console.log(lastItem);
console.log(fruits.length);

// 삭제 - 맨 앞
lastItem = fruits.shift(); // 배열 자체 수정(업데이트)
console.log(fruits);
console.log(lastItem);
console.log(fruits.length);

// 중간에 삭제, 추가 
const deleted = fruits.splice(1, 1); // 삭제만
console.log(fruits);
console.log(deleted);

fruits.splice(1, 0, '🍏') // 추가만, 추가 시 몇 개든 가능 
console.log(fruits); // 배열 자체 수정(업데이트)

*/ 

// 잘라진 새로운 배열 만듬 - .slice
let newArr = fruits.slice(0, 2);
console.log(fruits);
console.log(newArr);

// 여러개의 배열을 이어줌 - .concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서 거꾸로 
const arr4 = arr3.reverse();
console.log(arr4);

console.clear();

// 중첩된(배열 안에 또 배열)배열을 하나로 쫙 펴기 - .flat
let arr = [
    [1, 2, 3],
    [4, [5, 6, [3, 4]]],
];
console.log(arr);
console.log(arr.flat(3)); // flat 새로운 배열 반환 
arr = arr.flat(3); // 기존 배열 업데이트 

// 특정한 값으로 배열 채우기 - .fill
arr.fill(0);
console.log(arr); // 배열 자체 수정(업데이트)

arr.fill('s', 1, 3);
console.log(arr);

console.clear();

// 배열을 문자열로 합하기 
let text = arr.join();
console.log(text);
text = arr.join('|');
console.log(text); // 0|s|s|0|0|0|0|0
