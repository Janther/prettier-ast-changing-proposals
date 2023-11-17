const Conditional = artifacts.require("Conditional");
const ConditionalOldParser = artifacts.require("ConditionalOldParser");
const ConditionalNewParser = artifacts.require("ConditionalNewParser");

contract("Compare different Conditional nesting options", (accounts) => {
  it("has conflicts with the current parser", function () {
    assert.notEqual(
      Conditional.bytecode.slice(0, -86),
      ConditionalOldParser.bytecode.slice(0, -86),
    );
  });
  it("has the same bytecode as the proposed parser", function () {
    assert.equal(
      Conditional.bytecode.slice(0, -86),
      ConditionalNewParser.bytecode.slice(0, -86),
    );
  });
});
