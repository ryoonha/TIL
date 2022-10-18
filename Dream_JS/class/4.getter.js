// 접근자 프로퍼티: 프로퍼티에 접근할 수 있다  

class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // 호출하는 시점에 데이터를 만들어서 리턴(동작)
    get fullName(){ // 의미는 상태에 가까운 fullName 함수 -> 속성처럼 사용하고 싶음 -> get
        return `${this.lastName} ${this.firstName}`;
    }

    set fullName(value){
        console.log(value);
    }
}

const student = new Student('수지', '김');

student.firstName = '안나'; // set 호출 

console.log(student.firstName); 
console.log(student.fullName); // get 호출

