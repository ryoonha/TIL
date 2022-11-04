// SPDX-License-Identifier : GPL-3.0
pragma solidity >=0.7.0<0.9.0;

contract lec6 {

/* function 이름() public{ public, external, internal, private } { 내용 } - 기본

function get_a() view{ view, pure } external returens(데이터 타입);

view : function 밖의 함수들을 읽을 수 있으나, 변경 불가 
pure : function 밖의 함수들을 읽지 못하고, 변경도 불가
view, pure 둘 다 없을 때 : function 밖의 변수들을 읽어서, 변경해야 함.

*/


// view 
uint256 public a = 1;

function read_a() public view returns(uint256){
    return a+2; // a라는 func 밖의 함수를 읽어 들여옴, a변경 불가, 대신 불러와서 추가함
}

// pure
function read_a2() public pure returns(uint256){
    uint256 b = 1;
    return b+5+4;
}

// 3. view, pure 모두 없음
function read_a3() public returns(uint256){
    a = 12; // a값을 새로 할당 
    return a;
}

}

contract lec7 {

/* 
storage : 대부분의 변수, 함수들이 저장됨. 영속적(블록체인에)으로 저장되어 가스 비용이 비쌈.
memory : 함수의 파라미터, 리턴값, 레퍼런스 타입이 주로 저장됨. storage처럼 영속적이지 않고, 함수내에서 유효하기에  storage 보돠 가스 비용이 쌈.
calldata : 주로 external function 의 파라미터에서 사용됨.
stack : EVM에서 stack data를 관리할 때 쓰는 영역(1024Mb로 제한됨)
*/


    // function - string (reference type)

    function get_string(string memory _str) public pure returns(string memory){
        return _str;
    }
    function get_uint(uint256 _ui) public pure returns(uint256){ // 기본 데이터 타입 디폴트로 이미 설정됨
        return _ui;
    }
}