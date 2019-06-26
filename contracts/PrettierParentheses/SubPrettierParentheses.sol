pragma solidity 0.5.8;


contract SubPrettierParentheses {
    function subAdd(uint a, uint b, uint c) public pure returns (uint) {
        return a - b + c;
    }

    function subSub(uint a, uint b, uint c) public pure returns (uint) {
        return a - b - c;
    }

    function subMul(uint a, uint b, uint c) public pure returns (uint) {
        return a - b * c;
    }

    function subDiv(uint a, uint b, uint c) public pure returns (uint) {
        return a - b / c;
    }

    function subMod(uint a, uint b, uint c) public pure returns (uint) {
        return a - (b % c);
    }

    function subExp(uint a, uint b, uint c) public pure returns (uint) {
        return a - b ** c;
    }

    function subShiftL(uint a, uint b, uint c) public pure returns (uint) {
        return (a - b) << c;
    }

    function subShiftR(uint a, uint b, uint c) public pure returns (uint) {
        return (a - b) >> c;
    }

    function subBitAnd(uint a, uint b, uint c) public pure returns (uint) {
        return (a - b) & c;
    }

    function subBitOr(uint a, uint b, uint c) public pure returns (uint) {
        return (a - b) | c;
    }

    function subBitXor(uint a, uint b, uint c) public pure returns (uint) {
        return (a - b) ^ c;
    }
}
