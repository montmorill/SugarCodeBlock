export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    // ------------------------------------------------------------------- Base
    {
      kind: "category",
      name: "基本",
      colour: "%{BKY_SGCB_BASE}",
      contents: [
        // boolean
        { kind: "block", type: "boolean" },
        // number
        { kind: "block", type: "number" },
        // text
        { kind: "block", type: "text", fields: { TEXT: "Hello, Sugar!" } },
        // calc
        {
          kind: "block",
          type: "calc",
          inputs: {
            LEFT: { shadow: { type: "number" } },
            RIGHT: { shadow: { type: "number" } },
          },
        },
        // abs
        {
          kind: "block",
          type: "abs",
          inputs: { NUM: { shadow: { type: "number" } } },
        },
        // digit
        {
          kind: "block",
          type: "digit",
          inputs: { TEXT: { shadow: { type: "text" } } },
        },
        // str
        {
          kind: "block",
          type: "str",
          inputs: { NUM: { shadow: { type: "number" } } },
        },
        // sadd
        {
          kind: "block",
          type: "sadd",
          inputs: {
            LEFT: { shadow: { type: "text" } },
            RIGHT: { shadow: { type: "text" } },
          },
        },
        // random
        {
          kind: "block",
          type: "random",
          inputs: {
            MIN: { shadow: { type: "number" } },
            MAX: { shadow: { type: "number", fields: { NUM: 100 } } },
          },
        },
      ],
    },
    // ---------------------------------------------------------------- Control
    {
      kind: "category",
      name: "控制",
      colour: "%{BKY_SGCB_CONTROL}",
      contents: [
        // trigger
        { kind: "block", type: "trigger" },
      ],
    },
    // --------------------------------------------------------------- Variable
    {
      kind: "category",
      name: "变量",
      colour: "%{BKY_SGCB_VARIABLE}",
      contents: [],
    },
    // -------------------------------------------------------------- Condition
    {
      kind: "category",
      name: "条件",
      colour: "%{BKY_SGCB_CONDITION}",
      contents: [],
    },
    // ----------------------------------------------------------------- Effect
    {
      kind: "category",
      name: "效果",
      colour: "%{BKY_SGCB_EFFECT}",
      contents: [
        // coin
        {
          kind: "block",
          type: "coin",
          inputs: { NUM: { shadow: { type: "number" } } },
        },
        // weight
        {
          kind: "block",
          type: "weight",
          inputs: { NUM: { shadow: { type: "number" } } },
        },
        // attr
        {
          kind: "block",
          type: "attr",
          inputs: { NUM: { shadow: { type: "number" } } },
        },
        // trueAttact
        {
          kind: "block",
          type: "trueAttact",
          inputs: { NUM: { shadow: { type: "number" } } },
        },
        // fre
        {
          kind: "block",
          type: "fre",
          inputs: { NUM: { shadow: { type: "number" } } },
        },
        // costFre
        {
          kind: "block",
          type: "costFre",
          inputs: { NUM: { shadow: { type: "number" } } },
        },
        // SeeCha
        { kind: "block", type: "SeeCha" },
        // pro_get
        {
          kind: "block",
          type: "pro_get",
          inputs: {
            PRO: { shadow: { type: "number", fields: { NUM: 0.1 } } },
            MIN: { shadow: { type: "number" } },
            MAX: { shadow: { type: "number", fields: { NUM: 100 } } },
          },
        },
      ],
    },
  ],
};
