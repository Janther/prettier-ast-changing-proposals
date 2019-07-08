const VariableTypesAlias = artifacts.require("VariableTypesAlias");
const VariableTypesExplicit = artifacts.require("VariableTypesExplicit");
const VariableTypesMixed = artifacts.require("VariableTypesMixed");

contract(
  "Compare VariableTypesAlias to VariableTypesExplicit and VariableTypesMixed",
  accounts => {
    it("has the same bytecode", function() {
      assert.equal(
        VariableTypesAlias.bytecode.slice(0, -68),
        VariableTypesExplicit.bytecode.slice(0, -68)
      );
    });
    it("has the same bytecode", function() {
      assert.equal(
        VariableTypesAlias.bytecode.slice(0, -68),
        VariableTypesMixed.bytecode.slice(0, -68)
      );
    });
  }
);
