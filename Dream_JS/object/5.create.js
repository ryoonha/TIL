// 8.6. 생성자 함수

/**
서로 연관 있는 속성과 행동을 묶어주는 것이 = 객체 

const apple  = {
    name: '사과',
    display: function(){ // key이름: display, value: function 
        console.log(`${this.name}: 🍎`);  
    },
};


const orange  = {
    name: '오렌지',
    display: function(){ // key이름: display, value: function 
        console.log(`${this.name}: 🍊`);  
    },
};

// 객체이름.함수이름(); - 객체 안의 함수 호출
apple.display();

*/

// 일일이 만들지 않고 한번만 템플릿 만들어주면 재사용 용이
function Fruit(name, emoji){
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`);  
    }

    // return this; // 생략 가능, 없어도 JS 엔진에서 자동으로 리턴 
}

// 생성자 함수로 객체 생성 및 호출, 선언
// const 이름 = new 생성자함수('값'); -> 으로 인스턴스 찍어내기 

const apple = new Fruit('apple','🍎');
const orange = new Fruit('orange','🍊');

console.log(apple);
console.log(orange);