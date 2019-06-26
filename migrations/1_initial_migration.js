const Migrations = artifacts.require("Migrations");

const NoParentheses = artifacts.require("NoParentheses");
const AddNoParentheses = artifacts.require("AddNoParentheses");
const SubNoParentheses = artifacts.require("SubNoParentheses");
const MulNoParentheses = artifacts.require("MulNoParentheses");
const DivNoParentheses = artifacts.require("DivNoParentheses");
const ModNoParentheses = artifacts.require("ModNoParentheses");
const ExpNoParentheses = artifacts.require("ExpNoParentheses");
const ShiftLNoParentheses = artifacts.require("ShiftLNoParentheses");
const ShiftRNoParentheses = artifacts.require("ShiftRNoParentheses");
const BitAndNoParentheses = artifacts.require("BitAndNoParentheses");
const BitOrNoParentheses = artifacts.require("BitOrNoParentheses");
const BitXorNoParentheses = artifacts.require("BitXorNoParentheses");
const LogicNoParentheses = artifacts.require("LogicNoParentheses");

const PrettierParentheses = artifacts.require("PrettierParentheses");
const AddPrettierParentheses = artifacts.require("AddPrettierParentheses");
const SubPrettierParentheses = artifacts.require("SubPrettierParentheses");
const MulPrettierParentheses = artifacts.require("MulPrettierParentheses");
const DivPrettierParentheses = artifacts.require("DivPrettierParentheses");
const ModPrettierParentheses = artifacts.require("ModPrettierParentheses");
const ExpPrettierParentheses = artifacts.require("ExpPrettierParentheses");
const ShiftLPrettierParentheses = artifacts.require(
  "ShiftLPrettierParentheses"
);
const ShiftRPrettierParentheses = artifacts.require(
  "ShiftRPrettierParentheses"
);
const BitAndPrettierParentheses = artifacts.require(
  "BitAndPrettierParentheses"
);
const BitOrPrettierParentheses = artifacts.require("BitOrPrettierParentheses");
const BitXorPrettierParentheses = artifacts.require(
  "BitXorPrettierParentheses"
);
const LogicPrettierParentheses = artifacts.require("LogicPrettierParentheses");

module.exports = function(deployer) {
  deployer.deploy(Migrations);

  deployer.deploy(NoParentheses);
  deployer.deploy(AddNoParentheses);
  deployer.deploy(SubNoParentheses);
  deployer.deploy(MulNoParentheses);
  deployer.deploy(DivNoParentheses);
  deployer.deploy(ModNoParentheses);
  deployer.deploy(ExpNoParentheses);
  deployer.deploy(ShiftLNoParentheses);
  deployer.deploy(ShiftRNoParentheses);
  deployer.deploy(BitAndNoParentheses);
  deployer.deploy(BitOrNoParentheses);
  deployer.deploy(BitXorNoParentheses);
  deployer.deploy(LogicNoParentheses);

  deployer.deploy(PrettierParentheses);
  deployer.deploy(AddPrettierParentheses);
  deployer.deploy(SubPrettierParentheses);
  deployer.deploy(MulPrettierParentheses);
  deployer.deploy(DivPrettierParentheses);
  deployer.deploy(ModPrettierParentheses);
  deployer.deploy(ExpPrettierParentheses);
  deployer.deploy(ShiftLPrettierParentheses);
  deployer.deploy(ShiftRPrettierParentheses);
  deployer.deploy(BitAndPrettierParentheses);
  deployer.deploy(BitOrPrettierParentheses);
  deployer.deploy(BitXorPrettierParentheses);
  deployer.deploy(LogicPrettierParentheses);
};
