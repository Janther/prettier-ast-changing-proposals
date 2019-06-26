pragma solidity 0.5.8;


contract ExpPrettierParentheses {
    function expAdd(uint a, uint b, uint c) public pure returns (uint) {
        return a ** b + c;
    }

    function expSub(uint a, uint b, uint c) public pure returns (uint) {
        return a ** b - c;
    }

    function expMul(uint a, uint b, uint c) public pure returns (uint) {
        return a ** b * c;
    }

    function expDiv(uint a, uint b, uint c) public pure returns (uint) {
        return a ** b / c;
    }

    function expMod(uint a, uint b, uint c) public pure returns (uint) {
        return a ** b % c;
    }

    function expExp(uint a, uint b, uint c) public pure returns (uint) {
        return a ** b ** c;
    }

    function expShiftL(uint a, uint b, uint c) public pure returns (uint) {
        return (a ** b) << c;
    }

    function expShiftR(uint a, uint b, uint c) public pure returns (uint) {
        return (a ** b) >> c;
    }

    function expBitAnd(uint a, uint b, uint c) public pure returns (uint) {
        return (a ** b) & c;
    }

    function expBitOr(uint a, uint b, uint c) public pure returns (uint) {
        return (a ** b) | c;
    }

    function expBitXor(uint a, uint b, uint c) public pure returns (uint) {
        return (a ** b) ^ c;
    }
}
