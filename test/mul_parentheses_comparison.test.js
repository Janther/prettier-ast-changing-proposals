const BN = require("bn.js");
const crypto = require("crypto");
const NoParentheses = artifacts.require("MulNoParentheses");
const PrettierParentheses = artifacts.require("MulPrettierParentheses");

let a = new BN(crypto.randomBytes(16).toString("hex"), 16);
let b = new BN(crypto.randomBytes(16).toString("hex"), 16);
let c = new BN(crypto.randomBytes(16).toString("hex"), 16);

let noParentheses;
let prettierParentheses;

contract("Compare MulNoParentheses to MulPrettierParentheses", (accounts) => {
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

  it("mulAdd:", async function () {
    const result = await noParentheses.mulAdd.call(a, b, c);
    const prettierResult = await prettierParentheses.mulAdd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("mulSub:", async function () {
    const result = await noParentheses.mulSub.call(a, b, c);
    const prettierResult = await prettierParentheses.mulSub.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("mulMul:", async function () {
    const result = await noParentheses.mulMul.call(a, b, c);
    const prettierResult = await prettierParentheses.mulMul.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("mulDiv:", async function () {
    const result = await noParentheses.mulDiv.call(a, b, c);
    const prettierResult = await prettierParentheses.mulDiv.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("mulMod:", async function () {
    const result = await noParentheses.mulMod.call(a, b, c);
    const prettierResult = await prettierParentheses.mulMod.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("mulExp:", async function () {
    const result = await noParentheses.mulExp.call(a, b, c);
    const prettierResult = await prettierParentheses.mulExp.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("mulShiftL:", async function () {
    const result = await noParentheses.mulShiftL.call(a, b, c);
    const prettierResult = await prettierParentheses.mulShiftL.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("mulShiftR:", async function () {
    const result = await noParentheses.mulShiftR.call(a, b, c);
    const prettierResult = await prettierParentheses.mulShiftR.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("mulBitAnd:", async function () {
    const result = await noParentheses.mulBitAnd.call(a, b, c);
    const prettierResult = await prettierParentheses.mulBitAnd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("mulBitOr:", async function () {
    const result = await noParentheses.mulBitOr.call(a, b, c);
    const prettierResult = await prettierParentheses.mulBitOr.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("mulBitXor:", async function () {
    const result = await noParentheses.mulBitXor.call(a, b, c);
    const prettierResult = await prettierParentheses.mulBitXor.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });
});
