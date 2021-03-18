const BN = require("bn.js");
const crypto = require("crypto");
const NoParentheses = artifacts.require("ShiftLNoParentheses");
const PrettierParentheses = artifacts.require("ShiftLPrettierParentheses");

let a = new BN(crypto.randomBytes(16).toString("hex"), 16);
let b = new BN(crypto.randomBytes(16).toString("hex"), 16);
let c = new BN(crypto.randomBytes(16).toString("hex"), 16);

let noParentheses;
let prettierParentheses;

contract(
  "Compare ShiftLNoParentheses to ShiftLPrettierParentheses",
  (accounts) => {
    before(async () => {
      noParentheses = await NoParentheses.deployed();
      prettierParentheses = await PrettierParentheses.deployed();
    });

    it("has the same bytecode", function () {
      assert.equal(
        NoParentheses.bytecode.slice(0, -86),
        PrettierParentheses.bytecode.slice(0, -86)
      );
    });

    it("shiftLAdd:", async function () {
      const result = await noParentheses.shiftLAdd.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftLAdd.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("shiftLSub:", async function () {
      const result = await noParentheses.shiftLSub.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftLSub.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("shiftLMul:", async function () {
      const result = await noParentheses.shiftLMul.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftLMul.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("shiftLDiv:", async function () {
      const result = await noParentheses.shiftLDiv.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftLDiv.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("shiftLMod:", async function () {
      const result = await noParentheses.shiftLMod.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftLMod.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("shiftLExp:", async function () {
      const result = await noParentheses.shiftLExp.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftLExp.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("shiftLShiftL:", async function () {
      const result = await noParentheses.shiftLShiftL.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftLShiftL.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });

    it("shiftLShiftR:", async function () {
      const result = await noParentheses.shiftLShiftR.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftLShiftR.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });

    it("shiftLBitAnd:", async function () {
      const result = await noParentheses.shiftLBitAnd.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftLBitAnd.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });

    it("shiftLBitOr:", async function () {
      const result = await noParentheses.shiftLBitOr.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftLBitOr.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });

    it("shiftLBitXor:", async function () {
      const result = await noParentheses.shiftLBitXor.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftLBitXor.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });
  }
);
