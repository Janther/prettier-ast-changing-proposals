const BN = require("bn.js");
const crypto = require("crypto");
const NoParentheses = artifacts.require("SubNoParentheses");
const PrettierParentheses = artifacts.require("SubPrettierParentheses");

let a = new BN(crypto.randomBytes(16).toString("hex"), 16);
let b = new BN(crypto.randomBytes(16).toString("hex"), 16);
let c = new BN(crypto.randomBytes(16).toString("hex"), 16);

let noParentheses;
let prettierParentheses;

contract("Compare SubNoParentheses to SubPrettierParentheses", accounts => {
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

  it("subAdd:", async function() {
    const result = await noParentheses.subAdd.call(a, b, c);
    const prettierResult = await prettierParentheses.subAdd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subSub:", async function() {
    const result = await noParentheses.subSub.call(a, b, c);
    const prettierResult = await prettierParentheses.subSub.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subMul:", async function() {
    const result = await noParentheses.subMul.call(a, b, c);
    const prettierResult = await prettierParentheses.subMul.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subDiv:", async function() {
    const result = await noParentheses.subDiv.call(a, b, c);
    const prettierResult = await prettierParentheses.subDiv.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subMod:", async function() {
    const result = await noParentheses.subMod.call(a, b, c);
    const prettierResult = await prettierParentheses.subMod.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subExp:", async function() {
    const result = await noParentheses.subExp.call(a, b, c);
    const prettierResult = await prettierParentheses.subExp.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subShiftL:", async function() {
    const result = await noParentheses.subShiftL.call(a, b, c);
    const prettierResult = await prettierParentheses.subShiftL.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subShiftR:", async function() {
    const result = await noParentheses.subShiftR.call(a, b, c);
    const prettierResult = await prettierParentheses.subShiftR.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subBitAnd:", async function() {
    const result = await noParentheses.subBitAnd.call(a, b, c);
    const prettierResult = await prettierParentheses.subBitAnd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subBitOr:", async function() {
    const result = await noParentheses.subBitOr.call(a, b, c);
    const prettierResult = await prettierParentheses.subBitOr.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subBitXor:", async function() {
    const result = await noParentheses.subBitXor.call(a, b, c);
    const prettierResult = await prettierParentheses.subBitXor.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });
});
