pragma solidity 0.5.8;


contract ShiftLPrettierParentheses {
    function shiftLAdd(uint a, uint b, uint c) public pure returns (uint) {
        return a << (b + c);
    }

    function shiftLSub(uint a, uint b, uint c) public pure returns (uint) {
        return a << (b - c);
    }

    function shiftLMul(uint a, uint b, uint c) public pure returns (uint) {
        return a << (b * c);
    }

    function shiftLDiv(uint a, uint b, uint c) public pure returns (uint) {
        return a << (b / c);
    }

    function shiftLMod(uint a, uint b, uint c) public pure returns (uint) {
        return a << b % c;
    }

    function shiftLExp(uint a, uint b, uint c) public pure returns (uint) {
        return a << (b ** c);
    }

    function shiftLShiftL(uint a, uint b, uint c) public pure returns (uint) {
        return (a << b) << c;
    }

    function shiftLShiftR(uint a, uint b, uint c) public pure returns (uint) {
        return (a << b) >> c;
    }

    function shiftLBitAnd(uint a, uint b, uint c) public pure returns (uint) {
        return (a << b) & c;
    }

    function shiftLBitOr(uint a, uint b, uint c) public pure returns (uint) {
        return (a << b) | c;
    }

    function shiftLBitXor(uint a, uint b, uint c) public pure returns (uint) {
        return (a << b) ^ c;
    }
}
