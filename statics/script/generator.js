const SCG = new Blockly.Generator("SugarCode");

SCG.PRECEDENCE = 0;

const getValue = (block, name) => SCG.valueToCode(block, name, SCG.PRECEDENCE);
const getField = (block, name) => block.getFieldValue(name);
const getStatement = (block, name) => SCG.statementToCode(block, name);
const makeFunc = (name, args) =>
  `>${name} | ${
    args ? (typeof args === "string" ? args : `[${args.join(", ")}]`) : "T"
  }\n`;
const varFunc = (name, args) => [
  `"_${name}${
    args ? (typeof args === "string" ? args : `${args.join(",")}`) : ""
  }"`,
  SCG.PRECEDENCE,
];
const innerFunc = (name, args) => [
  `"${name}(${
    args
      ? typeof args === "string"
        ? unquote(args)
        : `${args.map((arg) => unquote(arg)).join(",")}`
      : ""
  })"`,
  SCG.PRECEDENCE,
];
const quote = (str) => `"${str}"`;
const unquote = (str) => str.replace(/"/g, "");

SCG.scrub_ = function (block, code, thisOnly) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) return code + SCG.blockToCode(nextBlock);
  return code;
};

// ======================================================================= Base
// -------------------------------------------------------------------- Trigger
SCG.trigger = (block) => {
  const conditions = getStatement(block, `CONDITIONS`);
  const effects = getStatement(block, `EFFECTS`);
  if (conditions) return `@条件\n${conditions}@效果\n${effects}`;
  return `@条件@效果\n${effects}`;
};
SCG.effect = (block) => `@条件@效果\n${getStatement(block, `EFFECTS`)}`;
// ----------------------------------------------------------------------- Data
SCG.boolean = (block) => [getField(block, "BOOL"), SCG.PRECEDENCE];
SCG.number = (block) => [String(getField(block, "NUM")), SCG.PRECEDENCE];
SCG.text = (block) => [quote(getField(block, "TEXT")), SCG.PRECEDENCE];
// ----------------------------------------------------------------------- Math
SCG.calc = (block) =>
  innerFunc(getField(block, "TYPE"), [
    getValue(block, "LEFT"),
    getValue(block, "RIGHT"),
  ]);
SCG.abs = (block) => innerFunc("abs", getValue(block, "NUM"));
SCG.digit = (block) => innerFunc("digit", getValue(block, "TEXT"));
SCG.str = (block) => innerFunc("str", getValue(block, "NUM"));
SCG.sadd = (block) =>
  innerFunc("sadd", [getValue(block, "LEFT"), getValue(block, "RIGHT")]);
SCG.random = (block) =>
  varFunc("random", [getValue(block, "MIN"), getValue(block, "MAX")]);
// ===================================================================== Hijack
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
// ======================================================================= Chat
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
SCG.input = (block) =>
  varFunc("input", [
    (getField(block, "TYPE_START") === "-" ? -1 : 1) * getValue(block, "START"),
    (getField(block, "TYPE_END") === "-" ? -1 : 1) * getValue(block, "END"),
    getValue(block, "STEP"),
  ]);
SCG.input_arg = (block) => getValue(block, "TYPE");
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
SCG.slic = (block) =>
  makeFunc("slic", [
    (getField(block, "TYPE_START") === "-" ? -1 : 1) * getValue(block, "START"),
    (getField(block, "TYPE_END") === "-" ? -1 : 1) * getValue(block, "END"),
    getValue(block, "STEP"),
  ]);
SCG.skip = (block) => makeFunc("skip", getValue(block, "NUM"));
SCG.special_operate = (block) => makeFunc(getField(block, "TYPE"));

export { SCG as SugarCodeGenerator };
