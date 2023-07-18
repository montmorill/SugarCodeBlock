import { capitalize } from "./utils.js";

const type = window.location.hash.toLowerCase().substring(1);
document.getElementsByTagName(
  "title"
)[0].innerText = `SugarCodeBlock | ${capitalize(type)}`;

import "./blocks.js";
const { blocks } = await import(`./${type}/blocks.js`);
const { toolbox } = await import(`./${type}/toolbox.js`);
const { SugarCodeGenerator } = await import(`./${type}/generator.js`);
import "./renderer.js";
import "./category.js";

Blockly.Msg.TEXT_TEXT_TOOLTIP = "";
Blockly.Msg.TEXT_TEXT_HELPURL = "";
Blockly.Msg.SGCB_BASE = 160;
Blockly.Msg.SGCB_CONTROL = 120;
Blockly.Msg.SGCB_VARIABLE = 310;
Blockly.Msg.SGCB_CONDITION = 210;
Blockly.Msg.SGCB_EFFECT = 0;
Blockly.common.defineBlocks(blocks);

const workspace = Blockly.inject("blocklyDiv", {
  media: "https://unpkg.com/blockly@9.3.3/media/",
  renderer: "sugar_code_renderer",
  toolbox: toolbox,
  grid: { spacing: 20, length: 3, colour: "#ccc", snap: true },
});

// workspace.addChangeListener(Blockly.Events.disableOrphans);

workspace.addChangeListener(function (event) {
  if (event.isUiEvent) return;
  const code = SugarCodeGenerator.workspaceToCode(workspace);
  document.getElementById("codePreview").innerText = code;
});

const toolboxs = document.getElementsByClassName("blocklyToolboxContents")[0];
const firstChild = toolboxs.firstChild;
const dumpButton = document.createElement("button");
const saveButton = document.createElement("button");
const loadButton = document.createElement("button");
const fileInput = document.createElement("input");
dumpButton.innerText = "导出为sgc";
saveButton.innerText = "保存工程";
loadButton.innerText = "加载工程";
loadButton.style.marginBottom = "0.6em";
fileInput.type = "file";
fileInput.style.display = "none";
fileInput.accept = `.${type}.sgcb`;
dumpButton.onclick = () => {
  const code = SugarCodeGenerator.workspaceToCode(workspace);
  const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  const date = new Date();
  link.download = date.getTime() + `.${type}.sgc`;
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
  link.download = date.getTime() + `.${type}.sgcb`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
};
loadButton.onclick = () => {
  fileInput.click();
};
fileInput.onchange = () => {
  const reader = new FileReader();
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
toolboxs.insertBefore(fileInput, firstChild);
