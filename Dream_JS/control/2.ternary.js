// 삼항 조건 연산자
// 조건식 ? 참인경우 : 거짓인경우

// 기존의 if조건문
let fruit = 'banana';
if(fruit === 'apple') {
    console.log('🍎'); // 
} else if(fruit === 'orange') {
    console.log('🍊');
} else {
    console.log('🥹');
}

// 삼항연산자 표현법 1
fruit === 'apple' ? console.log('🍎') : console.log('🥹');

// 삼항연산자 표현법 2
let emoji = fruit === 'apple' ? '🍎' : '😱';
console.log(emoji);