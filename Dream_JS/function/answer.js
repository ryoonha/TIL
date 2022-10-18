/** quiz 내용
주어진 숫자만큼 0부터 순회하는 함수 
순회하면서 주어진 특정한 일을 수행해야 함 
ex) 5, 순회하는 숫자를 다 출력하고 싶음 
ex) 5, 순회하는 숫자의 두배값을 다 출력하고 싶음 

힌트: function iterate(max, action){ }
 */

function iterate(max, action){
    for(let i = 0; i < max; i++){
        action(i);
    }
}

function log(num){
    console.log(num);
}

function doubleAndLog(num){
    console.log(num * 2);
}

iterate(3, log); 
iterate(4, doubleAndLog);

// 다른 코드 표현

iterate(5, (num) => console.log(num));
iterate(5, (num) => console.log(num * 2));

// setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
// setTimeout(callback, 1000);
setTimeout( () => {
    console.log('3초 뒤 이 함수가 실행될 거에요');
}, 3000);
