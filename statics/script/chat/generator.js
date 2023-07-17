import {
  SugarCodeGenerator as SCG,
  getField as getField,
  getValue as getValue,
  makeFunc as makeFunc,
  varFunc as varFunc,
  quote as quote,
} from "../generator.js";

// ------------------------------------------------------------------- Variable
SCG.newTempNum = (block) =>
  makeFunc("newTempNum", [
    quote(getField(block, "VAR")),
    getValue(block, "NUM"),
  ]);
SCG.toTempDigit = (block) =>
  makeFunc("toTempDigit", [
    getValue(block, "TEXT"),
    quote(getField(block, "VAR")),
  ]);
SCG.change_variable = (block) =>
  makeFunc(getField(block, "TYPE") + "NumChange", [
    quote(getField(block, "VAR")),
    getField(block, "OP"),
    getValue(block, "NUM"),
  ]);
SCG.get_variable = (block) =>
  varFunc(getField(block, "TYPE"), getField(block, "VAR"));
SCG.other = (block) => varFunc("other" + getField(block, "TYPE"));
SCG.input = (block) => {
  let start = getValue(block, "START");
  let end = Number(getValue(block, "END"));
  start =
    getField(block, "TYPE_START") === "+"
      ? start - 1
      : start === 1
      ? 99999
      : -start;
  end = getField(block, "TYPE_END") === "+" ? end : end === 1 ? 99999 : 1 - end;
  return varFunc("input", [start, end, getValue(block, "STEP")]);
};
SCG.atb = (block) => varFunc(getField(block, "TYPE"));
SCG.atb = (block) => varFunc(getField(block, "TYPE"));
SCG["f-getIdx"] = (block) =>
  varFunc("f-getIdx", [getField(block, "TEXT1"), getField(block, "TEXT2")]);
SCG["f-getStrSml"] = (block) =>
  varFunc("f-getStrSml", [getField(block, "TEXT1"), getField(block, "TEXT2")]);
// ------------------------------------------------------------------ Condition
SCG.check = (block) =>
  makeFunc("check" + getField(block, "TYPE"), getValue(block, "TEXT"));
SCG.checkSize = (block) => {
  const type = getField(block, "TYPE");
  const num = getValue(block, "NUM");
  return makeFunc("checkSize", [
    (type[0] === "-" && num == 0 ? "" : "-") + num,
    type[1],
  ]);
};
SCG.randomNum = (block) => {
  const num = getValue(block, "NUM");
  return makeFunc("randomNum", (num == 0 ? "" : getField(block, "TYPE")) + num);
};
SCG.proba = (block) => makeFunc("proba", getValue(block, "NUM"));
SCG.cprNums = (block) =>
  makeFunc("cprNums", [
    getValue(block, "LEFT"),
    getValue(block, "RIGHT"),
    getField(block, "TYPE"),
  ]);
SCG.isDigit = (block) => makeFunc("isDigit", getValue(block, "TEXT"));
// --------------------------------------------------------------------- Effect
SCG.append = (block) => {
  const type = getField(block, "TYPE");
  const text = block.getInput("TEXT");
  return makeFunc(
    type + (text.connection.targetConnection.check_[0] === "Number" ? "2" : ""),
    getValue(block, "TEXT")
  );
};
SCG.slic = (block) => {
  const start = getValue(block, "START");
  const end = Number(getValue(block, "END"));
  start =
    getField(block, "TYPE_START") === "+"
      ? start - 1
      : start === 1
      ? 99999
      : -start;
  end = getField(block, "TYPE_END") === "+" ? end : end === 1 ? 99999 : 1 - end;
  return makeFunc("slic", [
    start === -1 ? 99999 : start,
    end === -1 ? 99999 : end,
    getValue(block, "STEP"),
  ]);
};
SCG.skip = (block) => makeFunc("skip", getValue(block, "NUM"));
SCG.special_operate = (block) => makeFunc(getField(block, "TYPE"));

export { SCG as SugarCodeGenerator };
