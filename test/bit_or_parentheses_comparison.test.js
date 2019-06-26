const BN = require("bn.js");
const crypto = require("crypto");
const NoParentheses = artifacts.require("BitOrNoParentheses");
const PrettierParentheses = artifacts.require("BitOrPrettierParentheses");

let a = new BN(crypto.randomBytes(16).toString("hex"), 16);
let b = new BN(crypto.randomBytes(16).toString("hex"), 16);
let c = new BN(crypto.randomBytes(16).toString("hex"), 16);

let noParentheses;
let prettierParentheses;

contract("Compare BitOrNoParentheses to BitOrPrettierParentheses", accounts => {
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

  it("bitOrAdd:", async function() {
    const result = await noParentheses.bitOrAdd.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrAdd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrSub:", async function() {
    const result = await noParentheses.bitOrSub.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrSub.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrMul:", async function() {
    const result = await noParentheses.bitOrMul.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrMul.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrDiv:", async function() {
    const result = await noParentheses.bitOrDiv.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrDiv.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrMod:", async function() {
    const result = await noParentheses.bitOrMod.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrMod.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrExp:", async function() {
    const result = await noParentheses.bitOrExp.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrExp.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrShiftL:", async function() {
    const result = await noParentheses.bitOrShiftL.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrShiftL.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrShiftR:", async function() {
    const result = await noParentheses.bitOrShiftR.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrShiftR.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrBitAnd:", async function() {
    const result = await noParentheses.bitOrBitAnd.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrBitAnd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrBitOr:", async function() {
    const result = await noParentheses.bitOrBitOr.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrBitOr.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrBitXor:", async function() {
    const result = await noParentheses.bitOrBitXor.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrBitXor.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });
});
