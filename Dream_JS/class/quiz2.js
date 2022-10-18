/** 클래스 - 상속 이용한 문제 
- 정직원과 파트 타임 직원을 나타낼 수 있는 클래스를 만들어 보자 - class emplyee
- 직원들의 정보 : 이름, 부서이름, 한달 근무 시간 - constructor 
- 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다 - method로, 월급함수 -> getter 사용
- 정직원은 시간당 10000원 - 임금만 각 자식 객체에 따로 생성 
- 팦트타임 직원은 시간당 8000원
 */

// 1. 문제 수도 코드

class Emplyee {
    constructor(name, department, workingHour){
        this.name = name;
        this.department = department;
        this.workingHour = workingHour;
    }
}

// 자식에게 시급, 월급 계산을 맡김 
class Fulltime extends Emplyee {
    constructor(name, department, workingHour){
        super(name, department, workingHour); 
        this.hourWage = 10000;
    }

    salary(){
        this.workingHour * this.hourWage; // 굳이 get 써야 할까?
    }
}

class Parttime extends Emplyee {
    constructor(name, department, workingHour){
        super(name, department, workingHour); 
        this.hourWage = 8000;
    }

    salary(){
        this.workingHour * this.hourWage; 
    }
}

const Kim = new Fulltime('김륜하', '영업부', 60)

console.log(Kim); // 직원 정보(객체)만 출력 
Kim.salary(60); // 출력 안 됨...😭
