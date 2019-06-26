pragma solidity 0.5.8;


contract ModPrettierParentheses {
    function modAdd(uint a, uint b, uint c) public pure returns (uint) {
        return (a % b) + c;
    }

    function modSub(uint a, uint b, uint c) public pure returns (uint) {
        return (a % b) - c;
    }

    function modMul(uint a, uint b, uint c) public pure returns (uint) {
        return (a % b) * c;
    }

    function modDiv(uint a, uint b, uint c) public pure returns (uint) {
        return (a % b) / c;
    }

    function modMod(uint a, uint b, uint c) public pure returns (uint) {
        return (a % b) % c;
    }

    function modExp(uint a, uint b, uint c) public pure returns (uint) {
        return a % b ** c;
    }

    function modShiftL(uint a, uint b, uint c) public pure returns (uint) {
        return a % b << c;
    }

    function modShiftR(uint a, uint b, uint c) public pure returns (uint) {
        return a % b >> c;
    }

    function modBitAnd(uint a, uint b, uint c) public pure returns (uint) {
        return a % b & c;
    }

    function modBitOr(uint a, uint b, uint c) public pure returns (uint) {
        return a % b | c;
    }

    function modBitXor(uint a, uint b, uint c) public pure returns (uint) {
        return a % b ^ c;
    }
}
