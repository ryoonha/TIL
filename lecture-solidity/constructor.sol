// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0<0.9.0;


// 버전 1
contract A {
    string public name;
    uint256 public age;

    constructor(string memory _name, uint256 _age){ // 매개변수 설정
        name = _name; // 왜 굳이 이런 과정을 거치지?
        age = _age;

        function change(string memory _name, uint256 _age){
            name = _name; 
            age = _age;
        }
    }

    contract B {
        A instance = new A("Alice", 34); // A 인스턴스 화 -> 값 초기화 필요

        function change(string memory _name, uint256 _age){
            instace.change(_name, _age); // change 함수로 A컨트랙에 접근 -> Alice, 34 변경

        function get() public view returns(string memory, uint256){
            return (instance.name(), instance.age()); // get 함수 A컨트랙에 접근 -> name, age 값 리턴해서 확인
        }
    }
}

