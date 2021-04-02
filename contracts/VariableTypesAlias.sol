// SPDX-License-Identifier: MIT
pragma solidity 0.8.3;

contract VariableTypesAlias {
    uint public a;
    int public b;
    uint public e;
    int public f;

    struct S {
        uint a;
        int b;
        uint e;
        int f;
    }

    event Event(uint _a, int _b, uint _e, int _f);

    function func(
        uint _a,
        int _b,
        uint _e,
        int _f
    )
        public
        returns (
            uint,
            int,
            uint,
            int
        )
    {
        emit Event(_a, _b, _e, _f);
        return (_a, _b, _e, _f);
    }
}
