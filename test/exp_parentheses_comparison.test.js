const BN = require("bn.js");
const crypto = require("crypto");
const NoParentheses = artifacts.require("ExpNoParentheses");
const PrettierParentheses = artifacts.require("ExpPrettierParentheses");

let a = new BN(crypto.randomBytes(16).toString("hex"), 16);
let b = new BN(crypto.randomBytes(16).toString("hex"), 16);
let c = new BN(crypto.randomBytes(16).toString("hex"), 16);

let noParentheses;
let prettierParentheses;

contract("Compare ExpNoParentheses to ExpPrettierParentheses", (accounts) => {
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

  it("expAdd:", async function () {
    const result = await noParentheses.expAdd.call(a, b, c);
    const prettierResult = await prettierParentheses.expAdd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("expSub:", async function () {
    const result = await noParentheses.expSub.call(a, b, c);
    const prettierResult = await prettierParentheses.expSub.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("expMul:", async function () {
    const result = await noParentheses.expMul.call(a, b, c);
    const prettierResult = await prettierParentheses.expMul.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("expDiv:", async function () {
    const result = await noParentheses.expDiv.call(a, b, c);
    const prettierResult = await prettierParentheses.expDiv.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("expMod:", async function () {
    const result = await noParentheses.expMod.call(a, b, c);
    const prettierResult = await prettierParentheses.expMod.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("expExp:", async function () {
    const result = await noParentheses.expExp.call(a, b, c);
    const prettierResult = await prettierParentheses.expExp.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("expShiftL:", async function () {
    const result = await noParentheses.expShiftL.call(a, b, c);
    const prettierResult = await prettierParentheses.expShiftL.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("expShiftR:", async function () {
    const result = await noParentheses.expShiftR.call(a, b, c);
    const prettierResult = await prettierParentheses.expShiftR.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("expBitAnd:", async function () {
    const result = await noParentheses.expBitAnd.call(a, b, c);
    const prettierResult = await prettierParentheses.expBitAnd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("expBitOr:", async function () {
    const result = await noParentheses.expBitOr.call(a, b, c);
    const prettierResult = await prettierParentheses.expBitOr.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("expBitXor:", async function () {
    const result = await noParentheses.expBitXor.call(a, b, c);
    const prettierResult = await prettierParentheses.expBitXor.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });
});
