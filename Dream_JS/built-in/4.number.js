// Number 

/** mdn reference  내용 
constuctor 사용 가능 

static properties 가능 
    객체를 만들지 않아도, class만으로 접근 가능한 속성 있음 

static methods 사용 가능 
    class 레벨(Number)에서 사용 가능한 함수 

instance methods 사용 가능 
    객체 number 에서 사용 가능한 함수 
 */


const num1 = 123;
const num2 = new Number(123); // 새로운 객체 생성, 필요한 상황 아니면 추천 X(메모리 낭비)
console.log(num1);
console.log(num2);

// console.clear();

// Number 의 static - class 레벨에서 사용 가능한 여러가지 상수 변수 존재 
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

// 언제 사용하는가?
if(num1 === Number.NaN){}
if (Number.isNaN(num1)) {
}
if (num1 < Number.MAX_VALUE) {
}

// 지수 표기법(매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승 -> e+ 로 표기 )
const num3 = 102;
console.log(num3.toExponential()); // 1.02e+2

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); 

// 숫자를 문자열로 반환
console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG')); // 숫자를 그 나라에 맞게 

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); 
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수표기법으로 반환

// EPSILON
console.log(Number.EPSILON) // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
    console.log(Number.EPSILON); // 2.220446049250313e-16 
}
const num = 0.1 + 0.2 - 0.2; // 0.1 예상, 실제론 0.10000000000000003 출력 
console.log(num);


function isEqual(original, expected) {
    return original === expected < Number.EPSILON;
}
// console.log(isEqual(0.1, 0.1)); false 나옴 - 오차가 있기 때문

// 오차를 무시하고 싶을 때 
function isEqual(original, expected) {
    return original - expected < Number.EPSILON;
}

// - 값이 되지 않도록 Math 의 절대값 사용 
function isEqual(original, expected) {
    return Math.abs(original - expected) < Number.EPSILON;
}


console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));