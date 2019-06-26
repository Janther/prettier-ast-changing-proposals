pragma solidity 0.5.8;


contract BitAndPrettierParentheses {
    function bitAndAdd(uint a, uint b, uint c) public pure returns (uint) {
        return a & (b + c);
    }

    function bitAndSub(uint a, uint b, uint c) public pure returns (uint) {
        return a & (b - c);
    }

    function bitAndMul(uint a, uint b, uint c) public pure returns (uint) {
        return a & (b * c);
    }

    function bitAndDiv(uint a, uint b, uint c) public pure returns (uint) {
        return a & (b / c);
    }

    function bitAndMod(uint a, uint b, uint c) public pure returns (uint) {
        return a & b % c;
    }

    function bitAndExp(uint a, uint b, uint c) public pure returns (uint) {
        return a & (b ** c);
    }

    function bitAndShiftL(uint a, uint b, uint c) public pure returns (uint) {
        return a & (b << c);
    }

    function bitAndShiftR(uint a, uint b, uint c) public pure returns (uint) {
        return a & (b >> c);
    }

    function bitAndBitAnd(uint a, uint b, uint c) public pure returns (uint) {
        return a & b & c;
    }

    function bitAndBitOr(uint a, uint b, uint c) public pure returns (uint) {
        return (a & b) | c;
    }

    function bitAndBitXor(uint a, uint b, uint c) public pure returns (uint) {
        return (a & b) ^ c;
    }
}
