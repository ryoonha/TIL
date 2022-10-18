// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라 관련된 빌트인 객체로 변환 

const number = 123; // 원시 타입 number

// . 찍는 순간 = 원시타입 number -> class Number에 감싸인 객체 number로 변환
console.log(number.toString()); // 객체 number
console.log(number); // 원시 타입 number

const text = 'text'; 
console.log(text); // 원시타입 문자열(string)
text.length; // 객체 string
text.trim();