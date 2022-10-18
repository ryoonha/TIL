// 5.1. 개념 정리 

// 표현식 : 값으로 표현될 수 있는 문 -> 값이 없으면 문이어도 표현식이 아님 
// 값 : 데이터, 문 : 최소 실행 단위 

/**
let b; // 선언문, 표현식(x)
b = 2; // 표현식, 할당문

let a = ( b = 2);
console.log(a);
 */

// 5.2. 산술연산자 arithmetic
// + - * / % **(지수, 거듭제곱)

/*
console.log( 5 + 2);
console.log( 5 - 2);
console.log( 5 * 2);
console.log( 5 / 2);
console.log( 5 % 2);
console.log( 5 ** 2);  // es7 추가

// + 연산자 주의점
let text = '두개의' + '문자를 더하다';
console.log(text);

plus = '1' + 1;  // 11(문자열) 반환 -> 숫자 + 문자 = 문자열로 반환
console.log(plus);
*/

// 5.4. 단항 연산자 Unary Operators
// + (양) -(음) !(부정)

/*
let a = 5;
// a = -a; 
console.log(a);
console.log(-a);

a = -a; // -5
a = +a; // +(-5)
console.log(a); // -5

let bool = true;
console.log(!bool); // false
console.log(!!bool); // true, !!값을 boolean 타입으로 변환함

console.clear();

console.log(+false); // 빈문자열에 false 넣으면 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN
*/

/** 
// 5.5 할당 연산자 Assignment

let a = 1;
a = a + 2;
console.log(a); // 3

let b = 1;
b += 2; // b = b + 2; 의 축약버전 -> 뒤의 b를 생략하고 더하기 앞쪽으로 이동
console.log(b); // 3

a += 2;
console.log(a);

a -= 2;
console.log(a);

a *= 2;
console.log(a);

a /= 2;
console.log(a);

a %= 2;
console.log(a);

a **= 2;
console.log(a);

*/

/** */
// 5.6 증감연산자

let a = 0;
console.log(a);

// a += 1; =  a = a + 1; = a++;

a ++;
console.log(a);

a--;
console.log(a);

console.clear();
// 주의! 앞에 쓰느냐 뒤에 쓰느냐 
// a++; 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a; 값을 먼저 증가시키고, 필요한 연산을 함

a = 0;
let b = a++;
console.log(b); // 0, 먼저 b에 a의 값이 할당되고 그 뒤에 1에 더해짐 -> 고로 a=1, b=0 
console.log(a); // 1

