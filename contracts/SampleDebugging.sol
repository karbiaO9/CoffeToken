// SPDX-License-Identifier: MIT
pragma solidity 0.8.25  ;


contract MyContract {
    
    uint public MyUint =123;

    function setMyUint(uint _myUint) public  {
        MyUint = _myUint;  
    }
}