export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "基本",
      colour: 160,
      contents: [
        { kind: "block", type: "trigger" },
        { kind: "sep", gap: "8" },
        { kind: "block", type: "effect" },
        { kind: "block", type: "boolean" },
        { kind: "sep", gap: "8" },
        { kind: "block", type: "number", fields: { NUM: 42 } },
        { kind: "sep", gap: "8" },
        { kind: "block", type: "text", fields: { TEXT: "Hello, Sugar!" } },
      ],
    },

    {
      kind: "category",
      name: "抢劫",
      colour: 330,
      expanded: "true",
      contents: [
        { kind: "category", name: "条件", colour: 90, contents: [] },
        {
          kind: "category",
          name: "效果",
          colour: 360,
          contents: [
            {
              kind: "block",
              type: "min_coin",
              inputs: {
                NUM: { shadow: { type: "number", fields: { NUM: 114 } } },
              },
            },
            { kind: "sep", gap: "8" },
            {
              kind: "block",
              type: "max_coin",
              inputs: {
                NUM: { shadow: { type: "number", fields: { NUM: 514 } } },
              },
            },
            {
              kind: "block",
              type: "act_weight",
              inputs: {
                NUM: { shadow: { type: "number", fields: { NUM: 114 } } },
              },
            },
            { kind: "sep", gap: "8" },
            {
              kind: "block",
              type: "pass_weight",
              inputs: {
                NUM: { shadow: { type: "number", fields: { NUM: 514 } } },
              },
            },
            { kind: "sep", gap: "8" },
            {
              kind: "block",
              type: "Aact_weight",
              inputs: {
                NUM: { shadow: { type: "number", fields: { NUM: 114 } } },
              },
            },
            { kind: "sep", gap: "8" },
            {
              kind: "block",
              type: "Apass_weight",
              inputs: {
                NUM: { shadow: { type: "number", fields: { NUM: 514 } } },
              },
            },
            {
              kind: "block",
              type: "speed",
              inputs: {
                NUM: { shadow: { type: "number", fields: { NUM: 114 } } },
              },
            },
            { kind: "sep", gap: "8" },
            {
              kind: "block",
              type: "defense",
              inputs: {
                NUM: { shadow: { type: "number", fields: { NUM: 514 } } },
              },
            },
            {
              kind: "block",
              type: "attact",
              inputs: {
                NUM: { shadow: { type: "number", fields: { NUM: 114 } } },
              },
            },
            { kind: "sep", gap: "8" },
            {
              kind: "block",
              type: "trueAttact",
              inputs: {
                NUM: { shadow: { type: "number", fields: { NUM: 514 } } },
              },
            },
            {
              kind: "block",
              type: "fre",
              inputs: {
                NUM: { shadow: { type: "number", fields: { NUM: 114 } } },
              },
            },
            { kind: "sep", gap: "8" },
            {
              kind: "block",
              type: "costFre",
              inputs: {
                NUM: { shadow: { type: "number", fields: { NUM: 514 } } },
              },
            },
            { kind: "block", type: "SeeChaMay" },
            { kind: "sep", gap: "8" },
            { kind: "block", type: "SeeCha" },
            {
              kind: "block",
              type: "pro_get",
              inputs: {
                PRO: { shadow: { type: "number", fields: { NUM: 11.4 } } },
                MIN: { shadow: { type: "number", fields: { NUM: 114 } } },
                MAX: { shadow: { type: "number", fields: { NUM: 514 } } },
              },
            },
          ],
        },
      ],
    },

    {
      kind: "category",
      name: "高级调教",
      colour: 210,
      contents: [
        {
          kind: "block",
          type: "append",
          inputs: {
            TEXT: {
              shadow: { type: "text", fields: { TEXT: "Hello, Sugar!" } },
            },
          },
        },
        { kind: "sep", gap: "8" },
        {
          kind: "block",
          type: "append2",
          inputs: {
            NUM: { shadow: { type: "number", fields: { NUM: 42 } } },
          },
        },
        { kind: "sep", gap: "8" },
        {
          kind: "block",
          type: "_finish",
          inputs: {
            TEXT: {
              shadow: { type: "text", fields: { TEXT: "Hello, Sugar!" } },
            },
          },
        },
        {
          kind: "block",
          type: "slic",
          inputs: {
            START: { shadow: { type: "number", fields: { NUM: 99999 } } },
            END: { shadow: { type: "number", fields: { NUM: 99999 } } },
            STEP: { shadow: { type: "number", fields: { NUM: 99999 } } },
          },
        },
        {
          kind: "block",
          type: "newTempNum",
          fields: { VAR: "a" },
          inputs: {
            NUM: { shadow: { type: "number", fields: { NUM: 114514 } } },
          },
        },
        {
          kind: "block",
          type: "toTempDigit",
          fields: { VAR: "a" },
          inputs: {
            TEXT: { shadow: { type: "text", fields: { TEXT: "114514" } } },
          },
        },
      ],
    },
  ],
};
