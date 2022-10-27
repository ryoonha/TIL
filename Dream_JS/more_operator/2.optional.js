// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?.
// null 또는 undefined을 확인할때
let item = { price: 1 };
// const price = item && item.price; 
const price = item?.price;
console.log(price);

let obj = { name: '🐶', owner: { name: '엘리' } };
// const ownerName = obj && obj.owner && obj.onwer.name
// 그냥 const ownerName = obj.owner.name; 하면 없는 것에 접근하기 때문에 에러 발생

function printName(obj) {
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName(obj);