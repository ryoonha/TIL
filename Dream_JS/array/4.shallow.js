// shallow copy - 얕은 복사 

// const pizza = { name: '🍕', price: 2 };
const pizza = { name: '🍕', price: 2, owner: {name: 'Ellie'} };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };

const store1 = [pizza, ramen];
const store2 = Array.from(store1);

store2.push(sushi);

console.log('store1', store1);
console.log('store2', store2);

/**
객체는 메모리 주소를 전달 
따라서, 자바스크립트에서 복사할 때는 항상 '얕은 복사'가 이루어짐 
Array.from, concat, slice, spread(...), Object.assign - 등에서 얕은 복사 일어남
 */

pizza.price = 4;
console.log('store1', store1);
console.log('store2', store2);