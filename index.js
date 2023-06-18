import { SugarCodeGenerator } from "./generator.js";
import { blocks } from "./blocks.js";
import { toolbox } from "./toolbox.js";

Blockly.common.defineBlocks(blocks);

var workspace = Blockly.inject("blocklyDiv", {
  media: "https://unpkg.com/blockly@9.3.3/media/",
  toolbox: toolbox,
  grid: {
    spacing: 20,
    length: 3,
    colour: "#ccc",
    snap: true,
  },
});

workspace.addChangeListener(function (event) {
  if (event.type == Blockly.Events.UI) return;
  const code = SugarCodeGenerator.workspaceToCode(workspace);
  document.getElementById("codePreview").innerText = code;
});
