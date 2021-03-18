const VariableTypesAlias = artifacts.require("VariableTypesAlias");
const VariableTypesExplicit = artifacts.require("VariableTypesExplicit");
const VariableTypesMixed = artifacts.require("VariableTypesMixed");

contract(
  "Compare VariableTypesAlias to VariableTypesExplicit and VariableTypesMixed",
  (accounts) => {
    it("has the same bytecode", function () {
      assert.equal(
        VariableTypesAlias.bytecode.slice(0, -86),
        VariableTypesExplicit.bytecode.slice(0, -86)
      );
    });
    it("has the same bytecode", function () {
      assert.equal(
        VariableTypesAlias.bytecode.slice(0, -86),
        VariableTypesMixed.bytecode.slice(0, -86)
      );
    });
  }
);
