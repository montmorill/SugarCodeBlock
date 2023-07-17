import {
  SugarCodeGenerator as SCG,
  getField as getField,
  getValue as getValue,
  makeFunc as makeFunc,
} from "../generator.js";

// ------------------------------------------------------------------- Variable
// ------------------------------------------------------------------ Condition
// --------------------------------------------------------------------- Effect
SCG.coin = (block) =>
  makeFunc(getField(block, "TYPE") + "_coin", getValue(block, "NUM"));
SCG.weight = (block) =>
  makeFunc(
    getField(block, "WHO") + getField(block, "TYPE") + "_weight",
    getValue(block, "NUM")
  );
SCG.attr = (block) => makeFunc(getField(block, "TYPE"), getValue(block, "NUM"));
SCG.trueAttact = (block) => makeFunc("trueAttact", getValue(block, "NUM"));
SCG.fre = (block) => makeFunc("fre", getValue(block, "NUM"));
SCG.costFre = (block) => makeFunc("costFre", getValue(block, "NUM"));
SCG.SeeCha = (block) => makeFunc("SeeCha" + getField(block, "TYPE"));
SCG.pro_get = (block) =>
  makeFunc("pro_get", [
    getValue(block, "PRO"),
    getValue(block, "MIN"),
    getValue(block, "MAX"),
  ]);

export { SCG as SugarCodeGenerator };
