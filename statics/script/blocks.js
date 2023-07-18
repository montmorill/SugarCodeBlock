const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  // --------------------------------------------------------------------- Base
  // boolean
  {
    type: "boolean",
    output: "Boolean",
    inputsInline: "true",
    colour: "%{BKY_SGCB_BASE}",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "BOOL",
        options: [
          ["真", "T"],
          ["假", "F"],
        ],
      },
    ],
  },
  // number
  {
    type: "number",
    output: "Number",
    inputsInline: "true",
    colour: "%{BKY_SGCB_BASE}",
    message0: "%1",
    args0: [{ type: "field_number", name: "NUM" }],
  },
  // text (built-in)
  // calc
  {
    type: "calc",
    output: "Number",
    inputsInline: "true",
    colour: "%{BKY_SGCB_BASE}",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "LEFT", check: "Number" },
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["+", "add"],
          ["-", "sub"],
          ["*", "mul"],
          ["/", "div"],
          ["//", "idiv"],
          ["%", "mod"],
          ["**", "pow"],
          ["保留小数位", "round"],
        ],
      },
      { type: "input_value", name: "RIGHT", check: "Number" },
    ],
  },
  // abs
  {
    type: "abs",
    output: "Number",
    inputsInline: "true",
    colour: "%{BKY_SGCB_BASE}",
    message0: "%1 的绝对值",
    args0: [{ type: "input_value", name: "NUM", check: "Number" }],
  },
  // digit
  {
    type: "digit",
    output: "Number",
    inputsInline: "true",
    colour: "%{BKY_SGCB_BASE}",
    message0: "将 %1 转换为数字",
    args0: [{ type: "input_value", name: "TEXT", check: "String" }],
  },
  // str
  {
    type: "str",
    output: "String",
    inputsInline: "true",
    colour: "%{BKY_SGCB_BASE}",
    message0: "将 %1 转换为文本",
    args0: [{ type: "input_value", name: "NUM", check: "Number" }],
  },
  // sadd
  {
    type: "sadd",
    output: "String",
    inputsInline: "true",
    colour: "%{BKY_SGCB_BASE}",
    message0: "拼接 %1 与 %2",
    args0: [
      { type: "input_value", name: "LEFT", check: "String" },
      { type: "input_value", name: "RIGHT", check: "String" },
    ],
  },
  // random
  {
    type: "random",
    output: "Number",
    inputsInline: "true",
    colour: "%{BKY_SGCB_BASE}",
    message0: "从 %1 到 %2 的随机数",
    args0: [
      { type: "input_value", name: "MIN", check: "Number" },
      { type: "input_value", name: "MAX", check: "Number" },
    ],
  },
  // ------------------------------------------------------------------ Control
  // trigger
  {
    type: "trigger",
    previousStatement: "Control",
    nextStatement: "Control",
    inputsInline: "true",
    colour: "%{BKY_SGCB_CONTROL}",
    message0: "当",
    message1: "%1",
    args1: [
      {
        type: "input_statement",
        name: "CONDITIONS",
        check: "Condition",
      },
    ],
    message2: "时，执行",
    message3: "%1",
    args3: [
      {
        type: "input_statement",
        name: "EFFECTS",
        check: "Effect",
      },
    ],
  },
  // while
  {
    type: "while",
    previousStatement: "Control",
    nextStatement: "Control",
    inputsInline: "true",
    colour: "%{BKY_SGCB_CONTROL}",
    message0: "当",
    message1: "%1",
    args1: [
      {
        type: "input_statement",
        name: "CONDITIONS",
        check: "Condition",
      },
    ],
    message2: "时，重复执行",
    message3: "%1",
    args3: [
      {
        type: "input_statement",
        name: "EFFECTS",
        check: "Control",
      },
    ],
  },
  // for
  {
    type: "for",
    previousStatement: "Control",
    nextStatement: "Control",
    inputsInline: "true",
    colour: "%{BKY_SGCB_CONTROL}",
    message0: "当",
    message1: "%1",
    args1: [
      {
        type: "input_statement",
        name: "CONDITIONS",
        check: "Condition",
      },
    ],
    message2: "时，重复执行 %1 次",
    args2: [{ type: "input_value", name: "NUM", check: "Number" }],
    message3: "%1",
    args3: [
      {
        type: "input_statement",
        name: "EFFECTS",
        check: "Control",
      },
    ],
  },
  // break
  {
    type: "break",
    previousStatement: "Effect",
    nextStatement: "Effect",
    inputsInline: "true",
    colour: "%{BKY_SGCB_CONTROL}",
    message0: "跳出循环",
  },
]);

Blockly.common.defineBlocks(blocks);
