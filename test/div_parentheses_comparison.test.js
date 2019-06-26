const BN = require("bn.js");
const crypto = require("crypto");
const NoParentheses = artifacts.require("DivNoParentheses");
const PrettierParentheses = artifacts.require("DivPrettierParentheses");

let a = new BN(crypto.randomBytes(16).toString("hex"), 16);
let b = new BN(crypto.randomBytes(16).toString("hex"), 16);
let c = new BN(crypto.randomBytes(16).toString("hex"), 16);

let noParentheses;
let prettierParentheses;

contract("Compare DivNoParentheses to DivPrettierParentheses", accounts => {
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

  it("divAdd:", async function() {
    const result = await noParentheses.divAdd.call(a, b, c);
    const prettierResult = await prettierParentheses.divAdd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divSub:", async function() {
    const result = await noParentheses.divSub.call(a, b, c);
    const prettierResult = await prettierParentheses.divSub.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divMul:", async function() {
    const result = await noParentheses.divMul.call(a, b, c);
    const prettierResult = await prettierParentheses.divMul.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divDiv:", async function() {
    const result = await noParentheses.divDiv.call(a, b, c);
    const prettierResult = await prettierParentheses.divDiv.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divMod:", async function() {
    const result = await noParentheses.divMod.call(a, b, c);
    const prettierResult = await prettierParentheses.divMod.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divExp:", async function() {
    let computed = false;
    while (!computed) {
      try {
        const result = await noParentheses.divExp.call(a, b, c);
        const prettierResult = await prettierParentheses.divExp.call(a, b, c);
        computed = true;
        assert.ok(result.eq(prettierResult));
      } catch (e) {
        console.error(
          "Combination of a, b, and c triggered and invalid opcode exception."
        );
        console.error("a:", a.toString(16));
        console.error("b:", b.toString(16));
        console.error("c:", c.toString(16));
        a = new BN(crypto.randomBytes(16).toString("hex"), 16);
        b = new BN(crypto.randomBytes(16).toString("hex"), 16);
        c = new BN(crypto.randomBytes(16).toString("hex"), 16);
        console.log("Retrying");
      }
    }
  });

  it("divShiftL:", async function() {
    const result = await noParentheses.divShiftL.call(a, b, c);
    const prettierResult = await prettierParentheses.divShiftL.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divShiftR:", async function() {
    const result = await noParentheses.divShiftR.call(a, b, c);
    const prettierResult = await prettierParentheses.divShiftR.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divBitAnd:", async function() {
    const result = await noParentheses.divBitAnd.call(a, b, c);
    const prettierResult = await prettierParentheses.divBitAnd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divBitOr:", async function() {
    const result = await noParentheses.divBitOr.call(a, b, c);
    const prettierResult = await prettierParentheses.divBitOr.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divBitXor:", async function() {
    const result = await noParentheses.divBitXor.call(a, b, c);
    const prettierResult = await prettierParentheses.divBitXor.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });
});
