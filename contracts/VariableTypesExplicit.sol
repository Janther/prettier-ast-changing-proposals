// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

contract VariableTypesExplicit {
    uint256 public a;
    int256 public b;
    uint256 public e;
    int256 public f;

    struct S {
        uint256 a;
        int256 b;
        uint256 e;
        int256 f;
    }

    event Event(uint256 _a, int256 _b, uint256 _e, int256 _f);

    function func(
        uint256 _a,
        int256 _b,
        uint256 _e,
        int256 _f
    ) public returns (uint256, int256, uint256, int256) {
        emit Event(_a, _b, _e, _f);
        return (_a, _b, _e, _f);
    }
}
