/**
객체를 손쉽게 만들 수 있는 템플릿 = 객체
1. 생성자 함수 (오래된 고전적 방법) -> 사용 안 함
2. 클래스 👍

// 1. 생성자 함수 
function Fruit(name, emoji){
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}${this.emoji}`);
    };
    // return this; // 생략가능
}

*/


// 2. class 
class Kudamono{
    constructor(name, emoji){
        this.name = name;
        this.emoji = emoji;
    }

    display = () => { // 화살표 함수이거나 function이름(){} 적거나 
        console.log(`${this.name}${this.emoji}`);
    };
}

// class로 인스턴스 생성 및 값 할당 
const apple = new Kudamono('apple','🍎'); 
const orange = new Kudamono('orange','🍊');

console.log(apple); 
console.log(orange);

console.log(apple.name);
console.log(apple.emoji);

console.log(orange.name);
console.log(orange.emoji);
