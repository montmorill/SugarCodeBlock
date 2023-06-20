class SugarCodeCategory extends Blockly.ToolboxCategory {
  constructor(categoryDef, toolbox, opt_parent) {
    super(categoryDef, toolbox, opt_parent);
  }

  addColourBorder_(colour) {
    this.rowDiv_.style.backgroundColor = colour;
  }

  setSelected(isSelected) {
    this.rowDiv_.style.backgroundColor = this.colour_;
    var labelDom = this.rowDiv_.getElementsByClassName("blocklyTreeLabel")[0];
    if (isSelected) {
      this.rowDiv_.style.backgroundColor = "white";
      labelDom.style.color = this.colour_;
      this.iconDom_.style.color = this.colour_;
    } else {
      this.rowDiv_.style.backgroundColor = this.colour_;
      labelDom.style.color = "white";
      this.iconDom_.style.color = "white";
    }
    Blockly.utils.aria.setState(
      this.htmlDiv_,
      Blockly.utils.aria.State.SELECTED,
      isSelected
    );
  }

  createIconDom_() {
    const icon = document.createElement("i");
    icon.className = "material-icons md-32";
    icon.innerText = [
      "widgets",
      "polymer",
      "apps",
      "casino",
      "api",
      "dashboard",
      // "dns",
      // "wysiwyg",
      "mode_comment",
    ][Number(this.id_.at(-1))];
    icon.style["padding-top"] = "0.2em";
    icon.style["padding-left"] = "0.3em";
    return icon;
  }
}

Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  Blockly.ToolboxCategory.registrationName,
  SugarCodeCategory,
  true
);
