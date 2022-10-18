// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0<0.9.0;

contract lec2 {
    
// data type
// boolean, bytes, address, uint

// reference type
// string, arrays, struct

// mapping type

// boolean : treu or false
bool public b = false;

// 비교 연산자
bool public b1 = !false; // true
bool public b2 = false || true; // true
bool public b3 = false == true; // false
bool public b4 = false && true; // false

// bytes 1~32
bytes4 public bt = 0x12345678;
bytes public bt2 = "STRING"; // bytes 모를 때 

// address : 계좌를 송수신, 배포할 때도 생김
address public addr = 0x9D7f74d0C41E726EC95884E0e97Fa6129e3b5E99;

// int vs uint : 마이너스의 유(int) 무(uint)
int8 public it = 4; // 4

uint256 public uit = 123321; // 123321

// uint8 public uit2 = 256; // 에러 (범위보다 큰 값이 나와서)





}