class Canvas {
  width = 0;
  height = 0;
  container_name;
  bg_color;
  p5_canvas = null;
  arrayPoints = [];
  arrayLines = [];

  constructor(container_name, width, height, bg_color = "rgba(220,220,220,1)") {
    this.container_name = container_name;
    this.width = width;
    this.height = height;
    this.bg_color = bg_color;
  }

  init() {
    const s = (sketch) => {
      sketch.setup = () => {
        sketch.createCanvas(800, 500);
      };
      sketch.draw = () => {
        sketch.background(this.bg_color);
      };
      sketch.mouseClicked = () => {
        console.log("x:", sketch.mouseX, "y:", sketch.mouseY);
      };
    };
    if (!this.p5_canvas) {
      this.p5_canvas = new p5(s, this.container_name);
    }
  }
}
