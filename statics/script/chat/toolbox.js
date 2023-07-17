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
        // while
        { kind: "block", type: "while" },
        // for
        {
          kind: "block",
          type: "for",
          inputs: { NUM: { shadow: { type: "number", fields: { NUM: 10 } } } },
        },
        // break
        { kind: "block", type: "break" },
      ],
    },
    // --------------------------------------------------------------- Variable
    {
      kind: "category",
      name: "变量",
      colour: "%{BKY_SGCB_VARIABLE}",
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
        // input
        {
          kind: "block",
          type: "input",
          fields: { TYPE_END: "-" },
          inputs: {
            START: { shadow: { type: "number", fields: { NUM: 1 } } },
            END: { shadow: { type: "number", fields: { NUM: 1 } } },
            STEP: { shadow: { type: "number", fields: { NUM: 1 } } },
          },
        },
        // atb
        { kind: "block", type: "atb" },
        // f-getIdx
        {
          kind: "block",
          type: "f-getIdx",
          inputs: {
            TEXT1: { shadow: { type: "text" } },
            TEXT2: { shadow: { type: "text" } },
          },
        },
        // f-getStrSml
        {
          kind: "block",
          type: "f-getStrSml",
          inputs: {
            TEXT1: { shadow: { type: "text" } },
            TEXT2: { shadow: { type: "text" } },
          },
        },
      ],
    },
    // -------------------------------------------------------------- Condition
    {
      kind: "category",
      name: "条件",
      colour: "%{BKY_SGCB_CONDITION}",
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
      colour: "%{BKY_SGCB_EFFECT}",
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
          fields: { TYPE_END: "-" },
          inputs: {
            START: { shadow: { type: "number", fields: { NUM: 1 } } },
            END: { shadow: { type: "number", fields: { NUM: 1 } } },
            STEP: { shadow: { type: "number", fields: { NUM: 1 } } },
          },
        },
        // skip
        {
          kind: "block",
          type: "skip",
          inputs: { NUM: { shadow: { type: "number" } } },
        },
        // special_operate
        { kind: "block", type: "special_operate" },
      ],
    },
  ],
};
