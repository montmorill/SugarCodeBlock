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
/*
workspace.addChangeListener(function (event) {
  console.log(event.type);
  if (event.isUiEvent) return;
  const block = workspace.getBlockById(event.blockId);
  if (block && block.previousConnection && block.nextConnection) {
    console.log(block.previousConnection.check_, block.nextConnection.check_);
    if (block.previousConnection.isConnected()) {
      block.nextConnection.setCheck(block.previousConnection.check_);
    } else if (block.nextConnection.isConnected()) {
      block.previousConnection.setCheck(block.nextConnection.check_);
    } else {
      const prototype = Blockly.Blocks[block.type];
      block.previousConnection.setCheck(prototype.previousStatement);
      block.nextConnection.setCheck(prototype.nextStatement);
    }
    console.log(block.previousConnection.check_, block.nextConnection.check_);
  }
});
*/
const toolboxs = document.getElementsByClassName("blocklyToolboxContents")[0];
const firstChild = toolboxs.firstChild;
const dumpButton = document.createElement("button");
const saveButton = document.createElement("button");
const loadButton = document.createElement("button");
const fileInput = document.getElementById("fileInput");
dumpButton.innerText = "导出为sgc";
saveButton.innerText = "保存工程";
loadButton.innerText = "加载工程";
loadButton.style["margin-bottom"] = "0.6em";
dumpButton.onclick = () => {
  const code = SugarCodeGenerator.workspaceToCode(workspace);
  const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  const date = new Date();
  link.download = date.getTime() + ".sgc";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
};
saveButton.onclick = () => {
  const xml = Blockly.Xml.workspaceToDom(workspace);
  const text = Blockly.Xml.domToText(xml);
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  const date = new Date();
  link.download = date.getTime() + ".sgcb";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
};
loadButton.onclick = () => {
  fileInput.click();
};
fileInput.onchange = () => {
  let reader = new FileReader();
  reader.readAsText(fileInput.files[0]);
  reader.onload = (event) => {
    const xml_text = event.target.result;
    const xml = Blockly.utils.xml.textToDom(xml_text);
    Blockly.Xml.domToWorkspace(xml, workspace);
  };
};
toolboxs.insertBefore(dumpButton, firstChild);
toolboxs.insertBefore(saveButton, firstChild);
toolboxs.insertBefore(loadButton, firstChild);
