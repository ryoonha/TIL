// 콜백함수: 함수를 호출하지 않고 참조값을 가져오는 것 -> action 
// 고차함수: 인자를 함수로 갖고 오는 함수 -> calculator

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

function calculator(a, b, action){ // action: 참조값을 전달 받기만 한 상태
    let result = action(a, b); // a, b 전달받아서 action 실행(호출할 때)
    console.log(result);
    return result;
}

/**
전달된 actiion 은 콜백함수이다.
전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라 
함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다''
그래서 함수는 고차함수 안에서 필요한 순간에 나중에 호출된다.
 */

// 고차함수는 인자로 어떤 함수를 호출할 건지 불러올 수 있음
calculator(1, 2, add); // add라는 이름만 가져옴 = add의 참조값만 전달
calculator(1, 2, multiply); // 2