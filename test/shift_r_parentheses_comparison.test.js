const BN = require("bn.js");
const crypto = require("crypto");
const NoParentheses = artifacts.require("ShiftRNoParentheses");
const PrettierParentheses = artifacts.require("ShiftRPrettierParentheses");

let a = new BN(crypto.randomBytes(16).toString("hex"), 16);
let b = new BN(crypto.randomBytes(16).toString("hex"), 16);
let c = new BN(crypto.randomBytes(16).toString("hex"), 16);

let noParentheses;
let prettierParentheses;

contract(
  "Compare ShiftRNoParentheses to ShiftRPrettierParentheses",
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

    it("shiftRAdd:", async function () {
      const result = await noParentheses.shiftRAdd.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftRAdd.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("shiftRSub:", async function () {
      const result = await noParentheses.shiftRSub.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftRSub.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("shiftRMul:", async function () {
      const result = await noParentheses.shiftRMul.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftRMul.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("shiftRDiv:", async function () {
      const result = await noParentheses.shiftRDiv.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftRDiv.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("shiftRMod:", async function () {
      const result = await noParentheses.shiftRMod.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftRMod.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("shiftRExp:", async function () {
      const result = await noParentheses.shiftRExp.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftRExp.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("shiftRShiftL:", async function () {
      const result = await noParentheses.shiftRShiftL.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftRShiftL.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });

    it("shiftRShiftR:", async function () {
      const result = await noParentheses.shiftRShiftR.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftRShiftR.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });

    it("shiftRBitAnd:", async function () {
      const result = await noParentheses.shiftRBitAnd.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftRBitAnd.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });

    it("shiftRBitOr:", async function () {
      const result = await noParentheses.shiftRBitOr.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftRBitOr.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });

    it("shiftRBitXor:", async function () {
      const result = await noParentheses.shiftRBitXor.call(a, b, c);
      const prettierResult = await prettierParentheses.shiftRBitXor.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });
  }
);
