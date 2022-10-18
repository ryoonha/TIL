// 사용예제 1
function add(num1, num2){
    return num1 + num2;
}

const result = add(1, 2);

console.log(add); // Function: add
console.log('add'); // add(string)
console.log(result); // 3(number)

// 사용예제 2

console.clear();

let lastName = '김';
let firstName = '지수';
let fullName = `${lastName} ${firstName}`;

console.log(fullName);

let lastName2 = '박';
let firstName2 = '철수';
let fullName2 = `${lastName2} ${firstName2}`;

console.log(fullName2);

/**
 * 만약 유지에서 
 * 1. 외국에서는 firstName lastName 순으로, 순서가 바뀐다면 
 * 2. firstName, lastName 반복
 * -> 함수로 만들자
 */

function fullName3(firstName, lastName){
    return  `${firstName}${lastName}`;
}

console.log(fullName3('김', '륜하')); //const 변수 = 함수(인자) 후 콘솔(변수) 축약 