function add(a, b){
    return a + b;
}

const sum = add; // 함수가 가리키는 주소를 할당하는 것과 동일한 의미

console.log(add(1, 2)); // 함수 호출 시, ()이용해서 호출
console.log(sum(1, 2));