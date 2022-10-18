// 서로 연관 있는 속성과 행동을 묶어주는 것이 = 객체 
const apple  = {
    name: '사과',
    display: function(){ // key이름: display, value: function 
        console.log(`${this.name}: 🍎`);  
    },
};

apple.display(); // apple 객체 안의 함수인 display 호출, 사과: 🍎 