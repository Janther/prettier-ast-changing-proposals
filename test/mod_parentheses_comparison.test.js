const BN = require("bn.js");
const crypto = require("crypto");
const NoParentheses = artifacts.require("ModNoParentheses");
const PrettierParentheses = artifacts.require("ModPrettierParentheses");

let a = new BN(crypto.randomBytes(16).toString("hex"), 16);
let b = new BN(crypto.randomBytes(16).toString("hex"), 16);
let c = new BN(crypto.randomBytes(16).toString("hex"), 16);

let noParentheses;
let prettierParentheses;

contract("Compare ModNoParentheses to ModPrettierParentheses", (accounts) => {
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

  it("modAdd:", async function () {
    const result = await noParentheses.modAdd.call(a, b, c);
    const prettierResult = await prettierParentheses.modAdd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("modSub:", async function () {
    const result = await noParentheses.modSub.call(a, b, c);
    const prettierResult = await prettierParentheses.modSub.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("modMul:", async function () {
    const result = await noParentheses.modMul.call(a, b, c);
    const prettierResult = await prettierParentheses.modMul.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("modDiv:", async function () {
    const result = await noParentheses.modDiv.call(a, b, c);
    const prettierResult = await prettierParentheses.modDiv.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("modMod:", async function () {
    const result = await noParentheses.modMod.call(a, b, c);
    const prettierResult = await prettierParentheses.modMod.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("modExp:", async function () {
    let computed = false;
    while (!computed) {
      try {
        const result = await noParentheses.modExp.call(a, b, c);
        const prettierResult = await prettierParentheses.modExp.call(a, b, c);
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

  it("modShiftL:", async function () {
    const result = await noParentheses.modShiftL.call(a, b, c);
    const prettierResult = await prettierParentheses.modShiftL.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("modShiftR:", async function () {
    const result = await noParentheses.modShiftR.call(a, b, c);
    const prettierResult = await prettierParentheses.modShiftR.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("modBitAnd:", async function () {
    const result = await noParentheses.modBitAnd.call(a, b, c);
    const prettierResult = await prettierParentheses.modBitAnd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("modBitOr:", async function () {
    const result = await noParentheses.modBitOr.call(a, b, c);
    const prettierResult = await prettierParentheses.modBitOr.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("modBitXor:", async function () {
    const result = await noParentheses.modBitXor.call(a, b, c);
    const prettierResult = await prettierParentheses.modBitXor.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });
});
