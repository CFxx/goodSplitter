const INTERACTION_MODE = { selection: 0, point: 1, line: 2 };
class Canvas {
  width;
  height;
  container_name;
  bg_color;
  p5_canvas = null;
  arrayPoints = [];
  arrayLines = [];
  mode = INTERACTION_MODE.selection;
  pressed = false;
  pressed_point = null;
  tracking_line = null;

  constructor(container_name, width, height, bg_color = "rgba(230,230,230,1)") {
    this.container_name = container_name;
    this.width = width;
    this.height = height;
    this.bg_color = bg_color;
    console.log("default mode on : " + this.mode);
  }

  init() {
    if (!this.p5_canvas) {
      this.p5_canvas = new p5((sketch) => {
        sketch.setup = () => {
          sketch.createCanvas(this.width, this.height);
        };
        sketch.draw = () => {
          sketch.background(this.bg_color);
          this.arrayPoints.forEach((item) => item.draw(sketch));
          this.arrayLines.forEach((item) => item.draw(sketch));

          if (this.pressed_point != null) {
            this.pressed_point.draw(sketch);
          }

          if (this.tracking_line != null) {
            this.tracking_line.draw(sketch);
          }
        };
        sketch.mouseClicked = () => {
          let x = Math.trunc(sketch.mouseX);
          let y = Math.trunc(sketch.mouseY);
          if (0 <= x && x <= this.width && 0 <= y && y <= this.height) {
            // call any function that must be called
            if (this.mode == INTERACTION_MODE.selection) {
              console.log("in selection mode");
            } else if (this.mode == INTERACTION_MODE.point) {
              this.createPoint(sketch.mouseX, sketch.mouseY);
            } else if (this.mode == INTERACTION_MODE.line) {
              if (!this.pressed) {
                this.pressed = true;
                this.pressed_point = new Point(sketch.mouseX, sketch.mouseY);
                this.tracking_line = new Line(
                  new Point(this.pressed_point.x, this.pressed_point.y),
                  new Point(sketch.mouseX, sketch.mouseY)
                );
              }
            }
          }
        };

        sketch.mouseMoved = () => {
          if (this.mode == INTERACTION_MODE.line && this.pressed) {
            this.tracking_line.to.x = sketch.mouseX;
            this.tracking_line.to.y = sketch.mouseY;
          }
        };

        sketch.doubleClicked = () => {
          if (this.mode == INTERACTION_MODE.line && this.pressed) {
            if (
              this.pressed_point.x != sketch.mouseX &&
              this.pressed_point.y != sketch.mouseY
            ) {
              this.createLine(
                this.pressed_point.x,
                this.pressed_point.y,
                sketch.mouseX,
                sketch.mouseY
              );
            }
            this.pressed = false;
            this.pressed_point = null;
            this.tracking_point = null;
            this.tracking_line = null;
          }
        };
      }, this.container_name);
    }
  }

  createPoint(x, y) {
    this.arrayPoints.push(new Point(x, y));
  }

  createLine(fromX, fromY, toX, toY) {
    this.arrayLines.push(
      new Line(new Point(fromX, fromY), new Point(toX, toY))
    );
  }

  toggleMode(mode) {
    if (Object.values(INTERACTION_MODE).includes(mode)) {
      this.mode = mode;
    }
  }
}
