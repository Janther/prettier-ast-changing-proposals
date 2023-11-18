// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

contract ConditionalNewParser {
    function func1(
        bool _a,
        bool _b,
        bool _c,
        bool _d,
        bool _e
    ) public pure returns (bool) {
        return _a ? _b : (_c ? _d : _e);
    }

    function func2(
        bool _a,
        bool _b,
        bool _c,
        bool _d,
        bool _e,
        bool _f,
        bool _g
    ) public pure returns (bool) {
        return _a ? _b : (_c ? _d : (_e ? _f : _g));
        // return _a ? _b : ((_c ? _d : _e) ? _f : _g);
    }

    function func3(
        bool _a,
        bool _b,
        bool _c,
        bool _d,
        bool _e
    ) public pure returns (bool) {
        return _a ? (_b ? _c : _d) : _e;
    }

    function func4(
        bool _a,
        bool _b,
        bool _c,
        bool _d,
        bool _e,
        bool _f,
        bool _g
    ) public pure returns (bool) {
        return _a ? (_b ? (_c ? _d : _e) : _f) : _g;
    }

    function func5(
        bool _a,
        bool _b,
        bool _c,
        bool _d,
        bool _e,
        bool _f,
        bool _g
    ) public pure returns (bool) {
        return _a ? (_b ? _c : _d) : (_e ? _f : _g);
    }
}
