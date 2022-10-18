// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0<0.9.0;

/* function 종류 

1. para 와 return 없는 function 
2. para 만 있고 return 없는 function 
3. para 와 return 모두 있는 function  */

contract lec4 {

    uint public a = 3;

// para 와 return 없는 function 
    function changeA1() public {
        a = 5;
    }

// para 있고 return 없는 function 
    function changeA2(uint256 _value) public {
        a = _value;
    }

// para 와 return 모두 있는 function 
    function changeA3(uint256 _value) public returns(uint256) {
        a = _value;
        return a; // 무엇을 리턴할 것인지 써야함
    }

}

contract lec5 {

/* function 이름() public{ public, private, internal, external }

public : 모든 곳에서 접근 가능
external : public처럼 모든 곳에서 접근 가능하나, external이 정의된 해당 컨트랙 내에서는 접근 불가
private : 오직 private이 정의된 자기 컨트랙에서만 가능 (상속 받은 자식도 불가)
internal : private처럼 오직 internal이 정의된 자기 컨트랙에서만 접근 가능, internal이 정의된 컨트랙을 상속 

접근제어자는 변수에도 적용 가능
*/

// 1. public 
uint public a = 5;

// 2. private
uint private a2 = 5; 

}

contract Public_example {
    uint256 public a = 3;

    function changeA(uint _value) public {
        a = _value;
    }
    function get_a() view public returns(uint256) {
        return a;
    }
    
}

contract Public_example_2 {
    
    Public_example instance = new Public_example();

    function changeA_2(uint256 _value) public {
        instance.changeA(_value);
    }
    function use_public_example_a() view public returns (uint256) {
        return instance.get_a();
    }
}