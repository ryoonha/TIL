// 논리연산자 Logical operator
// && || ! 그리고 !!(boolean으로 변환)

// && : 모두 참 
let and = 7;
if(and >= 0 && and < 9){
    console.log('👌');
}

// || : 하나라도 참
let or = 31;
if(or >= 0 || or > 20){
    console.log('🫰');
}

// ! : 반대
let negative = 10;
if (negative != 9) {
  console.log('🙏');
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!'text');
console.log(!!'text');