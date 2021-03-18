// SPDX-License-Identifier: MIT
pragma solidity 0.7.4;

import "./NoParentheses/AddNoParentheses.sol";
import "./NoParentheses/SubNoParentheses.sol";
import "./NoParentheses/MulNoParentheses.sol";
import "./NoParentheses/DivNoParentheses.sol";
import "./NoParentheses/ModNoParentheses.sol";
import "./NoParentheses/ExpNoParentheses.sol";
import "./NoParentheses/ShiftLNoParentheses.sol";
import "./NoParentheses/ShiftRNoParentheses.sol";
import "./NoParentheses/BitAndNoParentheses.sol";
import "./NoParentheses/BitOrNoParentheses.sol";
import "./NoParentheses/BitXorNoParentheses.sol";
import "./NoParentheses/LogicNoParentheses.sol";

contract NoParentheses is
    AddNoParentheses,
    SubNoParentheses,
    MulNoParentheses,
    DivNoParentheses,
    ModNoParentheses,
    ExpNoParentheses,
    ShiftLNoParentheses,
    ShiftRNoParentheses,
    BitAndNoParentheses,
    BitOrNoParentheses,
    BitXorNoParentheses,
    LogicNoParentheses
{}
