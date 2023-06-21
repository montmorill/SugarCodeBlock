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
  grid: { spacing: 20, length: 3, colour: "#ccc", snap: true },
});

workspace.addChangeListener(Blockly.Events.disableOrphans);

workspace.addChangeListener(function (event) {
  if (event.isUiEvent) return;
  const code = SugarCodeGenerator.workspaceToCode(workspace);
  document.getElementById("codePreview").innerText = code;
});

workspace.addChangeListener(function (event) {
  console.log(event.type);
  if (event.isUiEvent) return;
  var block = workspace.getBlockById(event.blockId);
  if (block && block.previousConnection && block.nextConnection) {
    console.log(block.previousConnection.check_, block.nextConnection.check_);
    if (block.previousConnection.isConnected()) {
      block.nextConnection.setCheck(block.previousConnection.check_);
    } else if (block.nextConnection.isConnected()) {
      block.previousConnection.setCheck(block.nextConnection.check_);
    } else {
      var prototype = Blockly.Blocks[block.type];
      block.previousConnection.setCheck(prototype.previousStatement);
      block.nextConnection.setCheck(prototype.nextStatement);
    }
    console.log(block.previousConnection.check_, block.nextConnection.check_);
  }
});
