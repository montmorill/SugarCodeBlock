import { blocks } from "./blocks.js";
import { toolbox } from "./toolbox.js";
import { SugarCodeGenerator } from "./generator.js";
import "./renderer.js";
import "./category.js";

Blockly.common.defineBlocks(blocks);

const workspace = Blockly.inject("blocklyDiv", {
  media: "https://unpkg.com/blockly@9.3.3/media/",
  renderer: "sugar_code_renderer",
  toolbox: toolbox,
  grid: {
    spacing: 20,
    length: 3,
    colour: "#ccc",
    snap: true,
  },
});

workspace.addChangeListener(Blockly.Events.disableOrphans);

workspace.addChangeListener(function (event) {
  if (event.type == Blockly.Events.UI) return;
  const code = SugarCodeGenerator.workspaceToCode(workspace);
  document.getElementById("codePreview").innerText = code;
});
