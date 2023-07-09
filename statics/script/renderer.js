class SugarCodeRenderer extends Blockly.blockRendering.Renderer {
  constructor() {
    super();
  }

  makeConstants_() {
    return new SugarCodeConstantProvider();
  }
}

class SugarCodeConstantProvider extends Blockly.blockRendering
  .ConstantProvider {
  constructor() {
    super();
    this.NOTCH_WIDTH = 20;
    this.NOTCH_HEIGHT = 5;
    this.CORNER_RADIUS = 10;
    this.TAB_HEIGHT = 10;
    this.TAB_WIDTH = 8;
  }

  init() {
    super.init();
    this.RECT_TAB = this.makeRectangularInputConn();
    this.TRI_TAB = this.makeTriangleInputConn();
  }

  makeRectangularInputConn() {
    const width = this.TAB_WIDTH;
    const height = this.TAB_HEIGHT;

    const makeMainPath = (dir) =>
      Blockly.utils.svgPaths.line([
        Blockly.utils.svgPaths.point(-width, 0),
        Blockly.utils.svgPaths.point(0, dir * height),
        Blockly.utils.svgPaths.point(width, 0),
      ]);
    const pathUp = makeMainPath(-1);
    const pathDown = makeMainPath(1);

    return {
      width: width,
      height: height,
      pathUp: pathUp,
      pathDown: pathDown,
    };
  }

  makeTriangleInputConn() {
    const width = this.TAB_WIDTH;
    const height = this.TAB_HEIGHT;

    const makeMainPath = (dir) =>
      Blockly.utils.svgPaths.line([
        Blockly.utils.svgPaths.point(-width, (dir * height) / 2),
        Blockly.utils.svgPaths.point(width, (dir * height) / 2),
      ]);
    const pathUp = makeMainPath(-1);
    const pathDown = makeMainPath(1);

    return {
      width: width,
      height: height,
      pathUp: pathUp,
      pathDown: pathDown,
    };
  }

  shapeFor(connection) {
    const checks = connection.getCheck();
    switch (connection.type) {
      case Blockly.INPUT_VALUE:
      case Blockly.OUTPUT_VALUE:
        if (checks && checks.includes("Boolean")) return this.TRI_TAB;
        if (checks && checks.includes("Number")) return this.PUZZLE_TAB;
        if (checks && checks.includes("String")) return this.RECT_TAB;
        throw Error("Unknown connection type");
      case Blockly.PREVIOUS_STATEMENT:
      case Blockly.NEXT_STATEMENT:
        return this.NOTCH;
      default:
        throw Error("Unknown connection type");
    }
  }
}

Blockly.blockRendering.register("sugar_code_renderer", SugarCodeRenderer);
