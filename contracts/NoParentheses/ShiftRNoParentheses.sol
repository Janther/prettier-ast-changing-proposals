pragma solidity 0.5.8;


contract ShiftRNoParentheses {
    function shiftRAdd(uint a, uint b, uint c) public pure returns (uint) {
        return a >> b + c;
    }

    function shiftRSub(uint a, uint b, uint c) public pure returns (uint) {
        return a >> b - c;
    }

    function shiftRMul(uint a, uint b, uint c) public pure returns (uint) {
        return a >> b * c;
    }

    function shiftRDiv(uint a, uint b, uint c) public pure returns (uint) {
        return a >> b / c;
    }

    function shiftRMod(uint a, uint b, uint c) public pure returns (uint) {
        return a >> b % c;
    }

    function shiftRExp(uint a, uint b, uint c) public pure returns (uint) {
        return a >> b ** c;
    }

    function shiftRShiftL(uint a, uint b, uint c) public pure returns (uint) {
        return a >> b << c;
    }

    function shiftRShiftR(uint a, uint b, uint c) public pure returns (uint) {
        return a >> b >> c;
    }

    function shiftRBitAnd(uint a, uint b, uint c) public pure returns (uint) {
        return a >> b & c;
    }

    function shiftRBitOr(uint a, uint b, uint c) public pure returns (uint) {
        return a >> b | c;
    }

    function shiftRBitXor(uint a, uint b, uint c) public pure returns (uint) {
        return a >> b ^ c;
    }
}
