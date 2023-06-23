export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    // =================================================================== Base
    {
      kind: "category",
      name: "基本",
      colour: 160,
      contents: [
        // ------------------------------------------------------------ Trigger
        // trigger
        { kind: "block", type: "trigger" },
        // effect
        { kind: "block", type: "effect" },
        // --------------------------------------------------------------- Data
        // boolean
        { kind: "block", type: "boolean" },
        // number
        { kind: "block", type: "number" },
        // text
        { kind: "block", type: "text", fields: { TEXT: "Hello, Sugar!" } },
        // --------------------------------------------------------------- Math
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
      ],
    },
    // ================================================================= Hijack
    // --------------------------------------------------------------- Variable
    { kind: "category", name: "变量", colour: 360, contents: [] },
    // -------------------------------------------------------------- Condition
    { kind: "category", name: "条件", colour: 360, contents: [] },
    // ----------------------------------------------------------------- Effect
    {
      kind: "category",
      name: "效果",
      colour: 360,
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
    // =================================================================== Chat
    // --------------------------------------------------------------- Variable
    {
      kind: "category",
      name: "变量",
      colour: 210,
      contents: [
        // newTempNum
        {
          kind: "block",
          type: "newTempNum",
          fields: { VAR: "a" },
          inputs: { NUM: { shadow: { type: "number" } } },
        },
        // toTempDigit
        {
          kind: "block",
          type: "toTempDigit",
          fields: { VAR: "a" },
          inputs: { TEXT: { shadow: { type: "text" } } },
        },
        // change_variable
        {
          kind: "block",
          type: "change_variable",
          fields: { VAR: "a" },
          inputs: { NUM: { shadow: { type: "number" } } },
        },
        // get_variable
        { kind: "block", type: "get_variable", fields: { VAR: "a" } },
        // other
        { kind: "block", type: "other" },
        // random
        {
          kind: "block",
          type: "random",
          inputs: {
            MIN: { shadow: { type: "number" } },
            MAX: { shadow: { type: "number", fields: { NUM: 100 } } },
          },
        },
        // input
        {
          kind: "block",
          type: "input",
          inputs: {
            START: { shadow: { type: "number", fields: { NUM: 99999 } } },
            END: { shadow: { type: "number", fields: { NUM: 99999 } } },
            STEP: { shadow: { type: "number", fields: { NUM: 99999 } } },
          },
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
        // atb
        { kind: "block", type: "atb" },
      ],
    },
    // -------------------------------------------------------------- Condition
    {
      kind: "category",
      name: "条件",
      colour: 210,
      contents: [
        {
          kind: "block",
          type: "check",
          inputs: { TEXT: { shadow: { type: "text" } } },
        },
        {
          kind: "block",
          type: "checkSize",
          inputs: { NUM: { shadow: { type: "number" } } },
        },
        {
          kind: "block",
          type: "randomNum",
          inputs: { NUM: { shadow: { type: "number" } } },
        },
        {
          kind: "block",
          type: "proba",
          inputs: { NUM: { shadow: { type: "number" } } },
        },
        {
          kind: "block",
          type: "cprNums",
          inputs: {
            LEFT: { shadow: { type: "number" } },
            RIGHT: { shadow: { type: "number" } },
          },
        },
        {
          kind: "block",
          type: "isDigit",
          inputs: { TEXT: { shadow: { type: "text" } } },
        },
      ],
    },
    // ----------------------------------------------------------------- Effect
    {
      kind: "category",
      name: "效果",
      colour: 210,
      contents: [
        // append
        {
          kind: "block",
          type: "append",
          inputs: { TEXT: { shadow: { type: "text" } } },
        },
        // slic
        {
          kind: "block",
          type: "slic",
          inputs: {
            START: { shadow: { type: "number", fields: { NUM: 99999 } } },
            END: { shadow: { type: "number", fields: { NUM: 99999 } } },
            STEP: { shadow: { type: "number", fields: { NUM: 99999 } } },
          },
        },
        // skip
        { kind: "block", type: "skip" },
        // special_operate
        { kind: "block", type: "special_operate" },
      ],
    },
  ],
};
