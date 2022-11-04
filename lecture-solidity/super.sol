// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0<0.9.0;

// 15강 - super
// 상속해주는 컨트랙의 이벤트를 그대로 가져올 때
/*
contract Father {
    event fatherName(string name);
    function who() public virtual { // 상속해주는 컨트랙의 함수가 여러줄 코드일 때
        emit fatherName("KimDaeHo");
    }
}

contract Son is Father {
    event sonName(string name);
    function who() public override {
        // emit fatherName("KimDaeHo"); 여러 줄의 코드 갖고 오기 번거로움 
        super.who(); // 상속해주는 컨트랙의 이벤트를 그대로 갖고 옴 -> super.함수명
        emit sonName("KimJin");
    }
}
*/

// 16강 - 상속의 순서 

contract Father {
    event fatherName(string name);
    function who() public virtual {
        emit fatherName("KimDaeho");
    }
}

contract Mother {
    event motherName(string name);
    function who() public virtual {
        emit motherName("Leesol");
    }
}

contract Son is Father, Mother {
    function who() public override(Father, Mother){
        super.who();
    }
}