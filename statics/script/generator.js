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
SCG.boolean = (block) => [getField(block, "BOOL"), SCG.PRECEDENCE];
SCG.number = (block) => [String(getField(block, "NUM")), SCG.PRECEDENCE];
SCG.text = (block) => [quote(getField(block, "TEXT")), SCG.PRECEDENCE];
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
SCG.trigger = (block) => {
  const conditions = getStatement(block, "CONDITIONS");
  return (
    `@条件` +
    (conditions ? `\n${conditions}` : "") +
    `@效果\n${getStatement(block, "EFFECTS")}`
  );
};
SCG.while = (block) => {
  return (
    `@条件\n  ${makeFunc("whileFlag")}` +
    (getStatement(block, "CONDITIONS") || "") +
    `@效果\n  ${makeFunc("whileBegin")}${getStatement(
      block,
      "EFFECTS"
    )}@条件@效果\n  ${makeFunc("whileEnd")}`
  );
};
SCG.for = (block) => {
  return (
    `@条件\n  ${makeFunc("forFlag")}` +
    (getStatement(block, "CONDITIONS") || "") +
    `@效果\n  ${makeFunc("forBegin", getValue(block, "NUM"))}${getStatement(
      block,
      "EFFECTS"
    )}@条件@效果\n  ${makeFunc("forEnd")}`
  );
};
SCG.break = (block) => makeFunc("break");
export {
  SCG as SugarCodeGenerator,
  getValue as getValue,
  getField as getField,
  getStatement as getStatement,
  makeFunc as makeFunc,
  varFunc as varFunc,
  innerFunc as innerFunc,
  quote as quote,
  unquote as unquote,
};
