pragma solidity 0.5.8;


contract AddNoParentheses {
    function addAdd(uint a, uint b, uint c) public pure returns (uint) {
        return a + b + c;
    }

    function addSub(uint a, uint b, uint c) public pure returns (uint) {
        return a + b - c;
    }

    function addMul(uint a, uint b, uint c) public pure returns (uint) {
        return a + b * c;
    }

    function addDiv(uint a, uint b, uint c) public pure returns (uint) {
        return a + b / c;
    }

    function addMod(uint a, uint b, uint c) public pure returns (uint) {
        return a + b % c;
    }

    function addExp(uint a, uint b, uint c) public pure returns (uint) {
        return a + b ** c;
    }

    function addShiftL(uint a, uint b, uint c) public pure returns (uint) {
        return a + b << c;
    }

    function addShiftR(uint a, uint b, uint c) public pure returns (uint) {
        return a + b >> c;
    }

    function addBitAnd(uint a, uint b, uint c) public pure returns (uint) {
        return a + b & c;
    }

    function addBitOr(uint a, uint b, uint c) public pure returns (uint) {
        return a + b | c;
    }

    function addBitXor(uint a, uint b, uint c) public pure returns (uint) {
        return a + b ^ c;
    }
}
