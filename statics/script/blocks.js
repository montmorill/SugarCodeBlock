export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  // ===================================================================== Base
  // ------------------------------------------------------------------ Trigger
  // trigger
  {
    type: "trigger",
    inputsInline: "true",
    colour: 160,
    message0: "%1 条件",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["抢劫", "Hijack"],
          ["高级调教", "Chat"],
        ],
      },
    ],
    message1: "%1",
    args1: [
      {
        type: "input_statement",
        name: "CONDITIONS",
        check: ["HijackCondition", "ChatCondition"],
      },
    ],
    message2: "效果",
    message3: "%1",
    args3: [
      {
        type: "input_statement",
        name: "EFFECTS",
        check: ["HijackEffect", "ChatEffect"],
      },
    ],
    extensions: ["trigger_extension"],
  },
  // effect
  {
    type: "effect",
    inputsInline: "true",
    colour: 160,
    message0: "%1 效果",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["抢劫", "Hijack"],
          ["高级调教", "Chat"],
        ],
      },
    ],
    message1: "%1",
    args1: [{ type: "input_statement", name: "EFFECTS" }],
    extensions: ["trigger_extension"],
  },
  // --------------------------------------------------------------------- Data
  // boolean
  {
    type: "boolean",
    output: "Boolean",
    inputsInline: "true",
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
    inputsInline: "true",
    colour: 160,
    message0: "%1",
    args0: [{ type: "field_number", name: "NUM" }],
  },
  // text (built-in)
  // --------------------------------------------------------------------- Math
  // calc
  {
    type: "calc",
    output: "Number",
    inputsInline: "true",
    colour: 160,
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
          ["取整", "round"],
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
    colour: 160,
    message0: "%1 的绝对值",
    args0: [{ type: "input_value", name: "NUM", check: "Number" }],
  },
  // =================================================================== Hijack
  // ----------------------------------------------------------------- Variable
  // ---------------------------------------------------------------- Condition
  // ------------------------------------------------------------------- Effect
  // coin
  {
    type: "coin",
    previousStatement: "HijackEffect",
    nextStatement: "HijackEffect",
    inputsInline: "true",
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
    previousStatement: "HijackEffect",
    nextStatement: "HijackEffect",
    inputsInline: "true",
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
    previousStatement: "HijackEffect",
    nextStatement: "HijackEffect",
    inputsInline: "true",
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
    previousStatement: "HijackEffect",
    nextStatement: "HijackEffect",
    inputsInline: "true",
    colour: 360,
    message0: "将最终伤害值设为 %1",
    args0: [{ type: "input_value", name: "NUM", check: "Number" }],
  },
  // fre
  {
    type: "fre",
    previousStatement: "HijackEffect",
    nextStatement: "HijackEffect",
    inputsInline: "true",
    colour: 360,
    message0: "将抢劫次数上限设置为 %1",
    args0: [{ type: "input_value", name: "NUM", check: "Number" }],
  },
  // costFre
  {
    type: "costFre",
    previousStatement: "HijackEffect",
    nextStatement: "HijackEffect",
    inputsInline: "true",
    colour: 360,
    message0: "消耗 %1 次抢劫次数",
    args0: [{ type: "input_value", name: "NUM", check: "Number" }],
  },
  // SeeCha
  {
    type: "SeeCha",
    previousStatement: "HijackEffect",
    nextStatement: "HijackEffect",
    inputsInline: "true",
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
    previousStatement: "HijackEffect",
    nextStatement: "HijackEffect",
    inputsInline: "true",
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
    previousStatement: ["ChatCondition", "ChatEffect"],
    nextStatement: ["ChatCondition", "ChatEffect"],
    inputsInline: "true",
    colour: 210,
    message0: "新建临时变量 %1 并赋值为 %2",
    args0: [
      { type: "field_input", name: "VAR" },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    extensions: ["var_validator"],
  },
  // toTempDigit
  {
    type: "toTempDigit",
    previousStatement: ["ChatCondition", "ChatEffect"],
    nextStatement: ["ChatCondition", "ChatEffect"],
    inputsInline: "true",
    colour: 210,
    message0: "临时变量 %1 赋值为 %2",
    args0: [
      { type: "field_input", name: "VAR" },
      { type: "input_value", name: "TEXT", check: "String" },
    ],
    extensions: ["var_validator"],
  },
  // change_variable
  {
    type: "change_variable",
    previousStatement: ["ChatCondition", "ChatEffect"],
    nextStatement: ["ChatCondition", "ChatEffect"],
    inputsInline: "true",
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
          ["赋值为", "9"],
          ["取最大值", "10"],
          ["取最小值", "11"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    extensions: ["var_validator"],
  },
  // get_variable
  {
    type: "get_variable",
    output: "Number",
    inputsInline: "true",
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
    extensions: ["var_validator"],
  },
  // other
  {
    type: "other",
    output: "String",
    inputsInline: "true",
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
    inputsInline: "true",
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
    inputsInline: "true",
    colour: 210,
    message0: "获取输入并切片 [ %1 : %2 : %3 ]",
    args0: [
      { type: "input_value", name: "START", check: "Number" },
      { type: "input_value", name: "END", check: "Number" },
      { type: "input_value", name: "STEP", check: "Number" },
    ],
  },
  // digit
  {
    type: "digit",
    output: "Number",
    inputsInline: "true",
    colour: 210,
    message0: "将 %1 转换为数字",
    args0: [{ type: "input_value", name: "TEXT", check: "String" }],
  },
  // str
  {
    type: "str",
    output: "String",
    inputsInline: "true",
    colour: 210,
    message0: "将 %1 转换为文本",
    args0: [{ type: "input_value", name: "NUM", check: "Number" }],
  },
  // atb
  {
    type: "atb",
    output: "Number",
    inputsInline: "true",
    colour: 210,
    message0: "用户 %1",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["金币", "金币"],
          ["经验值", "经验值"],
          ["等级", "等级"],
          ["好感度", "好感度"],
          ["熟练度", "熟练度"],
          ["进攻成功次数", "成功次数"],
          ["进攻失败次数", "失败次数"],
          ["防御成功次数", "被抢劫成功次数"],
          ["防御失败次数", "被抢劫失败次数"],
          ["总抢劫金币", "一共抢劫金币"],
          ["荣誉值", "荣誉值"],
          ["能量百分比", "能量百分比"],
          ["卡片携带上限", "卡片携带上限"],
          ["血量百分比", "血量百分比"],
        ],
      },
    ],
  },
  // ---------------------------------------------------------------- Condition
  // check
  {
    type: "check",
    previousStatement: "ChatCondition",
    nextStatement: "ChatCondition",
    inputsInline: "true",
    colour: 210,
    message0: "匹配 %1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["开头", "Start"],
          ["结尾", "End"],
          ["全文", "Msg"],
          ["关键词", "Keyword"],
        ],
      },
      { type: "input_value", name: "TEXT", check: ["String"] },
    ],
  },
  // checkSize
  {
    type: "checkSize",
    previousStatement: "ChatCondition",
    nextStatement: "ChatCondition",
    inputsInline: "true",
    colour: 210,
    message0: "判断消息长短 %1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["<", "-F"],
          [">", "+F"],
          ["≤", "-T"],
          ["≥", "+T"],
        ],
      },
      { type: "input_value", name: "NUM", check: ["Number"] },
    ],
  },
  // randomNum
  {
    type: "randomNum",
    previousStatement: "ChatCondition",
    nextStatement: "ChatCondition",
    inputsInline: "true",
    colour: 210,
    message0: "固定随机数 %1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["<", "-"],
          [">", "+"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
  },
  // proba
  {
    type: "proba",
    previousStatement: "ChatCondition",
    nextStatement: "ChatCondition",
    inputsInline: "true",
    colour: 210,
    message0: "触发概率 %1 %%",
    args0: [{ type: "input_value", name: "NUM", check: "Number" }],
  },
  // cprNums
  {
    type: "cprNums",
    previousStatement: "ChatCondition",
    nextStatement: "ChatCondition",
    inputsInline: "true",
    colour: 210,
    message0: "判断 %1 %2 %3",
    args0: [
      { type: "input_value", name: "LEFT", check: "Number" },
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["<", "0"],
          ["=", "1"],
          [">", "2"],
          ["≤", "3"],
          ["≥", "4"],
          ["≠", "5"],
        ],
      },
      { type: "input_value", name: "RIGHT", check: "Number" },
    ],
  },
  // isDigit
  {
    type: "isDigit",
    previousStatement: "ChatCondition",
    nextStatement: "ChatCondition",
    inputsInline: "true",
    colour: 210,
    message0: "判断 %1 内都是数字",
    args0: [{ type: "input_value", name: "TEXT", check: "String" }],
  },
  // ------------------------------------------------------------------- Effect
  // append
  {
    type: "append",
    previousStatement: "ChatEffect",
    nextStatement: "ChatEffect",
    inputsInline: "true",
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
    previousStatement: "ChatEffect",
    nextStatement: "ChatEffect",
    inputsInline: "true",
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
    previousStatement: "ChatEffect",
    nextStatement: "ChatEffect",
    inputsInline: "true",
    colour: 210,
    message0: "跳过 %1 个触发组",
    args0: [{ type: "input_value", name: "NUM", check: "Number" }],
  },
  // special_operate
  {
    type: "special_operate",
    previousStatement: "ChatEffect",
    nextStatement: "ChatEffect",
    inputsInline: "true",
    colour: 210,
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["艾特对方", "atAim"],
          ["撤回对方的消息", "deleteAimMsg"],
        ],
      },
    ],
  },
]);

Blockly.Msg.TEXT_TEXT_TOOLTIP = "";
Blockly.Msg.TEXT_TEXT_HELPURL = "";

Blockly.Extensions.register("append_extension", function () {
  const type = this.getField("TYPE");
  const text = this.getInput("TEXT");
  type.setValidator((newValue) => {
    text.setCheck(newValue === "append" ? ["Number", "String"] : "String");
    return newValue;
  });
});

Blockly.Extensions.register("trigger_extension", function () {
  const type = this.getField("TYPE");
  const conditions = this.getInput("CONDITIONS");
  const effects = this.getInput("EFFECTS");
  type.setValidator((newValue) => {
    if (conditions) conditions.setCheck(newValue + "Condition");
    effects.setCheck(newValue + "Effect");
    return newValue;
  });
});

Blockly.Extensions.register("var_validator", function () {
  this.getField("VAR").setValidator((newValue) => {
    return newValue.replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, "");
  });
});
