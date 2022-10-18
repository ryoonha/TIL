// 배열 만들 때 배열리터럴을 가장 많이 사용함
const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열 아이템 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log(fruits.length); // 배열 총갯수 = 길이 = .lenght

// 아이템 참조 간편하게 - for loop로 
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// 추가, 삭제 좋지 않은 방식 - 인덱스에 직접 입력 💩 
// const fruits = ['🍌', '🍎', '🍇', '🍑'];
fruits[3] = '🍓'; // 덮어싀워짐
fruits[6] = '🍓'; // 중간에 빈 칸이 생김 
delete fruits[1]; // 객체만 삭제되고, 빈 자리가 남아 있음 
console.log(fruits);

fruits[fruits.length] = '🍓'; // 추천하는 추가: 맨 마지막에 추가 -> .lenght 사용

console.log(fruits);