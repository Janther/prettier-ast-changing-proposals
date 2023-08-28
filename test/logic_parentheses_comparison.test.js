const NoParentheses = artifacts.require("LogicNoParentheses");
const PrettierParentheses = artifacts.require("LogicPrettierParentheses");

let noParentheses;
let prettierParentheses;

contract(
  "Compare LogicNoParentheses to LogicPrettierParentheses",
  (accounts) => {
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
            const prettierResult = await prettierParentheses.orAnd.call(
              d,
              e,
              f,
            );
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
            const prettierResult = await prettierParentheses.andOr.call(
              d,
              e,
              f,
            );
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
            const prettierResult = await prettierParentheses.andAnd.call(
              d,
              e,
              f,
            );
            assert.equal(result, prettierResult);
          }
        }
      }
    });
  },
);
