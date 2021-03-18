// SPDX-License-Identifier: MIT
pragma solidity 0.7.4;

import "./PrettierParentheses/AddPrettierParentheses.sol";
import "./PrettierParentheses/SubPrettierParentheses.sol";
import "./PrettierParentheses/MulPrettierParentheses.sol";
import "./PrettierParentheses/DivPrettierParentheses.sol";
import "./PrettierParentheses/ModPrettierParentheses.sol";
import "./PrettierParentheses/ExpPrettierParentheses.sol";
import "./PrettierParentheses/ShiftLPrettierParentheses.sol";
import "./PrettierParentheses/ShiftRPrettierParentheses.sol";
import "./PrettierParentheses/BitAndPrettierParentheses.sol";
import "./PrettierParentheses/BitOrPrettierParentheses.sol";
import "./PrettierParentheses/BitXorPrettierParentheses.sol";
import "./PrettierParentheses/LogicPrettierParentheses.sol";

contract PrettierParentheses is
    AddPrettierParentheses,
    SubPrettierParentheses,
    MulPrettierParentheses,
    DivPrettierParentheses,
    ModPrettierParentheses,
    ExpPrettierParentheses,
    ShiftLPrettierParentheses,
    ShiftRPrettierParentheses,
    BitAndPrettierParentheses,
    BitOrPrettierParentheses,
    BitXorPrettierParentheses,
    LogicPrettierParentheses
{}
