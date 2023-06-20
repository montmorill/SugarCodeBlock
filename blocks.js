export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  // ===================================================================== Base
  // trigger
  {
    type: "trigger",
    colour: 160,
    message0: "条件",
    message1: "%1",
    args1: [{ type: "input_statement", name: "CONDITIONS" }],
    message2: "效果",
    message3: "%1",
    args3: [{ type: "input_statement", name: "EFFECTS" }],
  },
  // effect
  {
    type: "effect",
    colour: 160,
    message0: "效果",
    message1: "%1",
    args1: [{ type: "input_statement", name: "EFFECTS" }],
  },
  // boolean
  {
    type: "boolean",
    output: "Boolean",
    colour: 160,
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
    colour: 160,
    message0: "%1",
    args0: [{ type: "field_number", name: "NUM" }],
  },
  // text (built-in)
  // =================================================================== Hijack
  // ----------------------------------------------------------------- Variable
  // ---------------------------------------------------------------- Condition
  // ------------------------------------------------------------------- Effect
  // coin
  {
    type: "coin",
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    colour: 360,
    message0: "将掉落金币 %1 设为 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["最大值", "max"],
          ["最小值", "min"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
  },
  // weight
  {
    type: "weight",
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    colour: 360,
    message0: "将 %1 %2 权值设为 %3",
    args0: [
      {
        type: "field_dropdown",
        name: "WHO",
        options: [
          ["己方", ""],
          ["对方", "A"],
        ],
      },
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["主动", "act"],
          ["被动", "pass"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
  },
  // attr
  {
    type: "attr",
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    colour: 360,
    message0: "将己方 %1 设为 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["速度", "speed"],
          ["防御", "defense"],
          ["攻击", "attact"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
  },
  // trueAttact
  {
    type: "trueAttact",
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    colour: 360,
    message0: "将最终伤害值设为 %1",
    args0: [{ type: "input_value", name: "NUM", check: "Number" }],
  },
  // fre
  {
    type: "fre",
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    colour: 360,
    message0: "将抢劫次数上限设置为 %1",
    args0: [{ type: "input_value", name: "NUM", check: "Number" }],
  },
  // costFre
  {
    type: "costFre",
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    colour: 360,
    message0: "消耗 %1 次抢劫次数",
    args0: [{ type: "input_value", name: "NUM", check: "Number" }],
  },
  // SeeCha
  {
    type: "SeeCha",
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    colour: 360,
    message0: "查看对方 %1 权值",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["模糊", "May"],
          ["准确", ""],
        ],
      },
    ],
  },
  // pro_get
  {
    type: "pro_get",
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    colour: 360,
    message0: "额外获得 %1 倍的金币",
    args0: [{ type: "input_value", name: "PRO", check: "Number" }],
    message1: "最少获得 %1 的金币",
    args1: [{ type: "input_value", name: "MIN", check: "Number" }],
    message2: "最多获得 %1 的金币",
    args2: [{ type: "input_value", name: "MAX", check: "Number" }],
  },
  // ===================================================================== Chat
  // ----------------------------------------------------------------- Variable
  // newTempNum
  {
    type: "newTempNum",
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    colour: 210,
    message0: "新建临时变量 %1 并赋值为 %2",
    args0: [
      { type: "field_input", name: "VAR" },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
  },
  // toTempDigit
  {
    type: "toTempDigit",
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    colour: 210,
    message0: "临时变量 %1 赋值为 %2",
    args0: [
      { type: "field_input", name: "VAR" },
      { type: "input_value", name: "TEXT", check: "String" },
    ],
  },
  // change_variable
  {
    type: "change_variable",
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    colour: 210,
    message0: "%1 变量 %2 %3 %4",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["临时", "temp"],
          ["用户", "user"],
          ["群", "group"],
        ],
      },
      { type: "field_input", name: "VAR" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["四舍五入", "0"],
          ["加", "1"],
          ["减", "2"],
          ["乘以", "3"],
          ["除以", "4"],
          ["取余", "5"],
          ["次方", "6"],
          ["整除", "7"],
          ["开方", "8"],
          ["赋值", "9"],
          ["最大值", "10"],
          ["最小值", "11"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
  },
  // get_variable
  {
    type: "get_variable",
    output: "Number",
    colour: 210,
    message0: "%1 变量 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["临时", "temp"],
          ["用户", "user"],
          ["群", "group"],
        ],
      },
      { type: "field_input", name: "VAR" },
    ],
  },
  // other
  {
    type: "other",
    output: "String",
    colour: 210,
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["群名称", "Gname"],
          ["Sugar的称呼", "Nname"],
          ["对方的QQ号", "Uid"],
        ],
      },
    ],
  },
  // random
  {
    type: "random",
    output: "Number",
    colour: 210,
    message0: "从 %1 到 %2 的随机数",
    args0: [
      { type: "input_value", name: "MIN", check: "Number" },
      { type: "input_value", name: "MAX", check: "Number" },
    ],
  },
  // input
  {
    type: "input",
    output: "String",
    colour: 210,
    message0: "获取输入并切片 [ %1 : %2 : %3 ]",
    args0: [
      { type: "input_value", name: "START", check: "Number" },
      { type: "input_value", name: "END", check: "Number" },
      { type: "input_value", name: "STEP", check: "Number" },
    ],
  },
  // ---------------------------------------------------------------- Condition
  // ------------------------------------------------------------------- Effect
  // append
  {
    type: "append",
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    colour: 210,
    message0: "追加 %1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["文本或数字", "append"],
          ["文本并结束", "finish"],
        ],
      },
      { type: "input_value", name: "TEXT", check: ["String"] },
    ],
    extensions: ["append_extension"],
  },
  // slic
  {
    type: "slic",
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    colour: 210,
    message0: "将当前文本切片 [ %1 : %2 : %3 ]",
    args0: [
      { type: "input_value", name: "START", check: "Number" },
      { type: "input_value", name: "END", check: "Number" },
      { type: "input_value", name: "STEP", check: "Number" },
    ],
  },
  // skip
  {
    type: "skip",
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    colour: 210,
    message0: "跳过触发组",
  },
  // special_operate
  {
    type: "special_operate",
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    colour: 210,
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["艾特对方", "atAim"],
          ["撤回对方的消息", "deleteAimMsg"],
        ],
      },
    ],
  },
]);

Blockly.Msg.TEXT_TEXT_TOOLTIP = "";

Blockly.Extensions.register("append_extension", function () {
  const type = this.getField("TYPE");
  const text = this.getInput("TEXT");
  type.setValidator((newValue) => {
    text.setCheck(newValue === "append" ? ["Number", "String"] : "String");
    return newValue;
  });
});
