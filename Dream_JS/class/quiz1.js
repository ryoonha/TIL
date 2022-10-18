// class: 서로 연관있는 속성과 기능을 묶어서 

// Q. 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터 만들기 

// 초기화
class Counter {
    constructor(number){
    // 숫자를 하나씩 증가 
    if (number < 0 ){
        number++;
        return;
    }} // 했는데 안 되서, 메소드도 만듬 
    makeNumber(number){
        console.log();
    }
}

// 언제 break 하지? 

const quiz = new Counter();


quiz.makeNumber(2); // 아무것도 안 나옴 
