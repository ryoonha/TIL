
// [Sybmol.iterator](): Iterator{ next(): {value, done}};
// 문제: 0~10 이하까지 숫자의 2배를 순회하는 이터레이터(반복자)만들기!

// 1. itreable한 객체 multiple 만듬
/**
const multiple = {

    *[Symbol.iterator](num){
        // 배열 원소 넣기: 0~10 
        yield 0 <= num <= 10; // true, 매개변수로 num 입력 
        // 0,1,2,3,4,5,6,7,8,9,10; // 아무것도 출력 안 됨

    },
};

for(const num of multiple){
    console.log(num)
}
*/

/** 정답

 */

const multiple = {
    [Symbol.iterator](){
        const max = 10;
        let num = 0;
        return {
            next(){
                return { value: num++ * 2, done: num > max };
            }
        }
    },
};

for(const num of multiple){
    console.log(num)
}
