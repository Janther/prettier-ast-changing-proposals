const BN = require("bn.js");
const crypto = require("crypto");
const NoParentheses = artifacts.require("BitXorNoParentheses");
const PrettierParentheses = artifacts.require("BitXorPrettierParentheses");

let a = new BN(crypto.randomBytes(16).toString("hex"), 16);
let b = new BN(crypto.randomBytes(16).toString("hex"), 16);
let c = new BN(crypto.randomBytes(16).toString("hex"), 16);

let noParentheses;
let prettierParentheses;

contract(
  "Compare BitXorNoParentheses to BitXorPrettierParentheses",
  accounts => {
    before(async () => {
      noParentheses = await NoParentheses.deployed();
      prettierParentheses = await PrettierParentheses.deployed();
    });

    it("has the same bytecode", function() {
      assert.equal(
        NoParentheses.bytecode.slice(0, -68),
        PrettierParentheses.bytecode.slice(0, -68)
      );
    });

    it("bitXorAdd:", async function() {
      const result = await noParentheses.bitXorAdd.call(a, b, c);
      const prettierResult = await prettierParentheses.bitXorAdd.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("bitXorSub:", async function() {
      const result = await noParentheses.bitXorSub.call(a, b, c);
      const prettierResult = await prettierParentheses.bitXorSub.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("bitXorMul:", async function() {
      const result = await noParentheses.bitXorMul.call(a, b, c);
      const prettierResult = await prettierParentheses.bitXorMul.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("bitXorDiv:", async function() {
      const result = await noParentheses.bitXorDiv.call(a, b, c);
      const prettierResult = await prettierParentheses.bitXorDiv.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("bitXorMod:", async function() {
      const result = await noParentheses.bitXorMod.call(a, b, c);
      const prettierResult = await prettierParentheses.bitXorMod.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("bitXorExp:", async function() {
      const result = await noParentheses.bitXorExp.call(a, b, c);
      const prettierResult = await prettierParentheses.bitXorExp.call(a, b, c);
      assert.ok(result.eq(prettierResult));
    });

    it("bitXorShiftL:", async function() {
      const result = await noParentheses.bitXorShiftL.call(a, b, c);
      const prettierResult = await prettierParentheses.bitXorShiftL.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });

    it("bitXorShiftR:", async function() {
      const result = await noParentheses.bitXorShiftR.call(a, b, c);
      const prettierResult = await prettierParentheses.bitXorShiftR.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });

    it("bitXorBitAnd:", async function() {
      const result = await noParentheses.bitXorBitAnd.call(a, b, c);
      const prettierResult = await prettierParentheses.bitXorBitAnd.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });

    it("bitXorBitOr:", async function() {
      const result = await noParentheses.bitXorBitOr.call(a, b, c);
      const prettierResult = await prettierParentheses.bitXorBitOr.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });

    it("bitXorBitXor:", async function() {
      const result = await noParentheses.bitXorBitXor.call(a, b, c);
      const prettierResult = await prettierParentheses.bitXorBitXor.call(
        a,
        b,
        c
      );
      assert.ok(result.eq(prettierResult));
    });
  }
);
