// 조건문 conditional statement
// if(조건) { 조건이 참이면 실행} else { 조건이 참이 아니라면 }


let fruit = 'apple';
if(fruit === 'apple') {
    console.log('🍎'); // 🍎
}

let fruit2 = 'orange';
if(fruit2 === 'apple') {
    console.log('🍎'); // 조건에 맞지 않으므로 콘솔줄이 스킵되고 넘어감(아무것도 출력 X)
}

let fruit3 = 'orange';
if(fruit3 === 'apple') {
    console.log('🍎'); // 
} else {
    console.log('!!'); // !!, 조건에 맞지 않으므로 스킵 -> else 실행
}

let fruit4 = 'peach';
if(fruit4 === 'apple') {
    console.log('🍎'); // 
} else if(fruit === 'orange') {
    console.log('🍊');
} else {
    console.log('🥹');
}


if(null){ // if ()true만 실행
    console.log('출력되면 안됨!'); // 출력 암것도 X
}