pragma solidity 0.5.8;


contract MulNoParentheses {
    function mulAdd(uint a, uint b, uint c) public pure returns (uint) {
        return a * b + c;
    }

    function mulSub(uint a, uint b, uint c) public pure returns (uint) {
        return a * b - c;
    }

    function mulMul(uint a, uint b, uint c) public pure returns (uint) {
        return a * b * c;
    }

    function mulDiv(uint a, uint b, uint c) public pure returns (uint) {
        return a * b / c;
    }

    function mulMod(uint a, uint b, uint c) public pure returns (uint) {
        return a * b % c;
    }

    function mulExp(uint a, uint b, uint c) public pure returns (uint) {
        return a * b ** c;
    }

    function mulShiftL(uint a, uint b, uint c) public pure returns (uint) {
        return a * b << c;
    }

    function mulShiftR(uint a, uint b, uint c) public pure returns (uint) {
        return a * b >> c;
    }

    function mulBitAnd(uint a, uint b, uint c) public pure returns (uint) {
        return a * b & c;
    }

    function mulBitOr(uint a, uint b, uint c) public pure returns (uint) {
        return a * b | c;
    }

    function mulBitXor(uint a, uint b, uint c) public pure returns (uint) {
        return a * b ^ c;
    }
}
