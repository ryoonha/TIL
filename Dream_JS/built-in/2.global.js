// global object

console.log(globalThis);

/**

eval('const num = 2; console.log(num)'); // 2
console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // false

console.log(parseFloat('12.43')); // 문자열이지만 숫자이면 숫자로 나타냄
console.log(parseInt('12.43')); // 문자열의 숫자를 정수로, 12 
console.log(parseInt('11')); // 11

 */

const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));