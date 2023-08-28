const VariableTypesAlias = artifacts.require("VariableTypesAlias");
const VariableTypesExplicit = artifacts.require("VariableTypesExplicit");
const VariableTypesMixed = artifacts.require("VariableTypesMixed");

module.exports = function (deployer) {
  deployer.deploy(VariableTypesAlias);
  deployer.deploy(VariableTypesExplicit);
  deployer.deploy(VariableTypesMixed);
};
