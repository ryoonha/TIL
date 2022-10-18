// return : 함수 안의 코드 실행한 후, 특정 값을 밖으로 출력 

// 1. return 언제 사용? -> 함수 안에서 작동한 결과가 궁금할 때 사용 
function add(a, b){
    return a + b; 
    // return 명시하지 않으면 자동으로 undefined이 반환됨
}

// add 라는 함수를 임의의 변수에 할당해서, 그 변수를 콘솔로 출력
const result = add(1, 2);
console.log(result);

// 만약, 일을 수행하고 아무것도 반환하지 않은 함수라면 return 생략 가능
function print(text){
    console.log(text);
}

print('text me'); // text 출력

// 2. retunr 언제 유용? 

/** note
 * return을 함수 중간에 하게 되면 함수가 종료됨
 * 사용예: (함수의) 조건에 맞지 않는 경우, 함수 도입 부분에서 return 사용하여 함수 일찍 종료시킴
 */


console.clear();

function print(num){
    // 음수 출력 X, 오직 정수만 출력
    if(num < 0){
        return; // 인자가 조건에 부합하지 않으면 함수를 즉시 종료, return undefiend의 약작
    }
    console.log(num);
}

print(-10); // 출력 X
print(10); // 10