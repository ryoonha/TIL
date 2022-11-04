// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0<0.9.0;

// lec 8 instance
/*
contract A {
    uint256 public a = 5;
    function change(uint256 _value) public { // 변수 a의 값을 변경시키는 함수
        a = _value;
    }
}

contract B { // B컨트랙에 A컨트랙을 연결(접근)하기 = B컨트랙에서 A컨트랙의 변수, 함수 사용 가능
    
    // instance 만들기 - (인스턴트할)컨트랙이름 instance이름 = new (인스턴스할)컨트랙이름(); 
    A instance = new A();

    // get 함수 = A컨트랙의 a변수 리턴하는 함수 
    function get_A() public view returns(uint256){ 
        return instance.a();
    }

    // change 함수 = A컨트랙의 change 함수를 사용하는 함수 = A컨트랙의 a변수를 변경해주는 함수
    function change_A(uint256 _value) public {
        instance.change(_value);
    }
}
*/

// lec 9 - Constructor

contract A {
    // 생성자 있고 인스턴스 할 때 
    string public name; 
    uint256 public age;

    constructor(string memory _name, uint256 _age){
        name = _name; // name, age에 값 입력할 수 있도록 
        age = _age;
    }

    function change(string memory _name, uint256 _age) public {
        name = _name;
        age = _age;
    }
}

contract B { 

    A instance = new A("Tom", 28); // 인스턴스 만들었으면 인자값 넣어줘야 함

    function get() public view returns(string memory, uint256) { // A컨트랙의 name, age 리턴
        return (instance.name(), instance.age()); // 여러 개 리턴 가능
    }
    
    function change(string memory _name, uint256 _age) public {
        instance.change(_name, _age);
    }

}