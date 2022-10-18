/** 클래스 - 상속 이용한 문제 
- 정직원과 파트 타임 직원을 나타낼 수 있는 클래스를 만들어 보자 
- 직원들의 정보 : 이름, 부서이름, 한달 근무 시간 
- 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다 
- 정직원은 시간당 10000원 
- 팦트타임 직원은 시간당 8000원
 */

class Employee {
    constructor(name, department, hourPerMonth, payRate){
        this.name = name;
        this.department = department;
        this.hourPerMonth = hourPerMonth;
        this.payRate = payRate;
    }

    calculatePay(){
        return this.hourPerMonth * this.payRate;
    }
}

// full과 part 클래스에 시급을 알아야 하고, 외부로부터 얼마나 일하는지 정보 갖고 옴
class FullTimeEmployee extends Employee {
    static #PAY_RATE = 10000; // class level 
    constructor(name, department, hourPerMonth){
        super(name, department, hourPerMonth, FullTimeEmployee.#PAY_RATE);
    }
}

class PartTimeEmployee extends Employee {
    static #PAY_RATE = 8000;
    constructor(name, department, hourPerMonth){
        super(name, department, hourPerMonth, PartTimeEmployee.#PAY_RATE);
    }
}

// 1. 사용자 입장에서, 구현해야 할 기능 먼저 코딩 
const ellie = new FullTimeEmployee('엘리', 's/w', 30); 
const bob = new PartTimeEmployee('밥', 's/w', 20);

console.log(ellie.calculatePay());
console.log(bob.calculatePay());

// 그러면 큰 틀이 나옴
// Full 과 Part 클래스 만들고, 동일한 정보 담고 있음 -> Employee 공통 클래스 
// 공통 클래스에 calculatePay 함수가 월급 계산하도록 

