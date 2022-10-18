
// [Sybmol.iterator](): Iterator{ next(): {value, done}};
// 문제: 0~10 이하까지 숫자의 2배를 순회하는 이터레이터(반복자)만들기!

// 재사용 가능하도록 

function makeIterable(initialValue, maxValue, callback){
    return {
        [Symbol.iterator](){
            let num = initialValue;
            return {
                next(){
                    // 빙글빙글 돌면서 어떤 연산을 할건지는 아직 정해지지 않앗으므로, 콜백 호출 시 증가만 되도록
                    return { value: callback(num++), done: num > maxValue };
                } 
            }
        }
    }
}

// 구체적으로 만드는 함수의 콜백함수에 구체적인 연산을 입력
// 고차함수는 적게 적어도 뭔지 알고 있기 때문에 num -> n 으로 줄여서 코딩
const multiple = makeIterable(0, 10, (n) => n * 2);
for(const num of multiple){
    console.log(num);
}


const single = makeIterable(0, 10, (n) => (n));
for(const num of single){
    console.log(num);
}

// 어떤 부분을 재사용하고 어떤 부분을 개별적으로 사용할지 생각하면서 