const BN = require("bn.js");
const crypto = require("crypto");
const NoParentheses = artifacts.require("AddNoParentheses");
const PrettierParentheses = artifacts.require("AddPrettierParentheses");

let a = new BN(crypto.randomBytes(16).toString("hex"), 16);
let b = new BN(crypto.randomBytes(16).toString("hex"), 16);
let c = new BN(crypto.randomBytes(16).toString("hex"), 16);

let noParentheses;
let prettierParentheses;

contract("Compare AddNoParentheses to AddPrettierParentheses", accounts => {
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

  it("addAdd:", async function() {
    const result = await noParentheses.addAdd.call(a, b, c);
    const prettierResult = await prettierParentheses.addAdd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addSub:", async function() {
    const result = await noParentheses.addSub.call(a, b, c);
    const prettierResult = await prettierParentheses.addSub.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addMul:", async function() {
    const result = await noParentheses.addMul.call(a, b, c);
    const prettierResult = await prettierParentheses.addMul.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addDiv:", async function() {
    const result = await noParentheses.addDiv.call(a, b, c);
    const prettierResult = await prettierParentheses.addDiv.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addMod:", async function() {
    const result = await noParentheses.addMod.call(a, b, c);
    const prettierResult = await prettierParentheses.addMod.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addExp:", async function() {
    const result = await noParentheses.addExp.call(a, b, c);
    const prettierResult = await prettierParentheses.addExp.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addShiftL:", async function() {
    const result = await noParentheses.addShiftL.call(a, b, c);
    const prettierResult = await prettierParentheses.addShiftL.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addShiftR:", async function() {
    const result = await noParentheses.addShiftR.call(a, b, c);
    const prettierResult = await prettierParentheses.addShiftR.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addBitAnd:", async function() {
    const result = await noParentheses.addBitAnd.call(a, b, c);
    const prettierResult = await prettierParentheses.addBitAnd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addBitOr:", async function() {
    const result = await noParentheses.addBitOr.call(a, b, c);
    const prettierResult = await prettierParentheses.addBitOr.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addBitXor:", async function() {
    const result = await noParentheses.addBitXor.call(a, b, c);
    const prettierResult = await prettierParentheses.addBitXor.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });
});
