pragma solidity 0.5.8;


contract BitXorPrettierParentheses {
    function bitXorAdd(uint a, uint b, uint c) public pure returns (uint) {
        return a ^ (b + c);
    }

    function bitXorSub(uint a, uint b, uint c) public pure returns (uint) {
        return a ^ (b - c);
    }

    function bitXorMul(uint a, uint b, uint c) public pure returns (uint) {
        return a ^ (b * c);
    }

    function bitXorDiv(uint a, uint b, uint c) public pure returns (uint) {
        return a ^ (b / c);
    }

    function bitXorMod(uint a, uint b, uint c) public pure returns (uint) {
        return a ^ b % c;
    }

    function bitXorExp(uint a, uint b, uint c) public pure returns (uint) {
        return a ^ (b ** c);
    }

    function bitXorShiftL(uint a, uint b, uint c) public pure returns (uint) {
        return a ^ (b << c);
    }

    function bitXorShiftR(uint a, uint b, uint c) public pure returns (uint) {
        return a ^ (b >> c);
    }

    function bitXorBitAnd(uint a, uint b, uint c) public pure returns (uint) {
        return a ^ (b & c);
    }

    function bitXorBitOr(uint a, uint b, uint c) public pure returns (uint) {
        return (a ^ b) | c;
    }

    function bitXorBitXor(uint a, uint b, uint c) public pure returns (uint) {
        return a ^ b ^ c;
    }
}
