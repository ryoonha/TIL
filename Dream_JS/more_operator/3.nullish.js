// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)

// ?? null, undefined 경우에만 뒤의 코딩 실행하고 싶을 때 
// || falshy한 경우 설정(할당) 0, -0, ''
let num = 0;
console.log(num || '-1'); // 0은 fasle라서 어레 발생
console.log(num ?? '-1'); // 원하는 것은 num이 없을 때만 -1 설정하고 싶으면