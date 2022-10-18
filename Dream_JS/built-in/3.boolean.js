// Boolean 에도 wrapper object 있음

true.valueOf // true에 . 찍으면 사용가능한 함수 나옴 

const isTrue = new Boolean(true); // 객체로 사용하면 메모리 더 사용
console.log(isTrue.valueOf()); // <- 추천하는 방법


/** Falshy 와 Truthy 는 나중에 코딩할 때 너무너무 중요함 
 * Falshy
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''

 * Truthy
 * 1
 * -1
 * '0'
 * 'false'
 * []
 * {}
 */