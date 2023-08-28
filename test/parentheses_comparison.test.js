const BN = require("bn.js");
const crypto = require("crypto");
const NoParentheses = artifacts.require("NoParentheses");
const PrettierParentheses = artifacts.require("PrettierParentheses");

let a = new BN(crypto.randomBytes(16).toString("hex"), 16);
let b = new BN(crypto.randomBytes(16).toString("hex"), 16);
let c = new BN(crypto.randomBytes(16).toString("hex"), 16);

let noParentheses;
let prettierParentheses;

contract("Compare NoParentheses to PrettierParentheses", (accounts) => {
  before(async () => {
    noParentheses = await NoParentheses.deployed();
    prettierParentheses = await PrettierParentheses.deployed();
  });

  it("has the same bytecode", function () {
    assert.equal(
      NoParentheses.bytecode.slice(0, -86),
      PrettierParentheses.bytecode.slice(0, -86),
    );
  });

  it("addAdd:", async function () {
    const result = await noParentheses.addAdd.call(a, b, c);
    const prettierResult = await prettierParentheses.addAdd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addSub:", async function () {
    const result = await noParentheses.addSub.call(a, b, c);
    const prettierResult = await prettierParentheses.addSub.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addMul:", async function () {
    const result = await noParentheses.addMul.call(a, b, c);
    const prettierResult = await prettierParentheses.addMul.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addDiv:", async function () {
    const result = await noParentheses.addDiv.call(a, b, c);
    const prettierResult = await prettierParentheses.addDiv.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addMod:", async function () {
    const result = await noParentheses.addMod.call(a, b, c);
    const prettierResult = await prettierParentheses.addMod.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addExp:", async function () {
    const result = await noParentheses.addExp.call(a, b, c);
    const prettierResult = await prettierParentheses.addExp.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addShiftL:", async function () {
    const result = await noParentheses.addShiftL.call(a, b, c);
    const prettierResult = await prettierParentheses.addShiftL.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addShiftR:", async function () {
    const result = await noParentheses.addShiftR.call(a, b, c);
    const prettierResult = await prettierParentheses.addShiftR.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addBitAnd:", async function () {
    const result = await noParentheses.addBitAnd.call(a, b, c);
    const prettierResult = await prettierParentheses.addBitAnd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addBitOr:", async function () {
    const result = await noParentheses.addBitOr.call(a, b, c);
    const prettierResult = await prettierParentheses.addBitOr.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("addBitXor:", async function () {
    const result = await noParentheses.addBitXor.call(a, b, c);
    const prettierResult = await prettierParentheses.addBitXor.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subAdd:", async function () {
    const result = await noParentheses.subAdd.call(a, b, c);
    const prettierResult = await prettierParentheses.subAdd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subSub:", async function () {
    const result = await noParentheses.subSub.call(a, b, c);
    const prettierResult = await prettierParentheses.subSub.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subMul:", async function () {
    const result = await noParentheses.subMul.call(a, b, c);
    const prettierResult = await prettierParentheses.subMul.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subDiv:", async function () {
    const result = await noParentheses.subDiv.call(a, b, c);
    const prettierResult = await prettierParentheses.subDiv.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subMod:", async function () {
    const result = await noParentheses.subMod.call(a, b, c);
    const prettierResult = await prettierParentheses.subMod.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subExp:", async function () {
    const result = await noParentheses.subExp.call(a, b, c);
    const prettierResult = await prettierParentheses.subExp.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subShiftL:", async function () {
    const result = await noParentheses.subShiftL.call(a, b, c);
    const prettierResult = await prettierParentheses.subShiftL.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subShiftR:", async function () {
    const result = await noParentheses.subShiftR.call(a, b, c);
    const prettierResult = await prettierParentheses.subShiftR.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subBitAnd:", async function () {
    const result = await noParentheses.subBitAnd.call(a, b, c);
    const prettierResult = await prettierParentheses.subBitAnd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subBitOr:", async function () {
    const result = await noParentheses.subBitOr.call(a, b, c);
    const prettierResult = await prettierParentheses.subBitOr.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("subBitXor:", async function () {
    const result = await noParentheses.subBitXor.call(a, b, c);
    const prettierResult = await prettierParentheses.subBitXor.call(a, b, c);
    assert.ok(result.eq(prettierResult));
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

  it("divAdd:", async function () {
    const result = await noParentheses.divAdd.call(a, b, c);
    const prettierResult = await prettierParentheses.divAdd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divSub:", async function () {
    const result = await noParentheses.divSub.call(a, b, c);
    const prettierResult = await prettierParentheses.divSub.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divMul:", async function () {
    const result = await noParentheses.divMul.call(a, b, c);
    const prettierResult = await prettierParentheses.divMul.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divDiv:", async function () {
    const result = await noParentheses.divDiv.call(a, b, c);
    const prettierResult = await prettierParentheses.divDiv.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divMod:", async function () {
    const result = await noParentheses.divMod.call(a, b, c);
    const prettierResult = await prettierParentheses.divMod.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divExp:", async function () {
    let computed = false;
    while (!computed) {
      try {
        const result = await noParentheses.divExp.call(a, b, c);
        const prettierResult = await prettierParentheses.divExp.call(a, b, c);
        computed = true;
        assert.ok(result.eq(prettierResult));
      } catch (e) {
        console.error(
          "Combination of a, b, and c triggered and invalid opcode exception.",
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

  it("divShiftL:", async function () {
    const result = await noParentheses.divShiftL.call(a, b, c);
    const prettierResult = await prettierParentheses.divShiftL.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divShiftR:", async function () {
    const result = await noParentheses.divShiftR.call(a, b, c);
    const prettierResult = await prettierParentheses.divShiftR.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divBitAnd:", async function () {
    const result = await noParentheses.divBitAnd.call(a, b, c);
    const prettierResult = await prettierParentheses.divBitAnd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divBitOr:", async function () {
    const result = await noParentheses.divBitOr.call(a, b, c);
    const prettierResult = await prettierParentheses.divBitOr.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("divBitXor:", async function () {
    const result = await noParentheses.divBitXor.call(a, b, c);
    const prettierResult = await prettierParentheses.divBitXor.call(a, b, c);
    assert.ok(result.eq(prettierResult));
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
          "Combination of a, b, and c triggered and invalid opcode exception.",
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

  it("shiftLAdd:", async function () {
    const result = await noParentheses.shiftLAdd.call(a, b, c);
    const prettierResult = await prettierParentheses.shiftLAdd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("shiftLSub:", async function () {
    const result = await noParentheses.shiftLSub.call(a, b, c);
    const prettierResult = await prettierParentheses.shiftLSub.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("shiftLMul:", async function () {
    const result = await noParentheses.shiftLMul.call(a, b, c);
    const prettierResult = await prettierParentheses.shiftLMul.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("shiftLDiv:", async function () {
    const result = await noParentheses.shiftLDiv.call(a, b, c);
    const prettierResult = await prettierParentheses.shiftLDiv.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("shiftLMod:", async function () {
    const result = await noParentheses.shiftLMod.call(a, b, c);
    const prettierResult = await prettierParentheses.shiftLMod.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("shiftLExp:", async function () {
    const result = await noParentheses.shiftLExp.call(a, b, c);
    const prettierResult = await prettierParentheses.shiftLExp.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("shiftLShiftL:", async function () {
    const result = await noParentheses.shiftLShiftL.call(a, b, c);
    const prettierResult = await prettierParentheses.shiftLShiftL.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("shiftLShiftR:", async function () {
    const result = await noParentheses.shiftLShiftR.call(a, b, c);
    const prettierResult = await prettierParentheses.shiftLShiftR.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("shiftLBitAnd:", async function () {
    const result = await noParentheses.shiftLBitAnd.call(a, b, c);
    const prettierResult = await prettierParentheses.shiftLBitAnd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("shiftLBitOr:", async function () {
    const result = await noParentheses.shiftLBitOr.call(a, b, c);
    const prettierResult = await prettierParentheses.shiftLBitOr.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("shiftLBitXor:", async function () {
    const result = await noParentheses.shiftLBitXor.call(a, b, c);
    const prettierResult = await prettierParentheses.shiftLBitXor.call(a, b, c);
    assert.ok(result.eq(prettierResult));
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
    const prettierResult = await prettierParentheses.shiftRShiftL.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("shiftRShiftR:", async function () {
    const result = await noParentheses.shiftRShiftR.call(a, b, c);
    const prettierResult = await prettierParentheses.shiftRShiftR.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("shiftRBitAnd:", async function () {
    const result = await noParentheses.shiftRBitAnd.call(a, b, c);
    const prettierResult = await prettierParentheses.shiftRBitAnd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("shiftRBitOr:", async function () {
    const result = await noParentheses.shiftRBitOr.call(a, b, c);
    const prettierResult = await prettierParentheses.shiftRBitOr.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("shiftRBitXor:", async function () {
    const result = await noParentheses.shiftRBitXor.call(a, b, c);
    const prettierResult = await prettierParentheses.shiftRBitXor.call(a, b, c);
    assert.ok(result.eq(prettierResult));
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
    const prettierResult = await prettierParentheses.bitAndShiftL.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitAndShiftR:", async function () {
    const result = await noParentheses.bitAndShiftR.call(a, b, c);
    const prettierResult = await prettierParentheses.bitAndShiftR.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitAndBitAnd:", async function () {
    const result = await noParentheses.bitAndBitAnd.call(a, b, c);
    const prettierResult = await prettierParentheses.bitAndBitAnd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitAndBitOr:", async function () {
    const result = await noParentheses.bitAndBitOr.call(a, b, c);
    const prettierResult = await prettierParentheses.bitAndBitOr.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitAndBitXor:", async function () {
    const result = await noParentheses.bitAndBitXor.call(a, b, c);
    const prettierResult = await prettierParentheses.bitAndBitXor.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrAdd:", async function () {
    const result = await noParentheses.bitOrAdd.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrAdd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrSub:", async function () {
    const result = await noParentheses.bitOrSub.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrSub.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrMul:", async function () {
    const result = await noParentheses.bitOrMul.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrMul.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrDiv:", async function () {
    const result = await noParentheses.bitOrDiv.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrDiv.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrMod:", async function () {
    const result = await noParentheses.bitOrMod.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrMod.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrExp:", async function () {
    const result = await noParentheses.bitOrExp.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrExp.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrShiftL:", async function () {
    const result = await noParentheses.bitOrShiftL.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrShiftL.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrShiftR:", async function () {
    const result = await noParentheses.bitOrShiftR.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrShiftR.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrBitAnd:", async function () {
    const result = await noParentheses.bitOrBitAnd.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrBitAnd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrBitOr:", async function () {
    const result = await noParentheses.bitOrBitOr.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrBitOr.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitOrBitXor:", async function () {
    const result = await noParentheses.bitOrBitXor.call(a, b, c);
    const prettierResult = await prettierParentheses.bitOrBitXor.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitXorAdd:", async function () {
    const result = await noParentheses.bitXorAdd.call(a, b, c);
    const prettierResult = await prettierParentheses.bitXorAdd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitXorSub:", async function () {
    const result = await noParentheses.bitXorSub.call(a, b, c);
    const prettierResult = await prettierParentheses.bitXorSub.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitXorMul:", async function () {
    const result = await noParentheses.bitXorMul.call(a, b, c);
    const prettierResult = await prettierParentheses.bitXorMul.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitXorDiv:", async function () {
    const result = await noParentheses.bitXorDiv.call(a, b, c);
    const prettierResult = await prettierParentheses.bitXorDiv.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitXorMod:", async function () {
    const result = await noParentheses.bitXorMod.call(a, b, c);
    const prettierResult = await prettierParentheses.bitXorMod.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitXorExp:", async function () {
    const result = await noParentheses.bitXorExp.call(a, b, c);
    const prettierResult = await prettierParentheses.bitXorExp.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitXorShiftL:", async function () {
    const result = await noParentheses.bitXorShiftL.call(a, b, c);
    const prettierResult = await prettierParentheses.bitXorShiftL.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitXorShiftR:", async function () {
    const result = await noParentheses.bitXorShiftR.call(a, b, c);
    const prettierResult = await prettierParentheses.bitXorShiftR.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitXorBitAnd:", async function () {
    const result = await noParentheses.bitXorBitAnd.call(a, b, c);
    const prettierResult = await prettierParentheses.bitXorBitAnd.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitXorBitOr:", async function () {
    const result = await noParentheses.bitXorBitOr.call(a, b, c);
    const prettierResult = await prettierParentheses.bitXorBitOr.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("bitXorBitXor:", async function () {
    const result = await noParentheses.bitXorBitXor.call(a, b, c);
    const prettierResult = await prettierParentheses.bitXorBitXor.call(a, b, c);
    assert.ok(result.eq(prettierResult));
  });

  it("orOr:", async function () {
    for (let d of [true, false]) {
      for (let e of [true, false]) {
        for (let f of [true, false]) {
          const result = await noParentheses.orOr.call(d, e, f);
          const prettierResult = await prettierParentheses.orOr.call(d, e, f);
          assert.equal(result, prettierResult);
        }
      }
    }
  });

  it("orAnd:", async function () {
    for (let d of [true, false]) {
      for (let e of [true, false]) {
        for (let f of [true, false]) {
          const result = await noParentheses.orAnd.call(d, e, f);
          const prettierResult = await prettierParentheses.orAnd.call(d, e, f);
          assert.equal(result, prettierResult);
        }
      }
    }
  });

  it("andOr:", async function () {
    for (let d of [true, false]) {
      for (let e of [true, false]) {
        for (let f of [true, false]) {
          const result = await noParentheses.andOr.call(d, e, f);
          const prettierResult = await prettierParentheses.andOr.call(d, e, f);
          assert.equal(result, prettierResult);
        }
      }
    }
  });

  it("andAnd:", async function () {
    for (let d of [true, false]) {
      for (let e of [true, false]) {
        for (let f of [true, false]) {
          const result = await noParentheses.andAnd.call(d, e, f);
          const prettierResult = await prettierParentheses.andAnd.call(d, e, f);
          assert.equal(result, prettierResult);
        }
      }
    }
  });
});
