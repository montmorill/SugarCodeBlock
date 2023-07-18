export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  // ----------------------------------------------------------------- Variable
  // newTempNum
  {
    type: "newTempNum",
    previousStatement: ["Condition", "Effect"],
    nextStatement: ["Condition", "Effect"],
    inputsInline: "true",
    colour: "%{BKY_SGCB_VARIABLE}",
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
    previousStatement: ["Condition", "Effect"],
    nextStatement: ["Condition", "Effect"],
    inputsInline: "true",
    colour: "%{BKY_SGCB_VARIABLE}",
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
    previousStatement: ["Condition", "Effect"],
    nextStatement: ["Condition", "Effect"],
    inputsInline: "true",
    colour: "%{BKY_SGCB_VARIABLE}",
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
    colour: "%{BKY_SGCB_VARIABLE}",
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
    colour: "%{BKY_SGCB_VARIABLE}",
    message0: "对方 %1",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["群名片", "Gname"],
          ["称呼", "Nname"],
          ["QQ号", "Uid"],
        ],
      },
    ],
  },
  // input
  {
    type: "input",
    output: "String",
    inputsInline: "true",
    colour: "%{BKY_SGCB_VARIABLE}",
    message0:
      "获取输入并切片 [ 从 %1 第 %2 个字符开始 : 到 %3 第 %4 个字符结束 : 步长为 %5 ]",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE_START",
        options: [
          ["正数", "+"],
          ["倒数", "-"],
        ],
      },
      { type: "input_value", name: "START", check: "Number" },
      {
        type: "field_dropdown",
        name: "TYPE_END",
        options: [
          ["正数", "+"],
          ["倒数", "-"],
        ],
      },
      { type: "input_value", name: "END", check: "Number" },
      { type: "input_value", name: "STEP", check: "Number" },
    ],
  },
  // atb
  {
    type: "atb",
    output: "Number",
    inputsInline: "true",
    colour: "%{BKY_SGCB_VARIABLE}",
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
  // f-getIdx
  {
    type: "f-getIdx",
    output: "Number",
    inputsInline: "true",
    colour: "%{BKY_SGCB_VARIABLE}",
    message0: "%1 在 %2 中第一次出现的位置",
    args0: [
      { type: "input_value", name: "TEXT1", check: ["String"] },
      { type: "input_value", name: "TEXT2", check: ["String"] },
    ],
  },
  // f-getStrSml
  {
    type: "f-getStrSml",
    output: "Number",
    inputsInline: "true",
    colour: "%{BKY_SGCB_VARIABLE}",
    message0: "%1 与 %2 的相似度",
    args0: [
      { type: "input_value", name: "TEXT1", check: ["String"] },
      { type: "input_value", name: "TEXT2", check: ["String"] },
    ],
  },
  // ---------------------------------------------------------------- Condition
  // check
  {
    type: "check",
    previousStatement: "Condition",
    nextStatement: "Condition",
    inputsInline: "true",
    colour: "%{BKY_SGCB_CONDITION}",
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
    previousStatement: "Condition",
    nextStatement: "Condition",
    inputsInline: "true",
    colour: "%{BKY_SGCB_CONDITION}",
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
    previousStatement: "Condition",
    nextStatement: "Condition",
    inputsInline: "true",
    colour: "%{BKY_SGCB_CONDITION}",
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
    previousStatement: "Condition",
    nextStatement: "Condition",
    inputsInline: "true",
    colour: "%{BKY_SGCB_CONDITION}",
    message0: "触发概率 %1 %%",
    args0: [{ type: "input_value", name: "NUM", check: "Number" }],
  },
  // cprNums
  {
    type: "cprNums",
    previousStatement: "Condition",
    nextStatement: "Condition",
    inputsInline: "true",
    colour: "%{BKY_SGCB_CONDITION}",
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
    previousStatement: "Condition",
    nextStatement: "Condition",
    inputsInline: "true",
    colour: "%{BKY_SGCB_CONDITION}",
    message0: "判断 %1 内都是数字",
    args0: [{ type: "input_value", name: "TEXT", check: "String" }],
  },
  // ------------------------------------------------------------------- Effect
  // append
  {
    type: "append",
    previousStatement: "Effect",
    nextStatement: "Effect",
    inputsInline: "true",
    colour: "%{BKY_SGCB_EFFECT}",
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
    previousStatement: "Effect",
    nextStatement: "Effect",
    inputsInline: "true",
    colour: "%{BKY_SGCB_EFFECT}",
    message0:
      "将当前文本切片 [ 从 %1 第 %2 个字符开始 : 到 %3 第 %4 个字符结束 : 步长为 %5 ]",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE_START",
        options: [
          ["正数", "+"],
          ["倒数", "-"],
        ],
      },
      { type: "input_value", name: "START", check: "Number" },
      {
        type: "field_dropdown",
        name: "TYPE_END",
        options: [
          ["正数", "+"],
          ["倒数", "-"],
        ],
      },
      { type: "input_value", name: "END", check: "Number" },
      { type: "input_value", name: "STEP", check: "Number" },
    ],
  },
  // skip
  {
    type: "skip",
    previousStatement: "Effect",
    nextStatement: "Effect",
    inputsInline: "true",
    colour: "%{BKY_SGCB_EFFECT}",
    message0: "跳过 %1 个触发组",
    args0: [{ type: "input_value", name: "NUM", check: "Number" }],
  },
  // special_operate
  {
    type: "special_operate",
    previousStatement: "Effect",
    nextStatement: "Effect",
    inputsInline: "true",
    colour: "%{BKY_SGCB_EFFECT}",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["艾特对方", "atAim"],
          ["撤回对方的消息", "deconsteAimMsg"],
        ],
      },
    ],
  },
]);

Blockly.Extensions.register("append_extension", function () {
  const block = this;
  const type = this.getField("TYPE");
  const text = this.getInput("TEXT");
  type.setValidator((newValue) => {
    text.setCheck(newValue === "append" ? ["Number", "String"] : "String");
    if (block.nextConnection) block.nextConnection.disconnect();
    if (newValue === "finish") block.setNextStatement(false);
    else block.setNextStatement(true, "Effect");
    return newValue;
  });
});

Blockly.Extensions.register("var_validator", function () {
  this.getField("VAR").setValidator((newValue) => {
    return newValue.replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, "");
  });
});
