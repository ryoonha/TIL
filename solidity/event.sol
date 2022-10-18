// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0<0.9.0;

// 13강 - evnet

/*
// print가 없어서 event를 통해서 값 출력함 -> 블록에 저장
contract lec_evnet{

    // event 이름(출력하려는 값의 타입, 이름); -> 아직 출력 안 됨
    event info(string name, uint256 money);

    function sendMoney() public {
        emit info("Kim", 1000); // 보내는 사람, 보내는 금액 -> 블록에 저장되므로 언제든 꺼내 쓸 수 있음
    }
}
*/

// 14강 - indexed

contract lec_index {

    event numberTracker(uint256 num, string str);
    // num을 통하여 특정 event만을 갖고 올 수 있는 함수 Tracker2함수
    event numberTracker2(uint256 indexed num, string str);

    uint256 num=0;
    function PushEvent(string memory _str) public {
        emit numberTracker(num, _str);
        emit numberTracker2(num, _str);
        num++;
    }
}