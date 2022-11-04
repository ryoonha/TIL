// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0<0.9.0;

// 17강 - mapping

// 같은 타입 data의 mapping
// contract map_sametype {
//     mapping(uint256 => uint256) private ageList;

//     function setAgeList(uint256 _index, uint256 _age) public { // key, value 넣기
//         ageList[_index] = _age; // key 왼쪽, value 오른쪽 
//     }

//     function getAge(uint256 _index) public view returns(uint256){ // value 리턴
//         return ageList[_index];
//     }
// }

// 다른 타입의 mapping
contract map_notSametype {
    mapping(string => uint256) private priceList;
    mapping(uint256 => string) private nameList;
    mapping(uint256 => uint256) private ageList;

    function setAgeList(uint256 _key, uint256 _age) public {
        ageList[_key] = _age;
    }

    function getAge(uint256 _key) public view returns(uint256) {
        return ageList[_key];
    }

    function setNameList(uint256 _key, string memory _name) public {
        nameList[_key] = _name;
    }

    function getName(uint256 _key) public view returns(string memory) {
        return nameList[_key];
    }

    function setPriceList(string memory _itemName, uint256 _price) public {
        priceList[_itemName] = _price;
    } 

    function getPrice(string memory _itemName) public view returns(uint256) {
        return priceList[_itemName];
    }

}

