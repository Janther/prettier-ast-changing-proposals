// SPDX-License-Identifier: MIT
pragma solidity 0.7.4;

contract VariableTypesExplicit {
    uint256 public a;
    int256 public b;
    bytes1 public c;
    uint256 public e;
    int256 public f;
    bytes1 public g;

    struct S {
        uint256 a;
        int256 b;
        bytes1 c;
        uint256 e;
        int256 f;
        bytes1 g;
    }

    event Event(
        uint256 _a,
        int256 _b,
        bytes1 _c,
        uint256 _e,
        int256 _f,
        bytes1 _g
    );

    function func(
        uint256 _a,
        int256 _b,
        bytes1 _c,
        uint256 _e,
        int256 _f,
        bytes1 _g
    )
        public
        returns (
            uint256,
            int256,
            bytes1,
            uint256,
            int256,
            bytes1
        )
    {
        emit Event(_a, _b, _c, _e, _f, _g);
        return (_a, _b, _c, _e, _f, _g);
    }
}
