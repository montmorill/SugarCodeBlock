const SCG = new Blockly.Generator("SugarCode");

SCG.PRECEDENCE = 0;

const getValue = (block, name) => SCG.valueToCode(block, name, SCG.PRECEDENCE);
const getField = (block, name) => block.getFieldValue(name);
const getStatement = (block, name) => SCG.statementToCode(block, name);
const makeFunc = (name, args) =>
  `>${name} | ${
    args ? (typeof args === "string" ? args : `[${args.join(", ")}]`) : "T"
  }\n`;
const varFunc = (name, args) =>
  `"_${name}${
    args ? (typeof args === "string" ? args : `${args.join(",")}`) : ""
  }"`;
const quote = (str) => `"${str}"`;

SCG.scrub_ = function (block, code, thisOnly) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) return code + SCG.blockToCode(nextBlock);
  return code;
};

SCG.trigger = (block) => {
  const conditions = getStatement(block, `CONDITIONS`);
  const effects = getStatement(block, `EFFECTS`);
  if (conditions) return `@条件\n${conditions}@效果\n${effects}`;
  return `@条件@效果\n${effects}`;
};
SCG.effect = (block) => `@条件@效果\n${getStatement(block, `EFFECTS`)}`;

SCG.boolean = (block) => [block.getFieldValue("BOOL"), SCG.PRECEDENCE];
SCG.number = (block) => [String(block.getFieldValue("NUM")), SCG.PRECEDENCE];
SCG.text = (block) => [quote(block.getFieldValue("TEXT")), SCG.PRECEDENCE];

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

SCG.append = (block) =>
  makeFunc(getField(block, "TYPE"), getValue(block, "TEXT"));
SCG.slic = (block) =>
  makeFunc("slic", [
    getValue(block, "START"),
    getValue(block, "END"),
    getValue(block, "STEP"),
  ]);
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
SCG.get_variable = (block) => [
  varFunc(getField(block, "TYPE"), getField(block, "VAR")),
  SCG.PRECEDENCE,
];
SCG.skip = (block) => makeFunc("skip");
SCG.special_operate = (block) => makeFunc(getField(block, "OP"));
SCG.other = (block) => [
  varFunc("other" + getField(block, "TYPE")),
  SCG.PRECEDENCE,
];
SCG.random = (block) => [
  varFunc("random", [getValue(block, "MIN"), getValue(block, "MAX")]),
  SCG.PRECEDENCE,
];
SCG.input = (block) => [
  varFunc("input", [
    getValue(block, "START"),
    getValue(block, "END"),
    getValue(block, "STEP"),
  ]),
  SCG.PRECEDENCE,
];

export { SCG as SugarCodeGenerator };
