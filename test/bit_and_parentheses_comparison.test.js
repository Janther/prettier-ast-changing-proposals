const BN = require("bn.js");
const crypto = require("crypto");
const NoParentheses = artifacts.require("BitAndNoParentheses");
const PrettierParentheses = artifacts.require("BitAndPrettierParentheses");

let a = new BN(crypto.randomBytes(16).toString("hex"), 16);
let b = new BN(crypto.randomBytes(16).toString("hex"), 16);
let c = new BN(crypto.randomBytes(16).toString("hex"), 16);

let noParentheses;
let prettierParentheses;

contract(
  "Compare BitAndNoParentheses to BitAndPrettierParentheses",
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

    it("bitAndAdd:", async function () {
      const result = await noParentheses.bitAndAdd.call(a, b, c);
      const prettierResult = await prettierParentheses.bitAndAdd.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("bitAndSub:", async function () {
      const result = await noParentheses.bitAndSub.call(a, b, c);
      const prettierResult = await prettierParentheses.bitAndSub.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("bitAndMul:", async function () {
      const result = await noParentheses.bitAndMul.call(a, b, c);
      const prettierResult = await prettierParentheses.bitAndMul.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("bitAndDiv:", async function () {
      const result = await noParentheses.bitAndDiv.call(a, b, c);
      const prettierResult = await prettierParentheses.bitAndDiv.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("bitAndMod:", async function () {
      const result = await noParentheses.bitAndMod.call(a, b, c);
      const prettierResult = await prettierParentheses.bitAndMod.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("bitAndExp:", async function () {
      const result = await noParentheses.bitAndExp.call(a, b, c);
      const prettierResult = await prettierParentheses.bitAndExp.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("bitAndShiftL:", async function () {
      const result = await noParentheses.bitAndShiftL.call(a, b, c);
      const prettierResult = await prettierParentheses.bitAndShiftL.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });

    it("bitAndShiftR:", async function () {
      const result = await noParentheses.bitAndShiftR.call(a, b, c);
      const prettierResult = await prettierParentheses.bitAndShiftR.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });

    it("bitAndBitAnd:", async function () {
      const result = await noParentheses.bitAndBitAnd.call(a, b, c);
      const prettierResult = await prettierParentheses.bitAndBitAnd.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });

    it("bitAndBitOr:", async function () {
      const result = await noParentheses.bitAndBitOr.call(a, b, c);
      const prettierResult = await prettierParentheses.bitAndBitOr.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });

    it("bitAndBitXor:", async function () {
      const result = await noParentheses.bitAndBitXor.call(a, b, c);
      const prettierResult = await prettierParentheses.bitAndBitXor.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });
  }
);
