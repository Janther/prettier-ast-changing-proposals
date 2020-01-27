pragma solidity 0.6.1;


contract LogicPrettierParentheses {
    function orOr(bool a, bool b, bool c) public pure returns (bool) {
        return a || b || c;
    }

    function orAnd(bool a, bool b, bool c) public pure returns (bool) {
        return a || (b && c);
    }

    function andOr(bool a, bool b, bool c) public pure returns (bool) {
        return (a && b) || c;
    }

    function andAnd(bool a, bool b, bool c) public pure returns (bool) {
        return a && b && c;
    }
}
