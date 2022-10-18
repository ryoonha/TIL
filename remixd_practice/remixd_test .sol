// SPDX-License-Indentifier: GPL-3.0

pragma solidity >=0.4.16 <0.9.0;

contract SimpleStorage {
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }

    // Hello, World!

    // 보인다!
}