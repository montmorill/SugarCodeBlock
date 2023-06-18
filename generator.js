const SCG = new Blockly.Generator("SugarCode");

SCG.PRECEDENCE = 0;

const getValue = (block, name) => SCG.valueToCode(block, name, SCG.PRECEDENCE);
const getField = (block, name) => block.getFieldValue(name, SCG.PRECEDENCE);
const getStatement = (block, name) => SCG.statementToCode(block, name);
const makeFunc = (name, args) =>
  `>${name} | ${
    args ? (typeof args === "string" ? args : `[${args.join(", ")}]`) : "T"
  }\n`;

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
SCG.text = (block) => [`"${block.getFieldValue("TEXT")}"`, SCG.PRECEDENCE];

SCG.min_coin = (block) => makeFunc("min_coin", getValue(block, "NUM"));
SCG.max_coin = (block) => makeFunc("max_coin", getValue(block, "NUM"));
SCG.act_weight = (block) => makeFunc("act_weight", getValue(block, "NUM"));
SCG.pass_weight = (block) => makeFunc("pass_weight", getValue(block, "NUM"));
SCG.Aact_weight = (block) => makeFunc("Aact_weight", getValue(block, "NUM"));
SCG.Apass_weight = (block) => makeFunc("Apass_weight", getValue(block, "NUM"));
SCG.speed = (block) => makeFunc("speed", getValue(block, "NUM"));
SCG.defense = (block) => makeFunc("defense", getValue(block, "NUM"));
SCG.attact = (block) => makeFunc("attact", getValue(block, "NUM"));
SCG.trueAttact = (block) => makeFunc("trueAttact", getValue(block, "NUM"));
SCG.fre = (block) => makeFunc("fre", getValue(block, "NUM"));
SCG.costFre = (block) => makeFunc("costFre", getValue(block, "NUM"));
SCG.SeeChaMay = (block) => makeFunc("costFre");
SCG.SeeCha = (block) => makeFunc("costFre");
SCG.pro_get = (block) =>
  makeFunc("pro_get", [
    getValue(block, "PRO"),
    getValue(block, "MIN"),
    getValue(block, "MAX"),
  ]);

SCG.append = (block) => makeFunc("append", getValue(block, "TEXT"));
SCG.append2 = (block) => makeFunc("append2", getValue(block, "NUM"));
SCG._finish = (block) => makeFunc("finish", getValue(block, "TEXT"));
SCG.slic = (block) =>
  makeFunc("pro_get", [
    getValue(block, "START"),
    getValue(block, "END"),
    getValue(block, "STEP"),
  ]);
SCG.newTempNum = (block) =>
  makeFunc("newTempNum", [
    '"' + getField(block, "VAR") + '"',
    getValue(block, "NUM"),
  ]);
SCG.toTempDigit = (block) =>
  makeFunc("toTempDigit", [
    getValue(block, "TEXT"),
    '"' + getField(block, "VAR") + '"',
  ]);

export const SugarCodeGenerator = SCG;
