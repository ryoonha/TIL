/** quiz 내용
주어진 숫자만큼 0부터 순회하는 함수 
순회하면서 주어진 특정한 일을 수행해야 함 
ex) 5, 순회하는 숫자를 다 출력하고 싶음 
ex) 5, 순회하는 숫자의 두배값을 다 출력하고 싶음 

힌트: function iterate(max, action){ }
 */

/** 수도 코드
 * action - 그냥 숫자를 다 출력하는 함수, 두배값 만드는 함수 
 * 순회는 반복문으로!
 * for(let i = 0; i < max; i++){ 반복할 동작 }
 * 마지막에 고차함수 function interate(max, action){ } 
 * -> 호출할 때 그냥 출력 함수 or 두배값 함수를 인자로 넣기 
 */

function print(){ // 순회하며 출력하는 함수 
    for(let i = 0; i < 6; i++){
        console.log(i);
    }
}

print();

function twice(){ // 두배값 함수
    for(let i = 0; i < 6; i++){
        console.log(i * 2);
    }
}

twice();

console.clear();

function iterate(max, action){
    let result = action(max); // action 할당해서 호출할 변수 
    console.log(result);
    // return result;
}

iterate(4, twice); // 0,2,4,6,8,10 -> 5 이하의 숫자는 적용 안 됨

iterate(6, print); // 0~5 




