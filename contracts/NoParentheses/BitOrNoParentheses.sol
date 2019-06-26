pragma solidity 0.5.8;


contract BitOrNoParentheses {
    function bitOrAdd(uint a, uint b, uint c) public pure returns (uint) {
        return a | b + c;
    }

    function bitOrSub(uint a, uint b, uint c) public pure returns (uint) {
        return a | b - c;
    }

    function bitOrMul(uint a, uint b, uint c) public pure returns (uint) {
        return a | b * c;
    }

    function bitOrDiv(uint a, uint b, uint c) public pure returns (uint) {
        return a | b / c;
    }

    function bitOrMod(uint a, uint b, uint c) public pure returns (uint) {
        return a | b % c;
    }

    function bitOrExp(uint a, uint b, uint c) public pure returns (uint) {
        return a | b ** c;
    }

    function bitOrShiftL(uint a, uint b, uint c) public pure returns (uint) {
        return a | b << c;
    }

    function bitOrShiftR(uint a, uint b, uint c) public pure returns (uint) {
        return a | b >> c;
    }

    function bitOrBitAnd(uint a, uint b, uint c) public pure returns (uint) {
        return a | b & c;
    }

    function bitOrBitOr(uint a, uint b, uint c) public pure returns (uint) {
        return a | b | c;
    }

    function bitOrBitXor(uint a, uint b, uint c) public pure returns (uint) {
        return a | b ^ c;
    }
}
