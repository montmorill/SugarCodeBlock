export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  // ----------------------------------------------------------------- Variable
  // ---------------------------------------------------------------- Condition
  // ------------------------------------------------------------------- Effect
  // coin
  {
    type: "coin",
    previousStatement: "Effect",
    nextStatement: "Effect",
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
    previousStatement: "Effect",
    nextStatement: "Effect",
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
    previousStatement: "Effect",
    nextStatement: "Effect",
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
    previousStatement: "Effect",
    nextStatement: "Effect",
    inputsInline: "true",
    colour: 360,
    message0: "将最终伤害值设为 %1",
    args0: [{ type: "input_value", name: "NUM", check: "Number" }],
  },
  // fre
  {
    type: "fre",
    previousStatement: "Effect",
    nextStatement: "Effect",
    inputsInline: "true",
    colour: 360,
    message0: "将抢劫次数上限设置为 %1",
    args0: [{ type: "input_value", name: "NUM", check: "Number" }],
  },
  // costFre
  {
    type: "costFre",
    previousStatement: "Effect",
    nextStatement: "Effect",
    inputsInline: "true",
    colour: 360,
    message0: "消耗 %1 次抢劫次数",
    args0: [{ type: "input_value", name: "NUM", check: "Number" }],
  },
  // SeeCha
  {
    type: "SeeCha",
    previousStatement: "Effect",
    nextStatement: "Effect",
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
    previousStatement: "Effect",
    nextStatement: "Effect",
    inputsInline: "true",
    colour: 360,
    message0: "额外获得 %1 倍的金币",
    args0: [{ type: "input_value", name: "PRO", check: "Number" }],
    message1: "最少获得 %1 的金币",
    args1: [{ type: "input_value", name: "MIN", check: "Number" }],
    message2: "最多获得 %1 的金币",
    args2: [{ type: "input_value", name: "MAX", check: "Number" }],
  },
]);
