pragma solidity 0.5.8;


contract DivNoParentheses {
    function divAdd(uint a, uint b, uint c) public pure returns (uint) {
        return a / b + c;
    }

    function divSub(uint a, uint b, uint c) public pure returns (uint) {
        return a / b - c;
    }

    function divMul(uint a, uint b, uint c) public pure returns (uint) {
        return a / b * c;
    }

    function divDiv(uint a, uint b, uint c) public pure returns (uint) {
        return a / b / c;
    }

    function divMod(uint a, uint b, uint c) public pure returns (uint) {
        return a / b % c;
    }

    function divExp(uint a, uint b, uint c) public pure returns (uint) {
        return a / b ** c;
    }

    function divShiftL(uint a, uint b, uint c) public pure returns (uint) {
        return a / b << c;
    }

    function divShiftR(uint a, uint b, uint c) public pure returns (uint) {
        return a / b >> c;
    }

    function divBitAnd(uint a, uint b, uint c) public pure returns (uint) {
        return a / b & c;
    }

    function divBitOr(uint a, uint b, uint c) public pure returns (uint) {
        return a / b | c;
    }

    function divBitXor(uint a, uint b, uint c) public pure returns (uint) {
        return a / b ^ c;
    }
}
