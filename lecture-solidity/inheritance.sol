// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0<0.9.0;


// 10강 - 상속(기본)
/* contract Father {

    string public familyName = "Kim";
    string public givenName = "Jung";
    uint256 public money = 100;

    constructor(string memory _givenName) public { 
        givenName = _givenName; // 성은 같아도 이름은 다르니까 -> givenName 값 변경할 수 있도록 
    }

    function getFamilyName() view public returns(string memory){
        return familyName;
    }

    function getGivenName() view public returns(string memory){
        return givenName;
    }

    function getMoney() view public returns(uint256){
        return money;
    }

}

contract Son is Father("James") { 

}
*/ 

// 12강 - override
// overriding - 상속 + 상속 받은 함수를 특색 있게 변형하는 것 
// 본 예제에서는 상속 받은 money를 Son이 증가시키거나 감소시킬 수 있다는 가정

/* 
contract Father {

    string public familyName = "Kim";
    string public givenName = "Jung";
    uint256 public money = 100;

    constructor(string memory _givenName) public { 
        givenName = _givenName; // 성은 같아도 이름은 다르니까 -> givenName 값 변경할 수 있도록 
    }

    function getFamilyName() view public returns(string memory){
        return familyName;
    }

    function getGivenName() view public returns(string memory){
        return givenName;
    }

    function getMoney() view virtual public returns(uint256){
        return money;
    }
}

contract Son is Father("James") {

    uint256 public earning = 0;
    function work() public { // 아들이 일해서 번 돈
        earning += 100;
    }

    function getMoney() view override public returns(uint256){
        return money + earning;
    }

}
*/

// 12강 - 2개 이상의 컨트랙트에서 상속하기 
contract Father {
    uint256 public fatherMoney = 100;
    function getFatherName() public pure returns(string memory){
        return "KimJung";
    }
    function getMoney() public virtual view returns(uint256){
        return fatherMoney;
    }
}

contract Mother {
    uint256 public motherMoney = 500;
    function getMotherName() public pure returns(string memory){
        return "Leesol";
    }
    function getMoney() public virtual view returns(uint256){
        return motherMoney;
    }
}

// Fatehr, Mother 컨트랙을 Son이 상속받기 
contract Son is Father, Mother{

    function getMoney() public override(Father, Mother) view returns(uint256){
        return fatherMoney + motherMoney;
    }

}